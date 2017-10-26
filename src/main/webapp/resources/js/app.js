/**
 * member javaScript
 * 
 * 1.app 2.session 3.main 4.auth 5.navbar 6.member 7.grade 8.board 9.controller
 */
/* name space pattern */
var app = app || {};
/*******************************************************************************
 * 1.app
 ******************************************************************************/
app.path = (function() { /* god 을 만드는것 *//* c: controller */
   var init = function(ctx) {
	   app.session.init(ctx);
       onCreate(); /* 내부에서는 객체가 아니라 method호출 */
   };
   var onCreate = function() { /* c: controller */
	   alert('1');
	   setContentView();
      location.href =ctx() + "/auth/login_view"; /* 내부는 method 호출이다 */
   };
   var setContentView = function() { /* v: view */
   };
   var ctx = function() {
      return app.session.getPath('ctx');
   };
   var js = function() {
      return app.session.getPath('js');
   };
   var img = function() {
      return app.session.getPath('img');
   };
   var css = function() {
      return app.session.getPath('css');
   };
   /* closure */
   return {
      init : init,
      ctx : ctx,
      js : js,
      img : img,
      css : css
   };
})();
/*******************************************************************************
 * 2.session
 ******************************************************************************/
app.session = (function() {
   /* 생성자 */
   var init = function(ctx) {
      /* setter */
      sessionStorage.setItem('ctx', ctx);
      sessionStorage.setItem('js', ctx + '/resources/js');
      sessionStorage.setItem('img', ctx + '/resources/img');
      sessionStorage.setItem('css', ctx + '/resources/css');
   };
   /* getter */
   var getPath = function(x) {
      return sessionStorage.getItem(x);
   };
   /* 객체 리턴 closure 에 대한 개념이다 */
   return {
      /* key : value */
      init : init,
      getPath : getPath
   };
})();
/*******************************************************************************
 * 3.main
 ******************************************************************************/
app.main = (function() {
   var init = function() {
      onCreate();
   };
   var onCreate = function() { /* controller */
      /* 자바에서 받은것 모델에서 가져온 데이터의 제어는 이곳에서 한다 */
      setContentView();
      $('.list-group').children().addClass("list-group-item");
      $('.list-group li').eq(0).on('click', function() {
         app.controller.moveTo('member', 'member_add');
      });
      $('.list-group li').eq(1).on('click', function() {
    	  app.member.list(1);
         /* app.controller.list('member','member_list','1'); */
      });
      $('.list-group li').eq(2).on('click', function() {
         app.controller.moveTo('member', 'member_detail');
         /* app.controller.detailStudent(prompt('조회ID')); */
      });
      $('.list-group li').eq(3).on('click', function() {
         app.controller.moveTo('member', 'member_update');
      });
      $('.list-group li').eq(4).on('click', function() {
         app.controller.deleteTarget('cho','member', 'member_delete');
      });
      $('.list-group li').eq(5).on('click', function() {
         app.controller.moveTo('grade','grade_add');
      });
      $('.list-group li').eq(6).on('click', function() {
         app.controller.moveTo('grade','grade_list');
      });
      $('.list-group li').eq(7).on('click', function() {
         app.controller.moveTo('grade','grade_detail');
      });
      $('.list-group li').eq(8).on('click', function() {
         app.controller.moveTo('grade','grade_update');
      });
      $('.list-group li').eq(9).on('click', function() {
         app.controller.moveTo('grade','grade_delete');
      });
      $('.list-group li').eq(10).on('click', function() {
          app.controller.moveTo('board','board_add');
       });
      $('.list-group li').eq(11).on('click', function() {
          app.controller.moveTo('board','board_list');
       });
      $('.list-group li').eq(12).on('click', function() {
          app.controller.moveTo('board','board_detail');
       });
      $('.list-group li').eq(13).on('click', function() {
          app.controller.moveTo('board','board_update');
       });
      $('.list-group li').eq(14).on('click', function() {
          app.controller.moveTo('board','board_delete');
       });
   };
   var setContentView = function() { /* view */
      var $u1 = $("#main_ul_stu");
      var $u2 = $("#main_ul_grade");
      var $u3 = $("#main_ul_board");
      $u1.addClass("list-group");
      $u2.addClass("list-group");
      $u3.addClass("list-group");
   };
   /* closure */
   return {
      init : init
   };
})();
/*******************************************************************************
 * **** 4.auth
 ******************************************************************************/
/* java에서 객체를 만든것과 같다 파일을 여러개를 만들지 않아도 하나로 만든다 */
app.auth = (function() {
   var init = function() {
      $('#loginBtn').on('click', function() {
         alert('로그인 버튼 click');
         if ($('#input_id').val() === "") {
            alert('ID를 입력해 주세요 ');
            return false;
         }
         if ($('#input_pass').val() === "") {
            alert('password 를 입력해 주세요 ');
            return false;
         }
         $('#login_box').attr('action', app.path.ctx() + "/auth/login");
         $('#login_box').attr('method', 'post');
         return true;
      });
   };
   return {
      init : init
   };
})();
/*******************************************************************************
 * 5.navbar
 ******************************************************************************/
