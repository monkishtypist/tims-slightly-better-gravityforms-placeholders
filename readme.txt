=== Gravity Forms - Tim's Slightly Better Placeholders add-on ===
Contributors: monkishtypist
Tags: gravityforms, gravity, forms, placeholders, html5, jquery.placeholders.js
Requires at least: 3.0
Tested up to: 4.0
Stable tag: 1.0

Adds HTML5 placeholder support to Gravity Forms' fields with a Javascript fallback. Javascript & jQuery are required.


== Description ==

Adds HTML5 placeholder support to the Gravity Forms plugin copying the Field's label as the placeholder and hidding it. Javascript fallback is used for old browsers that don't support the HTML5 placeholder attribute.

You can find the source code at the GitHub repository:
https://github.com/ninthlink/nlk-plugins/tree/master/tims-slightly-better-gravityforms-placeholders


== Installation ==

1. Upload all files to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in the WordPress Admin Panel
3. Add the CSS class `tsbplaceholder` to text fields or textareas as needed, you can also add it to the form itself to enable this feature to all fields within it.
4. Add additional CSS class `complex` to keep complex field main labels, but use sub-labels as placeholders.


== Changelog ==

= 1.0 =
* Built based on `Gravity Forms - Placeholders add-on`