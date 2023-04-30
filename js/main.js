// Отправка 
$(document).ready(function() {
	$('#form').submit(function() { // перевірка на пусті поля. Атрибут html5 — required не підходить (не підпримується Safari)
		if (document.form.name.value == '' || document.form.email.value == '' ) {
			valid = false;
			return valid;
		}
		$.ajax({
			/* type: "POST",
			url: "mail/mail.php", */
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
	});
});

// Закрыть
$('.js-close-thank-you').click(function() { // крестик
	$('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) { // за зоною попАпа
	var popup = $('.popup');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-thank-you').fadeOut();
	}
});
