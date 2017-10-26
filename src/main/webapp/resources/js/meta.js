var meta=meta || {};
meta.common=(()=>{
	var init=(ctx)=>{
		onCreate();
		meta.session.init(ctx);
		meta.index.init();
	};
	var onCreate=()=>{
		setContentView();
	};
	var setContentView=()=>{};
	return { init:init };
})();
meta.index=(()=>{
	var $wrapper,$navbar,$container,ctx,img,js,css,
		temp,algo;
	var init=()=>{
			js=$$('j');
			temp=js+'/template.js';
			algo=js+'/algo.js';
			$navbar=$('#navbar');
			$container=$('#container');
			img=$$('i');
			ctx=$$('x');
			onCreate();
		};
	  /*<span class="label label-default">Default</span>
		<span class="label label-primary">Primary</span>
		<span class="label label-success">Success</span>
		<span class="label label-info">Info</span>
		<span class="label label-warning">Warning</span>
		<span class="label label-danger">Danger</span>*/
	var onCreate=()=>{
		$.getScript(temp,(x,y)=>{
			$container.append(compUI.div('content')).css({'width':'100%'});
			$('#content').css({'width':'35%','margin':'0 auto'}).append(compUI.image('loading',img+'/loading.gif'));
			$('#content').append(compUI.div('direction'));
			$('#direction').css({'width':'97%','margin':'0 auto'}).append(compUI.h1('h-btn'));
	        $('#direction').append(compUI.h1('h-btn'));
	        $('#h-btn').append(compUI.span('btn')).attr('display','inline');
	        $('#btn').html('알고리즘').addClass('label label-default');
	        $('#h-btn').append(compUI.span('btn2')).attr('display','inline');
	        $('#btn2').html('회원관리').addClass('label label-info').css({'margin-left' : '10px'});
	        $('#btn2').click(()=>{
	        	alert('회원관리');
	        });
	        $('#h-btn').append(compUI.span('btn3')).attr('display','inline');
	        $('#btn3').html('게시판관리').addClass('label label-info').css({'margin-left' : '10px'});
	        $('#btn3').click(()=>{
	        	alert('게시판관리');
	        	meta.board.list();
	        });
	        $('#btn').click(()=>{
	        	$container.empty();
	            //meta.auth.init();   
	            meta.navbar.init();
	            $container.html(algoUI.series());
	        });
		});
	};
	return {init:init};
})();

