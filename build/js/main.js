if($('#datepicker1').lenth){
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
}



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