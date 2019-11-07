const $html = $('html');
let mul;

function _update() {
	mul = parseInt($html.css('font-size')) / 10;
}

$(window).on('domready resize', _update);
_update();

export default function(px) {
	return mul * px;
}
