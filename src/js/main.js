
if ($("#datepicker1").length) {
	$.datepicker.regional['ru'] = {
		closeText: 'Закрыть',
		prevText: 'Предыдущий',
		nextText: 'Следующий',
		currentText: 'Сегодня',
		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
		dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
		dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
		dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		weekHeader: 'Не',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''
	};
	$.datepicker.setDefaults($.datepicker.regional['ru']);

	$(function () {
		$("#datepicker1").datepicker();
		$("#datepicker2").datepicker();

	});
}



$(function () {

	$('.mesto-table table td.active').click(function () {
		$(this).toggleClass('zakaz')
	})

	$('.led-right button').click(function () {
		$(".bilet-modal").fadeIn();
	})

	$('.modal-close').click(function () {
		$(this).closest('.bilet-modal').fadeOut()
	})

	$(".bilet-modal").mouseup(function (e) { // событие клика по веб-документу
		var div = $(".modal-wrap"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			$(this).closest('.bilet-modal').fadeOut()
		}
	});


	//выбор сектора
	$('.activepath').click(function () {
		$(this).toggleClass('active')
	})

	var x;
	var y;
	var ticker = 0;
	let dataId;
	let dataPrice;
	let dataMest;
	let dataFoto;
	let dataLink;
	let linkCount = 0;
	let navLink = 0;
	$('.sector-schema-wrap').mousemove(function (event) {

		var pos = $('.sector-schema-wrap').offset();
		var elem_left = pos.left.toFixed(0);
		var elem_top = pos.top.toFixed(0);
		x = event.pageX - elem_left;
		y = event.pageY - elem_top;
	});


	function modalrender() {
		$('.smodal').fadeIn(200)

		$('#sector-num').html(dataId)
		$('#smodal-mest').html(dataMest)
		$('#smodal-price').html(dataPrice)
		$('#smodal-link').attr('href', dataLink)

		$('.sector-schema-wrap').click()
		if($(window).width() > 1024){
			$('.smodal').css('top', y)
			$('.smodal').css('left', x)
		}
		


		linkCount = dataFoto.split("+").length;
		dataFoto = dataFoto.split('+');
		$('#smodal-foto').attr('src', dataFoto[navLink])
	}

	$(".activepath").mouseenter(function (e) {
		$(this).addClass('pathfocus')

		dataId = $(this).attr('data-id')
		dataPrice = $(this).attr('data-price')
		dataMest = $(this).attr('data-mest')
		dataFoto = $(this).attr('data-foto')
		dataLink = $(this).attr('data-link')

		var myVar = setInterval(function (e) {
			if ($(".activepath").hasClass('pathfocus') != 0) {

				ticker++;
			
				if($(window).width() <= 1024){
					if (ticker == 1) {
						clearInterval(myVar);
						ticker = 0

						modalrender()
					}
				}else{
					if (ticker == 15) {
						clearInterval(myVar);
						ticker = 0

						modalrender()
					}
				}

			}
		}, 100)

	});

	$(".activepath").mouseout(function () {
		$(".activepath").removeClass('pathfocus')
		ticker = 0

	})

	$(document).mouseup(function (e) { // событие клика по веб-документу
		var div = $('.smodal'); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.smodal').fadeOut()
		}
	});


	//слайдер фото в модалке выбора сектора
	function modalReload() {
		$('#smodal-foto').attr('src', dataFoto[navLink])
	}

	$('.smodal-right-btn').click(function () {
		if (navLink + 1 < linkCount) {
			navLink++;
		}
		modalReload()
	})

	$('.smodal-left-btn').click(function () {
		if (navLink != 0) {
			navLink--;
		}
		modalReload()
	})


	//бургер
	$('.mesto-burger').click(function () {
		$(this).toggleClass('active')
		$('.data-reg').toggleClass('active')
	})


	//страница регистрации
	$('.sk-reg__regseltop').on('click', function() {
		$(this).toggleClass('active');
		$(this).parent().children('.sk-reg__regsellist').toggle();
	});

	$('.sk-reg__regsellink').on('click', function() {
		var thname = $(this).data('value');
		$('.sk-reg__regsellink').removeClass('active');
		$(this).addClass('active');
		$(this).parent().parent().parent().children('.sk-reg__regseltop').removeClass('active');
        $(this).parent().parent().parent().children('.sk-reg__regseltop').text(thname);
        $(this).parent().parent().parent().children('input[type="hidden"]').val(thname);
        $(this).parent().parent('.sk-reg__regsellist').hide();
        return false;
	});

    $(document).mouseup(function(e) {
        var div = $(".sk-reg__regsellist"); // тут указываем ID элемента
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.hide();
            $('.sk-reg__regseltop').removeClass('active');
        }
    });


    //модалка выбора сектора
    $('.close-modal-cross').click(function(){
    	$('.smodal').fadeOut()
    })


    //проскролить сектор пополам
    if($(window).width() < 768){
    	let distance =  $('.sector-schema-wrap').width() - $('.sector-schema').width();
	    distance = distance / 2;
		box = $('.sector-schema');
		
		  box.stop().animate({
		    scrollLeft: '+=' + (distance)
		  
		}, 0);
    }

    
})