/*
 * Arslan ŞAHİN
 * kod2.net
 * arsann@gmail.com
 * Jquery Karakter Sayacı Foksiyonu
 * https://www.kod2.net/jquery-karakter-sayaci/
 */
jQuery.fn.karaktersay = function() {

	var args = arguments[0] || {};

	var limit = args.limit;

	var karakter =null;

	var gosterge = args.gosterge;

	var olay = args.olay;

	jQuery(gosterge).html(limit);

	return this.each(function(){

		var $this = $(this);

		$this.keyup(function(event){

			 karakter = jQuery(this).val();

			 hesapla = parseFloat(limit-karakter.length);

			 if(hesapla < 0){
				jQuery(this).val(karakter.substr(0, limit));
				if(olay){
					olay.call(this);
				}
				return true
			 }

			jQuery(gosterge).html(hesapla);

			return false
		});


	});

};
