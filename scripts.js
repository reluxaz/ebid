window.addEventListener("load" , function(){
    $(".loadd").css("display","none");
  })
  $(".x4").click(function(){$("nav ul").toggleClass("elavecss")});
  $(".absol5").click(function(){
    $(".flex22").toggleClass("leftcss")
     })
  $(".ach").click(function(){
    $(".modal1").css("display","block")
    })
    $(".ach2").click(function(){
      $(".partwindow").css("display","block")
      })
      $(".ach3").click(function(){
        $(".bankwindow").css("display","block")
        })
        $("#bagla5").click(function(){
          $(".bankwindow").css("display","none")
          })
          $(".x2 button").click(function(){
            $(".x2 input").toggleClass("widthcss")
             })
    $("#bagla").click(function(){
    $(".modal1").css("display","none")
    })
    $("#bagla3").click(function(){
      $(".alertwindow").css("display","none")
      $("body").css("background","white")
      })
      $(".alertwindow button").click(function(){
      $(".alertwindow").css("display","none")
      })
      $("#bagla4").click(function(){
      $(".partwindow").css("display","none")
      })
      $(".absol7").click(function(){
        $(".bosslist").toggleClass("salamcss")
      })
    $("#bagla2").click(function(){
      $(".modal2").css("display","none")
      })
      $(".p2").click(function(){
        $(".diger").toggleClass("aktivv2")
        });
        $(".bolus").click(function(){
          $(".absol4").toggleClass("boyut")
        })
        $(".alertm").click(function(){
          $(".alertwindow").css("display","block")
          $("body").toggleClass("changecol")
        })
        $(".p3").click(function(){
          $(".diger2").toggleClass("aktivv")
          });
          $(".switch").click(function(){
            alert("Are you sure?")
          })
    $(".heros").click(function(){
      $(".absol3").toggleClass("boyut")
    })
      $(".nav-href3").click(function(){
      $(".modal2").css("display","block")
    })
    $(".informational button").click(function(){
      $(this).parent().css("display","none")
    })
    $(".fleks17 p").click(function(){
      $(".fleks18 iframe").css({"animation-name":"hereket2","animation-duration":"0.6s"})
      $(".fleks18 iframe").hide();
      var o=$(this).attr("cat");
      $("."+o).show(),$(".fleks17 p").css("background","black"),$(this).css("background","red") 
    })
    $('.saygac').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 8000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
  });
  $("#show_hide_password2 a").on('click', function(event) {
    event.preventDefault();
    if($('#show_hide_password2 input').attr("type") == "text"){
        $('#show_hide_password2 input').attr('type', 'password');
        $('#show_hide_password2 i').addClass( "fa-eye-slash" );
        $('#show_hide_password2 i').removeClass( "fa-eye" );
    }else if($('#show_hide_password2 input').attr("type") == "password"){
        $('#show_hide_password2 input').attr('type', 'text');
        $('#show_hide_password2 i').removeClass( "fa-eye-slash" );
        $('#show_hide_password2 i').addClass( "fa-eye" );
    }
});
$("#show_hide_password a").on('click', function(event) {
  event.preventDefault();
  if($('#show_hide_password input').attr("type") == "text"){
      $('#show_hide_password input').attr('type', 'password');
      $('#show_hide_password i').addClass( "fa-eye-slash" );
      $('#show_hide_password i').removeClass( "fa-eye" );
  }else if($('#show_hide_password input').attr("type") == "password"){
      $('#show_hide_password input').attr('type', 'text');
      $('#show_hide_password i').removeClass( "fa-eye-slash" );
      $('#show_hide_password i').addClass( "fa-eye" );
  }
});