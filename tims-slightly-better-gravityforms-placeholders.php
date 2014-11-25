<?php

/*

Plugin Name: Gravity Forms - Tim's Slightly Better Placeholders add-on

Plugin URI: https://github.com/ninthlink/nlk-plugins/tree/master/tims-slightly-better-gravityforms-placeholders

Description: Adds HTML5 placeholder support to Gravity Forms' fields with a javascript fallback. Javascript & jQuery are required.

Version: 1.0

Author: Tim Spinks (original by: Joan Piedra)

Author URI: http://monkishtypist.com



Instructions:

Just add a "tsbplaceholder" CSS classname to the required fields or form

For complex fields, to keep main labels, but convert sub-labels to placeholders - such as Name field - add additional class "complex"

*/



if ( isset( $GLOBALS['pagenow'] ) && $GLOBALS['pagenow'] == 'wp-login.php' )

	return;

if( !function_exists('gf_tsb_placeholder_enqueue_scripts') )

{

	add_action('wp_print_scripts', 'gf_tsb_placeholder_enqueue_scripts');

	function gf_tsb_placeholder_enqueue_scripts() {

		$plugin_url = plugins_url( basename(dirname(__FILE__)) );

		echo "<script>var jquery_tsb_placeholder_url = '" . $plugin_url . "/jquery.tsbplaceholder-1.0.1.js';</script>";

		wp_enqueue_script('_gf_tsb_placeholders', $plugin_url . '/gf.placeholders.js', array('jquery'), '1.0' );

	}

}