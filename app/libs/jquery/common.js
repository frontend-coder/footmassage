$(document).ready(function() {
	$("body").niceScroll({
horizrailenabled:false
});
// вверхнее красиво-вращающееся меню
// 1 и 2 строка это анимация крестика
//3 строка - слайдер вниз меню
$(".toggle-mnu").click(function() {
$(this).toggleClass("on");
$(".hidden-mnu").slideToggle();
return false;
});
$('body, .top-menu ul li a').click(function () {
$('.hidden-mnu').hide("slow");
});
//Кнопка наверх с права от контента
$("body").append('<div class="top">Читая этот сайт вы даете свое согласие на использование файлов Cookie. В противном случае покиньте этот сайт. <button class="button_up">соглашен(сна)</button></div>');
// Заставляет кнопку работать как ссылку на самый вверх
$("body").on("click", ".top", function() {
  $(".top").addClass("active");
});

// всплывающие окна обратной связи позвонить мне
$("a[href='#call-back']").magnificPopup ({
  mainClass:'mfp-fade',
  removalDelay:400,
  type:'inline',
});

/*чтобы в формах был индивидуальный заголовок */
$("a[href='#call-back']").click(function(){
  var dataForm = $(this).data("form");
  var dataText = $(this).data("text");
  $(".forms-call h4").text(dataText);
  $(".forms-call [name=admin-data]").val(dataForm);
});

// одинаковой высоты разные по длине ашки
$(".bl").equalHeights();

$("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      $(".forms-calldecor .success").addClass("active");
      setTimeout(function() {
        // Done Functions
        $(".forms-calldecor .success").removeClass("active");
        th.trigger("reset");
        $.magnificPopup.close();
      }, 3000);
    });
    return false;
  });
//ниже вставлять js код




});