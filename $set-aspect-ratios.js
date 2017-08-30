const debounce  = require('lodash.debounce')
const R  = require('ramda')

//$setAspectRatios :: jQuery -> 'selector' -> I/O
const $setAspectRatios = ($, selector) => {
	const container = $(selector)
	
	if (container.length === 0) {return}
	
	const setAspectRatio = $element => {
		let height;
		let str_ratio = $element.data('ratio')
		let error = `[setAspectRatios] el ratio fue mal ingresado (${str_ratio}), o falta, en este nodo`
		let horizontal, vertical
		
		if (!str_ratio || typeof str_ratio === 'number') {return console.error(error, $element);}
		
		[horizontal, vertical] = str_ratio.split(':').map(Number)

		if (!(vertical && horizontal)) {return console.error(error, $element);}
		
		height = $element.width() / horizontal * vertical;
		$element.height(height)
		$element.width('100%')

		$(window).on('resize', debounce(() => {
			height = $(window).width() / horizontal * vertical;
			$element.height(height)
			$element.width('100%')			
		}, 100))
	}

	container.each((i, el) => setAspectRatio($(el)))
}

module.exports = $setAspectRatios