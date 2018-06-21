$(function(){
		
		var test=true;
		var timer=setInterval(function(){
			//alert("aa");
			if(test){
				run();
			}
			
		},10);
		
		$('.role').on('mouseover',function(){
			clearInterval(timer);
			test=false;
			console.log(test);

		})
		$('.role').on('mouseout',function(){

			if(test!=true){ 
				timer=setInterval(function(){
				//alert("aa");
					run();
				},10);
				test=true;
				console.log(test);
		}
		
		})
	function run(){
		var left1=$('.image1').position().left;
		var left2=$('.image2').position().left;
		var left3=$('.image3').position().left;
		var left4=$('.image4').position().left;
			if(left1>-500){
				$('.image1').css({
					'left':left1-1,
				});
			}
			else{
				$('.image1').css({
					'left':1470,
				});
			}
			if(left2>-500){
				$('.image2').css({
					'left':left2-1,
				});
			}
			else{
				$('.image2').css({
					'left':1470,
				});
			}
			if(left3>-500){
				$('.image3').css({
					'left':left3-1,
				});
			}
			else{
				$('.image3').css({
					'left':1470,
				});
			}
			if(left4>-500){
				$('.image4').css({
					'left':left4-1,
				});
			}
			else{
				$('.image4').css({
					'left':1470,
				});
			}
		};
})