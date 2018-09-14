$(document).ready(function() {
	$("body").niceScroll({
horizrailenabled:false
});


//Кнопка наверх с права от контента
$("body").append('<div class="top">Читая этот сайт вы даете свое согласие на использование файлов Cookie. В противном случае покиньте этот сайт. <button class="button_up">соглашен(сна)</button></div>');
// Заставляет кнопку работать как ссылку на самый вверх
$("body").on("click", ".top", function() {
  $(".top").addClass("active");
});

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