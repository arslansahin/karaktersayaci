/* 
 * Arslan ŞAHİN
 * kod2.net
 * Jquery Karakter Sayacı Foksiyonu
 */
jQuery.fn.karaktersay = function() {

	var args = arguments[0] || {};

	var limit = args.limit;

	var karakter =null;
	
	var gosterge = args.gosterge;

	jQuery(gosterge).html(limit);
	
	return this.each(function(){

		var $this = $(this);

		$this.keyup(function(event){

			 karakter = jQuery(this).val();

			 hesapla = parseFloat(limit-karakter.length);

			 if(hesapla < 0){
				jQuery(this).val(karakter.substr(0, limit));
				
				return true
			 }

			jQuery(gosterge).html(hesapla);

			return false
		});


	});
			 
};