meta.board=(()=>{
    var $wrapper,$navbar,$container,ctx,img,js,css,
     temp,algo;
	   var init=()=>{
	      
	       js=$$('j');
	       temp=js+'/template.js';
	         $container=$('#container');
	         $tbody=$('#tbody');
	         ctx=$$('x');
	         $ok=$('#ok');
	   };
   var write=()=>{
      init();
      alert('고고 글쓰기');
   $.getScript(temp,()=>{
    $container.html(introUI.detail());
       
        });      
   };
   var list=x=>{
	   alert('리스트 진입');
	   init();
       //location.href=ctx+'/get/board/list';//리스트를 조회해서 가지고온다, get이나 post는 생략해도 무관
   	var url=ctx+'/list/board';
   	$.getJSON(url,data=>{//기본값은 data다
   		alert('x msg is');
   	$container.html(introUI.board());
       var a=[//JSON 배열
       	{
       		a : 1,//a가 1이다
       		b : '한국인사',//b는 한국인사다
       		c : '안녕',
       		d : '길동',
       		e : '2017-09-10',
       		f : 10	
       	},
       	{
       		a : 2,
       		b : '미국인사',
       		c : '하이',
       		d : '조던',
       		e : '2017-09-11',
       		f : 10	
       	},
       	{
       		a : 3,
       		b : '중국인사',
       		c : '니하오',
       		d : '마오',
       		e : '2017-09-12',
       		f : 30
       	},
       	{
       		a : 4,
       		b : '일본인사',
       		c : '곤니치와',
       		d : '아베',
       		e : '2017-09-13',
       		f : 40	
       	},
       	{
       		a : 5,
       		b : '태국인사',
       		c : '사와디캅',
       		d : '창',
       		e : '2017-09-14',
       		f : 50	
       	}
       ];
       var tr='';
       alert('결과:'+data.result);
       $.each(data.list,(i,j)=>{//JSON배열 - a는 array(배열), i는 index, j는 object의 j(때문에 아무런 알파벳을 넣고 맞춰주면 된다)
       tr+='<tr style="height: 25px;">'
          +'<td >'+j.articleSeq+'</td>'
          +'<td >'+j.id+'</td>'
          +'<td ><a onclick="meta.board.detail('+j.articleSeq+')">'+j.title+'</a></td>'
          +'<td >'+j.content+'</td>'
          +'<td >'+j.regdate+'</td>'
          +'<td >'+j.hitCount+'</td>'
          +'</tr>';
       });
       console.log('tr : '+tr);
   	$('#tbody').html(tr);
   	$('#total').text('총 게시글 수: '+data.total.count);
   	$('#searchBtn').click(()=>{
   		alert('Input Text');
   	});
   	$('#writeBtn').click(()=>{
   		alert('Input Text');
   	});
   	});
   };
   var detail=(x)=>{
      init();
      alert('선택한값'+x);
        $.getJSON(ctx+'/get/board/'+x,data=>{
        	alert('data 값: '+data.test);
           $.getScript(temp,()=>{
              $container.html(introUI.detail());
              $('#legend').html('게시글보기');
              $('#message').val(data.detail.content);
              $('#fname').val(data.detail.title);
              $('#lname').val(data.detail.id);
              $('#confirmBtn').html('수 정').click(e=>{
                 e.preventDefault();//form태그의 submit 기능을 죽이는 문법
                 alert('버튼 누르기');
              $('#legend').html('게시글수정하기');
              $('#confirmBtn').html('확 인')
              	  .attr('id','updateBtn')
              	  .click(e=>{
            		  e.preventDefault();
            		  var _seq=data.detail.articleSeq;
                      var _title=$('#fname').val();
                      var _writer=$('#lname').val();
                      var _message=$('#message').val();
            		  $.ajax({
            			  url : ctx+'/put/articles',//controller로 가는 경로
            			  method : 'post',//생략하면 get방식
            			  dataType:'json',
            			  data : JSON.stringify({
            				  'articleSeq':_seq,
            				  'title':_title,
            				  'id':_writer,
            				  'content':_message
            			  }),
            			  contentType : 'application/json',
            			  success : data=>{
            				  alert('AJAX 통신 성공'+data.msg);
            				  meta.board.list();//수정이 완료되면 리스트로 보내는 문법
            			    //detail(data.detail.articleSeq);//위의 detail로다시 가라는 문법
            				//detail(_seq);
            			  },
            			  error : (x,s,m)=>{
            				  alert('글 수정시 에러발생'+m);
            			  }
            		  });
            	  });
                 })
                 $('#cancelBtn').html('삭제').click(e=>{
               	  e.preventDefault();
               	  deleteArticle(x+','+pass);
                 })
                 .attr('data-toggle','modal')
                 .attr('data-target','#modal')
                 .addClass('btn btn-primary')
                 .html('삭제하기').click(e=>{
                	 e.preventDefault(); 
                     deleteArticle(x+','+pass);
                 });
              });
       });
   };
   var update =(x)=>{
         alert('수정클릭');
         detail(x);
          $.getJSON(ctx+'/get/articles/'+x,data=>{
              $.getScript(temp,()=>{
                 $container.html(introUI.detail());
                 $('#legend').html('게시글수정하기');
                 $('#cancelBtn').click(e=>{
                    e.preventDefault();
                    
                 })
                 $('#confirmBtn').click(e=>{
                    e.preventDefault();
                    update(x);
                 })
              });
          });
   };
   var deleteArticle=x=>{
      alert('삭제버튼');
      alert('json'+x);
      $.ajax({
    	  url : '',
    	  data : JSON.stringify(x)
    	  
      });
      var url=ctx+'/list/board';
       $.getJSON(url,data=>{
           alert('count'+data.total.count);
           $container.html(introUI.board());
           $('#total').after();
           $('#h-btn').append(compUI.span('searchBtn')).attr('display','inline');
           var tr='';
             $.each(data.list,(i,j)=>{//JSON배열 - a는 array(배열), i는 index, j는 object의 j
             tr+='<tr style="height: 25px;">'
                +'<td >'+j.articleSeq+'</td>'
                +'<td >'+j.content+'</td>'
                +'<td ><a onclick="meta.board.detail('+j.articleSeq+')">'+j.title+'</a></td>'
                +'<td >'+j.id+'</td>'
                +'<td >'+j.regdate+'</td>'
                +'<td >'+j.hitCount+'</td>'
                +'</tr>';
             });
             $('#tbody').html(tr);   
             $count=$('#total');
             $count.html(data.total.count);
          $('#add').click(()=>{
             alert('클릭');
             	meta.board.write();
          });
        });
   };
   return {detail:detail,init:init,write:write,list:list,fileupload:()=>{
	   //fileBtn
	   $('#fileBtn').click(e=>{
		   e.preventDefaul();
		   var url=ctx+'/post/upload';
		   $.ajax({
			   url: url,
			   dataType :'text',
			   enctype:'multipar/form-data',
			   beforeSubmit:()=>{
				   alert('로딩중');
			   },
			   success : d=>{
				   alert('등록완료'+d.esult);
			   },
			   error :(x,s,m)=>{
				   alert('file upload failed'+m);
			   }
		   });
		   
	   });
   }
};
})();

