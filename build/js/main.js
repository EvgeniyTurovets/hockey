
$.datepicker.regional['ru'] = {
	closeText: 'Закрыть',
	prevText: 'Предыдущий',
	nextText: 'Следующий',
	currentText: 'Сегодня',
	monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
	dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
	dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
	dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
	weekHeader: 'Не',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);

$(function(){
	$("#datepicker1").datepicker();
	$("#datepicker2").datepicker();

});


$(function(){

	$('.mesto-table table td.active').click(function(){
		$(this).toggleClass('zakaz')
	})

	$('.led-right button').click(function(){
		$(".bilet-modal").fadeIn();
	})

	$('.modal-close').click(function(){
		$(this).closest('.bilet-modal').fadeOut()
	})

	$(".bilet-modal").mouseup(function (e){ // событие клика по веб-документу
		var div = $(".modal-wrap"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
				$(this).closest('.bilet-modal').fadeOut()
		}
	});


	//выбор сектора
	$('.activepath').click(function(){
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
	$('.sector-schema-wrap').mousemove(function(event){
		
		var pos = $('.sector-schema-wrap').offset();
		var elem_left = pos.left.toFixed(0);
		var elem_top = pos.top.toFixed(0);
		x = event.pageX - elem_left;
		y = event.pageY - elem_top;
	});


	function modalrender(){
		$('.smodal').fadeIn(200)

		$('#sector-num').html(dataId)
		$('#smodal-mest').html(dataMest)
		$('#smodal-price').html(dataPrice)
		$('#smodal-foto').attr('src', dataFoto)
		$('#smodal-link').attr('href', dataLink)

		$('.sector-schema-wrap').click()
		$('.smodal').css('top', y)
		$('.smodal').css('left', x)	
	}
	
	$(".activepath").mouseenter(function(e){
		$(this).addClass('pathfocus')

		dataId = $(this).attr('data-id')
		dataPrice = $(this).attr('data-price')
		dataMest = $(this).attr('data-mest')
		dataFoto = $(this).attr('data-foto')
		dataLink = $(this).attr('data-link')

		var myVar = setInterval(function(e){
			if($(".activepath").hasClass('pathfocus') != 0){
				ticker++;
				if(ticker == 15){
					clearInterval(myVar);
					ticker = 0

					modalrender()
				}
			}
		}, 100)
		
	});

	$(".activepath").mouseout(function(){
		$(".activepath").removeClass('pathfocus')
		ticker = 0
		
	})

	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $('.smodal'); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.smodal').fadeOut()
		}
	});
	
	function modalReload(){
		$('#sector-num').html(dataId)
		$('#smodal-mest').html(dataMest)
		$('#smodal-price').html(dataPrice)
		$('#smodal-foto').attr('src', dataFoto)
		$('#smodal-link').attr('href', dataLink)
		
	}
	$('.smodal-right-btn').click(function(){
		let nextPath = parseInt(dataId) + 1
		if(nextPath == 327){
			nextPath = 400
		}
		if(nextPath == 217){
			nextPath = 300
		}
		if(nextPath == 118){
			nextPath = 200
		}
		console.log(nextPath)
		if(nextPath <= 413){
			let $nextPath = $('.activepath[data-id=' + nextPath + ']')
			
			dataId = $nextPath.attr('data-id')
			dataPrice = $nextPath.attr('data-price')
			dataMest = $nextPath.attr('data-mest')
			dataFoto = $nextPath.attr('data-foto')
			dataLink = $nextPath.attr('data-link')

			modalReload()
		}
	})

	$('.smodal-left-btn').click(function(){
		let prevPath = parseInt(dataId) - 1
		if(prevPath == 399){
			prevPath = 326
		}
		if(prevPath == 299){
			prevPath = 217
		}
		if(prevPath == 199){
			prevPath = 118
		}
		if(prevPath >= 100){
			let $nextPath = $('.activepath[data-id=' + prevPath + ']')
			
			dataId = $nextPath.attr('data-id')
			dataPrice = $nextPath.attr('data-price')
			dataMest = $nextPath.attr('data-mest')
			dataFoto = $nextPath.attr('data-foto')
			dataLink = $nextPath.attr('data-link')

			modalReload()
		}
		
	})



	$('.mesto-burger').click(function(){
		$(this).toggleClass('active')
		$('.mesto-reg').toggleClass('active')
	})
})