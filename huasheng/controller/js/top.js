$(function(){
	$(window).scroll(function() {
			/* Act on the event */
			if($(window).scrollTop()>=150){
				$('.guide').css({
					'position':'fixed',
					'top':'0'
				})
			}
			else{
				//alert("aa");
				$('.guide').css({
					'position':'absolute',
					'bottom':'1%',
					'top':'auto'

				})
			}
		});
})