// config should be imported before importing any other file
const config = require('./config/config');
const app = require('./config/express');
require('./config/mongoose');
const mboardCtrl = require('./controllers/mboard.controller');
const User = require('./models/user.model');
const Db = require('./models/mboard.model');
var MailListener = require("mail-listener2");

var mailListener = new MailListener({
  username: "tife@pario.la",
  password: "adeyanju1",
  host: "imappro.zoho.com",
  port: 993, // imap port
  tls: true,
  connTimeout: 10000, // Default by node-imap
  authTimeout: 5000, // Default by node-imap,
  // debug: console.log, // Or your custom function with only one incoming argument. Default: null
  tlsOptions: { rejectUnauthorized: false },
  mailbox: "INBOX", // mailbox to monitor
  searchFilter: ["UNSEEN"], // the search filter being used after an IDLE notification has been retrieved
  markSeen: true, // all fetched email willbe marked as seen and not fetched next time
  fetchUnreadOnStart: false, // use it only if you want to get all unread email on lib start. Default is `false`,
  mailParserOptions: { streamAttachments: false }, // options to be passed to mailParser lib.
  attachments: false, // download attachments as they are encountered to the project directory
  attachmentOptions: { directory: "attachments/" } // specify a download directory for attachments
});
// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
  // app.listen(config.port, () => {
  //   console.info(`server started on port ${config.port} (${config.env})`);
  // });
  app.listen(process.env.PORT || 5000);

  mailListener.start();

  mailListener.on("server:connected", function () {
    console.log("imapConnected");
  });

  mailListener.on("server:disconnected", function () {
    console.log("imapDisconnected");
  });

  mailListener.on("mail", function (mail, seqno, attributes) {
    // do something with mail object including attachments
    console.log("emailParsed", mail.from[0].address);

    User.find({ email: mail.from[0].address }, function (err, user) {
      if (err) {
        console.log(err);
      } else {
        body = {
          route_id: mail.subject.replace('Re: Message Board ', ''),
          message: mail.text,
          usergroup: user[0].role
        }
        console.log(new Db(body).save())
        console.log(user[0].role);
      }
    })
    // asyncHandler(insert)
    // async function insert() {

    //   let mboard = mboardCtrl.insert(body);
    //   console.log(mboard)
    // }
    // mail processing code goes here
  });

  mailListener.on("attachment", function (attachment) {
    console.log(attachment.path);
  });

  mailListener.on("error", function (err) {
    console.log(err);
  });

  // it's possible to access imap object from node-imap library for performing additional actions. E.x.
  // mailListener.imap.move(: msguids, : mailboxes, function () { })
}

module.exports = app;
