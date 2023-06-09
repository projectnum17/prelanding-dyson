//loader

$(window).ready(function () {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});

// відправка 

$(document).ready(function () {
	$('#form').submit(function () { // перевірка на пусті поля. Атрибут html5 — required не підходить (не підпримується Safari)
		if (document.form.name.value == '' || document.form.email.value == '') {
			valid = false;
			return valid;
		};

		$('#form input[type=email]').on('blur', function () {
			let email = $(this).val();

			if (email.length > 0
				&& (email.match(/.+?\@.+/g) || []).length !== 1) {
				console.log('invalid');
				alert('Не корректний e-mail!');
			} else {
				console.log('valid');
			}
		});

		$.ajax({
			/* type: "POST",
			url: "mail/mail.php", */
			data: $(this).serialize()
		}).done(function () {
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
	});
});

// Закрити
$('.js-close-thank-you').click(function () { // крестик
	$('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) { // за зоною попАпа
	var popup = $('.popup');
	if (e.target != popup[0] && popup.has(e.target).length === 0) {
		$('.js-overlay-thank-you').fadeOut();
	}
});