app.navbar = (function() {
   var init = function() {
      onCreate();
   };
   var onCreate = function() {
      setContentView();
      /* event */
      $('.dropdown-menu a').eq(0).on('click', function() {
         alert('0');
         app.controller.moveTo('member', 'member_add');
      });
      $('.dropdown-menu a').eq(1).on('click', function() {
         alert('1');
         app.member.list(1);
         /*app.controller.list('member', 'member_list', '1');*/
      });
      $('.dropdown-menu a').eq(2).on('click', function() {
         alert('2');
         app.controller.moveTo('member', 'member_detail');
      });
      $('.dropdown-menu a').eq(3).on('click', function() {
         alert('3');
         app.controller.moveTo('member', 'member_update');
      });
      $('.dropdown-menu a').eq(4).on('click', function() {
         alert('4 gradeAdd');
         app.controller.moveTo('grade','grade_add');
      });
      $('.dropdown-menu a').eq(5).on('click', function() {
         alert('5 gradeList');
         app.controller.moveTo('grade', 'grade_add');
      });
      $('.dropdown-menu a').eq(6).on('click', function() {
         alert('6 grade detail');
         app.controller.moveTo('grade', 'grade_list');
         /*app.controller.list('grade', 'grade_list','1');*/
      });
      $('.dropdown-menu a').eq(7).on('click', function() {
         alert('7 grade delete');
         app.controller.moveTo('grade', 'grade_detail');
      });
      $('.dropdown-menu a').eq(8).on('click', function() {
         alert('8 board add');
         app.controller.moveTo('board', 'board_add');
      });
      $('.dropdown-menu a').eq(9).on('click', function() {
         alert('9 board list');
         app.controller.moveTo('board','board_list');
      });
      $('.dropdown-menu a').eq(10).on('click', function() {
         alert('9 board detail');
         app.controller.moveTo('board','board_detail');
      /*   app.controller.deleteTarget('board','board_detail');*/
      });
      $('#logout').on('click', function() {
         alert('logout');
         app / controller.logout('common', 'index');
      });
      $('#homeBtn').on('click', function() {
         alert('home button');
         app.controller.moveTo('common', 'main');
      });
   };
   var setContentView = function() {
      var $u1 = $("#navbar_ul_stu");
      var $u2 = $("#navbar_ul_grade");
      var $u3 = $("#navbar_ul_board");
      /* css */
      $u1.addClass("dropdown-menu");
      $u2.addClass("dropdown-menu");
      $u3.addClass("dropdown-menu");
   };
   return {
      init : init
   }
})();
/*******************************************************************************
 * 6.member member detail
 ******************************************************************************/
app.member = (function() {
   var init = function() {
	   add();
	   onCreate();
   };
   var onCreate = function() {
      /* 기능 */
      setContentView();
      $('#memberUpdateBtn').on('click', function() {
         alert('정보수정');
         /* update하면 그 정보를 저장해라 */
         /* id,phone,email,title */
         alert('넘어가는 ID' + $('#id').text());
         sessionStorage.setItem('id', $('#id').text());
         sessionStorage.setItem('name', $('#name').text());
         sessionStorage.setItem('phone', $('#phone').text());
         sessionStorage.setItem('email', $('#email').text());
         sessionStorage.setItem('title', $('#title').text());
         controller.moveTo('member', 'member_update');
      });
   };
   var setContentView = function() {
      /* 화면 */
      alert('member detail');
   };
   var list=function(pageNO){
	   alert('페이지번호'+pageNO);
	   location.href=app.path.ctx()+"/member/member_list/"+pageNO;
   };
   var add=function(){
	   $('#join_yes_button').on('click',function(){
		   alert('성공');
		   $('#join_form').attr('action', app.path.ctx() + "/member/add");
	       $('#join_form').attr('method', 'post');
		   return true;
	   });
   };
   return {
      init : init,
      list : list,
      add : add
   };
})();
/* controller */
app.controller = (function() {
   /* 기능들의 집합 이다 / 기능은 public 이다 */
   var init = function() {
	 
   };
   var moveTo = function(directory, page) {
      location.href = app.path.ctx()+"/common/path" + "/" + directory + "/" + page;
   };
   var deleteTarget = function(target,x,y) {
	      prompt(target + '의 ID?');
	      location.href = app.path.ctx()+"/"+x+"/"+y;
	   };

   var updateStudent = function(id, email) {
      alert('수정할  id: ' + id);
      location.href = app.path.ctx()
            + "/member.do?action=update&page=member_update&id=" + id
            + "&email=" + email;
   };
   var deleteStudent = function(id) {
      alert('삭제할 아이디: ' + id);
      location.href = app.path.ctx()
            + "/member.do?action=delete&page=member_list&id=" + id;
   };
   var detailStudent = function(x) {
      alert('디테일 아이디: ' + x);
      location.href = app.path.ctx()
            + "/member.do?action=detail&page=member_detail&id=" + x;
   };
   var searchName = function() {
	   alert('찾는 이름 : ');
      var search = $('#searchName').val();
         location.href = app.path.ctx()
               + "/member/search"+search;
   }
   var logout = function(dir, page) {
      location.href = app.ctx() + "/" + dir + ".do?action=logout&page="
            + page;
   }
   return {
      init : init,
      moveTo : moveTo,
      deleteTarget : deleteTarget,
      updateStudent : updateStudent,
      deleteStudent : deleteStudent,
      detailStudent : detailStudent,
      searchName : searchName,
      logout : logout
   };
})();
/*******************************************************************************
 * grade
 ******************************************************************************/
app.grade = (function() {
   var init = function() {
      onCreate();
   };
   var onCreate = function() {
      setContentView();
   };
   var setContentView = function() {
   };
   return {
      init : init
   };
})();
/*******************************************************************************
 * board
 ******************************************************************************/
app.board = (function() {
   var init = function() {
      onCreate();
   };
   var onCreate = function() {
      setContentView();
   };
   var setContentView = function() {
   };
   return {
      init : init
   }
})();