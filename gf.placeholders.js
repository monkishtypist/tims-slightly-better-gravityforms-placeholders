(function($){

var gf_placeholder = function() {

	$('.gform_wrapper .tsbplaceholder')

		.find('input, textarea, select').filter(function(i){

			var $field = $(this);

			if (this.nodeName == 'INPUT' || this.nodeName == 'SELECT') {

				var type = this.type;

				return !(type == 'hidden' || type == 'file' || type == 'radio' || type == 'checkbox');

			}

			return true;

		})

		.each(function(){

			var $field = $(this);

			var id = this.id;

			var $labels = $('label[for=' + id + ']');

			var label = $labels.last().text();

			if( $(this).parents('li').hasClass('complex') ) {
			
				$labels.last().hide();

			}

			else {

				$labels.hide();

			}

			if (label.length > 0 && label[ label.length-1 ] == '*') {

				label = label.substring(0, label.length-1) + ' *';

			}

			if( $(this).is('select') ) {

				var opt = $(this).contents().filter(function( index ) {

					return index === 0 && ( !this.value || $.trim(this.value).length == 0 );

				});
				
				if ( opt.length > 0 ) {

					opt.text( label );

				}

				else {

					$(this).prepend("<option selected=\"selected\">" + label + "</option>");

				}

			}

			else {

				$field[0].setAttribute('placeholder', label);

			}

		});

	var support = (!('placeholder' in document.createElement('input'))); // borrowed from Modernizr.com

	if ( support && jquery_placeholder_url )

		$.ajax({

			cache: true,

			dataType: 'script',

			url: jquery_placeholder_url,

			success: function() {

				$('input[placeholder], textarea[placeholder]').placeholder({

					blankSubmit: true

				});

			},

			type: 'get'

		});

};

$(document).ready(function(){

	gf_placeholder();

	$(document).bind('gform_page_loaded', gf_placeholder);

});

})(jQuery);