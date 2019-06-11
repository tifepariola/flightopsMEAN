import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { interval } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import * as io from 'socket.io-client';
import * as $ from 'jquery';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  zuluTime: any;
  localTime: any;
  user: any;
  joinned = false;
  newUser = { email: '', room: '' };
  msgData = { room: '', email: '', message: '' };
  socket = io('http://104.238.148.111:4000');
  chats: [];
  crewChats: any;
  opsChats: any;
  opsMsg: any;
  crewMsg: any;

  constructor(
    private authService: AuthService,
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit() {

    this.authService.me().subscribe(userL => {
      this.user = userL.user;
      this.opsChats = [];
      this.crewChats = [];
      if (this.user !== null) {
        this.getOpsChat();
        this.getCrewChat();
        this.scrollToBottom();
      }
      this.socket.on('new-message', function (data) {
        console.log('new message', data);
        const user = JSON.parse(localStorage.getItem('user'));
        if (data.message.data.room === 'operations') {
          this.opsChats.push(data.message);
          this.scrollToBottom();
        } else {
          this.crewChats.push(data.message);
          this.scrollToBottom();
        }
      }.bind(this));
    });
  }


  sendOpsMessage() {
    const msgData = {
      room: 'operations',
      name: this.user.fullname,
      email: this.user.email,
      message: this.opsMsg
    };
    this.adminService.saveChat(msgData).subscribe(data => {
      console.log('savee ', data);
      this.socket.emit('save-message', data);
      this.opsMsg = '';
    });
  }
  sendCrewMessage() {
    const msgData = {
      room: 'crew',
      name: this.user.fullname,
      email: this.user.email,
      message: this.crewMsg
    };
    this.adminService.saveChat(msgData).subscribe(data => {
      console.log('savee ', data);
      this.socket.emit('save-message', data);
      this.crewMsg = '';
    });
  }
  getChatByRoom(room) {
    this.adminService.getChatByRoom(room).subscribe(data => {
      this.chats = data.data;
      console.log('chats ', this.chats);
    });
  }
  getOpsChat() {
    this.adminService.getChatByRoom('operations').subscribe(data => {
      this.opsChats = data.data;
      console.log('chats ', this.opsChats);
    });
  }
  getCrewChat() {
    this.adminService.getChatByRoom('crew').subscribe(data => {
      this.crewChats = data.data;
      console.log('chats ', this.crewChats);
    });
  }
  hideOpsChat(): void {
    $('.operations_notice_board').toggleClass('down');
  }
  hideCrewChat(): void {
    $('.crew_notice_board').toggleClass('down');
  }
  showChat(): void {
    $('#chatCon').removeClass('is-hidden');
    $('#chatBtn').addClass('is-hidden');
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }


}
