$(document).ready(function(){
  $(".n_b_closer").click(function(){
    $(this).parent().parent().toggleClass("down");
  });

  // search toggle
  $(".search_toggle a").click(function(){
    $(this).parent().toggleClass("active");
    $('.search_sidebar').toggleClass("active");
    $('body').toggleClass("search_area");
  });
  $(".search_overlay").click(function(){
    $('.search_toggle').removeClass("active");
    $('.search_sidebar').removeClass("active");
    $('body').removeClass("search_area");
  });


  var mainPanelHeight;
   setTimeout(function(){
    mainPanelHeight = $('.main_panel_left').height();
    console.log(mainPanelHeight);
   $('.d_news_list').css("max-height", mainPanelHeight)
    }, 2000);

$('.datePicker').datepicker();
});

// $(document).mouseup(function(e) 
// {
//     var container = $(".search_sidebar");

//     if (!container.is(e.target) && container.has(e.target).length === 0) 
//     {
//        $('.search_sidebar').removeClass("active");
//        $('.search_toggle').removeClass("active");
//     }
// });

$('.continue').click(function(){
  $('.nav-tabs li .active').parent().next('li').find('a').trigger('click');
});
$('.back').click(function(){
  $('.nav-tabs li .active').parent().prev('li').find('a').trigger('click');
});



(function($) {
  'use strict';
  $(function() {
    $('.file-upload-browse').on('click', function() {
      var file = $(this).parent().parent().parent().find('.file-upload-default');
      file.trigger('click');
    });
    $('.file-upload-default').on('change', function() {
      $(this).parent().find('.form-control').val($(this).val().replace(/C:\\fakepath\\/i, ''));
    });
  });
})(jQuery);

// Tabs
(function($) {
  'use strict';
  $(function() {
    if ($('.demo-tabs').length) {
      $('.demo-tabs').pwstabs({
        effect: 'none'
      });
    }

    if ($('.hello_world').length) {
      $('.hello_world').pwstabs();
    }

    if ($('#rtl-tabs-1').length) {
      $('#rtl-tabs-1').pwstabs({
        effect: 'slidedown',
        defaultTab: 2,
        rtl: true
      });
    }

    if ($('#vertical-left').length) {
      $('#vertical-left').pwstabs({
        effect: 'slideleft',
        defaultTab: 1,
        containerWidth: '600px',
        tabsPosition: 'vertical',
        verticalPosition: 'left'
      });
    }

    if ($('#horizontal-left').length) {
      $('#horizontal-left').pwstabs({
        effect: 'slidedown',
        defaultTab: 2,
        containerWidth: '600px',
        horizontalPosition: 'bottom'
      });
    }

    if ($('.tickets-tab').length) {
      $('.tickets-tab').pwstabs({
        effect: 'none'
      });
    }

  });
})(jQuery);


// Template js
(function($) {
  'use strict';
  $(function() {
    var body = $('body');
    var contentWrapper = $('.content-wrapper');
    var scroller = $('.container-scroller');
    var footer = $('.footer');
    var sidebar = $('.sidebar');

    //Add active class to nav-link based on url dynamically
    //Active class can be hard coded directly in html file also as required

    function addActiveClass(element) {
      if (current === "") {
        //for root url
        if (element.attr('href').indexOf("index.html") !== -1) {
          element.parents('.nav-item').last().addClass('active');
          if (element.parents('.sub-menu').length) {
            element.closest('.collapse').addClass('show');
            element.addClass('active');
          }
        }
      } else {
        //for other url
        if (element.attr('href').indexOf(current) !== -1) {
          element.parents('.nav-item').last().addClass('active');
          if (element.parents('.sub-menu').length) {
            element.closest('.collapse').addClass('show');
            element.addClass('active');
          }
          if (element.parents('.submenu-item').length) {
            element.addClass('active');
          }
        }
      }
    }

    var current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
    $('.nav li a', sidebar).each(function() {
      var $this = $(this);
      addActiveClass($this);
    })

    //Close other submenu in sidebar on opening any

    sidebar.on('show.bs.collapse', '.collapse', function() {
      sidebar.find('.collapse.show').collapse('hide');
    });

    //Change sidebar
    $('[data-toggle="minimize"]').on("click", function() {
      body.toggleClass('sidebar-icon-only');
    });

    //checkbox and radios
    $(".form-check label,.form-radio label").append('<i class="input-helper"></i>');
  });
})(jQuery);


// OFF Canvas.js =====================================
(function($) {
  'use strict';
  $(function() {
    $('[data-toggle="offcanvas"]').on("click", function() {
      $('.sidebar-offcanvas').toggleClass('active')
    });
  });
})(jQuery);




$(document).ready(function() {

    $('#calendar').fullCalendar({
      header: {
        right: 'prev,title,next',
        center: '',
        left: 'month,basicWeek,basicDay'
      },
      defaultDate: '2019-06-12',
      navLinks: true, // can click day/week names to navigate views
      editable: false,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: '2 Movements',
          start: '2019-06-03',
          end: '2019-06-05'
        },
        {
          title: '3 Movements',
          start: '2019-06-12',
          end: '2019-06-15'
        },
        {
          title: '5 Movements',
          url: 'http://google.com/',
          start: '2019-06-24',
          end: '2019-06-29'
        }
      ]
    });

  });