meta.auth=(()=>{
	var $wrapper,ctx,img,js,css,temp;
	var init=()=>{
		onCreate();
		$wrapper=$('#wrapper');
		img=$$('i');
		js=$$('j');
		temp=js+'/template.js';
	};
	var onCreate=function(){setContentView();};
	var setContentView=function(){
		$.getScript(temp,(i)=>{
			$wrapper.append(intro.login(img));
			$('#login_input').after(meta.comp.input(
					{
						type : 'button',
						id : 'login_btn',
						value : '로그인'
					}
				));
				$('#login_box').append(meta.comp.input(
					{
						type : 'button',
						id : 'cancel_btn',
						value : '취소'
					}
				));
		});
	};
	var joinView=()=>{};
	return {
		init : init
	};
})();

meta.navbar=(()=>{
	var algo,js,temp,$container;
	var init=()=>{
		js=$$('j');
		$container=$('#container');
		algo=js+'/algo.js';
		temp=js+'/template.js';
		onCreate();
		/*algo=js+'/algo.js';*/
	};
	var onCreate=()=>{
		$.getScript(temp,()=>{
			var $u1=$("#navbar_ul_stu");
			var $u2=$("#navbar_ul_grade");
			var $u3=$("#navbar_ul_board");
			$u1.addClass("dropdown-menu");
			$u2.addClass("dropdown-menu");
			$u3.addClass("dropdown-menu");
			$('#navbar').html(introUI.navbar());
			$('#container').html(algoUI.series());
			$('#start_txt').after(compUI.input('start','text'));
			$('#start').attr('placeholder','시작값');
			$('#end_txt').after(compUI.input('end','text'));
			$('#end').attr('placeholder','끝값');
			$('#result').before(compUI.input('resultBtn','button'));
			$('#resultBtn').val('결과보기');
			$('#resultBtn').click(()=>{
				$.getScript(algo,(x1,x2)=>{
					$('#result').text('결과 : '+
							series.arithmetic(
									$('#start').val(),
									$('#end').val()
							));
				});
			});
			$('.dropdown-menu a').eq(0).click(()=>{
				//app.controller.moveTo('member','member_add');
			});
			$('.dropdown-menu a').eq(1).click(()=>{
				//app.member.list(1);
			});
			$('.dropdown-menu a').eq(2).click(()=>{
				//app.controller.moveTo('member','member_detail');
			});
			$('.dropdown-menu a').eq(3).click(()=>{
				//app.controller.deleteTarget('hong','member','member_delete');
			});
			$('.dropdown-menu a').eq(4).click(()=>{
				//app.controller.moveTo('grade','grade_add');
			});
			$('.dropdown-menu a').eq(5).click(()=>{
				//app.controller.moveTo('hong','grade','grade_list');
			});
			$('.dropdown-menu a').eq(6).click(()=>{
				//app.controller.moveTo('grade','grade_detail');
			});
			$('.dropdown-menu a').eq(7).click(()=>{
				//app.controller.deleteTarget('hong','grade','grade_delete');
			});
			$('.dropdown-menu a').eq(8).click(()=>{
				//app.controller.moveTo('board','board_write');
			});
			$('.dropdown-menu a').eq(9).click(()=>{
				//app.controller.moveTo('board','board_list');
			});
			$('.dropdown-menu a').eq(10).click(()=>{
				//app.controller.moveTo('board','board_detail');
			});
			$('.dropdown-menu a').eq(11).click(()=>{
				//app.controller.deleteTarget('hong','board','board_delete');
			});
			$('#arithBtn').click(()=>{
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('등차수열의 합');
				$('#resultBtn').click(()=>{
					$.getScript(algo,(x1,x2)=>{
						$('#result').text('결과 : '+
								series.arithmetic(
										$('#start').val(),
										$('#end').val()
								));
					});
				});
			});
			$('#switchBtn').click(()=>{
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('스위치수열의 합');
				$('#start').val('1').attr('readonly','true');
				$('#end').val('100').attr('readonly','true');
				$('#resultBtn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과값'+series.switchSeries());
					});
				})
			});
			$('#diffBtn').click(()=>{
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('등비수열의 합');
				$('#start').val('1').attr('readonly','true');
				$('#resultBtn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과값'+series.diffSeries($('#end').val()));
					});
				})
			});
			$('#facBtn').click(()=>{
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('팩토리얼의 합');
				$('#start').val('1').attr('readonly','true');
				$('#end').val('100').attr('readonly','true');
				$('#resultBtn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과값'+series.facSeries());
					});
				})
			});
			$('#fiboBtn').click(()=>{
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('피보나치의 합');
				$('#start').val('1').attr('readonly','true');
				$('#end').val('100').attr('readonly','true');
				$('#resultBtn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과값'+series.fiboSeries());
					});
				})
			});
			$('#selBtn').click(()=>{
				alert('버블정렬');
				$container.html(algoUI.sort());
				$('h1').html('버블정렬').css('font-weight','bold');
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','숫자를 입력하여 주세요 ');
				$('#start').after(compUI.input('submitBtn','button'));
				$('#submitBtn').val('입력');
				var arr = new Array();
				$('#submitBtn').click(()=>{
					arr.push($('#start').val());
					$('#start').val('');
				});
				$('#resultBtn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과 값: '+sort.selection(arr));
					});
				});
			});
			
			$('#burbleBtn').click(()=>{
				alert('삽입정렬');
				$container.html(algoUI.sort());
				$('h1').html('삽입정렬').css('font-weight','bold');
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','숫자를 입력하여 주세요 ');
				$('#start').after(compUI.input('submitBtn','button'));
				$('#submitBtn').val('입력');
				var arr = new Array();
				$('#submitBtn').click(()=>{
					arr.push($('#start').val());
					$('#start').val('');
				});
				$('#resultBtn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과 값: '+sort.burble(arr));
					});
				});
			});
			$('#insertBtn').click(()=>{
				alert('선택정렬');
				$container.html(algoUI.sort());
				$('h1').html('선택 정렬').css('font-weight','bold');
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','숫자를 입력하여 주세요 ');
				$('#start').after(compUI.input('submitBtn','button'));
				$('#submitBtn').val('입력');
				var arr = new Array();
				$('#submitBtn').click(()=>{
					arr.push($('#start').val());
					$('#start').val('');
				});
				$('#resultBtn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과 값: '+sort.insertion(arr));
					});
				});
			});
			$('#rankBtn').click(()=>{
				alert('석차구하기');
				$container.html(algoUI.sort());
				$('h1').html('석차구하기').css('font-weight','bold');
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','숫자를 입력하여 주세요 ');
				$('#start').after(compUI.input('submitBtn','button'));
				$('#submitBtn').val('입력');
				var arr = new Array();
				$('#submitBtn').click(()=>{
					arr.push($('#start').val());
					$('#start').val('');
				});
				$('#resultBtn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과 값: '+sort.ranking(arr));
					});
				});
			});
			$('#benSearchBtn').click(()=>{
				alert('이분검색');
				$('h1').html('이분검색');
			});
			$('#mergeBtn').click(()=>{
				alert('병합');
				$('h1').html('병합');
			});
			$('#stackBtn').click(()=>{
				alert('스택');
				$('h1').html('스택');
			});
			$('#selBtn').click(()=>{
				alert('기본5행5열');
				$('h1').html('기본5행5열');
			});
			$('#righttriangle').click(()=>{
				alert('직각삼각형');
				$('h1').html('직각삼각형');
			});
			$('#zigzag').click(()=>{
				alert('지그재그');
				$('h1').html('지그재그');
			});
			$('#diamond').click(()=>{
				alert('다이아몬드');
				$('h1').html('다이아몬드');
			});
			$('#sandwatch').click(()=>{
				alert('모래시계');
				$('h1').html('모래시계');
			});
			$('#rightbean').click(()=>{
				alert('오른쪽 빈삼각형');
				$('h1').html('오른쪽 빈삼각형');
			});
			$('#isosceles').click(()=>{
				alert('이등변 삼각형');
				$('h1').html('이등변 삼각형');
			});
			$('#rotate').click(()=>{
				alert('90도 회전');
				$('h1').html('90도 회전');
			});
			$('#snail').click(()=>{
				alert('달팽이');
				$('h1').html('달팽이');
			});
			$('#diagonal').click(()=>{
				alert('대각선 채우기');
				$('h1').html('대각선 채우기');
			});
			$('#magic').click(()=>{
				alert('마방진');
				$('h1').html('마방진');
			})
			$('#trans').click(()=>{
				alert('행렬변환');
				$('h1').html('행렬변환');
			});
		});
	};
	return {init:init};
})();

meta.session=
	{
	   init : (x)=>{
				sessionStorage.setItem('x',x);
				sessionStorage.setItem('j',x+'/resources/js');
				sessionStorage.setItem('c',x+'/resources/css');
				sessionStorage.setItem('i',x+'/resources/img');
	   		  },
	   getPath : (x)=>{
				return sessionStorage.getItem(x);
	   		  }
	};
var $$= function(x){return meta.session.getPath(x);};