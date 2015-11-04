/** MIT License (c) copyright 2010-2013 B Cavalier & J Hann */

/**
 * curl _define plugin helper
 */
define = vtex['define'];
define(function (require) {

	var _stringify = require('./_stringify');

	return _define;

	function _define (id, deps, args, body, exports) {
		return 'define = window.vtex.define;define("' + id + '", '
			+ (deps && deps.length ? _stringify.array(deps) + ', ' : '')
			+ 'function (' + (args && args.join(',')) + ') {'
			+ (body ? '\n' + body : '')
			+ (exports ? '\nreturn ' + exports : '')
			+ '\n});\n';
	}

});
