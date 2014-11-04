(function($){



var gf_placeholder = function() {



	$('.gform_wrapper .gplhfield, .gform_wrapper .gplaceholder')

		.find('input, textarea').filter(function(i){

			var $field = $(this);

			if (this.nodeName == 'INPUT') {

				var type = this.type;

				return !(type == 'hidden' || type == 'file' || type == 'radio' || type == 'checkbox');

			}

			return true;

		})

		.each(function(){

			var $field = $(this);

			var id = this.id;

			var $labels = $('label[for=' + id + ']').hide();

			var label = $labels.last().text();

			if (label.length > 0 && label[ label.length-1 ] == '*') {

				label = label.substring(0, label.length-1) + ' *';

			}

			$field[0].setAttribute('placeholder', label);

		});

	$('.gform_wrapper .gplhinput')

		.find('.ginput_complex input, .ginput_complex textarea, .ginput_complex select').filter(function(i){

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

			$labels.last().hide();

			if (label.length > 0 && label[ label.length-1 ] == '*') {

				label = label.substring(0, label.length-1) + ' *';

			}

			if( $(this).is('select') ) {

				$(this).contents().filter(function( index ) {

					return index === 0 && ( !this.value || $.trim(this.value).length == 0 );

				})

				.text( label );

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