/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/webpack/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(385);
	__webpack_require__(394);
	__webpack_require__(396);
	__webpack_require__(397);
	__webpack_require__(398);
	__webpack_require__(399);
	__webpack_require__(400);
	module.exports = __webpack_require__(401);


/***/ },

/***/ 385:
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Globalize v1.2.1
	 *
	 * http://github.com/jquery/globalize
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-12-14T18:34Z
	 */

	// Core
	module.exports = __webpack_require__( 386 );

	// Extent core with the following modules
	__webpack_require__( 387 );
	__webpack_require__( 388 );
	__webpack_require__( 389 );

	// Load after globalize/number
	__webpack_require__( 390 );
	__webpack_require__( 391 );

	// Load after globalize/number and globalize/plural
	__webpack_require__( 392 );
	__webpack_require__( 393 );


/***/ },

/***/ 386:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Globalize v1.2.1
	 *
	 * http://github.com/jquery/globalize
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-12-14T18:34Z
	 */
	/*!
	 * Globalize v1.2.1 2016-12-14T18:34Z Released under the MIT license
	 * http://git.io/TrdQbw
	 */
	(function( root, factory ) {

		// UMD returnExports
		if ( true ) {

			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				!(function webpackMissingModule() { var e = new Error("Cannot find module \"cldr\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
				!(function webpackMissingModule() { var e = new Error("Cannot find module \"cldr/event\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if ( typeof exports === "object" ) {

			// Node, CommonJS
			module.exports = factory( require( "cldrjs" ) );
		} else {

			// Global
			root.Globalize = factory( root.Cldr );
		}
	}( this, function( Cldr ) {


	/**
	 * A toString method that outputs meaningful values for objects or arrays and
	 * still performs as fast as a plain string in case variable is string, or as
	 * fast as `"" + number` in case variable is a number.
	 * Ref: http://jsperf.com/my-stringify
	 */
	var toString = function( variable ) {
		return typeof variable === "string" ? variable : ( typeof variable === "number" ? "" +
			variable : JSON.stringify( variable ) );
	};




	/**
	 * formatMessage( message, data )
	 *
	 * @message [String] A message with optional {vars} to be replaced.
	 *
	 * @data [Array or JSON] Object with replacing-variables content.
	 *
	 * Return the formatted message. For example:
	 *
	 * - formatMessage( "{0} second", [ 1 ] ); // 1 second
	 *
	 * - formatMessage( "{0}/{1}", ["m", "s"] ); // m/s
	 *
	 * - formatMessage( "{name} <{email}>", {
	 *     name: "Foo",
	 *     email: "bar@baz.qux"
	 *   }); // Foo <bar@baz.qux>
	 */
	var formatMessage = function( message, data ) {

		// Replace {attribute}'s
		message = message.replace( /{[0-9a-zA-Z-_. ]+}/g, function( name ) {
			name = name.replace( /^{([^}]*)}$/, "$1" );
			return toString( data[ name ] );
		});

		return message;
	};




	var objectExtend = function() {
		var destination = arguments[ 0 ],
			sources = [].slice.call( arguments, 1 );

		sources.forEach(function( source ) {
			var prop;
			for ( prop in source ) {
				destination[ prop ] = source[ prop ];
			}
		});

		return destination;
	};




	var createError = function( code, message, attributes ) {
		var error;

		message = code + ( message ? ": " + formatMessage( message, attributes ) : "" );
		error = new Error( message );
		error.code = code;

		objectExtend( error, attributes );

		return error;
	};




	// Based on http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
	var stringHash = function( str ) {
		return [].reduce.call( str, function( hash, i ) {
			var chr = i.charCodeAt( 0 );
			hash = ( ( hash << 5 ) - hash ) + chr;
			return hash | 0;
		}, 0 );
	};




	var runtimeKey = function( fnName, locale, args, argsStr ) {
		var hash;
		argsStr = argsStr || JSON.stringify( args );
		hash = stringHash( fnName + locale + argsStr );
		return hash > 0 ? "a" + hash : "b" + Math.abs( hash );
	};




	var functionName = function( fn ) {
		if ( fn.name !== undefined ) {
			return fn.name;
		}

		// fn.name is not supported by IE.
		var matches = /^function\s+([\w\$]+)\s*\(/.exec( fn.toString() );

		if ( matches && matches.length > 0 ) {
			return matches[ 1 ];
		}
	};




	var runtimeBind = function( args, cldr, fn, runtimeArgs ) {

		var argsStr = JSON.stringify( args ),
			fnName = functionName( fn ),
			locale = cldr.locale;

		// If name of the function is not available, this is most likely due uglification,
		// which most likely means we are in production, and runtimeBind here is not necessary.
		if ( !fnName ) {
			return fn;
		}

		fn.runtimeKey = runtimeKey( fnName, locale, null, argsStr );

		fn.generatorString = function() {
			return "Globalize(\"" + locale + "\")." + fnName + "(" + argsStr.slice( 1, -1 ) + ")";
		};

		fn.runtimeArgs = runtimeArgs;

		return fn;
	};




	var validate = function( code, message, check, attributes ) {
		if ( !check ) {
			throw createError( code, message, attributes );
		}
	};




	var alwaysArray = function( stringOrArray ) {
		return Array.isArray( stringOrArray ) ? stringOrArray : stringOrArray ? [ stringOrArray ] : [];
	};




	var validateCldr = function( path, value, options ) {
		var skipBoolean;
		options = options || {};

		skipBoolean = alwaysArray( options.skip ).some(function( pathRe ) {
			return pathRe.test( path );
		});

		validate( "E_MISSING_CLDR", "Missing required CLDR content `{path}`.", value || skipBoolean, {
			path: path
		});
	};




	var validateDefaultLocale = function( value ) {
		validate( "E_DEFAULT_LOCALE_NOT_DEFINED", "Default locale has not been defined.",
			value !== undefined, {} );
	};




	var validateParameterPresence = function( value, name ) {
		validate( "E_MISSING_PARAMETER", "Missing required parameter `{name}`.",
			value !== undefined, { name: name });
	};




	/**
	 * range( value, name, minimum, maximum )
	 *
	 * @value [Number].
	 *
	 * @name [String] name of variable.
	 *
	 * @minimum [Number]. The lowest valid value, inclusive.
	 *
	 * @maximum [Number]. The greatest valid value, inclusive.
	 */
	var validateParameterRange = function( value, name, minimum, maximum ) {
		validate(
			"E_PAR_OUT_OF_RANGE",
			"Parameter `{name}` has value `{value}` out of range [{minimum}, {maximum}].",
			value === undefined || value >= minimum && value <= maximum,
			{
				maximum: maximum,
				minimum: minimum,
				name: name,
				value: value
			}
		);
	};




	var validateParameterType = function( value, name, check, expected ) {
		validate(
			"E_INVALID_PAR_TYPE",
			"Invalid `{name}` parameter ({value}). {expected} expected.",
			check,
			{
				expected: expected,
				name: name,
				value: value
			}
		);
	};




	var validateParameterTypeLocale = function( value, name ) {
		validateParameterType(
			value,
			name,
			value === undefined || typeof value === "string" || value instanceof Cldr,
			"String or Cldr instance"
		);
	};




	/**
	 * Function inspired by jQuery Core, but reduced to our use case.
	 */
	var isPlainObject = function( obj ) {
		return obj !== null && "" + obj === "[object Object]";
	};




	var validateParameterTypePlainObject = function( value, name ) {
		validateParameterType(
			value,
			name,
			value === undefined || isPlainObject( value ),
			"Plain Object"
		);
	};




	var alwaysCldr = function( localeOrCldr ) {
		return localeOrCldr instanceof Cldr ? localeOrCldr : new Cldr( localeOrCldr );
	};




	// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions?redirectlocale=en-US&redirectslug=JavaScript%2FGuide%2FRegular_Expressions
	var regexpEscape = function( string ) {
		return string.replace( /([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1" );
	};




	var stringPad = function( str, count, right ) {
		var length;
		if ( typeof str !== "string" ) {
			str = String( str );
		}
		for ( length = str.length; length < count; length += 1 ) {
			str = ( right ? ( str + "0" ) : ( "0" + str ) );
		}
		return str;
	};




	function validateLikelySubtags( cldr ) {
		cldr.once( "get", validateCldr );
		cldr.get( "supplemental/likelySubtags" );
	}

	/**
	 * [new] Globalize( locale|cldr )
	 *
	 * @locale [String]
	 *
	 * @cldr [Cldr instance]
	 *
	 * Create a Globalize instance.
	 */
	function Globalize( locale ) {
		if ( !( this instanceof Globalize ) ) {
			return new Globalize( locale );
		}

		validateParameterPresence( locale, "locale" );
		validateParameterTypeLocale( locale, "locale" );

		this.cldr = alwaysCldr( locale );

		validateLikelySubtags( this.cldr );
	}

	/**
	 * Globalize.load( json, ... )
	 *
	 * @json [JSON]
	 *
	 * Load resolved or unresolved cldr data.
	 * Somewhat equivalent to previous Globalize.addCultureInfo(...).
	 */
	Globalize.load = function() {

		// validations are delegated to Cldr.load().
		Cldr.load.apply( Cldr, arguments );
	};

	/**
	 * Globalize.locale( [locale|cldr] )
	 *
	 * @locale [String]
	 *
	 * @cldr [Cldr instance]
	 *
	 * Set default Cldr instance if locale or cldr argument is passed.
	 *
	 * Return the default Cldr instance.
	 */
	Globalize.locale = function( locale ) {
		validateParameterTypeLocale( locale, "locale" );

		if ( arguments.length ) {
			this.cldr = alwaysCldr( locale );
			validateLikelySubtags( this.cldr );
		}
		return this.cldr;
	};

	/**
	 * Optimization to avoid duplicating some internal functions across modules.
	 */
	Globalize._alwaysArray = alwaysArray;
	Globalize._createError = createError;
	Globalize._formatMessage = formatMessage;
	Globalize._isPlainObject = isPlainObject;
	Globalize._objectExtend = objectExtend;
	Globalize._regexpEscape = regexpEscape;
	Globalize._runtimeBind = runtimeBind;
	Globalize._stringPad = stringPad;
	Globalize._validate = validate;
	Globalize._validateCldr = validateCldr;
	Globalize._validateDefaultLocale = validateDefaultLocale;
	Globalize._validateParameterPresence = validateParameterPresence;
	Globalize._validateParameterRange = validateParameterRange;
	Globalize._validateParameterTypePlainObject = validateParameterTypePlainObject;
	Globalize._validateParameterType = validateParameterType;

	return Globalize;




	}));


/***/ },

/***/ 387:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Globalize v1.2.1
	 *
	 * http://github.com/jquery/globalize
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-12-14T18:34Z
	 */
	/*!
	 * Globalize v1.2.1 2016-12-14T18:34Z Released under the MIT license
	 * http://git.io/TrdQbw
	 */
	(function( root, factory ) {

		// UMD returnExports
		if ( true ) {

			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				!(function webpackMissingModule() { var e = new Error("Cannot find module \"cldr\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
				__webpack_require__(386),
				!(function webpackMissingModule() { var e = new Error("Cannot find module \"cldr/event\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if ( typeof exports === "object" ) {

			// Node, CommonJS
			module.exports = factory( require( "cldrjs" ), require( "../globalize" ) );
		} else {

			// Extend global
			factory( root.Cldr, root.Globalize );
		}
	}(this, function( Cldr, Globalize ) {

	var alwaysArray = Globalize._alwaysArray,
		createError = Globalize._createError,
		isPlainObject = Globalize._isPlainObject,
		runtimeBind = Globalize._runtimeBind,
		validateDefaultLocale = Globalize._validateDefaultLocale,
		validate = Globalize._validate,
		validateParameterPresence = Globalize._validateParameterPresence,
		validateParameterType = Globalize._validateParameterType,
		validateParameterTypePlainObject = Globalize._validateParameterTypePlainObject;
	var MessageFormat;
	/* jshint ignore:start */
	MessageFormat = (function() {
	MessageFormat._parse = (function() {

	  /*
	   * Generated by PEG.js 0.8.0.
	   *
	   * http://pegjs.majda.cz/
	   */

	  function peg$subclass(child, parent) {
	    function ctor() { this.constructor = child; }
	    ctor.prototype = parent.prototype;
	    child.prototype = new ctor();
	  }

	  function SyntaxError(message, expected, found, offset, line, column) {
	    this.message  = message;
	    this.expected = expected;
	    this.found    = found;
	    this.offset   = offset;
	    this.line     = line;
	    this.column   = column;

	    this.name     = "SyntaxError";
	  }

	  peg$subclass(SyntaxError, Error);

	  function parse(input) {
	    var options = arguments.length > 1 ? arguments[1] : {},

	        peg$FAILED = {},

	        peg$startRuleFunctions = { start: peg$parsestart },
	        peg$startRuleFunction  = peg$parsestart,

	        peg$c0 = [],
	        peg$c1 = function(st) {
	              return { type: 'messageFormatPattern', statements: st };
	            },
	        peg$c2 = peg$FAILED,
	        peg$c3 = "{",
	        peg$c4 = { type: "literal", value: "{", description: "\"{\"" },
	        peg$c5 = null,
	        peg$c6 = ",",
	        peg$c7 = { type: "literal", value: ",", description: "\",\"" },
	        peg$c8 = "}",
	        peg$c9 = { type: "literal", value: "}", description: "\"}\"" },
	        peg$c10 = function(argIdx, efmt) {
	              var res = {
	                type: "messageFormatElement",
	                argumentIndex: argIdx
	              };
	              if (efmt && efmt.length) {
	                res.elementFormat = efmt[1];
	              } else {
	                res.output = true;
	              }
	              return res;
	            },
	        peg$c11 = "plural",
	        peg$c12 = { type: "literal", value: "plural", description: "\"plural\"" },
	        peg$c13 = function(t, s) {
	              return { type: "elementFormat", key: t, val: s };
	            },
	        peg$c14 = "selectordinal",
	        peg$c15 = { type: "literal", value: "selectordinal", description: "\"selectordinal\"" },
	        peg$c16 = "select",
	        peg$c17 = { type: "literal", value: "select", description: "\"select\"" },
	        peg$c18 = function(t, p) {
	              return { type: "elementFormat", key: t, val: p };
	            },
	        peg$c19 = function(op, pf) {
	              return { type: "pluralFormatPattern", pluralForms: pf, offset: op || 0 };
	            },
	        peg$c20 = "offset",
	        peg$c21 = { type: "literal", value: "offset", description: "\"offset\"" },
	        peg$c22 = ":",
	        peg$c23 = { type: "literal", value: ":", description: "\":\"" },
	        peg$c24 = function(d) { return d; },
	        peg$c25 = function(k, mfp) {
	              return { key: k, val: mfp };
	            },
	        peg$c26 = function(i) { return i; },
	        peg$c27 = "=",
	        peg$c28 = { type: "literal", value: "=", description: "\"=\"" },
	        peg$c29 = function(pf) { return { type: "selectFormatPattern", pluralForms: pf }; },
	        peg$c30 = function(p) { return p; },
	        peg$c31 = "#",
	        peg$c32 = { type: "literal", value: "#", description: "\"#\"" },
	        peg$c33 = function() { return {type: 'octothorpe'}; },
	        peg$c34 = function(s) { return { type: "string", val: s.join('') }; },
	        peg$c35 = { type: "other", description: "identifier" },
	        peg$c36 = /^[0-9a-zA-Z$_]/,
	        peg$c37 = { type: "class", value: "[0-9a-zA-Z$_]", description: "[0-9a-zA-Z$_]" },
	        peg$c38 = /^[^ \t\n\r,.+={}]/,
	        peg$c39 = { type: "class", value: "[^ \\t\\n\\r,.+={}]", description: "[^ \\t\\n\\r,.+={}]" },
	        peg$c40 = function(s) { return s; },
	        peg$c41 = function(chars) { return chars.join(''); },
	        peg$c42 = /^[^{}#\\\0-\x1F \t\n\r]/,
	        peg$c43 = { type: "class", value: "[^{}#\\\\\\0-\\x1F \\t\\n\\r]", description: "[^{}#\\\\\\0-\\x1F \\t\\n\\r]" },
	        peg$c44 = function(x) { return x; },
	        peg$c45 = "\\\\",
	        peg$c46 = { type: "literal", value: "\\\\", description: "\"\\\\\\\\\"" },
	        peg$c47 = function() { return "\\"; },
	        peg$c48 = "\\#",
	        peg$c49 = { type: "literal", value: "\\#", description: "\"\\\\#\"" },
	        peg$c50 = function() { return "#"; },
	        peg$c51 = "\\{",
	        peg$c52 = { type: "literal", value: "\\{", description: "\"\\\\{\"" },
	        peg$c53 = function() { return "\u007B"; },
	        peg$c54 = "\\}",
	        peg$c55 = { type: "literal", value: "\\}", description: "\"\\\\}\"" },
	        peg$c56 = function() { return "\u007D"; },
	        peg$c57 = "\\u",
	        peg$c58 = { type: "literal", value: "\\u", description: "\"\\\\u\"" },
	        peg$c59 = function(h1, h2, h3, h4) {
	              return String.fromCharCode(parseInt("0x" + h1 + h2 + h3 + h4));
	            },
	        peg$c60 = /^[0-9]/,
	        peg$c61 = { type: "class", value: "[0-9]", description: "[0-9]" },
	        peg$c62 = function(ds) {
	            //the number might start with 0 but must not be interpreted as an octal number
	            //Hence, the base is passed to parseInt explicitely
	            return parseInt((ds.join('')), 10);
	          },
	        peg$c63 = /^[0-9a-fA-F]/,
	        peg$c64 = { type: "class", value: "[0-9a-fA-F]", description: "[0-9a-fA-F]" },
	        peg$c65 = { type: "other", description: "whitespace" },
	        peg$c66 = function(w) { return w.join(''); },
	        peg$c67 = /^[ \t\n\r]/,
	        peg$c68 = { type: "class", value: "[ \\t\\n\\r]", description: "[ \\t\\n\\r]" },

	        peg$currPos          = 0,
	        peg$reportedPos      = 0,
	        peg$cachedPos        = 0,
	        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
	        peg$maxFailPos       = 0,
	        peg$maxFailExpected  = [],
	        peg$silentFails      = 0,

	        peg$result;

	    if ("startRule" in options) {
	      if (!(options.startRule in peg$startRuleFunctions)) {
	        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
	      }

	      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
	    }

	    function text() {
	      return input.substring(peg$reportedPos, peg$currPos);
	    }

	    function offset() {
	      return peg$reportedPos;
	    }

	    function line() {
	      return peg$computePosDetails(peg$reportedPos).line;
	    }

	    function column() {
	      return peg$computePosDetails(peg$reportedPos).column;
	    }

	    function expected(description) {
	      throw peg$buildException(
	        null,
	        [{ type: "other", description: description }],
	        peg$reportedPos
	      );
	    }

	    function error(message) {
	      throw peg$buildException(message, null, peg$reportedPos);
	    }

	    function peg$computePosDetails(pos) {
	      function advance(details, startPos, endPos) {
	        var p, ch;

	        for (p = startPos; p < endPos; p++) {
	          ch = input.charAt(p);
	          if (ch === "\n") {
	            if (!details.seenCR) { details.line++; }
	            details.column = 1;
	            details.seenCR = false;
	          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
	            details.line++;
	            details.column = 1;
	            details.seenCR = true;
	          } else {
	            details.column++;
	            details.seenCR = false;
	          }
	        }
	      }

	      if (peg$cachedPos !== pos) {
	        if (peg$cachedPos > pos) {
	          peg$cachedPos = 0;
	          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
	        }
	        advance(peg$cachedPosDetails, peg$cachedPos, pos);
	        peg$cachedPos = pos;
	      }

	      return peg$cachedPosDetails;
	    }

	    function peg$fail(expected) {
	      if (peg$currPos < peg$maxFailPos) { return; }

	      if (peg$currPos > peg$maxFailPos) {
	        peg$maxFailPos = peg$currPos;
	        peg$maxFailExpected = [];
	      }

	      peg$maxFailExpected.push(expected);
	    }

	    function peg$buildException(message, expected, pos) {
	      function cleanupExpected(expected) {
	        var i = 1;

	        expected.sort(function(a, b) {
	          if (a.description < b.description) {
	            return -1;
	          } else if (a.description > b.description) {
	            return 1;
	          } else {
	            return 0;
	          }
	        });

	        while (i < expected.length) {
	          if (expected[i - 1] === expected[i]) {
	            expected.splice(i, 1);
	          } else {
	            i++;
	          }
	        }
	      }

	      function buildMessage(expected, found) {
	        function stringEscape(s) {
	          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

	          return s
	            .replace(/\\/g,   '\\\\')
	            .replace(/"/g,    '\\"')
	            .replace(/\x08/g, '\\b')
	            .replace(/\t/g,   '\\t')
	            .replace(/\n/g,   '\\n')
	            .replace(/\f/g,   '\\f')
	            .replace(/\r/g,   '\\r')
	            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
	            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
	            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
	            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
	        }

	        var expectedDescs = new Array(expected.length),
	            expectedDesc, foundDesc, i;

	        for (i = 0; i < expected.length; i++) {
	          expectedDescs[i] = expected[i].description;
	        }

	        expectedDesc = expected.length > 1
	          ? expectedDescs.slice(0, -1).join(", ")
	              + " or "
	              + expectedDescs[expected.length - 1]
	          : expectedDescs[0];

	        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

	        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
	      }

	      var posDetails = peg$computePosDetails(pos),
	          found      = pos < input.length ? input.charAt(pos) : null;

	      if (expected !== null) {
	        cleanupExpected(expected);
	      }

	      return new SyntaxError(
	        message !== null ? message : buildMessage(expected, found),
	        expected,
	        found,
	        pos,
	        posDetails.line,
	        posDetails.column
	      );
	    }

	    function peg$parsestart() {
	      var s0;

	      s0 = peg$parsemessageFormatPattern();

	      return s0;
	    }

	    function peg$parsemessageFormatPattern() {
	      var s0, s1, s2;

	      s0 = peg$currPos;
	      s1 = [];
	      s2 = peg$parsemessageFormatElement();
	      if (s2 === peg$FAILED) {
	        s2 = peg$parsestring();
	        if (s2 === peg$FAILED) {
	          s2 = peg$parseoctothorpe();
	        }
	      }
	      while (s2 !== peg$FAILED) {
	        s1.push(s2);
	        s2 = peg$parsemessageFormatElement();
	        if (s2 === peg$FAILED) {
	          s2 = peg$parsestring();
	          if (s2 === peg$FAILED) {
	            s2 = peg$parseoctothorpe();
	          }
	        }
	      }
	      if (s1 !== peg$FAILED) {
	        peg$reportedPos = s0;
	        s1 = peg$c1(s1);
	      }
	      s0 = s1;

	      return s0;
	    }

	    function peg$parsemessageFormatElement() {
	      var s0, s1, s2, s3, s4, s5, s6;

	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 123) {
	        s1 = peg$c3;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c4); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parseid();
	          if (s3 !== peg$FAILED) {
	            s4 = peg$currPos;
	            if (input.charCodeAt(peg$currPos) === 44) {
	              s5 = peg$c6;
	              peg$currPos++;
	            } else {
	              s5 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c7); }
	            }
	            if (s5 !== peg$FAILED) {
	              s6 = peg$parseelementFormat();
	              if (s6 !== peg$FAILED) {
	                s5 = [s5, s6];
	                s4 = s5;
	              } else {
	                peg$currPos = s4;
	                s4 = peg$c2;
	              }
	            } else {
	              peg$currPos = s4;
	              s4 = peg$c2;
	            }
	            if (s4 === peg$FAILED) {
	              s4 = peg$c5;
	            }
	            if (s4 !== peg$FAILED) {
	              s5 = peg$parse_();
	              if (s5 !== peg$FAILED) {
	                if (input.charCodeAt(peg$currPos) === 125) {
	                  s6 = peg$c8;
	                  peg$currPos++;
	                } else {
	                  s6 = peg$FAILED;
	                  if (peg$silentFails === 0) { peg$fail(peg$c9); }
	                }
	                if (s6 !== peg$FAILED) {
	                  peg$reportedPos = s0;
	                  s1 = peg$c10(s3, s4);
	                  s0 = s1;
	                } else {
	                  peg$currPos = s0;
	                  s0 = peg$c2;
	                }
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$c2;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }

	      return s0;
	    }

	    function peg$parseelementFormat() {
	      var s0, s1, s2, s3, s4, s5, s6, s7;

	      s0 = peg$currPos;
	      s1 = peg$parse_();
	      if (s1 !== peg$FAILED) {
	        if (input.substr(peg$currPos, 6) === peg$c11) {
	          s2 = peg$c11;
	          peg$currPos += 6;
	        } else {
	          s2 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c12); }
	        }
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parse_();
	          if (s3 !== peg$FAILED) {
	            if (input.charCodeAt(peg$currPos) === 44) {
	              s4 = peg$c6;
	              peg$currPos++;
	            } else {
	              s4 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c7); }
	            }
	            if (s4 !== peg$FAILED) {
	              s5 = peg$parse_();
	              if (s5 !== peg$FAILED) {
	                s6 = peg$parsepluralFormatPattern();
	                if (s6 !== peg$FAILED) {
	                  s7 = peg$parse_();
	                  if (s7 !== peg$FAILED) {
	                    peg$reportedPos = s0;
	                    s1 = peg$c13(s2, s6);
	                    s0 = s1;
	                  } else {
	                    peg$currPos = s0;
	                    s0 = peg$c2;
	                  }
	                } else {
	                  peg$currPos = s0;
	                  s0 = peg$c2;
	                }
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$c2;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }
	      if (s0 === peg$FAILED) {
	        s0 = peg$currPos;
	        s1 = peg$parse_();
	        if (s1 !== peg$FAILED) {
	          if (input.substr(peg$currPos, 13) === peg$c14) {
	            s2 = peg$c14;
	            peg$currPos += 13;
	          } else {
	            s2 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c15); }
	          }
	          if (s2 !== peg$FAILED) {
	            s3 = peg$parse_();
	            if (s3 !== peg$FAILED) {
	              if (input.charCodeAt(peg$currPos) === 44) {
	                s4 = peg$c6;
	                peg$currPos++;
	              } else {
	                s4 = peg$FAILED;
	                if (peg$silentFails === 0) { peg$fail(peg$c7); }
	              }
	              if (s4 !== peg$FAILED) {
	                s5 = peg$parse_();
	                if (s5 !== peg$FAILED) {
	                  s6 = peg$parsepluralFormatPattern();
	                  if (s6 !== peg$FAILED) {
	                    s7 = peg$parse_();
	                    if (s7 !== peg$FAILED) {
	                      peg$reportedPos = s0;
	                      s1 = peg$c13(s2, s6);
	                      s0 = s1;
	                    } else {
	                      peg$currPos = s0;
	                      s0 = peg$c2;
	                    }
	                  } else {
	                    peg$currPos = s0;
	                    s0 = peg$c2;
	                  }
	                } else {
	                  peg$currPos = s0;
	                  s0 = peg$c2;
	                }
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$c2;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	        if (s0 === peg$FAILED) {
	          s0 = peg$currPos;
	          s1 = peg$parse_();
	          if (s1 !== peg$FAILED) {
	            if (input.substr(peg$currPos, 6) === peg$c16) {
	              s2 = peg$c16;
	              peg$currPos += 6;
	            } else {
	              s2 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c17); }
	            }
	            if (s2 !== peg$FAILED) {
	              s3 = peg$parse_();
	              if (s3 !== peg$FAILED) {
	                if (input.charCodeAt(peg$currPos) === 44) {
	                  s4 = peg$c6;
	                  peg$currPos++;
	                } else {
	                  s4 = peg$FAILED;
	                  if (peg$silentFails === 0) { peg$fail(peg$c7); }
	                }
	                if (s4 !== peg$FAILED) {
	                  s5 = peg$parse_();
	                  if (s5 !== peg$FAILED) {
	                    s6 = peg$parseselectFormatPattern();
	                    if (s6 !== peg$FAILED) {
	                      s7 = peg$parse_();
	                      if (s7 !== peg$FAILED) {
	                        peg$reportedPos = s0;
	                        s1 = peg$c13(s2, s6);
	                        s0 = s1;
	                      } else {
	                        peg$currPos = s0;
	                        s0 = peg$c2;
	                      }
	                    } else {
	                      peg$currPos = s0;
	                      s0 = peg$c2;
	                    }
	                  } else {
	                    peg$currPos = s0;
	                    s0 = peg$c2;
	                  }
	                } else {
	                  peg$currPos = s0;
	                  s0 = peg$c2;
	                }
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$c2;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	          if (s0 === peg$FAILED) {
	            s0 = peg$currPos;
	            s1 = peg$parse_();
	            if (s1 !== peg$FAILED) {
	              s2 = peg$parseid();
	              if (s2 !== peg$FAILED) {
	                s3 = [];
	                s4 = peg$parseargStylePattern();
	                while (s4 !== peg$FAILED) {
	                  s3.push(s4);
	                  s4 = peg$parseargStylePattern();
	                }
	                if (s3 !== peg$FAILED) {
	                  peg$reportedPos = s0;
	                  s1 = peg$c18(s2, s3);
	                  s0 = s1;
	                } else {
	                  peg$currPos = s0;
	                  s0 = peg$c2;
	                }
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$c2;
	            }
	          }
	        }
	      }

	      return s0;
	    }

	    function peg$parsepluralFormatPattern() {
	      var s0, s1, s2, s3;

	      s0 = peg$currPos;
	      s1 = peg$parseoffsetPattern();
	      if (s1 === peg$FAILED) {
	        s1 = peg$c5;
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = [];
	        s3 = peg$parsepluralForm();
	        if (s3 !== peg$FAILED) {
	          while (s3 !== peg$FAILED) {
	            s2.push(s3);
	            s3 = peg$parsepluralForm();
	          }
	        } else {
	          s2 = peg$c2;
	        }
	        if (s2 !== peg$FAILED) {
	          peg$reportedPos = s0;
	          s1 = peg$c19(s1, s2);
	          s0 = s1;
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }

	      return s0;
	    }

	    function peg$parseoffsetPattern() {
	      var s0, s1, s2, s3, s4, s5, s6, s7;

	      s0 = peg$currPos;
	      s1 = peg$parse_();
	      if (s1 !== peg$FAILED) {
	        if (input.substr(peg$currPos, 6) === peg$c20) {
	          s2 = peg$c20;
	          peg$currPos += 6;
	        } else {
	          s2 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c21); }
	        }
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parse_();
	          if (s3 !== peg$FAILED) {
	            if (input.charCodeAt(peg$currPos) === 58) {
	              s4 = peg$c22;
	              peg$currPos++;
	            } else {
	              s4 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c23); }
	            }
	            if (s4 !== peg$FAILED) {
	              s5 = peg$parse_();
	              if (s5 !== peg$FAILED) {
	                s6 = peg$parsedigits();
	                if (s6 !== peg$FAILED) {
	                  s7 = peg$parse_();
	                  if (s7 !== peg$FAILED) {
	                    peg$reportedPos = s0;
	                    s1 = peg$c24(s6);
	                    s0 = s1;
	                  } else {
	                    peg$currPos = s0;
	                    s0 = peg$c2;
	                  }
	                } else {
	                  peg$currPos = s0;
	                  s0 = peg$c2;
	                }
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$c2;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }

	      return s0;
	    }

	    function peg$parsepluralForm() {
	      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

	      s0 = peg$currPos;
	      s1 = peg$parse_();
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parsepluralKey();
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parse_();
	          if (s3 !== peg$FAILED) {
	            if (input.charCodeAt(peg$currPos) === 123) {
	              s4 = peg$c3;
	              peg$currPos++;
	            } else {
	              s4 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c4); }
	            }
	            if (s4 !== peg$FAILED) {
	              s5 = peg$parse_();
	              if (s5 !== peg$FAILED) {
	                s6 = peg$parsemessageFormatPattern();
	                if (s6 !== peg$FAILED) {
	                  s7 = peg$parse_();
	                  if (s7 !== peg$FAILED) {
	                    if (input.charCodeAt(peg$currPos) === 125) {
	                      s8 = peg$c8;
	                      peg$currPos++;
	                    } else {
	                      s8 = peg$FAILED;
	                      if (peg$silentFails === 0) { peg$fail(peg$c9); }
	                    }
	                    if (s8 !== peg$FAILED) {
	                      peg$reportedPos = s0;
	                      s1 = peg$c25(s2, s6);
	                      s0 = s1;
	                    } else {
	                      peg$currPos = s0;
	                      s0 = peg$c2;
	                    }
	                  } else {
	                    peg$currPos = s0;
	                    s0 = peg$c2;
	                  }
	                } else {
	                  peg$currPos = s0;
	                  s0 = peg$c2;
	                }
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$c2;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }

	      return s0;
	    }

	    function peg$parsepluralKey() {
	      var s0, s1, s2;

	      s0 = peg$currPos;
	      s1 = peg$parseid();
	      if (s1 !== peg$FAILED) {
	        peg$reportedPos = s0;
	        s1 = peg$c26(s1);
	      }
	      s0 = s1;
	      if (s0 === peg$FAILED) {
	        s0 = peg$currPos;
	        if (input.charCodeAt(peg$currPos) === 61) {
	          s1 = peg$c27;
	          peg$currPos++;
	        } else {
	          s1 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c28); }
	        }
	        if (s1 !== peg$FAILED) {
	          s2 = peg$parsedigits();
	          if (s2 !== peg$FAILED) {
	            peg$reportedPos = s0;
	            s1 = peg$c24(s2);
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      }

	      return s0;
	    }

	    function peg$parseselectFormatPattern() {
	      var s0, s1, s2;

	      s0 = peg$currPos;
	      s1 = [];
	      s2 = peg$parseselectForm();
	      if (s2 !== peg$FAILED) {
	        while (s2 !== peg$FAILED) {
	          s1.push(s2);
	          s2 = peg$parseselectForm();
	        }
	      } else {
	        s1 = peg$c2;
	      }
	      if (s1 !== peg$FAILED) {
	        peg$reportedPos = s0;
	        s1 = peg$c29(s1);
	      }
	      s0 = s1;

	      return s0;
	    }

	    function peg$parseselectForm() {
	      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

	      s0 = peg$currPos;
	      s1 = peg$parse_();
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parseid();
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parse_();
	          if (s3 !== peg$FAILED) {
	            if (input.charCodeAt(peg$currPos) === 123) {
	              s4 = peg$c3;
	              peg$currPos++;
	            } else {
	              s4 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c4); }
	            }
	            if (s4 !== peg$FAILED) {
	              s5 = peg$parse_();
	              if (s5 !== peg$FAILED) {
	                s6 = peg$parsemessageFormatPattern();
	                if (s6 !== peg$FAILED) {
	                  s7 = peg$parse_();
	                  if (s7 !== peg$FAILED) {
	                    if (input.charCodeAt(peg$currPos) === 125) {
	                      s8 = peg$c8;
	                      peg$currPos++;
	                    } else {
	                      s8 = peg$FAILED;
	                      if (peg$silentFails === 0) { peg$fail(peg$c9); }
	                    }
	                    if (s8 !== peg$FAILED) {
	                      peg$reportedPos = s0;
	                      s1 = peg$c25(s2, s6);
	                      s0 = s1;
	                    } else {
	                      peg$currPos = s0;
	                      s0 = peg$c2;
	                    }
	                  } else {
	                    peg$currPos = s0;
	                    s0 = peg$c2;
	                  }
	                } else {
	                  peg$currPos = s0;
	                  s0 = peg$c2;
	                }
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$c2;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }

	      return s0;
	    }

	    function peg$parseargStylePattern() {
	      var s0, s1, s2, s3, s4, s5;

	      s0 = peg$currPos;
	      s1 = peg$parse_();
	      if (s1 !== peg$FAILED) {
	        if (input.charCodeAt(peg$currPos) === 44) {
	          s2 = peg$c6;
	          peg$currPos++;
	        } else {
	          s2 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c7); }
	        }
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parse_();
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parseid();
	            if (s4 !== peg$FAILED) {
	              s5 = peg$parse_();
	              if (s5 !== peg$FAILED) {
	                peg$reportedPos = s0;
	                s1 = peg$c30(s4);
	                s0 = s1;
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$c2;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }

	      return s0;
	    }

	    function peg$parseoctothorpe() {
	      var s0, s1;

	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 35) {
	        s1 = peg$c31;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c32); }
	      }
	      if (s1 !== peg$FAILED) {
	        peg$reportedPos = s0;
	        s1 = peg$c33();
	      }
	      s0 = s1;

	      return s0;
	    }

	    function peg$parsestring() {
	      var s0, s1, s2;

	      s0 = peg$currPos;
	      s1 = [];
	      s2 = peg$parsechars();
	      if (s2 === peg$FAILED) {
	        s2 = peg$parsewhitespace();
	      }
	      if (s2 !== peg$FAILED) {
	        while (s2 !== peg$FAILED) {
	          s1.push(s2);
	          s2 = peg$parsechars();
	          if (s2 === peg$FAILED) {
	            s2 = peg$parsewhitespace();
	          }
	        }
	      } else {
	        s1 = peg$c2;
	      }
	      if (s1 !== peg$FAILED) {
	        peg$reportedPos = s0;
	        s1 = peg$c34(s1);
	      }
	      s0 = s1;

	      return s0;
	    }

	    function peg$parseid() {
	      var s0, s1, s2, s3, s4, s5, s6;

	      peg$silentFails++;
	      s0 = peg$currPos;
	      s1 = peg$parse_();
	      if (s1 !== peg$FAILED) {
	        s2 = peg$currPos;
	        s3 = peg$currPos;
	        if (peg$c36.test(input.charAt(peg$currPos))) {
	          s4 = input.charAt(peg$currPos);
	          peg$currPos++;
	        } else {
	          s4 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c37); }
	        }
	        if (s4 !== peg$FAILED) {
	          s5 = [];
	          if (peg$c38.test(input.charAt(peg$currPos))) {
	            s6 = input.charAt(peg$currPos);
	            peg$currPos++;
	          } else {
	            s6 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c39); }
	          }
	          while (s6 !== peg$FAILED) {
	            s5.push(s6);
	            if (peg$c38.test(input.charAt(peg$currPos))) {
	              s6 = input.charAt(peg$currPos);
	              peg$currPos++;
	            } else {
	              s6 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c39); }
	            }
	          }
	          if (s5 !== peg$FAILED) {
	            s4 = [s4, s5];
	            s3 = s4;
	          } else {
	            peg$currPos = s3;
	            s3 = peg$c2;
	          }
	        } else {
	          peg$currPos = s3;
	          s3 = peg$c2;
	        }
	        if (s3 !== peg$FAILED) {
	          s3 = input.substring(s2, peg$currPos);
	        }
	        s2 = s3;
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parse_();
	          if (s3 !== peg$FAILED) {
	            peg$reportedPos = s0;
	            s1 = peg$c40(s2);
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }
	      peg$silentFails--;
	      if (s0 === peg$FAILED) {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c35); }
	      }

	      return s0;
	    }

	    function peg$parsechars() {
	      var s0, s1, s2;

	      s0 = peg$currPos;
	      s1 = [];
	      s2 = peg$parsechar();
	      if (s2 !== peg$FAILED) {
	        while (s2 !== peg$FAILED) {
	          s1.push(s2);
	          s2 = peg$parsechar();
	        }
	      } else {
	        s1 = peg$c2;
	      }
	      if (s1 !== peg$FAILED) {
	        peg$reportedPos = s0;
	        s1 = peg$c41(s1);
	      }
	      s0 = s1;

	      return s0;
	    }

	    function peg$parsechar() {
	      var s0, s1, s2, s3, s4, s5;

	      s0 = peg$currPos;
	      if (peg$c42.test(input.charAt(peg$currPos))) {
	        s1 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c43); }
	      }
	      if (s1 !== peg$FAILED) {
	        peg$reportedPos = s0;
	        s1 = peg$c44(s1);
	      }
	      s0 = s1;
	      if (s0 === peg$FAILED) {
	        s0 = peg$currPos;
	        if (input.substr(peg$currPos, 2) === peg$c45) {
	          s1 = peg$c45;
	          peg$currPos += 2;
	        } else {
	          s1 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c46); }
	        }
	        if (s1 !== peg$FAILED) {
	          peg$reportedPos = s0;
	          s1 = peg$c47();
	        }
	        s0 = s1;
	        if (s0 === peg$FAILED) {
	          s0 = peg$currPos;
	          if (input.substr(peg$currPos, 2) === peg$c48) {
	            s1 = peg$c48;
	            peg$currPos += 2;
	          } else {
	            s1 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c49); }
	          }
	          if (s1 !== peg$FAILED) {
	            peg$reportedPos = s0;
	            s1 = peg$c50();
	          }
	          s0 = s1;
	          if (s0 === peg$FAILED) {
	            s0 = peg$currPos;
	            if (input.substr(peg$currPos, 2) === peg$c51) {
	              s1 = peg$c51;
	              peg$currPos += 2;
	            } else {
	              s1 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c52); }
	            }
	            if (s1 !== peg$FAILED) {
	              peg$reportedPos = s0;
	              s1 = peg$c53();
	            }
	            s0 = s1;
	            if (s0 === peg$FAILED) {
	              s0 = peg$currPos;
	              if (input.substr(peg$currPos, 2) === peg$c54) {
	                s1 = peg$c54;
	                peg$currPos += 2;
	              } else {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) { peg$fail(peg$c55); }
	              }
	              if (s1 !== peg$FAILED) {
	                peg$reportedPos = s0;
	                s1 = peg$c56();
	              }
	              s0 = s1;
	              if (s0 === peg$FAILED) {
	                s0 = peg$currPos;
	                if (input.substr(peg$currPos, 2) === peg$c57) {
	                  s1 = peg$c57;
	                  peg$currPos += 2;
	                } else {
	                  s1 = peg$FAILED;
	                  if (peg$silentFails === 0) { peg$fail(peg$c58); }
	                }
	                if (s1 !== peg$FAILED) {
	                  s2 = peg$parsehexDigit();
	                  if (s2 !== peg$FAILED) {
	                    s3 = peg$parsehexDigit();
	                    if (s3 !== peg$FAILED) {
	                      s4 = peg$parsehexDigit();
	                      if (s4 !== peg$FAILED) {
	                        s5 = peg$parsehexDigit();
	                        if (s5 !== peg$FAILED) {
	                          peg$reportedPos = s0;
	                          s1 = peg$c59(s2, s3, s4, s5);
	                          s0 = s1;
	                        } else {
	                          peg$currPos = s0;
	                          s0 = peg$c2;
	                        }
	                      } else {
	                        peg$currPos = s0;
	                        s0 = peg$c2;
	                      }
	                    } else {
	                      peg$currPos = s0;
	                      s0 = peg$c2;
	                    }
	                  } else {
	                    peg$currPos = s0;
	                    s0 = peg$c2;
	                  }
	                } else {
	                  peg$currPos = s0;
	                  s0 = peg$c2;
	                }
	              }
	            }
	          }
	        }
	      }

	      return s0;
	    }

	    function peg$parsedigits() {
	      var s0, s1, s2;

	      s0 = peg$currPos;
	      s1 = [];
	      if (peg$c60.test(input.charAt(peg$currPos))) {
	        s2 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s2 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c61); }
	      }
	      if (s2 !== peg$FAILED) {
	        while (s2 !== peg$FAILED) {
	          s1.push(s2);
	          if (peg$c60.test(input.charAt(peg$currPos))) {
	            s2 = input.charAt(peg$currPos);
	            peg$currPos++;
	          } else {
	            s2 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c61); }
	          }
	        }
	      } else {
	        s1 = peg$c2;
	      }
	      if (s1 !== peg$FAILED) {
	        peg$reportedPos = s0;
	        s1 = peg$c62(s1);
	      }
	      s0 = s1;

	      return s0;
	    }

	    function peg$parsehexDigit() {
	      var s0;

	      if (peg$c63.test(input.charAt(peg$currPos))) {
	        s0 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c64); }
	      }

	      return s0;
	    }

	    function peg$parse_() {
	      var s0, s1, s2;

	      peg$silentFails++;
	      s0 = peg$currPos;
	      s1 = [];
	      s2 = peg$parsewhitespace();
	      while (s2 !== peg$FAILED) {
	        s1.push(s2);
	        s2 = peg$parsewhitespace();
	      }
	      if (s1 !== peg$FAILED) {
	        peg$reportedPos = s0;
	        s1 = peg$c66(s1);
	      }
	      s0 = s1;
	      peg$silentFails--;
	      if (s0 === peg$FAILED) {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c65); }
	      }

	      return s0;
	    }

	    function peg$parsewhitespace() {
	      var s0;

	      if (peg$c67.test(input.charAt(peg$currPos))) {
	        s0 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c68); }
	      }

	      return s0;
	    }

	    peg$result = peg$startRuleFunction();

	    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
	      return peg$result;
	    } else {
	      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
	        peg$fail({ type: "end", description: "end of input" });
	      }

	      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
	    }
	  }

	  return {
	    SyntaxError: SyntaxError,
	    parse:       parse
	  };
	}()).parse;


	/** @file messageformat.js - ICU PluralFormat + SelectFormat for JavaScript
	 *  @author Alex Sexton - @SlexAxton
	 *  @version 0.3.0-1
	 *  @copyright 2012-2015 Alex Sexton, Eemeli Aro, and Contributors
	 *  @license To use or fork, MIT. To contribute back, Dojo CLA  */


	/** Utility function for quoting an Object's key value iff required
	 *  @private  */
	function propname(key, obj) {
	  if (/^[A-Z_$][0-9A-Z_$]*$/i.test(key)) {
	    return obj ? obj + '.' + key : key;
	  } else {
	    var jkey = JSON.stringify(key);
	    return obj ? obj + '[' + jkey + ']' : jkey;
	  }
	};


	/** Create a new message formatter
	 *
	 *  @class
	 *  @global
	 *  @param {string|string[]} [locale="en"] - The locale to use, with fallbacks
	 *  @param {function} [pluralFunc] - Optional custom pluralization function
	 *  @param {function[]} [formatters] - Optional custom formatting functions  */
	function MessageFormat(locale, pluralFunc, formatters) {
	  this.lc = [locale];  
	  this.runtime.pluralFuncs = {};
	  this.runtime.pluralFuncs[this.lc[0]] = pluralFunc;
	  this.runtime.fmt = {};
	  if (formatters) for (var f in formatters) {
	    this.runtime.fmt[f] = formatters[f];
	  }
	}




	/** Parse an input string to its AST
	 *
	 *  Precompiled from `lib/messageformat-parser.pegjs` by
	 *  {@link http://pegjs.org/ PEG.js}. Included in MessageFormat object
	 *  to enable testing.
	 *
	 *  @private  */



	/** Pluralization functions from
	 *  {@link http://github.com/eemeli/make-plural.js make-plural}
	 *
	 *  @memberof MessageFormat
	 *  @type Object.<string,function>  */
	MessageFormat.plurals = {};


	/** Default number formatting functions in the style of ICU's
	 *  {@link http://icu-project.org/apiref/icu4j/com/ibm/icu/text/MessageFormat.html simpleArg syntax}
	 *  implemented using the
	 *  {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl Intl}
	 *  object defined by ECMA-402.
	 *
	 *  **Note**: Intl is not defined in default Node until 0.11.15 / 0.12.0, so
	 *  earlier versions require a {@link https://www.npmjs.com/package/intl polyfill}.
	 *  Therefore {@link MessageFormat.withIntlSupport} needs to be true for these
	 *  functions to be available for inclusion in the output.
	 *
	 *  @see MessageFormat#setIntlSupport
	 *
	 *  @namespace
	 *  @memberof MessageFormat
	 *  @property {function} number - Represent a number as an integer, percent or currency value
	 *  @property {function} date - Represent a date as a full/long/default/short string
	 *  @property {function} time - Represent a time as a full/long/default/short string
	 *
	 *  @example
	 *  > var MessageFormat = require('messageformat');
	 *  > var mf = (new MessageFormat('en')).setIntlSupport(true);
	 *  > mf.currency = 'EUR';
	 *  > var mfunc = mf.compile("The total is {V,number,currency}.");
	 *  > mfunc({V:5.5})
	 *  "The total is €5.50."
	 *
	 *  @example
	 *  > var MessageFormat = require('messageformat');
	 *  > var mf = new MessageFormat('en', null, {number: MessageFormat.number});
	 *  > mf.currency = 'EUR';
	 *  > var mfunc = mf.compile("The total is {V,number,currency}.");
	 *  > mfunc({V:5.5})
	 *  "The total is €5.50."  */
	MessageFormat.formatters = {};

	/** Enable or disable support for the default formatters, which require the
	 *  `Intl` object. Note that this can't be autodetected, as the environment
	 *  in which the formatted text is compiled into Javascript functions is not
	 *  necessarily the same environment in which they will get executed.
	 *
	 *  @see MessageFormat.formatters
	 *
	 *  @memberof MessageFormat
	 *  @param {boolean} [enable=true]
	 *  @returns {Object} The MessageFormat instance, to allow for chaining
	 *  @example
	 *  > var Intl = require('intl');
	 *  > var MessageFormat = require('messageformat');
	 *  > var mf = (new MessageFormat('en')).setIntlSupport(true);
	 *  > mf.currency = 'EUR';
	 *  > mf.compile("The total is {V,number,currency}.")({V:5.5});
	 *  "The total is €5.50."  */



	/** A set of utility functions that are called by the compiled Javascript
	 *  functions, these are included locally in the output of {@link
	 *  MessageFormat#compile compile()}.
	 *
	 *  @namespace
	 *  @memberof MessageFormat  */
	MessageFormat.prototype.runtime = {

	  /** Utility function for `#` in plural rules
	   *
	   *  @param {number} value - The value to operate on
	   *  @param {number} [offset=0] - An optional offset, set by the surrounding context  */
	  number: function(value, offset) {
	    if (isNaN(value)) throw new Error("'" + value + "' isn't a number.");
	    return value - (offset || 0);
	  },

	  /** Utility function for `{N, plural|selectordinal, ...}`
	   *
	   *  @param {number} value - The key to use to find a pluralization rule
	   *  @param {number} offset - An offset to apply to `value`
	   *  @param {function} lcfunc - A locale function from `pluralFuncs`
	   *  @param {Object.<string,string>} data - The object from which results are looked up
	   *  @param {?boolean} isOrdinal - If true, use ordinal rather than cardinal rules
	   *  @returns {string} The result of the pluralization  */
	  plural: function(value, offset, lcfunc, data, isOrdinal) {
	    if ({}.hasOwnProperty.call(data, value)) return data[value]();
	    if (offset) value -= offset;
	    var key = lcfunc(value, isOrdinal);
	    if (key in data) return data[key]();
	    return data.other();
	  },

	  /** Utility function for `{N, select, ...}`
	   *
	   *  @param {number} value - The key to use to find a selection
	   *  @param {Object.<string,string>} data - The object from which results are looked up
	   *  @returns {string} The result of the select statement  */
	  select: function(value, data) {
	    if ({}.hasOwnProperty.call(data, value)) return data[value]();
	    return data.other()
	  },

	  /** Pluralization functions included in compiled output
	   *  @instance
	   *  @type Object.<string,function>  */
	  pluralFuncs: {},

	  /** Custom formatting functions called by `{var, fn[, args]*}` syntax
	   *
	   *  For examples, see {@link MessageFormat.formatters}
	   *
	   *  @instance
	   *  @see MessageFormat.formatters
	   *  @type Object.<string,function>  */
	  fmt: {},

	  /** Custom stringifier to clean up browser inconsistencies
	   *  @instance  */
	  toString: function () {
	    var _stringify = function(o, level) {
	      if (typeof o != 'object') {
	        var funcStr = o.toString().replace(/^(function )\w*/, '$1');
	        var indent = /([ \t]*)\S.*$/.exec(funcStr);
	        return indent ? funcStr.replace(new RegExp('^' + indent[1], 'mg'), '') : funcStr;
	      }
	      var s = [];
	      for (var i in o) if (i != 'toString') {
	        if (level == 0) s.push('var ' + i + ' = ' + _stringify(o[i], level + 1) + ';\n');
	        else s.push(propname(i) + ': ' + _stringify(o[i], level + 1));
	      }
	      if (level == 0) return s.join('');
	      if (s.length == 0) return '{}';
	      var indent = '  '; while (--level) indent += '  ';
	      return '{\n' + s.join(',\n').replace(/^/gm, indent) + '\n}';
	    };
	    return _stringify(this, 0);
	  }
	};


	/** Recursively map an AST to its resulting string
	 *
	 *  @memberof MessageFormat
	 *
	 *  @param ast - the Ast node for which the JS code should be generated
	 *
	 *  @private  */
	MessageFormat.prototype._precompile = function(ast, data) {
	  data = data || { keys: {}, offset: {} };
	  var r = [], i, tmp, args = [];

	  switch ( ast.type ) {
	    case 'messageFormatPattern':
	      for ( i = 0; i < ast.statements.length; ++i ) {
	        r.push(this._precompile( ast.statements[i], data ));
	      }
	      tmp = r.join(' + ') || '""';
	      return data.pf_count ? tmp : 'function(d) { return ' + tmp + '; }';

	    case 'messageFormatElement':
	      data.pf_count = data.pf_count || 0;
	      if ( ast.output ) {
	        return propname(ast.argumentIndex, 'd');
	      }
	      else {
	        data.keys[data.pf_count] = ast.argumentIndex;
	        return this._precompile( ast.elementFormat, data );
	      }
	      return '';

	    case 'elementFormat':
	      args = [ propname(data.keys[data.pf_count], 'd') ];
	      switch (ast.key) {
	        case 'select':
	          args.push(this._precompile(ast.val, data));
	          return 'select(' + args.join(', ') + ')';
	        case 'selectordinal':
	          args = args.concat([ 0, propname(this.lc[0], 'pluralFuncs'), this._precompile(ast.val, data), 1 ]);
	          return 'plural(' + args.join(', ') + ')';
	        case 'plural':
	          data.offset[data.pf_count || 0] = ast.val.offset || 0;
	          args = args.concat([ data.offset[data.pf_count] || 0, propname(this.lc[0], 'pluralFuncs'), this._precompile(ast.val, data) ]);
	          return 'plural(' + args.join(', ') + ')';
	        default:
	          if (this.withIntlSupport && !(ast.key in this.runtime.fmt) && (ast.key in MessageFormat.formatters)) {
	            tmp = MessageFormat.formatters[ast.key];
	            this.runtime.fmt[ast.key] = (typeof tmp(this) == 'function') ? tmp(this) : tmp;
	          }
	          args.push(JSON.stringify(this.lc));
	          if (ast.val && ast.val.length) args.push(JSON.stringify(ast.val.length == 1 ? ast.val[0] : ast.val));
	          return 'fmt.' + ast.key + '(' + args.join(', ') + ')';
	      }

	    case 'pluralFormatPattern':
	    case 'selectFormatPattern':
	      data.pf_count = data.pf_count || 0;
	      if (ast.type == 'selectFormatPattern') data.offset[data.pf_count] = 0;
	      var needOther = true;
	      for (i = 0; i < ast.pluralForms.length; ++i) {
	        var key = ast.pluralForms[i].key;
	        if (key === 'other') needOther = false;
	        var data_copy = JSON.parse(JSON.stringify(data));
	        data_copy.pf_count++;
	        r.push(propname(key) + ': function() { return ' + this._precompile(ast.pluralForms[i].val, data_copy) + ';}');
	      }
	      if (needOther) throw new Error("No 'other' form found in " + ast.type + " " + data.pf_count);
	      return '{ ' + r.join(', ') + ' }';

	    case 'string':
	      return JSON.stringify(ast.val || "");

	    case 'octothorpe':
	      if (!data.pf_count) return '"#"';
	      args = [ propname(data.keys[data.pf_count-1], 'd') ];
	      if (data.offset[data.pf_count-1]) args.push(data.offset[data.pf_count-1]);
	      return 'number(' + args.join(', ') + ')';

	    default:
	      throw new Error( 'Bad AST type: ' + ast.type );
	  }
	};

	/** Compile messages into an executable function with clean string
	 *  representation.
	 *
	 *  If `messages` is a single string including ICU MessageFormat declarations,
	 *  `opt` is ignored and the returned function takes a single Object parameter
	 *  `d` representing each of the input's defined variables. The returned
	 *  function will be defined in a local scope that includes all the required
	 *  runtime variables.
	 *
	 *  If `messages` is a map of keys to strings, or a map of namespace keys to
	 *  such key/string maps, the returned function will fill the specified global
	 *  with javascript functions matching the structure of the input. In such use,
	 *  the output of `compile()` is expected to be serialized using `.toString()`,
	 *  and will include definitions of the runtime functions. If `opt.global` is
	 *  null, calling the output function will return the object itself.
	 *
	 *  Together, the input parameters should match the following patterns:
	 *  ```js
	 *  messages = "string" || { key0: "string0", key1: "string1", ... } || {
	 *    ns0: { key0: "string0", key1: "string1", ...  },
	 *    ns1: { key0: "string0", key1: "string1", ...  },
	 *    ...
	 *  }
	 *
	 *  opt = null || {
	 *    locale: null || {
	 *      ns0: "lc0" || [ "lc0", ... ],
	 *      ns1: "lc1" || [ "lc1", ... ],
	 *      ...
	 *    },
	 *    global: null || "module.exports" || "exports" || "i18n" || ...
	 *  }
	 *  ```
	 *
	 *  @memberof MessageFormat
	 *  @param {string|Object}
	 *      messages - The input message(s) to be compiled, in ICU MessageFormat
	 *  @param {Object} [opt={}] - Options controlling output for non-simple intput
	 *  @param {Object} [opt.locale] - The locales to use for the messages, with a
	 *      structure matching that of `messages`
	 *  @param {string} [opt.global=""] - The global variable that the output
	 *      function should use, or a null string for none. "exports" and
	 *      "module.exports" are recognised as special cases.
	 *  @returns {function} The first match found for the given locale(s)
	 *
	 *  @example
	 * > var MessageFormat = require('messageformat'),
	 * ...   mf = new MessageFormat('en'),
	 * ...   mfunc0 = mf.compile('A {TYPE} example.');
	 * > mfunc0({TYPE:'simple'})
	 * 'A simple example.'
	 * > mfunc0.toString()
	 * 'function (d) { return "A " + d.TYPE + " example."; }'
	 *
	 *  @example
	 * > var msgSet = { a: 'A {TYPE} example.',
	 * ...              b: 'This has {COUNT, plural, one{one member} other{# members}}.' },
	 * ...   mfuncSet = mf.compile(msgSet);
	 * > mfuncSet().a({TYPE:'more complex'})
	 * 'A more complex example.'
	 * > mfuncSet().b({COUNT:2})
	 * 'This has 2 members.'
	 *
	 * > console.log(mfuncSet.toString())
	 * function anonymous() {
	 * var number = function (value, offset) {
	 *   if (isNaN(value)) throw new Error("'" + value + "' isn't a number.");
	 *   return value - (offset || 0);
	 * };
	 * var plural = function (value, offset, lcfunc, data, isOrdinal) {
	 *   if ({}.hasOwnProperty.call(data, value)) return data[value]();
	 *   if (offset) value -= offset;
	 *   var key = lcfunc(value, isOrdinal);
	 *   if (key in data) return data[key]();
	 *   return data.other();
	 * };
	 * var select = function (value, data) {
	 *   if ({}.hasOwnProperty.call(data, value)) return data[value]();
	 *   return data.other()
	 * };
	 * var pluralFuncs = {
	 *   en: function (n, ord) {
	 *     var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n,
	 *         n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
	 *     if (ord) return (n10 == 1 && n100 != 11) ? 'one'
	 *         : (n10 == 2 && n100 != 12) ? 'two'
	 *         : (n10 == 3 && n100 != 13) ? 'few'
	 *         : 'other';
	 *     return (n == 1 && v0) ? 'one' : 'other';
	 *   }
	 * };
	 * var fmt = {};
	 *
	 * return {
	 *   a: function(d) { return "A " + d.TYPE + " example."; },
	 *   b: function(d) { return "This has " + plural(d.COUNT, 0, pluralFuncs.en, { one: function() { return "one member";}, other: function() { return number(d.COUNT)+" members";} }) + "."; }
	 * }
	 * }
	 *
	 *  @example
	 * > mf.runtime.pluralFuncs.fi = MessageFormat.plurals.fi;
	 * > var multiSet = { en: { a: 'A {TYPE} example.',
	 * ...                      b: 'This is the {COUNT, selectordinal, one{#st} two{#nd} few{#rd} other{#th}} example.' },
	 * ...                fi: { a: '{TYPE} esimerkki.',
	 * ...                      b: 'Tämä on {COUNT, selectordinal, other{#.}} esimerkki.' } },
	 * ...   multiSetLocales = { en: 'en', fi: 'fi' },
	 * ...   mfuncSet = mf.compile(multiSet, { locale: multiSetLocales, global: 'i18n' });
	 * > mfuncSet(this);
	 * > i18n.en.b({COUNT:3})
	 * 'This is the 3rd example.'
	 * > i18n.fi.b({COUNT:3})
	 * 'Tämä on 3. esimerkki.'  */
	MessageFormat.prototype.compile = function ( messages, opt ) {
	  var r = {}, lc0 = this.lc,
	      compileMsg = function(self, msg) {
	        try {
	          var ast = MessageFormat._parse(msg);
	          return self._precompile(ast);
	        } catch (e) {
	          throw new Error((ast ? 'Precompiler' : 'Parser') + ' error: ' + e.toString());
	        }
	      },
	      stringify = function(r, level) {
	        if (!level) level = 0;
	        if (typeof r != 'object') return r;
	        var o = [], indent = '';
	        for (var i = 0; i < level; ++i) indent += '  ';
	        for (var k in r) o.push('\n' + indent + '  ' + propname(k) + ': ' + stringify(r[k], level + 1));
	        return '{' + o.join(',') + '\n' + indent + '}';
	      };

	  if (typeof messages == 'string') {
	    var f = new Function(
	        'number, plural, select, pluralFuncs, fmt',
	        'return ' + compileMsg(this, messages));
	    return f(this.runtime.number, this.runtime.plural, this.runtime.select,
	        this.runtime.pluralFuncs, this.runtime.fmt);
	  }

	  opt = opt || {};

	  for (var ns in messages) {
	    if (opt.locale) this.lc = opt.locale[ns] && [].concat(opt.locale[ns]) || lc0;
	    if (typeof messages[ns] == 'string') {
	      try { r[ns] = compileMsg(this, messages[ns]); }
	      catch (e) { e.message = e.message.replace(':', ' with `' + ns + '`:'); throw e; }
	    } else {
	      r[ns] = {};
	      for (var key in messages[ns]) {
	        try { r[ns][key] = compileMsg(this, messages[ns][key]); }
	        catch (e) { e.message = e.message.replace(':', ' with `' + key + '` in `' + ns + '`:'); throw e; }
	      }
	    }
	  }

	  this.lc = lc0;
	  var s = this.runtime.toString() + '\n';
	  switch (opt.global || '') {
	    case 'exports':
	      var o = [];
	      for (var k in r) o.push(propname(k, 'exports') + ' = ' + stringify(r[k]));
	      return new Function(s + o.join(';\n'));
	    case 'module.exports':
	      return new Function(s + 'module.exports = ' + stringify(r));
	    case '':
	      return new Function(s + 'return ' + stringify(r));
	    default:
	      return new Function('G', s + propname(opt.global, 'G') + ' = ' + stringify(r));
	  }
	};


	return MessageFormat;
	}());
	/* jshint ignore:end */


	var createErrorPluralModulePresence = function() {
		return createError( "E_MISSING_PLURAL_MODULE", "Plural module not loaded." );
	};




	var validateMessageBundle = function( cldr ) {
		validate(
			"E_MISSING_MESSAGE_BUNDLE",
			"Missing message bundle for locale `{locale}`.",
			cldr.attributes.bundle && cldr.get( "globalize-messages/{bundle}" ) !== undefined,
			{
				locale: cldr.locale
			}
		);
	};




	var validateMessagePresence = function( path, value ) {
		path = path.join( "/" );
		validate( "E_MISSING_MESSAGE", "Missing required message content `{path}`.",
			value !== undefined, { path: path } );
	};




	var validateMessageType = function( path, value ) {
		path = path.join( "/" );
		validate(
			"E_INVALID_MESSAGE",
			"Invalid message content `{path}`. {expected} expected.",
			typeof value === "string",
			{
				expected: "a string",
				path: path
			}
		);
	};




	var validateParameterTypeMessageVariables = function( value, name ) {
		validateParameterType(
			value,
			name,
			value === undefined || isPlainObject( value ) || Array.isArray( value ),
			"Array or Plain Object"
		);
	};




	var messageFormatterFn = function( formatter ) {
		return function messageFormatter( variables ) {
			if ( typeof variables === "number" || typeof variables === "string" ) {
				variables = [].slice.call( arguments, 0 );
			}
			validateParameterTypeMessageVariables( variables, "variables" );
			return formatter( variables );
		};
	};




	var messageFormatterRuntimeBind = function( cldr, messageformatter ) {
		var locale = cldr.locale,
			origToString = messageformatter.toString;

		messageformatter.toString = function() {
			var argNames, argValues, output,
				args = {};

			// Properly adjust SlexAxton/messageformat.js compiled variables with Globalize variables:
			output = origToString.call( messageformatter );

			if ( /number\(/.test( output ) ) {
				args.number = "messageFormat.number";
			}

			if ( /plural\(/.test( output ) ) {
				args.plural = "messageFormat.plural";
			}

			if ( /select\(/.test( output ) ) {
				args.select = "messageFormat.select";
			}

			output.replace( /pluralFuncs(\[([^\]]+)\]|\.([a-zA-Z]+))/, function( match ) {
				args.pluralFuncs = "{" +
					"\"" + locale + "\": Globalize(\"" + locale + "\").pluralGenerator()" +
					"}";
				return match;
			});

			argNames = Object.keys( args ).join( ", " );
			argValues = Object.keys( args ).map(function( key ) {
				return args[ key ];
			}).join( ", " );

			return "(function( " + argNames + " ) {\n" +
				"  return " + output + "\n" +
				"})(" + argValues + ")";
		};

		return messageformatter;
	};




	var slice = [].slice;

	/**
	 * .loadMessages( json )
	 *
	 * @json [JSON]
	 *
	 * Load translation data.
	 */
	Globalize.loadMessages = function( json ) {
		var locale,
			customData = {
				"globalize-messages": json,
				"main": {}
			};

		validateParameterPresence( json, "json" );
		validateParameterTypePlainObject( json, "json" );

		// Set available bundles by populating customData main dataset.
		for ( locale in json ) {
			if ( json.hasOwnProperty( locale ) ) {
				customData.main[ locale ] = {};
			}
		}

		Cldr.load( customData );
	};

	/**
	 * .messageFormatter( path )
	 *
	 * @path [String or Array]
	 *
	 * Format a message given its path.
	 */
	Globalize.messageFormatter =
	Globalize.prototype.messageFormatter = function( path ) {
		var cldr, formatter, message, pluralGenerator, returnFn,
			args = slice.call( arguments, 0 );

		validateParameterPresence( path, "path" );
		validateParameterType( path, "path", typeof path === "string" || Array.isArray( path ),
			"a String nor an Array" );

		path = alwaysArray( path );
		cldr = this.cldr;

		validateDefaultLocale( cldr );
		validateMessageBundle( cldr );

		message = cldr.get( [ "globalize-messages/{bundle}" ].concat( path ) );
		validateMessagePresence( path, message );

		// If message is an Array, concatenate it.
		if ( Array.isArray( message ) ) {
			message = message.join( " " );
		}
		validateMessageType( path, message );

		// Is plural module present? Yes, use its generator. Nope, use an error generator.
		pluralGenerator = this.plural !== undefined ?
			this.pluralGenerator() :
			createErrorPluralModulePresence;

		formatter = new MessageFormat( cldr.locale, pluralGenerator ).compile( message );

		returnFn = messageFormatterFn( formatter );

		runtimeBind( args, cldr, returnFn,
			[ messageFormatterRuntimeBind( cldr, formatter ), pluralGenerator ] );

		return returnFn;
	};

	/**
	 * .formatMessage( path [, variables] )
	 *
	 * @path [String or Array]
	 *
	 * @variables [Number, String, Array or Object]
	 *
	 * Format a message given its path.
	 */
	Globalize.formatMessage =
	Globalize.prototype.formatMessage = function( path /* , variables */ ) {
		return this.messageFormatter( path ).apply( {}, slice.call( arguments, 1 ) );
	};

	return Globalize;




	}));


/***/ },

/***/ 388:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Globalize v1.2.1
	 *
	 * http://github.com/jquery/globalize
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-12-14T18:34Z
	 */
	/*!
	 * Globalize v1.2.1 2016-12-14T18:34Z Released under the MIT license
	 * http://git.io/TrdQbw
	 */
	(function( root, factory ) {

		// UMD returnExports
		if ( true ) {

			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				!(function webpackMissingModule() { var e = new Error("Cannot find module \"cldr\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
				__webpack_require__(386),
				!(function webpackMissingModule() { var e = new Error("Cannot find module \"cldr/event\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
				!(function webpackMissingModule() { var e = new Error("Cannot find module \"cldr/supplemental\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if ( typeof exports === "object" ) {

			// Node, CommonJS
			module.exports = factory( require( "cldrjs" ), require( "../globalize" ) );
		} else {

			// Global
			factory( root.Cldr, root.Globalize );
		}
	}(this, function( Cldr, Globalize ) {

	var createError = Globalize._createError,
		regexpEscape = Globalize._regexpEscape,
		runtimeBind = Globalize._runtimeBind,
		stringPad = Globalize._stringPad,
		validateCldr = Globalize._validateCldr,
		validateDefaultLocale = Globalize._validateDefaultLocale,
		validateParameterPresence = Globalize._validateParameterPresence,
		validateParameterRange = Globalize._validateParameterRange,
		validateParameterType = Globalize._validateParameterType,
		validateParameterTypePlainObject = Globalize._validateParameterTypePlainObject;


	var createErrorUnsupportedFeature = function( feature ) {
		return createError( "E_UNSUPPORTED", "Unsupported {feature}.", {
			feature: feature
		});
	};




	var validateParameterTypeNumber = function( value, name ) {
		validateParameterType(
			value,
			name,
			value === undefined || typeof value === "number",
			"Number"
		);
	};




	var validateParameterTypeString = function( value, name ) {
		validateParameterType(
			value,
			name,
			value === undefined || typeof value === "string",
			"a string"
		);
	};




	/**
	 * goupingSeparator( number, primaryGroupingSize, secondaryGroupingSize )
	 *
	 * @number [Number].
	 *
	 * @primaryGroupingSize [Number]
	 *
	 * @secondaryGroupingSize [Number]
	 *
	 * Return the formatted number with group separator.
	 */
	var numberFormatGroupingSeparator = function( number, primaryGroupingSize, secondaryGroupingSize ) {
		var index,
			currentGroupingSize = primaryGroupingSize,
			ret = "",
			sep = ",",
			switchToSecondary = secondaryGroupingSize ? true : false;

		number = String( number ).split( "." );
		index = number[ 0 ].length;

		while ( index > currentGroupingSize ) {
			ret = number[ 0 ].slice( index - currentGroupingSize, index ) +
				( ret.length ? sep : "" ) + ret;
			index -= currentGroupingSize;
			if ( switchToSecondary ) {
				currentGroupingSize = secondaryGroupingSize;
				switchToSecondary = false;
			}
		}

		number[ 0 ] = number[ 0 ].slice( 0, index ) + ( ret.length ? sep : "" ) + ret;
		return number.join( "." );
	};




	/**
	 * integerFractionDigits( number, minimumIntegerDigits, minimumFractionDigits,
	 * maximumFractionDigits, round, roundIncrement )
	 *
	 * @number [Number]
	 *
	 * @minimumIntegerDigits [Number]
	 *
	 * @minimumFractionDigits [Number]
	 *
	 * @maximumFractionDigits [Number]
	 *
	 * @round [Function]
	 *
	 * @roundIncrement [Function]
	 *
	 * Return the formatted integer and fraction digits.
	 */
	var numberFormatIntegerFractionDigits = function( number, minimumIntegerDigits, minimumFractionDigits, maximumFractionDigits, round,
		roundIncrement ) {

		// Fraction
		if ( maximumFractionDigits ) {

			// Rounding
			if ( roundIncrement ) {
				number = round( number, roundIncrement );

			// Maximum fraction digits
			} else {
				number = round( number, { exponent: -maximumFractionDigits } );
			}

			// Minimum fraction digits
			if ( minimumFractionDigits ) {
				number = String( number ).split( "." );
				number[ 1 ] = stringPad( number[ 1 ] || "", minimumFractionDigits, true );
				number = number.join( "." );
			}
		} else {
			number = round( number );
		}

		number = String( number );

		// Minimum integer digits
		if ( minimumIntegerDigits ) {
			number = number.split( "." );
			number[ 0 ] = stringPad( number[ 0 ], minimumIntegerDigits );
			number = number.join( "." );
		}

		return number;
	};




	/**
	 * toPrecision( number, precision, round )
	 *
	 * @number (Number)
	 *
	 * @precision (Number) significant figures precision (not decimal precision).
	 *
	 * @round (Function)
	 *
	 * Return number.toPrecision( precision ) using the given round function.
	 */
	var numberToPrecision = function( number, precision, round ) {
		var roundOrder;

		// Get number at two extra significant figure precision.
		number = number.toPrecision( precision + 2 );

		// Then, round it to the required significant figure precision.
		roundOrder = Math.ceil( Math.log( Math.abs( number ) ) / Math.log( 10 ) );
		roundOrder -= precision;

		return round( number, { exponent: roundOrder } );
	};




	/**
	 * toPrecision( number, minimumSignificantDigits, maximumSignificantDigits, round )
	 *
	 * @number [Number]
	 *
	 * @minimumSignificantDigits [Number]
	 *
	 * @maximumSignificantDigits [Number]
	 *
	 * @round [Function]
	 *
	 * Return the formatted significant digits number.
	 */
	var numberFormatSignificantDigits = function( number, minimumSignificantDigits, maximumSignificantDigits, round ) {
		var atMinimum, atMaximum;

		// Sanity check.
		if ( minimumSignificantDigits > maximumSignificantDigits ) {
			maximumSignificantDigits = minimumSignificantDigits;
		}

		atMinimum = numberToPrecision( number, minimumSignificantDigits, round );
		atMaximum = numberToPrecision( number, maximumSignificantDigits, round );

		// Use atMaximum only if it has more significant digits than atMinimum.
		number = +atMinimum === +atMaximum ? atMinimum : atMaximum;

		// Expand integer numbers, eg. 123e5 to 12300.
		number = ( +number ).toString( 10 );

		if ( ( /e/ ).test( number ) ) {
			throw createErrorUnsupportedFeature({
				feature: "integers out of (1e21, 1e-7)"
			});
		}

		// Add trailing zeros if necessary.
		if ( minimumSignificantDigits - number.replace( /^0+|\./g, "" ).length > 0 ) {
			number = number.split( "." );
			number[ 1 ] = stringPad( number[ 1 ] || "", minimumSignificantDigits - number[ 0 ].replace( /^0+/, "" ).length, true );
			number = number.join( "." );
		}

		return number;
	};




	/**
	 * removeLiteralQuotes( string )
	 *
	 * Return:
	 * - `` if input string is `''`.
	 * - `o'clock` if input string is `'o''clock'`.
	 * - `foo` if input string is `foo`, i.e., return the same value in case it isn't a single-quoted
	 *   string.
	 */
	var removeLiteralQuotes = function( string ) {
		if ( string[ 0 ] + string[ string.length - 1 ] !== "''" ) {
			return string;
		}
		if ( string === "''" ) {
			return "";
		}
		return string.replace( /''/g, "'" ).slice( 1, -1 );
	};




	/**
	 * format( number, properties )
	 *
	 * @number [Number].
	 *
	 * @properties [Object] Output of number/format-properties.
	 *
	 * Return the formatted number.
	 * ref: http://www.unicode.org/reports/tr35/tr35-numbers.html
	 */
	var numberFormat = function( number, properties ) {
		var infinitySymbol, maximumFractionDigits, maximumSignificantDigits, minimumFractionDigits,
		minimumIntegerDigits, minimumSignificantDigits, nanSymbol, nuDigitsMap, padding, prefix,
		primaryGroupingSize, pattern, ret, round, roundIncrement, secondaryGroupingSize, suffix,
		symbolMap;

		padding = properties[ 1 ];
		minimumIntegerDigits = properties[ 2 ];
		minimumFractionDigits = properties[ 3 ];
		maximumFractionDigits = properties[ 4 ];
		minimumSignificantDigits = properties[ 5 ];
		maximumSignificantDigits = properties[ 6 ];
		roundIncrement = properties[ 7 ];
		primaryGroupingSize = properties[ 8 ];
		secondaryGroupingSize = properties[ 9 ];
		round = properties[ 15 ];
		infinitySymbol = properties[ 16 ];
		nanSymbol = properties[ 17 ];
		symbolMap = properties[ 18 ];
		nuDigitsMap = properties[ 19 ];

		// NaN
		if ( isNaN( number ) ) {
			return nanSymbol;
		}

		if ( number < 0 ) {
			pattern = properties[ 12 ];
			prefix = properties[ 13 ];
			suffix = properties[ 14 ];
		} else {
			pattern = properties[ 11 ];
			prefix = properties[ 0 ];
			suffix = properties[ 10 ];
		}

		// Infinity
		if ( !isFinite( number ) ) {
			return prefix + infinitySymbol + suffix;
		}

		ret = prefix;

		// Percent
		if ( pattern.indexOf( "%" ) !== -1 ) {
			number *= 100;

		// Per mille
		} else if ( pattern.indexOf( "\u2030" ) !== -1 ) {
			number *= 1000;
		}

		// Significant digit format
		if ( !isNaN( minimumSignificantDigits * maximumSignificantDigits ) ) {
			number = numberFormatSignificantDigits( number, minimumSignificantDigits,
				maximumSignificantDigits, round );

		// Integer and fractional format
		} else {
			number = numberFormatIntegerFractionDigits( number, minimumIntegerDigits,
				minimumFractionDigits, maximumFractionDigits, round, roundIncrement );
		}

		// Remove the possible number minus sign
		number = number.replace( /^-/, "" );

		// Grouping separators
		if ( primaryGroupingSize ) {
			number = numberFormatGroupingSeparator( number, primaryGroupingSize,
				secondaryGroupingSize );
		}

		ret += number;

		// Scientific notation
		// TODO implement here

		// Padding/'([^']|'')+'|''|[.,\-+E%\u2030]/g
		// TODO implement here

		ret += suffix;

		return ret.replace( /('([^']|'')+'|'')|./g, function( character, literal ) {

			// Literals
			if ( literal ) {
				return removeLiteralQuotes( literal );
			}

			// Symbols
			character = character.replace( /[.,\-+E%\u2030]/, function( symbol ) {
				return symbolMap[ symbol ];
			});

			// Numbering system
			if ( nuDigitsMap ) {
				character = character.replace( /[0-9]/, function( digit ) {
					return nuDigitsMap[ +digit ];
				});
			}

			return character;
		});
	};




	var numberFormatterFn = function( properties ) {
		return function numberFormatter( value ) {
			validateParameterPresence( value, "value" );
			validateParameterTypeNumber( value, "value" );

			return numberFormat( value, properties );
		};
	};




	/**
	 * NumberingSystem( cldr )
	 *
	 * - http://www.unicode.org/reports/tr35/tr35-numbers.html#otherNumberingSystems
	 * - http://cldr.unicode.org/index/bcp47-extension
	 * - http://www.unicode.org/reports/tr35/#u_Extension
	 */
	var numberNumberingSystem = function( cldr ) {
		var nu = cldr.attributes[ "u-nu" ];

		if ( nu ) {
			if ( nu === "traditio" ) {
				nu = "traditional";
			}
			if ( [ "native", "traditional", "finance" ].indexOf( nu ) !== -1 ) {

				// Unicode locale extension `u-nu` is set using either (native, traditional or
				// finance). So, lookup the respective locale's numberingSystem and return it.
				return cldr.main([ "numbers/otherNumberingSystems", nu ]);
			}

			// Unicode locale extension `u-nu` is set with an explicit numberingSystem. Return it.
			return nu;
		}

		// Return the default numberingSystem.
		return cldr.main( "numbers/defaultNumberingSystem" );
	};




	/**
	 * nuMap( cldr )
	 *
	 * @cldr [Cldr instance].
	 *
	 * Return digits map if numbering system is different than `latn`.
	 */
	var numberNumberingSystemDigitsMap = function( cldr ) {
		var aux,
			nu = numberNumberingSystem( cldr );

		if ( nu === "latn" ) {
			return;
		}

		aux = cldr.supplemental([ "numberingSystems", nu ]);

		if ( aux._type !== "numeric" ) {
			throw createErrorUnsupportedFeature( "`" + aux._type + "` numbering system" );
		}

		return aux._digits;
	};




	/**
	 * EBNF representation:
	 *
	 * number_pattern_re =        prefix?
	 *                            padding?
	 *                            (integer_fraction_pattern | significant_pattern)
	 *                            scientific_notation?
	 *                            suffix?
	 *
	 * prefix =                   non_number_stuff
	 *
	 * padding =                  "*" regexp(.)
	 *
	 * integer_fraction_pattern = integer_pattern
	 *                            fraction_pattern?
	 *
	 * integer_pattern =          regexp([#,]*[0,]*0+)
	 *
	 * fraction_pattern =         "." regexp(0*[0-9]*#*)
	 *
	 * significant_pattern =      regexp([#,]*@+#*)
	 *
	 * scientific_notation =      regexp(E\+?0+)
	 *
	 * suffix =                   non_number_stuff
	 *
	 * non_number_stuff =         regexp(('[^']+'|''|[^*#@0,.E])*)
	 *
	 *
	 * Regexp groups:
	 *
	 *  0: number_pattern_re
	 *  1: prefix
	 *  2: -
	 *  3: -
	 *  4: padding
	 *  5: (integer_fraction_pattern | significant_pattern)
	 *  6: integer_fraction_pattern
	 *  7: integer_pattern
	 *  8: fraction_pattern
	 *  9: significant_pattern
	 * 10: scientific_notation
	 * 11: suffix
	 * 12: -
	 */
	var numberPatternRe = ( /^(('([^']|'')*'|[^*#@0,.E])*)(\*.)?((([#,]*[0,]*0+)(\.0*[0-9]*#*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/ );




	/**
	 * format( number, pattern )
	 *
	 * @number [Number].
	 *
	 * @pattern [String] raw pattern for numbers.
	 *
	 * Return the formatted number.
	 * ref: http://www.unicode.org/reports/tr35/tr35-numbers.html
	 */
	var numberPatternProperties = function( pattern ) {
		var aux1, aux2, fractionPattern, integerFractionOrSignificantPattern, integerPattern,
			maximumFractionDigits, maximumSignificantDigits, minimumFractionDigits,
			minimumIntegerDigits, minimumSignificantDigits, padding, prefix, primaryGroupingSize,
			roundIncrement, scientificNotation, secondaryGroupingSize, significantPattern, suffix;

		pattern = pattern.match( numberPatternRe );
		if ( !pattern ) {
			throw new Error( "Invalid pattern: " + pattern );
		}

		prefix = pattern[ 1 ];
		padding = pattern[ 4 ];
		integerFractionOrSignificantPattern = pattern[ 5 ];
		significantPattern = pattern[ 9 ];
		scientificNotation = pattern[ 10 ];
		suffix = pattern[ 11 ];

		// Significant digit format
		if ( significantPattern ) {
			significantPattern.replace( /(@+)(#*)/, function( match, minimumSignificantDigitsMatch, maximumSignificantDigitsMatch ) {
				minimumSignificantDigits = minimumSignificantDigitsMatch.length;
				maximumSignificantDigits = minimumSignificantDigits +
					maximumSignificantDigitsMatch.length;
			});

		// Integer and fractional format
		} else {
			fractionPattern = pattern[ 8 ];
			integerPattern = pattern[ 7 ];

			if ( fractionPattern ) {

				// Minimum fraction digits, and rounding.
				fractionPattern.replace( /[0-9]+/, function( match ) {
					minimumFractionDigits = match;
				});
				if ( minimumFractionDigits ) {
					roundIncrement = +( "0." + minimumFractionDigits );
					minimumFractionDigits = minimumFractionDigits.length;
				} else {
					minimumFractionDigits = 0;
				}

				// Maximum fraction digits
				// 1: ignore decimal character
				maximumFractionDigits = fractionPattern.length - 1 /* 1 */;
			}

			// Minimum integer digits
			integerPattern.replace( /0+$/, function( match ) {
				minimumIntegerDigits = match.length;
			});
		}

		// Scientific notation
		if ( scientificNotation ) {
			throw createErrorUnsupportedFeature({
				feature: "scientific notation (not implemented)"
			});
		}

		// Padding
		if ( padding ) {
			throw createErrorUnsupportedFeature({
				feature: "padding (not implemented)"
			});
		}

		// Grouping
		if ( ( aux1 = integerFractionOrSignificantPattern.lastIndexOf( "," ) ) !== -1 ) {

			// Primary grouping size is the interval between the last group separator and the end of
			// the integer (or the end of the significant pattern).
			aux2 = integerFractionOrSignificantPattern.split( "." )[ 0 ];
			primaryGroupingSize = aux2.length - aux1 - 1;

			// Secondary grouping size is the interval between the last two group separators.
			if ( ( aux2 = integerFractionOrSignificantPattern.lastIndexOf( ",", aux1 - 1 ) ) !== -1 ) {
				secondaryGroupingSize = aux1 - 1 - aux2;
			}
		}

		// Return:
		//  0: @prefix String
		//  1: @padding Array [ <character>, <count> ] TODO
		//  2: @minimumIntegerDigits non-negative integer Number value indicating the minimum integer
		//        digits to be used. Numbers will be padded with leading zeroes if necessary.
		//  3: @minimumFractionDigits and
		//  4: @maximumFractionDigits are non-negative integer Number values indicating the minimum and
		//        maximum fraction digits to be used. Numbers will be rounded or padded with trailing
		//        zeroes if necessary.
		//  5: @minimumSignificantDigits and
		//  6: @maximumSignificantDigits are positive integer Number values indicating the minimum and
		//        maximum fraction digits to be shown. Either none or both of these properties are
		//        present; if they are, they override minimum and maximum integer and fraction digits
		//        – the formatter uses however many integer and fraction digits are required to display
		//        the specified number of significant digits.
		//  7: @roundIncrement Decimal round increment or null
		//  8: @primaryGroupingSize
		//  9: @secondaryGroupingSize
		// 10: @suffix String
		return [
			prefix,
			padding,
			minimumIntegerDigits,
			minimumFractionDigits,
			maximumFractionDigits,
			minimumSignificantDigits,
			maximumSignificantDigits,
			roundIncrement,
			primaryGroupingSize,
			secondaryGroupingSize,
			suffix
		];
	};




	/**
	 * Symbol( name, cldr )
	 *
	 * @name [String] Symbol name.
	 *
	 * @cldr [Cldr instance].
	 *
	 * Return the localized symbol given its name.
	 */
	var numberSymbol = function( name, cldr ) {
		return cldr.main([
			"numbers/symbols-numberSystem-" + numberNumberingSystem( cldr ),
			name
		]);
	};




	var numberSymbolName = {
		".": "decimal",
		",": "group",
		"%": "percentSign",
		"+": "plusSign",
		"-": "minusSign",
		"E": "exponential",
		"\u2030": "perMille"
	};




	/**
	 * symbolMap( cldr )
	 *
	 * @cldr [Cldr instance].
	 *
	 * Return the (localized symbol, pattern symbol) key value pair, eg. {
	 *   ".": "٫",
	 *   ",": "٬",
	 *   "%": "٪",
	 *   ...
	 * };
	 */
	var numberSymbolMap = function( cldr ) {
		var symbol,
			symbolMap = {};

		for ( symbol in numberSymbolName ) {
			symbolMap[ symbol ] = numberSymbol( numberSymbolName[ symbol ], cldr );
		}

		return symbolMap;
	};




	var numberTruncate = function( value ) {
		if ( isNaN( value ) ) {
			return NaN;
		}
		return Math[ value < 0 ? "ceil" : "floor" ]( value );
	};




	/**
	 * round( method )
	 *
	 * @method [String] with either "round", "ceil", "floor", or "truncate".
	 *
	 * Return function( value, incrementOrExp ):
	 *
	 *   @value [Number] eg. 123.45.
	 *
	 *   @incrementOrExp [Number] optional, eg. 0.1; or
	 *     [Object] Either { increment: <value> } or { exponent: <value> }
	 *
	 *   Return the rounded number, eg:
	 *   - round( "round" )( 123.45 ): 123;
	 *   - round( "ceil" )( 123.45 ): 124;
	 *   - round( "floor" )( 123.45 ): 123;
	 *   - round( "truncate" )( 123.45 ): 123;
	 *   - round( "round" )( 123.45, 0.1 ): 123.5;
	 *   - round( "round" )( 123.45, 10 ): 120;
	 *
	 *   Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
	 *   Ref: #376
	 */
	var numberRound = function( method ) {
		method = method || "round";
		method = method === "truncate" ? numberTruncate : Math[ method ];

		return function( value, incrementOrExp ) {
			var exp, increment;

			value = +value;

			// If the value is not a number, return NaN.
			if ( isNaN( value ) ) {
				return NaN;
			}

			// Exponent given.
			if ( typeof incrementOrExp === "object" && incrementOrExp.exponent ) {
				exp = +incrementOrExp.exponent;
				increment = 1;

				if ( exp === 0 ) {
					return method( value );
				}

				// If the exp is not an integer, return NaN.
				if ( !( typeof exp === "number" && exp % 1 === 0 ) ) {
					return NaN;
				}

			// Increment given.
			} else {
				increment = +incrementOrExp || 1;

				if ( increment === 1 ) {
					return method( value );
				}

				// If the increment is not a number, return NaN.
				if ( isNaN( increment ) ) {
					return NaN;
				}

				increment = increment.toExponential().split( "e" );
				exp = +increment[ 1 ];
				increment = +increment[ 0 ];
			}

			// Shift & Round
			value = value.toString().split( "e" );
			value[ 0 ] = +value[ 0 ] / increment;
			value[ 1 ] = value[ 1 ] ? ( +value[ 1 ] - exp ) : -exp;
			value = method( +( value[ 0 ] + "e" + value[ 1 ] ) );

			// Shift back
			value = value.toString().split( "e" );
			value[ 0 ] = +value[ 0 ] * increment;
			value[ 1 ] = value[ 1 ] ? ( +value[ 1 ] + exp ) : exp;
			return +( value[ 0 ] + "e" + value[ 1 ] );
		};
	};




	/**
	 * formatProperties( pattern, cldr [, options] )
	 *
	 * @pattern [String] raw pattern for numbers.
	 *
	 * @cldr [Cldr instance].
	 *
	 * @options [Object]:
	 * - minimumIntegerDigits [Number]
	 * - minimumFractionDigits, maximumFractionDigits [Number]
	 * - minimumSignificantDigits, maximumSignificantDigits [Number]
	 * - round [String] "ceil", "floor", "round" (default), or "truncate".
	 * - useGrouping [Boolean] default true.
	 *
	 * Return the processed properties that will be used in number/format.
	 * ref: http://www.unicode.org/reports/tr35/tr35-numbers.html
	 */
	var numberFormatProperties = function( pattern, cldr, options ) {
		var negativePattern, negativePrefix, negativeProperties, negativeSuffix, positivePattern,
			roundFn, properties;

		function getOptions( attribute, propertyIndex ) {
			if ( attribute in options ) {
				properties[ propertyIndex ] = options[ attribute ];
			}
		}

		options = options || {};
		pattern = pattern.split( ";" );

		positivePattern = pattern[ 0 ];

		negativePattern = pattern[ 1 ] || "-" + positivePattern;
		negativeProperties = numberPatternProperties( negativePattern );
		negativePrefix = negativeProperties[ 0 ];
		negativeSuffix = negativeProperties[ 10 ];

		// Have runtime code to refer to numberRound() instead of including it explicitly.
		roundFn = numberRound( options.round );
		roundFn.generatorString = function() {
			return "numberRound(" + ( options.round ? "\"" + options.round + "\"" : "" ) + ")";
		};

		properties = numberPatternProperties( positivePattern ).concat([
			positivePattern,
			negativePrefix + positivePattern + negativeSuffix,
			negativePrefix,
			negativeSuffix,
			roundFn,
			numberSymbol( "infinity", cldr ),
			numberSymbol( "nan", cldr ),
			numberSymbolMap( cldr ),
			numberNumberingSystemDigitsMap( cldr )
		]);

		getOptions( "minimumIntegerDigits", 2 );
		getOptions( "minimumFractionDigits", 3 );
		getOptions( "maximumFractionDigits", 4 );
		getOptions( "minimumSignificantDigits", 5 );
		getOptions( "maximumSignificantDigits", 6 );

		// Grouping separators
		if ( options.useGrouping === false ) {
			properties[ 8 ] = null;
		}

		// Normalize number of digits if only one of either minimumFractionDigits or
		// maximumFractionDigits is passed in as an option
		if ( "minimumFractionDigits" in options && !( "maximumFractionDigits" in options ) ) {

			// maximumFractionDigits = Math.max( minimumFractionDigits, maximumFractionDigits );
			properties[ 4 ] = Math.max( properties[ 3 ], properties[ 4 ] );
		} else if ( !( "minimumFractionDigits" in options ) &&
				"maximumFractionDigits" in options ) {

			// minimumFractionDigits = Math.min( minimumFractionDigits, maximumFractionDigits );
			properties[ 3 ] = Math.min( properties[ 3 ], properties[ 4 ] );
		}

		// Return:
		// 0-10: see number/pattern-properties.
		// 11: @positivePattern [String] Positive pattern.
		// 12: @negativePattern [String] Negative pattern.
		// 13: @negativePrefix [String] Negative prefix.
		// 14: @negativeSuffix [String] Negative suffix.
		// 15: @round [Function] Round function.
		// 16: @infinitySymbol [String] Infinity symbol.
		// 17: @nanSymbol [String] NaN symbol.
		// 18: @symbolMap [Object] A bunch of other symbols.
		// 19: @nuDigitsMap [Array] Digits map if numbering system is different than `latn`.
		return properties;
	};




	/**
	 * Generated by:
	 *
	 * var regenerate = require( "regenerate" );
	 * var dashSymbols = require( * "unicode-8.0.0/General_Category/Format/symbols" );
	 * regenerate().add( dashSymbols ).toString();
	 *
	 * https://github.com/mathiasbynens/regenerate
	 * https://github.com/mathiasbynens/unicode-8.0.0
	 */
	var regexpCfG = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804\uDCBD|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/g;




	/**
	 * Generated by:
	 *
	 * var regenerate = require( "regenerate" );
	 * var dashSymbols = require( * "unicode-8.0.0/General_Category/Dash_Punctuation/symbols" );
	 * regenerate().add( dashSymbols ).toString();
	 *
	 * https://github.com/mathiasbynens/regenerate
	 * https://github.com/mathiasbynens/unicode-8.0.0
	 *
	 * NOTE: In addition to [:dash:],  the below includes MINUS SIGN U+2212.
	 */
	var regexpDashG = /[\-\u058A\u05BE\u1400\u1806\u2010-\u2015\u2E17\u2E1A\u2E3A\u2E3B\u2E40\u301C\u3030\u30A0\uFE31\uFE32\uFE58\uFE63\uFF0D\u2212]/g;




	/**
	 * Generated by:
	 *
	 * var regenerate = require( "regenerate" );
	 * var dashSymbols = require( "unicode-8.0.0/General_Category/Space_Separator/symbols" );
	 * regenerate().add( dashSymbols ).toString();
	 *
	 * https://github.com/mathiasbynens/regenerate
	 * https://github.com/mathiasbynens/unicode-8.0.0
	 */
	var regexpZsG = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/g;




	/**
	 * parse( value, properties )
	 *
	 * @value [String].
	 *
	 * @properties [Object] Parser properties is a reduced pre-processed cldr
	 * data set returned by numberParserProperties().
	 *
	 * Return the parsed Number (including Infinity) or NaN when value is invalid.
	 * ref: http://www.unicode.org/reports/tr35/tr35-numbers.html
	 */
	var numberParse = function( value, properties ) {
		var grammar, invertedNuDigitsMap, invertedSymbolMap, negative, number, prefix, prefixNSuffix,
			suffix, tokenizer, valid;

		// Grammar:
		// - Value <=           NaN | PositiveNumber | NegativeNumber
		// - PositiveNumber <=  PositivePrefix NumberOrInf PositiveSufix
		// - NegativeNumber <=  NegativePrefix NumberOrInf
		// - NumberOrInf <=     Number | Inf
		grammar = [
			[ "nan" ],
			[ "prefix", "infinity", "suffix" ],
			[ "prefix", "number", "suffix" ],
			[ "negativePrefix", "infinity", "negativeSuffix" ],
			[ "negativePrefix", "number", "negativeSuffix" ]
		];

		invertedSymbolMap = properties[ 0 ];
		invertedNuDigitsMap = properties[ 1 ] || {};
		tokenizer = properties[ 2 ];

		// Loose Matching:
		// - Ignore all format characters, which includes RLM, LRM or ALM used to control BIDI
		//   formatting.
		// - Map all characters in [:Zs:] to U+0020 SPACE;
		// - Map all characters in [:Dash:] to U+002D HYPHEN-MINUS;
		value = value
			.replace( regexpCfG, "" )
			.replace( regexpDashG, "-" )
			.replace( regexpZsG, " " );

		function parse( type ) {
			return function( lexeme ) {

				// Reverse localized symbols and numbering system.
				lexeme = lexeme.split( "" ).map(function( character ) {
					return invertedSymbolMap[ character ] ||
						invertedNuDigitsMap[ character ] ||
						character;
				}).join( "" );

				switch ( type ) {
					case "infinity":
						number = Infinity;
						break;

					case "nan":
						number = NaN;
						break;

					case "number":

						// Remove grouping separators.
						lexeme = lexeme.replace( /,/g, "" );

						number = +lexeme;
						break;

					case "prefix":
					case "negativePrefix":
						prefix = lexeme;
						break;

					case "suffix":
						suffix = lexeme;
						break;

					case "negativeSuffix":
						suffix = lexeme;
						negative = true;
						break;

					// This should never be reached.
					default:
						throw new Error( "Internal error" );
				}
				return "";
			};
		}

		function tokenizeNParse( _value, grammar ) {
			return grammar.some(function( statement ) {
				var value = _value;
				statement.every(function( type ) {
					if ( value.match( tokenizer[ type ] ) === null ) {
						return false;
					}

					// Consume and parse it.
					value = value.replace( tokenizer[ type ], parse( type ) );
					return true;
				});

				// Note: .every() return value above is ignored, because what counts in the end is
				// whether value is entirely consumed.
				return !value.length;
			});
		}

		valid = tokenizeNParse( value, grammar );

		// NaN
		if ( !valid || isNaN( number ) ) {
			return NaN;
		}

		prefixNSuffix = "" + prefix + suffix;

		// Percent
		if ( prefixNSuffix.indexOf( "%" ) !== -1 ) {
			number /= 100;

		// Per mille
		} else if ( prefixNSuffix.indexOf( "\u2030" ) !== -1 ) {
			number /= 1000;
		}

		// Negative number
		if ( negative ) {
			number *= -1;
		}

		return number;
	};




	var numberParserFn = function( properties ) {
		return function numberParser( value ) {
			validateParameterPresence( value, "value" );
			validateParameterTypeString( value, "value" );

			return numberParse( value, properties );
		};

	};




	/**
	 * symbolMap( cldr )
	 *
	 * @cldr [Cldr instance].
	 *
	 * Return the (localized symbol, pattern symbol) key value pair, eg. {
	 *   "٫": ".",
	 *   "٬": ",",
	 *   "٪": "%",
	 *   ...
	 * };
	 */
	var numberSymbolInvertedMap = function( cldr ) {
		var symbol,
			symbolMap = {};

		for ( symbol in numberSymbolName ) {
			symbolMap[ numberSymbol( numberSymbolName[ symbol ], cldr ) ] = symbol;
		}

		return symbolMap;
	};




	/**
	 * objectMap( object, fn)
	 *
	 * - object
	 *
	 * - fn( pair ) => pair
	 */
	var objectMap = function( object, fn ) {
		return Object.keys( object ).map(function( key ) {
			return fn([ key, object[ key ] ]);
		}).reduce(function( object, pair ) {
			object[ pair[ 0 ] ] = pair[ 1 ];
			return object;
		}, {});
	};




	/**
	 * parseProperties( pattern, cldr )
	 *
	 * @pattern [String] raw pattern for numbers.
	 *
	 * @cldr [Cldr instance].
	 *
	 * Return parser properties, used to feed parser function.
	 *
	 * TODO:
	 * - Scientific_notation;
	 * - Padding;
	 */
	var numberParseProperties = function( pattern, cldr, options ) {
		var aux, decimalSymbolRe, digitsRe, groupingSeparatorRe, infinitySymbol, invertedNuDigitsMap,
			invertedSymbolMap, maximumFractionDigits, maximumSignificantDigits,
			minimumSignificantDigits, nanSymbol, negativePrefix, negativeSuffix, nuDigitsMap,
			numberTokenizer, prefix, primaryGroupingSize, secondaryGroupingSize, suffix, symbolMap,
			formatProperties = numberFormatProperties( pattern, cldr, options );

		// Loose Matching:
		// - Ignore all format characters, which includes RLM, LRM or ALM used to control BIDI
		//   formatting.
		// - Map all characters in [:Zs:] to U+0020 SPACE;
		// - Map all characters in [:Dash:] to U+002D HYPHEN-MINUS;
		function looseMatching( value ) {
			return value
				.replace( regexpCfG, "" )
				.replace( regexpDashG, "-" )
				.replace( regexpZsG, " " );
		}

		prefix = looseMatching( formatProperties[ 0 ] );
		maximumFractionDigits = formatProperties[ 4 ];
		minimumSignificantDigits = formatProperties[ 5 ];
		maximumSignificantDigits = formatProperties[ 6 ];
		primaryGroupingSize = formatProperties[ 8 ];
		secondaryGroupingSize = formatProperties[ 9 ];
		suffix = looseMatching( formatProperties[ 10 ] );
		negativePrefix = looseMatching( formatProperties[ 13 ] );
		negativeSuffix = looseMatching( formatProperties[ 14 ] );
		infinitySymbol = looseMatching( formatProperties[ 16 ] );
		nanSymbol = looseMatching( formatProperties[ 17 ] );
		symbolMap = objectMap( formatProperties[ 18 ], function( pair ) {
			return [ pair[ 0 ], looseMatching( pair[ 1 ] ) ];
		});
		nuDigitsMap = formatProperties[ 19 ];

		invertedSymbolMap = objectMap( numberSymbolInvertedMap( cldr ), function( pair ) {
			return [ looseMatching( pair[ 0 ] ), pair[ 1 ] ];
		});

		digitsRe = nuDigitsMap ? "[" + nuDigitsMap + "]" : "\\d";
		groupingSeparatorRe = regexpEscape( symbolMap[ "," ] );
		decimalSymbolRe = regexpEscape( symbolMap[ "." ] );

		if ( nuDigitsMap ) {
			invertedNuDigitsMap = nuDigitsMap.split( "" ).reduce(function( object, localizedDigit, i ) {
				object[ localizedDigit ] = String( i );
				return object;
			}, {} );
		}

		aux = [ prefix, suffix, negativePrefix, negativeSuffix ].map(function( value ) {
			return value.replace( /('([^']|'')+'|'')|./g, function( character, literal ) {

				// Literals
				if ( literal ) {
					return removeLiteralQuotes( literal );
				}

				// Symbols
				character = character.replace( /[\-+E%\u2030]/, function( symbol ) {
					return symbolMap[ symbol ];
				});

				return character;
			});
		});

		prefix = aux[ 0 ];
		suffix = aux[ 1 ];
		negativePrefix = aux[ 2 ];
		negativeSuffix = aux[ 3 ];

		// Number
		//
		// number_re =                       integer fraction?
		//
		// integer =                         digits | digits_using_grouping_separators
		//
		// fraction =                        regexp((.\d+)?)
		//
		// digits =                          regexp(\d+)
		//
		// digits_w_grouping_separators =    digits_w_1_grouping_separators |
		//                                   digits_w_2_grouping_separators
		//
		// digits_w_1_grouping_separators =  regexp(\d{1,3}(,\d{3})+)
		//
		// digits_w_2_grouping_separators =  regexp(\d{1,2}((,\d{2})*(,\d{3}))?)

		// Integer part
		numberTokenizer = digitsRe + "+";

		// Grouping separators
		if ( primaryGroupingSize ) {
			if ( secondaryGroupingSize ) {
				aux = digitsRe + "{1," + secondaryGroupingSize + "}((" + groupingSeparatorRe +
					digitsRe + "{" + secondaryGroupingSize + "})*(" + groupingSeparatorRe +
					digitsRe + "{" + primaryGroupingSize + "}))?";
			} else {
				aux = digitsRe + "{1," + primaryGroupingSize + "}(" + groupingSeparatorRe +
					digitsRe + "{" + primaryGroupingSize + "})+";
			}
			numberTokenizer = "(" + aux + "|" + numberTokenizer + ")";
		}

		// Fraction part? Only included if 1 or 2.
		// 1: Using significant digit format.
		// 2: Using integer and fractional format && it has a maximumFractionDigits.
		if ( !isNaN( minimumSignificantDigits * maximumSignificantDigits ) || /* 1 */
					maximumFractionDigits /* 2 */ ) {

			// Handle non-padded decimals, e.g., `".12"` => `0.12` by making the integer part optional.
			numberTokenizer = "(" + numberTokenizer + ")?";

			numberTokenizer += "(" + decimalSymbolRe + digitsRe + "+)?";
		}

		// 0: @invertedSymbolMap [Object] Inverted symbol map.
		// 1: @invertedNuDigitsMap [Object] Inverted digits map if numbering system is different than
		//    `latn`.
		// 2: @tokenizer [Object] Tokenizer map, used by parser to consume input.
		return [
			invertedSymbolMap,
			invertedNuDigitsMap,
			{
				infinity: new RegExp( "^" + regexpEscape( infinitySymbol ) ),
				nan:  new RegExp( "^" + regexpEscape( nanSymbol ) ),
				negativePrefix: new RegExp( "^" + regexpEscape( negativePrefix ) ),
				negativeSuffix: new RegExp( "^" + regexpEscape( negativeSuffix ) ),
				number: new RegExp( "^" + numberTokenizer ),
				prefix: new RegExp( "^" + regexpEscape( prefix ) ),
				suffix: new RegExp( "^" + regexpEscape( suffix ) )
			}
		];

	};




	/**
	 * Pattern( style )
	 *
	 * @style [String] "decimal" (default) or "percent".
	 *
	 * @cldr [Cldr instance].
	 */
	var numberPattern = function( style, cldr ) {
		if ( style !== "decimal" && style !== "percent" ) {
			throw new Error( "Invalid style" );
		}

		return cldr.main([
			"numbers",
			style + "Formats-numberSystem-" + numberNumberingSystem( cldr ),
			"standard"
		]);
	};




	function validateDigits( properties ) {
		var minimumIntegerDigits = properties[ 2 ],
			minimumFractionDigits = properties[ 3 ],
			maximumFractionDigits = properties[ 4 ],
			minimumSignificantDigits = properties[ 5 ],
			maximumSignificantDigits = properties[ 6 ];

		// Validate significant digit format properties
		if ( !isNaN( minimumSignificantDigits * maximumSignificantDigits ) ) {
			validateParameterRange( minimumSignificantDigits, "minimumSignificantDigits", 1, 21 );
			validateParameterRange( maximumSignificantDigits, "maximumSignificantDigits",
				minimumSignificantDigits, 21 );

		} else if ( !isNaN( minimumSignificantDigits ) || !isNaN( maximumSignificantDigits ) ) {
			throw new Error( "Neither or both the minimum and maximum significant digits must be " +
				"present" );

		// Validate integer and fractional format
		} else {
			validateParameterRange( minimumIntegerDigits, "minimumIntegerDigits", 1, 21 );
			validateParameterRange( minimumFractionDigits, "minimumFractionDigits", 0, 20 );
			validateParameterRange( maximumFractionDigits, "maximumFractionDigits",
				minimumFractionDigits, 20 );
		}
	}

	/**
	 * .numberFormatter( [options] )
	 *
	 * @options [Object]:
	 * - style: [String] "decimal" (default) or "percent".
	 * - see also number/format options.
	 *
	 * Return a function that formats a number according to the given options and default/instance
	 * locale.
	 */
	Globalize.numberFormatter =
	Globalize.prototype.numberFormatter = function( options ) {
		var args, cldr, pattern, properties, returnFn;

		validateParameterTypePlainObject( options, "options" );

		options = options || {};
		cldr = this.cldr;

		args = [ options ];

		validateDefaultLocale( cldr );

		cldr.on( "get", validateCldr );

		if ( options.raw ) {
			pattern = options.raw;
		} else {
			pattern = numberPattern( options.style || "decimal", cldr );
		}

		properties = numberFormatProperties( pattern, cldr, options );

		cldr.off( "get", validateCldr );

		validateDigits( properties );

		returnFn = numberFormatterFn( properties );

		runtimeBind( args, cldr, returnFn, [ properties ] );

		return returnFn;
	};

	/**
	 * .numberParser( [options] )
	 *
	 * @options [Object]:
	 * - style: [String] "decimal" (default) or "percent".
	 *
	 * Return the number parser according to the default/instance locale.
	 */
	Globalize.numberParser =
	Globalize.prototype.numberParser = function( options ) {
		var args, cldr, pattern, properties, returnFn;

		validateParameterTypePlainObject( options, "options" );

		options = options || {};
		cldr = this.cldr;

		args = [ options ];

		validateDefaultLocale( cldr );

		cldr.on( "get", validateCldr );

		if ( options.raw ) {
			pattern = options.raw;
		} else {
			pattern = numberPattern( options.style || "decimal", cldr );
		}

		properties = numberParseProperties( pattern, cldr, options );

		cldr.off( "get", validateCldr );

		returnFn = numberParserFn( properties );

		runtimeBind( args, cldr, returnFn, [ properties ] );

		return returnFn;
	};

	/**
	 * .formatNumber( value [, options] )
	 *
	 * @value [Number] number to be formatted.
	 *
	 * @options [Object]: see number/format-properties.
	 *
	 * Format a number according to the given options and default/instance locale.
	 */
	Globalize.formatNumber =
	Globalize.prototype.formatNumber = function( value, options ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeNumber( value, "value" );

		return this.numberFormatter( options )( value );
	};

	/**
	 * .parseNumber( value [, options] )
	 *
	 * @value [String]
	 *
	 * @options [Object]: See numberParser().
	 *
	 * Return the parsed Number (including Infinity) or NaN when value is invalid.
	 */
	Globalize.parseNumber =
	Globalize.prototype.parseNumber = function( value, options ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeString( value, "value" );

		return this.numberParser( options )( value );
	};

	/**
	 * Optimization to avoid duplicating some internal functions across modules.
	 */
	Globalize._createErrorUnsupportedFeature = createErrorUnsupportedFeature;
	Globalize._numberNumberingSystem = numberNumberingSystem;
	Globalize._numberPattern = numberPattern;
	Globalize._numberSymbol = numberSymbol;
	Globalize._removeLiteralQuotes = removeLiteralQuotes;
	Globalize._stringPad = stringPad;
	Globalize._validateParameterTypeNumber = validateParameterTypeNumber;
	Globalize._validateParameterTypeString = validateParameterTypeString;

	return Globalize;




	}));


/***/ },

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Globalize v1.2.1
	 *
	 * http://github.com/jquery/globalize
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-12-14T18:34Z
	 */
	/*!
	 * Globalize v1.2.1 2016-12-14T18:34Z Released under the MIT license
	 * http://git.io/TrdQbw
	 */
	(function( root, factory ) {

		// UMD returnExports
		if ( true ) {

			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				!(function webpackMissingModule() { var e = new Error("Cannot find module \"cldr\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
				__webpack_require__(386),
				!(function webpackMissingModule() { var e = new Error("Cannot find module \"cldr/event\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
				!(function webpackMissingModule() { var e = new Error("Cannot find module \"cldr/supplemental\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if ( typeof exports === "object" ) {

			// Node, CommonJS
			module.exports = factory( require( "cldrjs" ), require( "../globalize" ) );
		} else {

			// Global
			factory( root.Cldr, root.Globalize );
		}
	}(this, function( Cldr, Globalize ) {

	var runtimeBind = Globalize._runtimeBind,
		validateCldr = Globalize._validateCldr,
		validateDefaultLocale = Globalize._validateDefaultLocale,
		validateParameterPresence = Globalize._validateParameterPresence,
		validateParameterType = Globalize._validateParameterType,
		validateParameterTypePlainObject = Globalize._validateParameterTypePlainObject;
	var MakePlural;
	/* jshint ignore:start */
	MakePlural = (function() {
	'use strict';

	var _toArray = function (arr) { return Array.isArray(arr) ? arr : Array.from(arr); };

	var _toConsumableArray = function (arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();


	/**
	 * make-plural.js -- https://github.com/eemeli/make-plural.js/
	 * Copyright (c) 2014-2015 by Eemeli Aro <eemeli@gmail.com>
	 *
	 * Permission to use, copy, modify, and/or distribute this software for any
	 * purpose with or without fee is hereby granted, provided that the above
	 * copyright notice and this permission notice appear in all copies.
	 *
	 * The software is provided "as is" and the author disclaims all warranties
	 * with regard to this software including all implied warranties of
	 * merchantability and fitness. In no event shall the author be liable for
	 * any special, direct, indirect, or consequential damages or any damages
	 * whatsoever resulting from loss of use, data or profits, whether in an
	 * action of contract, negligence or other tortious action, arising out of
	 * or in connection with the use or performance of this software.
	 */

	var Parser = (function () {
	    function Parser() {
	        _classCallCheck(this, Parser);
	    }

	    _createClass(Parser, [{
	        key: 'parse',
	        value: function parse(cond) {
	            var _this = this;

	            if (cond === 'i = 0 or n = 1') {
	                return 'n >= 0 && n <= 1';
	            }if (cond === 'i = 0,1') {
	                return 'n >= 0 && n < 2';
	            }if (cond === 'i = 1 and v = 0') {
	                this.v0 = 1;
	                return 'n == 1 && v0';
	            }
	            return cond.replace(/([tv]) (!?)= 0/g, function (m, sym, noteq) {
	                var sn = sym + '0';
	                _this[sn] = 1;
	                return noteq ? '!' + sn : sn;
	            }).replace(/\b[fintv]\b/g, function (m) {
	                _this[m] = 1;
	                return m;
	            }).replace(/([fin]) % (10+)/g, function (m, sym, num) {
	                var sn = sym + num;
	                _this[sn] = 1;
	                return sn;
	            }).replace(/n10+ = 0/g, 't0 && $&').replace(/(\w+ (!?)= )([0-9.]+,[0-9.,]+)/g, function (m, se, noteq, x) {
	                if (m === 'n = 0,1') return '(n == 0 || n == 1)';
	                if (noteq) return se + x.split(',').join(' && ' + se);
	                return '(' + se + x.split(',').join(' || ' + se) + ')';
	            }).replace(/(\w+) (!?)= ([0-9]+)\.\.([0-9]+)/g, function (m, sym, noteq, x0, x1) {
	                if (Number(x0) + 1 === Number(x1)) {
	                    if (noteq) return '' + sym + ' != ' + x0 + ' && ' + sym + ' != ' + x1;
	                    return '(' + sym + ' == ' + x0 + ' || ' + sym + ' == ' + x1 + ')';
	                }
	                if (noteq) return '(' + sym + ' < ' + x0 + ' || ' + sym + ' > ' + x1 + ')';
	                if (sym === 'n') {
	                    _this.t0 = 1;return '(t0 && n >= ' + x0 + ' && n <= ' + x1 + ')';
	                }
	                return '(' + sym + ' >= ' + x0 + ' && ' + sym + ' <= ' + x1 + ')';
	            }).replace(/ and /g, ' && ').replace(/ or /g, ' || ').replace(/ = /g, ' == ');
	        }
	    }, {
	        key: 'vars',
	        value: (function (_vars) {
	            function vars() {
	                return _vars.apply(this, arguments);
	            }

	            vars.toString = function () {
	                return _vars.toString();
	            };

	            return vars;
	        })(function () {
	            var vars = [];
	            if (this.i) vars.push('i = s[0]');
	            if (this.f || this.v) vars.push('f = s[1] || \'\'');
	            if (this.t) vars.push('t = (s[1] || \'\').replace(/0+$/, \'\')');
	            if (this.v) vars.push('v = f.length');
	            if (this.v0) vars.push('v0 = !s[1]');
	            if (this.t0 || this.n10 || this.n100) vars.push('t0 = Number(s[0]) == n');
	            for (var k in this) {
	                if (/^.10+$/.test(k)) {
	                    var k0 = k[0] === 'n' ? 't0 && s[0]' : k[0];
	                    vars.push('' + k + ' = ' + k0 + '.slice(-' + k.substr(2).length + ')');
	                }
	            }if (!vars.length) return '';
	            return 'var ' + ['s = String(n).split(\'.\')'].concat(vars).join(', ');
	        })
	    }]);

	    return Parser;
	})();



	var MakePlural = (function () {
	    function MakePlural(lc) {
	        var _ref = arguments[1] === undefined ? MakePlural : arguments[1];

	        var cardinals = _ref.cardinals;
	        var ordinals = _ref.ordinals;

	        _classCallCheck(this, MakePlural);

	        if (!cardinals && !ordinals) throw new Error('At least one type of plural is required');
	        this.lc = lc;
	        this.categories = { cardinal: [], ordinal: [] };
	        this.parser = new Parser();
	        
	        this.fn = this.buildFunction(cardinals, ordinals);
	        this.fn._obj = this;
	        this.fn.categories = this.categories;
	        
	        this.fn.toString = this.fnToString.bind(this);
	        return this.fn;
	    }

	    _createClass(MakePlural, [{
	        key: 'compile',
	        value: function compile(type, req) {
	            var cases = [];
	            var rules = MakePlural.rules[type][this.lc];
	            if (!rules) {
	                if (req) throw new Error('Locale "' + this.lc + '" ' + type + ' rules not found');
	                this.categories[type] = ['other'];
	                return '\'other\'';
	            }
	            for (var r in rules) {
	                var _rules$r$trim$split = rules[r].trim().split(/\s*@\w*/);

	                var _rules$r$trim$split2 = _toArray(_rules$r$trim$split);

	                var cond = _rules$r$trim$split2[0];
	                var examples = _rules$r$trim$split2.slice(1);
	                var cat = r.replace('pluralRule-count-', '');
	                if (cond) cases.push([this.parser.parse(cond), cat]);
	                
	            }
	            this.categories[type] = cases.map(function (c) {
	                return c[1];
	            }).concat('other');
	            if (cases.length === 1) {
	                return '(' + cases[0][0] + ') ? \'' + cases[0][1] + '\' : \'other\'';
	            } else {
	                return [].concat(_toConsumableArray(cases.map(function (c) {
	                    return '(' + c[0] + ') ? \'' + c[1] + '\'';
	                })), ['\'other\'']).join('\n      : ');
	            }
	        }
	    }, {
	        key: 'buildFunction',
	        value: function buildFunction(cardinals, ordinals) {
	            var _this3 = this;

	            var compile = function compile(c) {
	                return c ? (c[1] ? 'return ' : 'if (ord) return ') + _this3.compile.apply(_this3, _toConsumableArray(c)) : '';
	            },
	                fold = { vars: function vars(str) {
	                    return ('  ' + str + ';').replace(/(.{1,78})(,|$) ?/g, '$1$2\n      ');
	                },
	                cond: function cond(str) {
	                    return ('  ' + str + ';').replace(/(.{1,78}) (\|\| |$) ?/gm, '$1\n          $2');
	                } },
	                cond = [ordinals && ['ordinal', !cardinals], cardinals && ['cardinal', true]].map(compile).map(fold.cond),
	                body = [fold.vars(this.parser.vars())].concat(_toConsumableArray(cond)).join('\n').replace(/\s+$/gm, '').replace(/^[\s;]*[\r\n]+/gm, ''),
	                args = ordinals && cardinals ? 'n, ord' : 'n';
	            return new Function(args, body);
	        }
	    }, {
	        key: 'fnToString',
	        value: function fnToString(name) {
	            return Function.prototype.toString.call(this.fn).replace(/^function( \w+)?/, name ? 'function ' + name : 'function').replace('\n/**/', '');
	        }
	    }], [{
	        key: 'load',
	        value: function load() {
	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                args[_key] = arguments[_key];
	            }

	            args.forEach(function (cldr) {
	                var data = cldr && cldr.supplemental || null;
	                if (!data) throw new Error('Data does not appear to be CLDR data');
	                MakePlural.rules = {
	                    cardinal: data['plurals-type-cardinal'] || MakePlural.rules.cardinal,
	                    ordinal: data['plurals-type-ordinal'] || MakePlural.rules.ordinal
	                };
	            });
	            return MakePlural;
	        }
	    }]);

	    return MakePlural;
	})();



	MakePlural.cardinals = true;
	MakePlural.ordinals = false;
	MakePlural.rules = { cardinal: {}, ordinal: {} };


	return MakePlural;
	}());
	/* jshint ignore:end */


	var validateParameterTypeNumber = function( value, name ) {
		validateParameterType(
			value,
			name,
			value === undefined || typeof value === "number",
			"Number"
		);
	};




	var validateParameterTypePluralType = function( value, name ) {
		validateParameterType(
			value,
			name,
			value === undefined || value === "cardinal" || value === "ordinal",
			"String \"cardinal\" or \"ordinal\""
		);
	};




	var pluralGeneratorFn = function( plural ) {
		return function pluralGenerator( value ) {
			validateParameterPresence( value, "value" );
			validateParameterTypeNumber( value, "value" );

			return plural( value );
		};
	};




	/**
	 * .plural( value )
	 *
	 * @value [Number]
	 *
	 * Return the corresponding form (zero | one | two | few | many | other) of a
	 * value given locale.
	 */
	Globalize.plural =
	Globalize.prototype.plural = function( value, options ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeNumber( value, "value" );
		return this.pluralGenerator( options )( value );
	};

	/**
	 * .pluralGenerator( [options] )
	 *
	 * Return a plural function (of the form below).
	 *
	 * fn( value )
	 *
	 * @value [Number]
	 *
	 * Return the corresponding form (zero | one | two | few | many | other) of a value given the
	 * default/instance locale.
	 */
	Globalize.pluralGenerator =
	Globalize.prototype.pluralGenerator = function( options ) {
		var args, cldr, isOrdinal, plural, returnFn, type;

		validateParameterTypePlainObject( options, "options" );

		options = options || {};
		cldr = this.cldr;

		args = [ options ];
		type = options.type || "cardinal";

		validateParameterTypePluralType( options.type, "options.type" );

		validateDefaultLocale( cldr );

		isOrdinal = type === "ordinal";

		cldr.on( "get", validateCldr );
		cldr.supplemental([ "plurals-type-" + type, "{language}" ]);
		cldr.off( "get", validateCldr );

		MakePlural.rules = {};
		MakePlural.rules[ type ] = cldr.supplemental( "plurals-type-" + type );

		plural = new MakePlural( cldr.attributes.language, {
			"ordinals": isOrdinal,
			"cardinals": !isOrdinal
		});

		returnFn = pluralGeneratorFn( plural );

		runtimeBind( args, cldr, returnFn, [ plural ] );

		return returnFn;
	};

	return Globalize;




	}));


/***/ },

/***/ 390:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Globalize v1.2.1
	 *
	 * http://github.com/jquery/globalize
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-12-14T18:34Z
	 */
	(function( root, factory ) {

		// UMD returnExports
		if ( true ) {

			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				!(function webpackMissingModule() { var e = new Error("Cannot find module \"cldr\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
				__webpack_require__(386),
				__webpack_require__(388),
				!(function webpackMissingModule() { var e = new Error("Cannot find module \"cldr/event\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
				!(function webpackMissingModule() { var e = new Error("Cannot find module \"cldr/supplemental\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if ( typeof exports === "object" ) {

			// Node, CommonJS
			module.exports = factory( require( "cldrjs" ), require( "../globalize" ) );
		} else {

			// Global
			factory( root.Cldr, root.Globalize );
		}
	}(this, function( Cldr, Globalize ) {

	var alwaysArray = Globalize._alwaysArray,
		formatMessage = Globalize._formatMessage,
		numberNumberingSystem = Globalize._numberNumberingSystem,
		numberPattern = Globalize._numberPattern,
		runtimeBind = Globalize._runtimeBind,
		stringPad = Globalize._stringPad,
		validateCldr = Globalize._validateCldr,
		validateDefaultLocale = Globalize._validateDefaultLocale,
		validateParameterPresence = Globalize._validateParameterPresence,
		validateParameterType = Globalize._validateParameterType,
		validateParameterTypeNumber = Globalize._validateParameterTypeNumber,
		validateParameterTypePlainObject = Globalize._validateParameterTypePlainObject;


	var validateParameterTypeCurrency = function( value, name ) {
		validateParameterType(
			value,
			name,
			value === undefined || typeof value === "string" && ( /^[A-Za-z]{3}$/ ).test( value ),
			"3-letter currency code string as defined by ISO 4217"
		);
	};




	/**
	 * supplementalOverride( currency, pattern, cldr )
	 *
	 * Return pattern with fraction digits overriden by supplemental currency data.
	 */
	var currencySupplementalOverride = function( currency, pattern, cldr ) {
		var digits,
			fraction = "",
			fractionData = cldr.supplemental([ "currencyData/fractions", currency ]) ||
				cldr.supplemental( "currencyData/fractions/DEFAULT" );

		digits = +fractionData._digits;

		if ( digits ) {
			fraction = "." + stringPad( "0", digits ).slice( 0, -1 ) + fractionData._rounding;
		}

		return pattern.replace( /\.(#+|0*[0-9]|0+[0-9]?)/g, fraction );
	};




	var objectFilter = function( object, testRe ) {
		var key,
			copy = {};

		for ( key in object ) {
			if ( testRe.test( key ) ) {
				copy[ key ] = object[ key ];
			}
		}

		return copy;
	};




	var currencyUnitPatterns = function( cldr ) {
		return objectFilter( cldr.main([
			"numbers",
			"currencyFormats-numberSystem-" + numberNumberingSystem( cldr )
		]), /^unitPattern/ );
	};




	/**
	 * codeProperties( currency, cldr )
	 *
	 * Return number pattern with the appropriate currency code in as literal.
	 */
	var currencyCodeProperties = function( currency, cldr ) {
		var pattern = numberPattern( "decimal", cldr );

		// The number of decimal places and the rounding for each currency is not locale-specific. Those
		// values overridden by Supplemental Currency Data.
		pattern = currencySupplementalOverride( currency, pattern, cldr );

		return {
			currency: currency,
			pattern: pattern,
			unitPatterns: currencyUnitPatterns( cldr )
		};
	};




	/**
	 * nameFormat( formattedNumber, pluralForm, properties )
	 *
	 * Return the appropriate name form currency format.
	 */
	var currencyNameFormat = function( formattedNumber, pluralForm, properties ) {
		var displayName, unitPattern,
			displayNames = properties.displayNames || {},
			unitPatterns = properties.unitPatterns;

		displayName = displayNames[ "displayName-count-" + pluralForm ] ||
			displayNames[ "displayName-count-other" ] ||
			displayNames.displayName ||
			properties.currency;
		unitPattern = unitPatterns[ "unitPattern-count-" + pluralForm ] ||
			unitPatterns[ "unitPattern-count-other" ];

		return formatMessage( unitPattern, [ formattedNumber, displayName ]);
	};




	var currencyFormatterFn = function( numberFormatter, pluralGenerator, properties ) {
		var fn;

		// Return formatter when style is "code" or "name".
		if ( pluralGenerator && properties ) {
			fn = function currencyFormatter( value ) {
				validateParameterPresence( value, "value" );
				validateParameterTypeNumber( value, "value" );
				return currencyNameFormat(
					numberFormatter( value ),
					pluralGenerator( value ),
					properties
				);
			};

		// Return formatter when style is "symbol" or "accounting".
		} else {
			fn = function currencyFormatter( value ) {
				return numberFormatter( value );
			};
		}

		return fn;
	};




	/**
	 * nameProperties( currency, cldr )
	 *
	 * Return number pattern with the appropriate currency code in as literal.
	 */
	var currencyNameProperties = function( currency, cldr ) {
		var properties = currencyCodeProperties( currency, cldr );

		properties.displayNames = objectFilter( cldr.main([
			"numbers/currencies",
			currency
		]), /^displayName/ );

		return properties;
	};




	/**
	 * Unicode regular expression for: everything except math symbols, currency signs, dingbats, and
	 * box-drawing characters.
	 *
	 * Generated by:
	 *
	 * regenerate()
	 *   .addRange( 0x0, 0x10FFFF )
	 *   .remove( require( "unicode-7.0.0/categories/S/symbols" ) ).toString();
	 *
	 * https://github.com/mathiasbynens/regenerate
	 * https://github.com/mathiasbynens/unicode-7.0.0
	 */
	var regexpNotS = /[\0-#%-\*,-;\?-\]_a-\{\}\x7F-\xA1\xA7\xAA\xAB\xAD\xB2\xB3\xB5-\xB7\xB9-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376-\u0383\u0386-\u03F5\u03F7-\u0481\u0483-\u058C\u0590-\u0605\u0609\u060A\u060C\u060D\u0610-\u06DD\u06DF-\u06E8\u06EA-\u06FC\u06FF-\u07F5\u07F7-\u09F1\u09F4-\u09F9\u09FC-\u0AF0\u0AF2-\u0B6F\u0B71-\u0BF2\u0BFB-\u0C7E\u0C80-\u0D78\u0D7A-\u0E3E\u0E40-\u0F00\u0F04-\u0F12\u0F14\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39-\u0FBD\u0FC6\u0FCD\u0FD0-\u0FD4\u0FD9-\u109D\u10A0-\u138F\u139A-\u17DA\u17DC-\u193F\u1941-\u19DD\u1A00-\u1B60\u1B6B-\u1B73\u1B7D-\u1FBC\u1FBE\u1FC2-\u1FCC\u1FD0-\u1FDC\u1FE0-\u1FEC\u1FF0-\u1FFC\u1FFF-\u2043\u2045-\u2051\u2053-\u2079\u207D-\u2089\u208D-\u209F\u20BE-\u20FF\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u218F\u2308-\u230B\u2329\u232A\u23FB-\u23FF\u2427-\u243F\u244B-\u249B\u24EA-\u24FF\u2768-\u2793\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2B74\u2B75\u2B96\u2B97\u2BBA-\u2BBC\u2BC9\u2BD2-\u2CE4\u2CEB-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u3003\u3005-\u3011\u3014-\u301F\u3021-\u3035\u3038-\u303D\u3040-\u309A\u309D-\u318F\u3192-\u3195\u31A0-\u31BF\u31E4-\u31FF\u321F-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u32FF\u3400-\u4DBF\u4E00-\uA48F\uA4C7-\uA6FF\uA717-\uA71F\uA722-\uA788\uA78B-\uA827\uA82C-\uA835\uA83A-\uAA76\uAA7A-\uAB5A\uAB5C-\uD7FF\uDC00-\uFB28\uFB2A-\uFBB1\uFBC2-\uFDFB\uFDFE-\uFE61\uFE63\uFE67\uFE68\uFE6A-\uFF03\uFF05-\uFF0A\uFF0C-\uFF1B\uFF1F-\uFF3D\uFF3F\uFF41-\uFF5B\uFF5D\uFF5F-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF]|\uD800[\uDC00-\uDD36\uDD40-\uDD78\uDD8A\uDD8B\uDD8D-\uDD8F\uDD9C-\uDD9F\uDDA1-\uDDCF\uDDFD-\uDFFF]|[\uD801\uD803-\uD819\uD81B-\uD82E\uD830-\uD833\uD836-\uD83A\uD83F-\uDBFF][\uDC00-\uDFFF]|\uD802[\uDC00-\uDC76\uDC79-\uDEC7\uDEC9-\uDFFF]|\uD81A[\uDC00-\uDF3B\uDF40-\uDF44\uDF46-\uDFFF]|\uD82F[\uDC00-\uDC9B\uDC9D-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD65-\uDD69\uDD6D-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDDDE-\uDDFF\uDE42-\uDE44\uDE46-\uDEFF\uDF57-\uDFFF]|\uD835[\uDC00-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFFF]|\uD83B[\uDC00-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDD0F\uDD2F\uDD6C-\uDD6F\uDD9B-\uDDE5\uDE03-\uDE0F\uDE3B-\uDE3F\uDE49-\uDE4F\uDE52-\uDEFF\uDF2D-\uDF2F\uDF7E\uDF7F\uDFCF-\uDFD3\uDFF8-\uDFFF]|\uD83D[\uDCFF\uDD4B-\uDD4F\uDD7A\uDDA4\uDE43\uDE44\uDED0-\uDEDF\uDEED-\uDEEF\uDEF4-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDFFF]|[\uD800-\uDBFF]/;




	/**
	 * symbolProperties( currency, cldr )
	 *
	 * Return pattern replacing `¤` with the appropriate currency symbol literal.
	 */
	var currencySymbolProperties = function( currency, cldr, options ) {
		var currencySpacing, pattern,
			regexp = {
				"[:digit:]": /\d/,
				"[:^S:]": regexpNotS
			},
			symbol = cldr.main([
				"numbers/currencies",
				currency,
				"symbol"
			]);

		currencySpacing = [ "beforeCurrency", "afterCurrency" ].map(function( position ) {
			return cldr.main([
				"numbers",
				"currencyFormats-numberSystem-" + numberNumberingSystem( cldr ),
				"currencySpacing",
				position
			]);
		});

		pattern = cldr.main([
			"numbers",
			"currencyFormats-numberSystem-" + numberNumberingSystem( cldr ),
			options.style === "accounting" ? "accounting" : "standard"
		]);

		pattern =

			// The number of decimal places and the rounding for each currency is not locale-specific.
			// Those values are overridden by Supplemental Currency Data.
			currencySupplementalOverride( currency, pattern, cldr )

			// Replace "¤" (\u00A4) with the appropriate symbol literal.
			.split( ";" ).map(function( pattern ) {

				return pattern.split( "\u00A4" ).map(function( part, i ) {
					var currencyMatch = regexp[ currencySpacing[ i ].currencyMatch ],
						surroundingMatch = regexp[ currencySpacing[ i ].surroundingMatch ],
						insertBetween = "";

					// For currencyMatch and surroundingMatch definitions, read [1].
					// When i === 0, beforeCurrency is being handled. Otherwise, afterCurrency.
					// 1: http://www.unicode.org/reports/tr35/tr35-numbers.html#Currencies
					currencyMatch = currencyMatch.test( symbol.charAt( i ? symbol.length - 1 : 0 ) );
					surroundingMatch = surroundingMatch.test(
						part.charAt( i ? 0 : part.length - 1 ).replace( /[#@,.]/g, "0" )
					);

					if ( currencyMatch && part && surroundingMatch ) {
						insertBetween = currencySpacing[ i ].insertBetween;
					}

					return ( i ? insertBetween : "" ) + part + ( i ? "" : insertBetween );
				}).join( "'" + symbol + "'" );
			}).join( ";" );

		return {
			pattern: pattern
		};
	};




	/**
	 * objectOmit( object, keys )
	 *
	 * Return a copy of the object, filtered to omit the blacklisted key or array of keys.
	 */
	var objectOmit = function( object, keys ) {
		var key,
			copy = {};

		keys = alwaysArray( keys );

		for ( key in object ) {
			if ( keys.indexOf( key ) === -1 ) {
				copy[ key ] = object[ key ];
			}
		}

		return copy;
	};




	function validateRequiredCldr( path, value ) {
		validateCldr( path, value, {
			skip: [ /supplemental\/currencyData\/fractions\/[A-Za-z]{3}$/ ]
		});
	}

	/**
	 * .currencyFormatter( currency [, options] )
	 *
	 * @currency [String] 3-letter currency code as defined by ISO 4217.
	 *
	 * @options [Object]:
	 * - style: [String] "symbol" (default), "accounting", "code" or "name".
	 * - see also number/format options.
	 *
	 * Return a function that formats a currency according to the given options and default/instance
	 * locale.
	 */
	Globalize.currencyFormatter =
	Globalize.prototype.currencyFormatter = function( currency, options ) {
		var args, cldr, numberFormatter, pluralGenerator, properties, returnFn, style;

		validateParameterPresence( currency, "currency" );
		validateParameterTypeCurrency( currency, "currency" );

		validateParameterTypePlainObject( options, "options" );

		cldr = this.cldr;
		options = options || {};

		args = [ currency, options ];
		style = options.style || "symbol";

		validateDefaultLocale( cldr );

		// Get properties given style ("symbol" default, "code" or "name").
		cldr.on( "get", validateRequiredCldr );
		properties = ({
			accounting: currencySymbolProperties,
			code: currencyCodeProperties,
			name: currencyNameProperties,
			symbol: currencySymbolProperties
		}[ style ] )( currency, cldr, options );
		cldr.off( "get", validateRequiredCldr );

		// options = options minus style, plus raw pattern.
		options = objectOmit( options, "style" );
		options.raw = properties.pattern;

		// Return formatter when style is "symbol" or "accounting".
		if ( style === "symbol" || style === "accounting" ) {
			numberFormatter = this.numberFormatter( options );

			returnFn = currencyFormatterFn( numberFormatter );

			runtimeBind( args, cldr, returnFn, [ numberFormatter ] );

		// Return formatter when style is "code" or "name".
		} else {
			numberFormatter = this.numberFormatter( options );
			pluralGenerator = this.pluralGenerator();

			returnFn = currencyFormatterFn( numberFormatter, pluralGenerator, properties );

			runtimeBind( args, cldr, returnFn, [ numberFormatter, pluralGenerator, properties ] );
		}

		return returnFn;
	};

	/**
	 * .currencyParser( currency [, options] )
	 *
	 * @currency [String] 3-letter currency code as defined by ISO 4217.
	 *
	 * @options [Object] see currencyFormatter.
	 *
	 * Return the currency parser according to the given options and the default/instance locale.
	 */
	Globalize.currencyParser =
	Globalize.prototype.currencyParser = function( /* currency, options */ ) {

		// TODO implement parser.

	};

	/**
	 * .formatCurrency( value, currency [, options] )
	 *
	 * @value [Number] number to be formatted.
	 *
	 * @currency [String] 3-letter currency code as defined by ISO 4217.
	 *
	 * @options [Object] see currencyFormatter.
	 *
	 * Format a currency according to the given options and the default/instance locale.
	 */
	Globalize.formatCurrency =
	Globalize.prototype.formatCurrency = function( value, currency, options ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeNumber( value, "value" );

		return this.currencyFormatter( currency, options )( value );
	};

	/**
	 * .parseCurrency( value, currency [, options] )
	 *
	 * @value [String]
	 *
	 * @currency [String] 3-letter currency code as defined by ISO 4217.
	 *
	 * @options [Object]: See currencyFormatter.
	 *
	 * Return the parsed currency or NaN when value is invalid.
	 */
	Globalize.parseCurrency =
	Globalize.prototype.parseCurrency = function( /* value, currency, options */ ) {
	};

	return Globalize;




	}));


/***/ },

/***/ 391:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Globalize v1.2.1
	 *
	 * http://github.com/jquery/globalize
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-12-14T18:34Z
	 */
	/*!
	 * Globalize v1.2.1 2016-12-14T18:34Z Released under the MIT license
	 * http://git.io/TrdQbw
	 */
	(function( root, factory ) {

		// UMD returnExports
		if ( true ) {

			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				!(function webpackMissingModule() { var e = new Error("Cannot find module \"cldr\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
				__webpack_require__(386),
				__webpack_require__(388),
				!(function webpackMissingModule() { var e = new Error("Cannot find module \"cldr/event\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
				!(function webpackMissingModule() { var e = new Error("Cannot find module \"cldr/supplemental\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if ( typeof exports === "object" ) {

			// Node, CommonJS
			module.exports = factory( require( "cldrjs" ), require( "../globalize" ) );
		} else {

			// Extend global
			factory( root.Cldr, root.Globalize );
		}
	}(this, function( Cldr, Globalize ) {

	var createError = Globalize._createError,
		createErrorUnsupportedFeature = Globalize._createErrorUnsupportedFeature,
		formatMessage = Globalize._formatMessage,
		numberSymbol = Globalize._numberSymbol,
		regexpEscape = Globalize._regexpEscape,
		removeLiteralQuotes = Globalize._removeLiteralQuotes,
		runtimeBind = Globalize._runtimeBind,
		stringPad = Globalize._stringPad,
		validateCldr = Globalize._validateCldr,
		validateDefaultLocale = Globalize._validateDefaultLocale,
		validateParameterPresence = Globalize._validateParameterPresence,
		validateParameterType = Globalize._validateParameterType,
		validateParameterTypePlainObject = Globalize._validateParameterTypePlainObject,
		validateParameterTypeString = Globalize._validateParameterTypeString;


	var validateParameterTypeDate = function( value, name ) {
		validateParameterType( value, name, value === undefined || value instanceof Date, "Date" );
	};




	var createErrorInvalidParameterValue = function( name, value ) {
		return createError( "E_INVALID_PAR_VALUE", "Invalid `{name}` value ({value}).", {
			name: name,
			value: value
		});
	};




	/**
	 * expandPattern( options, cldr )
	 *
	 * @options [Object] if String, it's considered a skeleton. Object accepts:
	 * - skeleton: [String] lookup availableFormat;
	 * - date: [String] ( "full" | "long" | "medium" | "short" );
	 * - time: [String] ( "full" | "long" | "medium" | "short" );
	 * - datetime: [String] ( "full" | "long" | "medium" | "short" );
	 * - raw: [String] For more info see datetime/format.js.
	 *
	 * @cldr [Cldr instance].
	 *
	 * Return the corresponding pattern.
	 * Eg for "en":
	 * - "GyMMMd" returns "MMM d, y G";
	 * - { skeleton: "GyMMMd" } returns "MMM d, y G";
	 * - { date: "full" } returns "EEEE, MMMM d, y";
	 * - { time: "full" } returns "h:mm:ss a zzzz";
	 * - { datetime: "full" } returns "EEEE, MMMM d, y 'at' h:mm:ss a zzzz";
	 * - { raw: "dd/mm" } returns "dd/mm";
	 */

	var dateExpandPattern = function( options, cldr ) {
		var dateSkeleton, result, skeleton, timeSkeleton, type;

		function combineDateTime( type, datePattern, timePattern ) {
			return formatMessage(
				cldr.main([
					"dates/calendars/gregorian/dateTimeFormats",
					type
				]),
				[ timePattern, datePattern ]
			);
		}

		switch ( true ) {
			case "skeleton" in options:
				skeleton = options.skeleton;
				result = cldr.main([
					"dates/calendars/gregorian/dateTimeFormats/availableFormats",
					skeleton
				]);
				if ( !result ) {
					timeSkeleton = skeleton.split( /[^hHKkmsSAzZOvVXx]/ ).slice( -1 )[ 0 ];
					dateSkeleton = skeleton.split( /[^GyYuUrQqMLlwWdDFgEec]/ )[ 0 ];
					if ( /(MMMM|LLLL).*[Ec]/.test( dateSkeleton ) ) {
						type = "full";
					} else if ( /MMMM/g.test( dateSkeleton ) ) {
						type = "long";
					} else if ( /MMM/g.test( dateSkeleton ) || /LLL/g.test( dateSkeleton ) ) {
						type = "medium";
					} else {
						type = "short";
					}
					result = combineDateTime( type,
						cldr.main([
							"dates/calendars/gregorian/dateTimeFormats/availableFormats",
							dateSkeleton
						]),
						cldr.main([
							"dates/calendars/gregorian/dateTimeFormats/availableFormats",
							timeSkeleton
						])
					);
				}
				break;

			case "date" in options:
			case "time" in options:
				result = cldr.main([
					"dates/calendars/gregorian",
					"date" in options ? "dateFormats" : "timeFormats",
					( options.date || options.time )
				]);
				break;

			case "datetime" in options:
				result = combineDateTime( options.datetime,
					cldr.main([ "dates/calendars/gregorian/dateFormats", options.datetime ]),
					cldr.main([ "dates/calendars/gregorian/timeFormats", options.datetime ])
				);
				break;

			case "raw" in options:
				result = options.raw;
				break;

			default:
				throw createErrorInvalidParameterValue({
					name: "options",
					value: options
				});
		}

		return result;
	};




	/**
	 * dayOfWeek( date, firstDay )
	 *
	 * @date
	 *
	 * @firstDay the result of `dateFirstDayOfWeek( cldr )`
	 *
	 * Return the day of the week normalized by the territory's firstDay [0-6].
	 * Eg for "mon":
	 * - return 0 if territory is GB, or BR, or DE, or FR (week starts on "mon");
	 * - return 1 if territory is US (week starts on "sun");
	 * - return 2 if territory is EG (week starts on "sat");
	 */
	var dateDayOfWeek = function( date, firstDay ) {
		return ( date.getDay() - firstDay + 7 ) % 7;
	};




	/**
	 * distanceInDays( from, to )
	 *
	 * Return the distance in days between from and to Dates.
	 */
	var dateDistanceInDays = function( from, to ) {
		var inDays = 864e5;
		return ( to.getTime() - from.getTime() ) / inDays;
	};




	/**
	 * startOf changes the input to the beginning of the given unit.
	 *
	 * For example, starting at the start of a day, resets hours, minutes
	 * seconds and milliseconds to 0. Starting at the month does the same, but
	 * also sets the date to 1.
	 *
	 * Returns the modified date
	 */
	var dateStartOf = function( date, unit ) {
		date = new Date( date.getTime() );
		switch ( unit ) {
			case "year":
				date.setMonth( 0 );
			/* falls through */
			case "month":
				date.setDate( 1 );
			/* falls through */
			case "day":
				date.setHours( 0 );
			/* falls through */
			case "hour":
				date.setMinutes( 0 );
			/* falls through */
			case "minute":
				date.setSeconds( 0 );
			/* falls through */
			case "second":
				date.setMilliseconds( 0 );
		}
		return date;
	};




	/**
	 * dayOfYear
	 *
	 * Return the distance in days of the date to the begin of the year [0-d].
	 */
	var dateDayOfYear = function( date ) {
		return Math.floor( dateDistanceInDays( dateStartOf( date, "year" ), date ) );
	};




	/**
	 * millisecondsInDay
	 */
	var dateMillisecondsInDay = function( date ) {

		// TODO Handle daylight savings discontinuities
		return date - dateStartOf( date, "day" );
	};




	var datePatternRe = ( /([a-z])\1*|'([^']|'')+'|''|./ig );




	/**
	 * hourFormat( date, format, timeSeparator, formatNumber )
	 *
	 * Return date's timezone offset according to the format passed.
	 * Eg for format when timezone offset is 180:
	 * - "+H;-H": -3
	 * - "+HHmm;-HHmm": -0300
	 * - "+HH:mm;-HH:mm": -03:00
	 */
	var dateTimezoneHourFormat = function( date, format, timeSeparator, formatNumber ) {
		var absOffset,
			offset = date.getTimezoneOffset();

		absOffset = Math.abs( offset );
		formatNumber = formatNumber || {
			1: function( value ) {
				return stringPad( value, 1 );
			},
			2: function( value ) {
				return stringPad( value, 2 );
			}
		};

		return format

			// Pick the correct sign side (+ or -).
			.split( ";" )[ offset > 0 ? 1 : 0 ]

			// Localize time separator
			.replace( ":", timeSeparator )

			// Update hours offset.
			.replace( /HH?/, function( match ) {
				return formatNumber[ match.length ]( Math.floor( absOffset / 60 ) );
			})

			// Update minutes offset and return.
			.replace( /mm/, function() {
				return formatNumber[ 2 ]( absOffset % 60 );
			});
	};




	var dateWeekDays = [ "sun", "mon", "tue", "wed", "thu", "fri", "sat" ];




	/**
	 * format( date, properties )
	 *
	 * @date [Date instance].
	 *
	 * @properties
	 *
	 * TODO Support other calendar types.
	 *
	 * Disclosure: this function borrows excerpts of dojo/date/locale.
	 */
	var dateFormat = function( date, numberFormatters, properties ) {
		var timeSeparator = properties.timeSeparator;

		return properties.pattern.replace( datePatternRe, function( current ) {
			var ret,
				chr = current.charAt( 0 ),
				length = current.length;

			if ( chr === "j" ) {

				// Locale preferred hHKk.
				// http://www.unicode.org/reports/tr35/tr35-dates.html#Time_Data
				chr = properties.preferredTime;
			}

			if ( chr === "Z" ) {

				// Z..ZZZ: same as "xxxx".
				if ( length < 4 ) {
					chr = "x";
					length = 4;

				// ZZZZ: same as "OOOO".
				} else if ( length < 5 ) {
					chr = "O";
					length = 4;

				// ZZZZZ: same as "XXXXX"
				} else {
					chr = "X";
					length = 5;
				}
			}

			switch ( chr ) {

				// Era
				case "G":
					ret = properties.eras[ date.getFullYear() < 0 ? 0 : 1 ];
					break;

				// Year
				case "y":

					// Plain year.
					// The length specifies the padding, but for two letters it also specifies the
					// maximum length.
					ret = date.getFullYear();
					if ( length === 2 ) {
						ret = String( ret );
						ret = +ret.substr( ret.length - 2 );
					}
					break;

				case "Y":

					// Year in "Week of Year"
					// The length specifies the padding, but for two letters it also specifies the
					// maximum length.
					// yearInWeekofYear = date + DaysInAWeek - (dayOfWeek - firstDay) - minDays
					ret = new Date( date.getTime() );
					ret.setDate(
						ret.getDate() + 7 -
						dateDayOfWeek( date, properties.firstDay ) -
						properties.firstDay -
						properties.minDays
					);
					ret = ret.getFullYear();
					if ( length === 2 ) {
						ret = String( ret );
						ret = +ret.substr( ret.length - 2 );
					}
					break;

				// Quarter
				case "Q":
				case "q":
					ret = Math.ceil( ( date.getMonth() + 1 ) / 3 );
					if ( length > 2 ) {
						ret = properties.quarters[ chr ][ length ][ ret ];
					}
					break;

				// Month
				case "M":
				case "L":
					ret = date.getMonth() + 1;
					if ( length > 2 ) {
						ret = properties.months[ chr ][ length ][ ret ];
					}
					break;

				// Week
				case "w":

					// Week of Year.
					// woy = ceil( ( doy + dow of 1/1 ) / 7 ) - minDaysStuff ? 1 : 0.
					// TODO should pad on ww? Not documented, but I guess so.
					ret = dateDayOfWeek( dateStartOf( date, "year" ), properties.firstDay );
					ret = Math.ceil( ( dateDayOfYear( date ) + ret ) / 7 ) -
						( 7 - ret >= properties.minDays ? 0 : 1 );
					break;

				case "W":

					// Week of Month.
					// wom = ceil( ( dom + dow of `1/month` ) / 7 ) - minDaysStuff ? 1 : 0.
					ret = dateDayOfWeek( dateStartOf( date, "month" ), properties.firstDay );
					ret = Math.ceil( ( date.getDate() + ret ) / 7 ) -
						( 7 - ret >= properties.minDays ? 0 : 1 );
					break;

				// Day
				case "d":
					ret = date.getDate();
					break;

				case "D":
					ret = dateDayOfYear( date ) + 1;
					break;

				case "F":

					// Day of Week in month. eg. 2nd Wed in July.
					ret = Math.floor( date.getDate() / 7 ) + 1;
					break;

				// Week day
				case "e":
				case "c":
					if ( length <= 2 ) {

						// Range is [1-7] (deduced by example provided on documentation)
						// TODO Should pad with zeros (not specified in the docs)?
						ret = dateDayOfWeek( date, properties.firstDay ) + 1;
						break;
					}

				/* falls through */
				case "E":
					ret = dateWeekDays[ date.getDay() ];
					ret = properties.days[ chr ][ length ][ ret ];
					break;

				// Period (AM or PM)
				case "a":
					ret = properties.dayPeriods[ date.getHours() < 12 ? "am" : "pm" ];
					break;

				// Hour
				case "h": // 1-12
					ret = ( date.getHours() % 12 ) || 12;
					break;

				case "H": // 0-23
					ret = date.getHours();
					break;

				case "K": // 0-11
					ret = date.getHours() % 12;
					break;

				case "k": // 1-24
					ret = date.getHours() || 24;
					break;

				// Minute
				case "m":
					ret = date.getMinutes();
					break;

				// Second
				case "s":
					ret = date.getSeconds();
					break;

				case "S":
					ret = Math.round( date.getMilliseconds() * Math.pow( 10, length - 3 ) );
					break;

				case "A":
					ret = Math.round( dateMillisecondsInDay( date ) * Math.pow( 10, length - 3 ) );
					break;

				// Zone
				case "z":
				case "O":

					// O: "{gmtFormat}+H;{gmtFormat}-H" or "{gmtZeroFormat}", eg. "GMT-8" or "GMT".
					// OOOO: "{gmtFormat}{hourFormat}" or "{gmtZeroFormat}", eg. "GMT-08:00" or "GMT".
					if ( date.getTimezoneOffset() === 0 ) {
						ret = properties.gmtZeroFormat;
					} else {
						ret = dateTimezoneHourFormat(
							date,
							length < 4 ? "+H;-H" : properties.tzLongHourFormat,
							timeSeparator,
							numberFormatters
						);
						ret = properties.gmtFormat.replace( /\{0\}/, ret );
					}
					break;

				case "X":

					// Same as x*, except it uses "Z" for zero offset.
					if ( date.getTimezoneOffset() === 0 ) {
						ret = "Z";
						break;
					}

				/* falls through */
				case "x":

					// x: hourFormat("+HH;-HH")
					// xx or xxxx: hourFormat("+HHmm;-HHmm")
					// xxx or xxxxx: hourFormat("+HH:mm;-HH:mm")
					ret = length === 1 ? "+HH;-HH" : ( length % 2 ? "+HH:mm;-HH:mm" : "+HHmm;-HHmm" );
					ret = dateTimezoneHourFormat( date, ret, ":" );
					break;

				// timeSeparator
				case ":":
					ret = timeSeparator;
					break;

				// ' literals.
				case "'":
					ret = removeLiteralQuotes( current );
					break;

				// Anything else is considered a literal, including [ ,:/.@#], chinese, japonese, and
				// arabic characters.
				default:
					ret = current;
			}
			if ( typeof ret === "number" ) {
				ret = numberFormatters[ length ]( ret );
			}
			return ret;
		});
	};




	var dateFormatterFn = function( numberFormatters, properties ) {
		return function dateFormatter( value ) {
			validateParameterPresence( value, "value" );
			validateParameterTypeDate( value, "value" );

			return dateFormat( value, numberFormatters, properties );
		};

	};




	/**
	 * firstDayOfWeek
	 */
	var dateFirstDayOfWeek = function( cldr ) {
		return dateWeekDays.indexOf( cldr.supplemental.weekData.firstDay() );
	};




	/**
	 * properties( pattern, cldr )
	 *
	 * @pattern [String] raw pattern.
	 * ref: http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Format_Patterns
	 *
	 * @cldr [Cldr instance].
	 *
	 * Return the properties given the pattern and cldr.
	 *
	 * TODO Support other calendar types.
	 */
	var dateFormatProperties = function( pattern, cldr ) {
		var properties = {
				numberFormatters: {},
				pattern: pattern,
				timeSeparator: numberSymbol( "timeSeparator", cldr )
			},
			widths = [ "abbreviated", "wide", "narrow" ];

		function setNumberFormatterPattern( pad ) {
			properties.numberFormatters[ pad ] = stringPad( "", pad );
		}

		pattern.replace( datePatternRe, function( current ) {
			var formatNumber,
				chr = current.charAt( 0 ),
				length = current.length;

			if ( chr === "j" ) {

				// Locale preferred hHKk.
				// http://www.unicode.org/reports/tr35/tr35-dates.html#Time_Data
				properties.preferredTime = chr = cldr.supplemental.timeData.preferred();
			}

			// ZZZZ: same as "OOOO".
			if ( chr === "Z" && length === 4 ) {
				chr = "O";
				length = 4;
			}

			switch ( chr ) {

				// Era
				case "G":
					properties.eras = cldr.main([
						"dates/calendars/gregorian/eras",
						length <= 3 ? "eraAbbr" : ( length === 4 ? "eraNames" : "eraNarrow" )
					]);
					break;

				// Year
				case "y":

					// Plain year.
					formatNumber = true;
					break;

				case "Y":

					// Year in "Week of Year"
					properties.firstDay = dateFirstDayOfWeek( cldr );
					properties.minDays = cldr.supplemental.weekData.minDays();
					formatNumber = true;
					break;

				case "u": // Extended year. Need to be implemented.
				case "U": // Cyclic year name. Need to be implemented.
					throw createErrorUnsupportedFeature({
						feature: "year pattern `" + chr + "`"
					});

				// Quarter
				case "Q":
				case "q":
					if ( length > 2 ) {
						if ( !properties.quarters ) {
							properties.quarters = {};
						}
						if ( !properties.quarters[ chr ] ) {
							properties.quarters[ chr ] = {};
						}
						properties.quarters[ chr ][ length ] = cldr.main([
							"dates/calendars/gregorian/quarters",
							chr === "Q" ? "format" : "stand-alone",
							widths[ length - 3 ]
						]);
					} else {
						formatNumber = true;
					}
					break;

				// Month
				case "M":
				case "L":
					if ( length > 2 ) {
						if ( !properties.months ) {
							properties.months = {};
						}
						if ( !properties.months[ chr ] ) {
							properties.months[ chr ] = {};
						}
						properties.months[ chr ][ length ] = cldr.main([
							"dates/calendars/gregorian/months",
							chr === "M" ? "format" : "stand-alone",
							widths[ length - 3 ]
						]);
					} else {
						formatNumber = true;
					}
					break;

				// Week - Week of Year (w) or Week of Month (W).
				case "w":
				case "W":
					properties.firstDay = dateFirstDayOfWeek( cldr );
					properties.minDays = cldr.supplemental.weekData.minDays();
					formatNumber = true;
					break;

				// Day
				case "d":
				case "D":
				case "F":
					formatNumber = true;
					break;

				case "g":

					// Modified Julian day. Need to be implemented.
					throw createErrorUnsupportedFeature({
						feature: "Julian day pattern `g`"
					});

				// Week day
				case "e":
				case "c":
					if ( length <= 2 ) {
						properties.firstDay = dateFirstDayOfWeek( cldr );
						formatNumber = true;
						break;
					}

				/* falls through */
				case "E":
					if ( !properties.days ) {
						properties.days = {};
					}
					if ( !properties.days[ chr ] ) {
						properties.days[ chr ] = {};
					}
					if ( length === 6 ) {

						// If short day names are not explicitly specified, abbreviated day names are
						// used instead.
						// http://www.unicode.org/reports/tr35/tr35-dates.html#months_days_quarters_eras
						// http://unicode.org/cldr/trac/ticket/6790
						properties.days[ chr ][ length ] = cldr.main([
								"dates/calendars/gregorian/days",
								chr === "c" ? "stand-alone" : "format",
								"short"
							]) || cldr.main([
								"dates/calendars/gregorian/days",
								chr === "c" ? "stand-alone" : "format",
								"abbreviated"
							]);
					} else {
						properties.days[ chr ][ length ] = cldr.main([
							"dates/calendars/gregorian/days",
							chr === "c" ? "stand-alone" : "format",
							widths[ length < 3 ? 0 : length - 3 ]
						]);
					}
					break;

				// Period (AM or PM)
				case "a":
					properties.dayPeriods = cldr.main(
						"dates/calendars/gregorian/dayPeriods/format/wide"
					);
					break;

				// Hour
				case "h": // 1-12
				case "H": // 0-23
				case "K": // 0-11
				case "k": // 1-24

				// Minute
				case "m":

				// Second
				case "s":
				case "S":
				case "A":
					formatNumber = true;
					break;

				// Zone
				case "z":
				case "O":

					// O: "{gmtFormat}+H;{gmtFormat}-H" or "{gmtZeroFormat}", eg. "GMT-8" or "GMT".
					// OOOO: "{gmtFormat}{hourFormat}" or "{gmtZeroFormat}", eg. "GMT-08:00" or "GMT".
					properties.gmtFormat = cldr.main( "dates/timeZoneNames/gmtFormat" );
					properties.gmtZeroFormat = cldr.main( "dates/timeZoneNames/gmtZeroFormat" );
					properties.tzLongHourFormat = cldr.main( "dates/timeZoneNames/hourFormat" );

				/* falls through */
				case "Z":
				case "X":
				case "x":
					setNumberFormatterPattern( 1 );
					setNumberFormatterPattern( 2 );
					break;

				case "v":
				case "V":
					throw createErrorUnsupportedFeature({
						feature: "timezone pattern `" + chr + "`"
					});
			}

			if ( formatNumber ) {
				setNumberFormatterPattern( length );
			}
		});

		return properties;
	};




	/**
	 * isLeapYear( year )
	 *
	 * @year [Number]
	 *
	 * Returns an indication whether the specified year is a leap year.
	 */
	var dateIsLeapYear = function( year ) {
		return new Date( year, 1, 29 ).getMonth() === 1;
	};




	/**
	 * lastDayOfMonth( date )
	 *
	 * @date [Date]
	 *
	 * Return the last day of the given date's month
	 */
	var dateLastDayOfMonth = function( date ) {
		return new Date( date.getFullYear(), date.getMonth() + 1, 0 ).getDate();
	};




	/**
	 * Differently from native date.setDate(), this function returns a date whose
	 * day remains inside the month boundaries. For example:
	 *
	 * setDate( FebDate, 31 ): a "Feb 28" date.
	 * setDate( SepDate, 31 ): a "Sep 30" date.
	 */
	var dateSetDate = function( date, day ) {
		var lastDay = new Date( date.getFullYear(), date.getMonth() + 1, 0 ).getDate();

		date.setDate( day < 1 ? 1 : day < lastDay ? day : lastDay );
	};




	/**
	 * Differently from native date.setMonth(), this function adjusts date if
	 * needed, so final month is always the one set.
	 *
	 * setMonth( Jan31Date, 1 ): a "Feb 28" date.
	 * setDate( Jan31Date, 8 ): a "Sep 30" date.
	 */
	var dateSetMonth = function( date, month ) {
		var originalDate = date.getDate();

		date.setDate( 1 );
		date.setMonth( month );
		dateSetDate( date, originalDate );
	};




	var outOfRange = function( value, low, high ) {
		return value < low || value > high;
	};




	/**
	 * parse( value, tokens, properties )
	 *
	 * @value [String] string date.
	 *
	 * @tokens [Object] tokens returned by date/tokenizer.
	 *
	 * @properties [Object] output returned by date/tokenizer-properties.
	 *
	 * ref: http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Format_Patterns
	 */
	var dateParse = function( value, tokens, properties ) {
		var amPm, day, daysOfYear, month, era, hour, hour12, timezoneOffset, valid,
			YEAR = 0,
			MONTH = 1,
			DAY = 2,
			HOUR = 3,
			MINUTE = 4,
			SECOND = 5,
			MILLISECONDS = 6,
			date = new Date(),
			truncateAt = [],
			units = [ "year", "month", "day", "hour", "minute", "second", "milliseconds" ];

		if ( !tokens.length ) {
			return null;
		}

		valid = tokens.every(function( token ) {
			var century, chr, value, length;

			if ( token.type === "literal" ) {

				// continue
				return true;
			}

			chr = token.type.charAt( 0 );
			length = token.type.length;

			if ( chr === "j" ) {

				// Locale preferred hHKk.
				// http://www.unicode.org/reports/tr35/tr35-dates.html#Time_Data
				chr = properties.preferredTimeData;
			}

			switch ( chr ) {

				// Era
				case "G":
					truncateAt.push( YEAR );
					era = +token.value;
					break;

				// Year
				case "y":
					value = token.value;
					if ( length === 2 ) {
						if ( outOfRange( value, 0, 99 ) ) {
							return false;
						}

						// mimic dojo/date/locale: choose century to apply, according to a sliding
						// window of 80 years before and 20 years after present year.
						century = Math.floor( date.getFullYear() / 100 ) * 100;
						value += century;
						if ( value > date.getFullYear() + 20 ) {
							value -= 100;
						}
					}
					date.setFullYear( value );
					truncateAt.push( YEAR );
					break;

				case "Y": // Year in "Week of Year"
					throw createErrorUnsupportedFeature({
						feature: "year pattern `" + chr + "`"
					});

				// Quarter (skip)
				case "Q":
				case "q":
					break;

				// Month
				case "M":
				case "L":
					if ( length <= 2 ) {
						value = token.value;
					} else {
						value = +token.value;
					}
					if ( outOfRange( value, 1, 12 ) ) {
						return false;
					}

					// Setting the month later so that we have the correct year and can determine
					// the correct last day of February in case of leap year.
					month = value;
					truncateAt.push( MONTH );
					break;

				// Week (skip)
				case "w": // Week of Year.
				case "W": // Week of Month.
					break;

				// Day
				case "d":
					day = token.value;
					truncateAt.push( DAY );
					break;

				case "D":
					daysOfYear = token.value;
					truncateAt.push( DAY );
					break;

				case "F":

					// Day of Week in month. eg. 2nd Wed in July.
					// Skip
					break;

				// Week day
				case "e":
				case "c":
				case "E":

					// Skip.
					// value = arrayIndexOf( dateWeekDays, token.value );
					break;

				// Period (AM or PM)
				case "a":
					amPm = token.value;
					break;

				// Hour
				case "h": // 1-12
					value = token.value;
					if ( outOfRange( value, 1, 12 ) ) {
						return false;
					}
					hour = hour12 = true;
					date.setHours( value === 12 ? 0 : value );
					truncateAt.push( HOUR );
					break;

				case "K": // 0-11
					value = token.value;
					if ( outOfRange( value, 0, 11 ) ) {
						return false;
					}
					hour = hour12 = true;
					date.setHours( value );
					truncateAt.push( HOUR );
					break;

				case "k": // 1-24
					value = token.value;
					if ( outOfRange( value, 1, 24 ) ) {
						return false;
					}
					hour = true;
					date.setHours( value === 24 ? 0 : value );
					truncateAt.push( HOUR );
					break;

				case "H": // 0-23
					value = token.value;
					if ( outOfRange( value, 0, 23 ) ) {
						return false;
					}
					hour = true;
					date.setHours( value );
					truncateAt.push( HOUR );
					break;

				// Minute
				case "m":
					value = token.value;
					if ( outOfRange( value, 0, 59 ) ) {
						return false;
					}
					date.setMinutes( value );
					truncateAt.push( MINUTE );
					break;

				// Second
				case "s":
					value = token.value;
					if ( outOfRange( value, 0, 59 ) ) {
						return false;
					}
					date.setSeconds( value );
					truncateAt.push( SECOND );
					break;

				case "A":
					date.setHours( 0 );
					date.setMinutes( 0 );
					date.setSeconds( 0 );

				/* falls through */
				case "S":
					value = Math.round( token.value * Math.pow( 10, 3 - length ) );
					date.setMilliseconds( value );
					truncateAt.push( MILLISECONDS );
					break;

				// Zone
				case "Z":
				case "z":
				case "O":
				case "X":
				case "x":
					timezoneOffset = token.value - date.getTimezoneOffset();
					break;
			}

			return true;
		});

		if ( !valid ) {
			return null;
		}

		// 12-hour format needs AM or PM, 24-hour format doesn't, ie. return null
		// if amPm && !hour12 || !amPm && hour12.
		if ( hour && !( !amPm ^ hour12 ) ) {
			return null;
		}

		if ( era === 0 ) {

			// 1 BC = year 0
			date.setFullYear( date.getFullYear() * -1 + 1 );
		}

		if ( month !== undefined ) {
			dateSetMonth( date, month - 1 );
		}

		if ( day !== undefined ) {
			if ( outOfRange( day, 1, dateLastDayOfMonth( date ) ) ) {
				return null;
			}
			date.setDate( day );
		} else if ( daysOfYear !== undefined ) {
			if ( outOfRange( daysOfYear, 1, dateIsLeapYear( date.getFullYear() ) ? 366 : 365 ) ) {
				return null;
			}
			date.setMonth( 0 );
			date.setDate( daysOfYear );
		}

		if ( hour12 && amPm === "pm" ) {
			date.setHours( date.getHours() + 12 );
		}

		if ( timezoneOffset ) {
			date.setMinutes( date.getMinutes() + timezoneOffset );
		}

		// Truncate date at the most precise unit defined. Eg.
		// If value is "12/31", and pattern is "MM/dd":
		// => new Date( <current Year>, 12, 31, 0, 0, 0, 0 );
		truncateAt = Math.max.apply( null, truncateAt );
		date = dateStartOf( date, units[ truncateAt ] );

		return date;
	};




	/**
	 * Generated by:
	 *
	 * regenerate().add( require( "unicode-7.0.0/categories/N/symbols" ) ).toString();
	 *
	 * https://github.com/mathiasbynens/regenerate
	 * https://github.com/mathiasbynens/unicode-7.0.0
	 */
	var regexpN = /[0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]|\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDD16-\uDD1B\uDE40-\uDE47\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDE60-\uDE7E]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9]|\uD806[\uDCE0-\uDCF2]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59\uDF5B-\uDF61]|\uD834[\uDF60-\uDF71]|\uD835[\uDFCE-\uDFFF]|\uD83A[\uDCC7-\uDCCF]|\uD83C[\uDD00-\uDD0C]/;




	/**
	 * tokenizer( value, pattern, properties )
	 *
	 * @value [String] string date.
	 *
	 * @properties [Object] output returned by date/tokenizer-properties.
	 *
	 * Returns an Array of tokens, eg. value "5 o'clock PM", pattern "h 'o''clock' a":
	 * [{
	 *   type: "h",
	 *   lexeme: "5"
	 * }, {
	 *   type: "literal",
	 *   lexeme: " "
	 * }, {
	 *   type: "literal",
	 *   lexeme: "o'clock"
	 * }, {
	 *   type: "literal",
	 *   lexeme: " "
	 * }, {
	 *   type: "a",
	 *   lexeme: "PM",
	 *   value: "pm"
	 * }]
	 *
	 * OBS: lexeme's are always String and may return invalid ranges depending of the token type.
	 * Eg. "99" for month number.
	 *
	 * Return an empty Array when not successfully parsed.
	 */
	var dateTokenizer = function( value, numberParser, properties ) {
		var valid,
			timeSeparator = properties.timeSeparator,
			tokens = [],
			widths = [ "abbreviated", "wide", "narrow" ];

		valid = properties.pattern.match( datePatternRe ).every(function( current ) {
			var chr, length, numeric, tokenRe,
				token = {};

			function hourFormatParse( tokenRe, numberParser ) {
				var aux = value.match( tokenRe );
				numberParser = numberParser || function( value ) {
					return +value;
				};

				if ( !aux ) {
					return false;
				}

				// hourFormat containing H only, e.g., `+H;-H`
				if ( aux.length < 8 ) {
					token.value =
						( aux[ 1 ] ? -numberParser( aux[ 1 ] ) : numberParser( aux[ 4 ] ) ) * 60;

				// hourFormat containing H and m, e.g., `+HHmm;-HHmm`
				} else {
					token.value =
						( aux[ 1 ] ? -numberParser( aux[ 1 ] ) : numberParser( aux[ 7 ] ) ) * 60 +
						( aux[ 1 ] ? -numberParser( aux[ 4 ] ) : numberParser( aux[ 10 ] ) );
				}

				return true;
			}

			// Transform:
			// - "+H;-H" -> /\+(\d\d?)|-(\d\d?)/
			// - "+HH;-HH" -> /\+(\d\d)|-(\d\d)/
			// - "+HHmm;-HHmm" -> /\+(\d\d)(\d\d)|-(\d\d)(\d\d)/
			// - "+HH:mm;-HH:mm" -> /\+(\d\d):(\d\d)|-(\d\d):(\d\d)/
			//
			// If gmtFormat is GMT{0}, the regexp must fill {0} in each side, e.g.:
			// - "+H;-H" -> /GMT\+(\d\d?)|GMT-(\d\d?)/
			function hourFormatRe( hourFormat, gmtFormat, timeSeparator ) {
				var re;

				if ( !gmtFormat ) {
					gmtFormat = "{0}";
				}

				re = hourFormat
					.replace( "+", "\\+" )

					// Unicode equivalent to (\\d\\d)
					.replace( /HH|mm/g, "((" + regexpN.source + ")(" + regexpN.source + "))" )

					// Unicode equivalent to (\\d\\d?)
					.replace( /H|m/g, "((" + regexpN.source + ")(" + regexpN.source + ")?)" );

				if ( timeSeparator ) {
					re = re.replace( /:/g, timeSeparator );
				}

				re = re.split( ";" ).map(function( part ) {
					return gmtFormat.replace( "{0}", part );
				}).join( "|" );

				return new RegExp( re );
			}

			function oneDigitIfLengthOne() {
				if ( length === 1 ) {

					// Unicode equivalent to /\d/
					numeric = true;
					return tokenRe = regexpN;
				}
			}

			function oneOrTwoDigitsIfLengthOne() {
				if ( length === 1 ) {

					// Unicode equivalent to /\d\d?/
					numeric = true;
					return tokenRe = new RegExp( "(" + regexpN.source + ")(" + regexpN.source + ")?" );
				}
			}

			function twoDigitsIfLengthTwo() {
				if ( length === 2 ) {

					// Unicode equivalent to /\d\d/
					numeric = true;
					return tokenRe = new RegExp( "(" + regexpN.source + ")(" + regexpN.source + ")" );
				}
			}

			// Brute-force test every locale entry in an attempt to match the given value.
			// Return the first found one (and set token accordingly), or null.
			function lookup( path ) {
				var i, re,
					data = properties[ path.join( "/" ) ];

				for ( i in data ) {
					re = new RegExp( "^" + data[ i ] );
					if ( re.test( value ) ) {
						token.value = i;
						return tokenRe = new RegExp( data[ i ] );
					}
				}
				return null;
			}

			token.type = current;
			chr = current.charAt( 0 ),
			length = current.length;

			if ( chr === "Z" ) {

				// Z..ZZZ: same as "xxxx".
				if ( length < 4 ) {
					chr = "x";
					length = 4;

				// ZZZZ: same as "OOOO".
				} else if ( length < 5 ) {
					chr = "O";
					length = 4;

				// ZZZZZ: same as "XXXXX"
				} else {
					chr = "X";
					length = 5;
				}
			}

			switch ( chr ) {

				// Era
				case "G":
					lookup([
						"gregorian/eras",
						length <= 3 ? "eraAbbr" : ( length === 4 ? "eraNames" : "eraNarrow" )
					]);
					break;

				// Year
				case "y":
				case "Y":
					numeric = true;

					// number l=1:+, l=2:{2}, l=3:{3,}, l=4:{4,}, ...
					if ( length === 1 ) {

						// Unicode equivalent to /\d+/.
						tokenRe = new RegExp( "(" + regexpN.source + ")+" );
					} else if ( length === 2 ) {

						// Unicode equivalent to /\d\d/
						tokenRe = new RegExp( "(" + regexpN.source + ")(" + regexpN.source + ")" );
					} else {

						// Unicode equivalent to /\d{length,}/
						tokenRe = new RegExp( "(" + regexpN.source + "){" + length + ",}" );
					}
					break;

				// Quarter
				case "Q":
				case "q":

					// number l=1:{1}, l=2:{2}.
					// lookup l=3...
					oneDigitIfLengthOne() || twoDigitsIfLengthTwo() || lookup([
						"gregorian/quarters",
						chr === "Q" ? "format" : "stand-alone",
						widths[ length - 3 ]
					]);
					break;

				// Month
				case "M":
				case "L":

					// number l=1:{1,2}, l=2:{2}.
					// lookup l=3...
					oneOrTwoDigitsIfLengthOne() || twoDigitsIfLengthTwo() || lookup([
						"gregorian/months",
						chr === "M" ? "format" : "stand-alone",
						widths[ length - 3 ]
					]);
					break;

				// Day
				case "D":

					// number {l,3}.
					if ( length <= 3 ) {

						// Unicode equivalent to /\d{length,3}/
						numeric = true;
						tokenRe = new RegExp( "(" + regexpN.source + "){" + length + ",3}" );
					}
					break;

				case "W":
				case "F":

					// number l=1:{1}.
					oneDigitIfLengthOne();
					break;

				// Week day
				case "e":
				case "c":

					// number l=1:{1}, l=2:{2}.
					// lookup for length >=3.
					if ( length <= 2 ) {
						oneDigitIfLengthOne() || twoDigitsIfLengthTwo();
						break;
					}

				/* falls through */
				case "E":
					if ( length === 6 ) {

						// Note: if short day names are not explicitly specified, abbreviated day
						// names are used instead http://www.unicode.org/reports/tr35/tr35-dates.html#months_days_quarters_eras
						lookup([
							"gregorian/days",
							[ chr === "c" ? "stand-alone" : "format" ],
							"short"
						]) || lookup([
							"gregorian/days",
							[ chr === "c" ? "stand-alone" : "format" ],
							"abbreviated"
						]);
					} else {
						lookup([
							"gregorian/days",
							[ chr === "c" ? "stand-alone" : "format" ],
							widths[ length < 3 ? 0 : length - 3 ]
						]);
					}
					break;

				// Period (AM or PM)
				case "a":
					lookup([
						"gregorian/dayPeriods/format/wide"
					]);
					break;

				// Week, Day, Hour, Minute, or Second
				case "w":
				case "d":
				case "h":
				case "H":
				case "K":
				case "k":
				case "j":
				case "m":
				case "s":

					// number l1:{1,2}, l2:{2}.
					oneOrTwoDigitsIfLengthOne() || twoDigitsIfLengthTwo();
					break;

				case "S":

					// number {l}.

					// Unicode equivalent to /\d{length}/
					numeric = true;
					tokenRe = new RegExp( "(" + regexpN.source + "){" + length + "}" );
					break;

				case "A":

					// number {l+5}.

					// Unicode equivalent to /\d{length+5}/
					numeric = true;
					tokenRe = new RegExp( "(" + regexpN.source + "){" + ( length + 5 ) + "}" );
					break;

				// Zone
				case "z":
				case "O":

					// O: "{gmtFormat}+H;{gmtFormat}-H" or "{gmtZeroFormat}", eg. "GMT-8" or "GMT".
					// OOOO: "{gmtFormat}{hourFormat}" or "{gmtZeroFormat}", eg. "GMT-08:00" or "GMT".
					if ( value === properties[ "timeZoneNames/gmtZeroFormat" ] ) {
						token.value = 0;
						tokenRe = new RegExp( properties[ "timeZoneNames/gmtZeroFormat" ] );
					} else {
						tokenRe = hourFormatRe(
							length < 4 ? "+H;-H" : properties[ "timeZoneNames/hourFormat" ],
							properties[ "timeZoneNames/gmtFormat" ],
							timeSeparator
						);
						if ( !hourFormatParse( tokenRe, numberParser ) ) {
							return null;
						}
					}
					break;

				case "X":

					// Same as x*, except it uses "Z" for zero offset.
					if ( value === "Z" ) {
						token.value = 0;
						tokenRe = /Z/;
						break;
					}

				/* falls through */
				case "x":

					// x: hourFormat("+HH;-HH")
					// xx or xxxx: hourFormat("+HHmm;-HHmm")
					// xxx or xxxxx: hourFormat("+HH:mm;-HH:mm")
					tokenRe = hourFormatRe(
						length === 1 ? "+HH;-HH" : ( length % 2 ? "+HH:mm;-HH:mm" : "+HHmm;-HHmm" )
					);
					if ( !hourFormatParse( tokenRe ) ) {
						return null;
					}
					break;

				case "'":
					token.type = "literal";
					tokenRe = new RegExp( regexpEscape( removeLiteralQuotes( current ) ) );
					break;

				default:
					token.type = "literal";
					tokenRe = /./;
			}

			if ( !tokenRe ) {
				return false;
			}

			// Get lexeme and consume it.
			value = value.replace( new RegExp( "^" + tokenRe.source ), function( lexeme ) {
				token.lexeme = lexeme;
				if ( numeric ) {
					token.value = numberParser( lexeme );
				}
				return "";
			});

			if ( !token.lexeme ) {
				return false;
			}

			tokens.push( token );
			return true;
		});

		if ( value !== "" ) {
			valid = false;
		}

		return valid ? tokens : [];
	};




	var dateParserFn = function( numberParser, parseProperties, tokenizerProperties ) {
		return function dateParser( value ) {
			var tokens;

			validateParameterPresence( value, "value" );
			validateParameterTypeString( value, "value" );

			tokens = dateTokenizer( value, numberParser, tokenizerProperties );
			return dateParse( value, tokens, parseProperties ) || null;
		};
	};




	/**
	 * parseProperties( cldr )
	 *
	 * @cldr [Cldr instance].
	 *
	 * Return parser properties.
	 */
	var dateParseProperties = function( cldr ) {
		return {
			preferredTimeData: cldr.supplemental.timeData.preferred()
		};
	};




	/**
	 * tokenizerProperties( pattern, cldr )
	 *
	 * @pattern [String] raw pattern.
	 *
	 * @cldr [Cldr instance].
	 *
	 * Return Object with data that will be used by tokenizer.
	 */
	var dateTokenizerProperties = function( pattern, cldr ) {
		var properties = {
				pattern: pattern,
				timeSeparator: numberSymbol( "timeSeparator", cldr )
			},
			widths = [ "abbreviated", "wide", "narrow" ];

		function populateProperties( path, value ) {

			// The `dates` and `calendars` trim's purpose is to reduce properties' key size only.
			properties[ path.replace( /^.*\/dates\//, "" ).replace( /calendars\//, "" ) ] = value;
		}

		cldr.on( "get", populateProperties );

		pattern.match( datePatternRe ).forEach(function( current ) {
			var chr, length;

			chr = current.charAt( 0 ),
			length = current.length;

			if ( chr === "Z" && length < 5 ) {
					chr = "O";
					length = 4;
			}

			switch ( chr ) {

				// Era
				case "G":
					cldr.main([
						"dates/calendars/gregorian/eras",
						length <= 3 ? "eraAbbr" : ( length === 4 ? "eraNames" : "eraNarrow" )
					]);
					break;

				// Year
				case "u": // Extended year. Need to be implemented.
				case "U": // Cyclic year name. Need to be implemented.
					throw createErrorUnsupportedFeature({
						feature: "year pattern `" + chr + "`"
					});

				// Quarter
				case "Q":
				case "q":
					if ( length > 2 ) {
						cldr.main([
							"dates/calendars/gregorian/quarters",
							chr === "Q" ? "format" : "stand-alone",
							widths[ length - 3 ]
						]);
					}
					break;

				// Month
				case "M":
				case "L":

					// number l=1:{1,2}, l=2:{2}.
					// lookup l=3...
					if ( length > 2 ) {
						cldr.main([
							"dates/calendars/gregorian/months",
							chr === "M" ? "format" : "stand-alone",
							widths[ length - 3 ]
						]);
					}
					break;

				// Day
				case "g":

					// Modified Julian day. Need to be implemented.
					throw createErrorUnsupportedFeature({
						feature: "Julian day pattern `g`"
					});

				// Week day
				case "e":
				case "c":

					// lookup for length >=3.
					if ( length <= 2 ) {
						break;
					}

				/* falls through */
				case "E":
					if ( length === 6 ) {

						// Note: if short day names are not explicitly specified, abbreviated day
						// names are used instead http://www.unicode.org/reports/tr35/tr35-dates.html#months_days_quarters_eras
						cldr.main([
							"dates/calendars/gregorian/days",
							[ chr === "c" ? "stand-alone" : "format" ],
							"short"
						]) || cldr.main([
							"dates/calendars/gregorian/days",
							[ chr === "c" ? "stand-alone" : "format" ],
							"abbreviated"
						]);
					} else {
						cldr.main([
							"dates/calendars/gregorian/days",
							[ chr === "c" ? "stand-alone" : "format" ],
							widths[ length < 3 ? 0 : length - 3 ]
						]);
					}
					break;

				// Period (AM or PM)
				case "a":
					cldr.main([
						"dates/calendars/gregorian/dayPeriods/format/wide"
					]);
					break;

				// Zone
				case "z":
				case "O":
					cldr.main( "dates/timeZoneNames/gmtFormat" );
					cldr.main( "dates/timeZoneNames/gmtZeroFormat" );
					cldr.main( "dates/timeZoneNames/hourFormat" );
					break;

				case "v":
				case "V":
					throw createErrorUnsupportedFeature({
						feature: "timezone pattern `" + chr + "`"
					});
			}
		});

		cldr.off( "get", populateProperties );

		return properties;
	};




	function validateRequiredCldr( path, value ) {
		validateCldr( path, value, {
			skip: [
				/dates\/calendars\/gregorian\/dateTimeFormats\/availableFormats/,
				/dates\/calendars\/gregorian\/days\/.*\/short/,
				/supplemental\/timeData\/(?!001)/,
				/supplemental\/weekData\/(?!001)/
			]
		});
	}

	/**
	 * .dateFormatter( options )
	 *
	 * @options [Object] see date/expand_pattern for more info.
	 *
	 * Return a date formatter function (of the form below) according to the given options and the
	 * default/instance locale.
	 *
	 * fn( value )
	 *
	 * @value [Date]
	 *
	 * Return a function that formats a date according to the given `format` and the default/instance
	 * locale.
	 */
	Globalize.dateFormatter =
	Globalize.prototype.dateFormatter = function( options ) {
		var args, cldr, numberFormatters, pad, pattern, properties, returnFn;

		validateParameterTypePlainObject( options, "options" );

		cldr = this.cldr;
		options = options || { skeleton: "yMd" };

		args = [ options ];

		validateDefaultLocale( cldr );

		cldr.on( "get", validateRequiredCldr );
		pattern = dateExpandPattern( options, cldr );
		properties = dateFormatProperties( pattern, cldr );
		cldr.off( "get", validateRequiredCldr );

		// Create needed number formatters.
		numberFormatters = properties.numberFormatters;
		delete properties.numberFormatters;
		for ( pad in numberFormatters ) {
			numberFormatters[ pad ] = this.numberFormatter({
				raw: numberFormatters[ pad ]
			});
		}

		returnFn = dateFormatterFn( numberFormatters, properties );

		runtimeBind( args, cldr, returnFn, [ numberFormatters, properties ] );

		return returnFn;
	};

	/**
	 * .dateParser( options )
	 *
	 * @options [Object] see date/expand_pattern for more info.
	 *
	 * Return a function that parses a string date according to the given `formats` and the
	 * default/instance locale.
	 */
	Globalize.dateParser =
	Globalize.prototype.dateParser = function( options ) {
		var args, cldr, numberParser, parseProperties, pattern, tokenizerProperties, returnFn;

		validateParameterTypePlainObject( options, "options" );

		cldr = this.cldr;
		options = options || { skeleton: "yMd" };

		args = [ options ];

		validateDefaultLocale( cldr );

		cldr.on( "get", validateRequiredCldr );
		pattern = dateExpandPattern( options, cldr );
		tokenizerProperties = dateTokenizerProperties( pattern, cldr );
		parseProperties = dateParseProperties( cldr );
		cldr.off( "get", validateRequiredCldr );

		numberParser = this.numberParser({ raw: "0" });

		returnFn = dateParserFn( numberParser, parseProperties, tokenizerProperties );

		runtimeBind( args, cldr, returnFn, [ numberParser, parseProperties, tokenizerProperties ] );

		return returnFn;
	};

	/**
	 * .formatDate( value, options )
	 *
	 * @value [Date]
	 *
	 * @options [Object] see date/expand_pattern for more info.
	 *
	 * Formats a date or number according to the given options string and the default/instance locale.
	 */
	Globalize.formatDate =
	Globalize.prototype.formatDate = function( value, options ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeDate( value, "value" );

		return this.dateFormatter( options )( value );
	};

	/**
	 * .parseDate( value, options )
	 *
	 * @value [String]
	 *
	 * @options [Object] see date/expand_pattern for more info.
	 *
	 * Return a Date instance or null.
	 */
	Globalize.parseDate =
	Globalize.prototype.parseDate = function( value, options ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeString( value, "value" );

		return this.dateParser( options )( value );
	};

	return Globalize;




	}));


/***/ },

/***/ 392:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Globalize v1.2.1
	 *
	 * http://github.com/jquery/globalize
	 *
	 * Copyright 2010, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-12-14T18:34Z
	 */
	/*!
	 * Globalize v1.2.1 2016-12-14T18:34Z Released under the MIT license
	 * http://git.io/TrdQbw
	 */
	(function( root, factory ) {

		// UMD returnExports
		if ( true ) {

			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				!(function webpackMissingModule() { var e = new Error("Cannot find module \"cldr\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
				__webpack_require__(386),
				__webpack_require__(388),
				__webpack_require__(389),
				!(function webpackMissingModule() { var e = new Error("Cannot find module \"cldr/event\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
				!(function webpackMissingModule() { var e = new Error("Cannot find module \"cldr/supplemental\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if ( typeof exports === "object" ) {

			// Node, CommonJS
			module.exports = factory( require( "cldrjs" ), require( "../globalize" ) );
		} else {

			// Extend global
			factory( root.Cldr, root.Globalize );
		}
	}(this, function( Cldr, Globalize ) {

	var formatMessage = Globalize._formatMessage,
		runtimeBind = Globalize._runtimeBind,
		validateCldr = Globalize._validateCldr,
		validateDefaultLocale = Globalize._validateDefaultLocale,
		validateParameterPresence = Globalize._validateParameterPresence,
		validateParameterTypeString = Globalize._validateParameterTypeString,
		validateParameterTypeNumber = Globalize._validateParameterTypeNumber;


	/**
	 * format( value, numberFormatter, pluralGenerator, properties )
	 *
	 * @value [Number] The number to format
	 *
	 * @numberFormatter [String] A numberFormatter from Globalize.numberFormatter
	 *
	 * @pluralGenerator [String] A pluralGenerator from Globalize.pluralGenerator
	 *
	 * @properties [Object] containing relative time plural message.
	 *
	 * Format relative time.
	 */
	var relativeTimeFormat = function( value, numberFormatter, pluralGenerator, properties ) {

		var relativeTime,
			message = properties[ "relative-type-" + value ];

		if ( message ) {
			return message;
		}

		relativeTime = value <= 0 ? properties[ "relativeTime-type-past" ]
			: properties[ "relativeTime-type-future" ];

		value = Math.abs( value );

		message = relativeTime[ "relativeTimePattern-count-" + pluralGenerator( value ) ];
		return formatMessage( message, [ numberFormatter( value ) ] );
	};




	var relativeTimeFormatterFn = function( numberFormatter, pluralGenerator, properties ) {
		return function relativeTimeFormatter( value ) {
			validateParameterPresence( value, "value" );
			validateParameterTypeNumber( value, "value" );

			return relativeTimeFormat( value, numberFormatter, pluralGenerator, properties );
		};

	};




	/**
	 * properties( unit, cldr, options )
	 *
	 * @unit [String] eg. "day", "week", "month", etc.
	 *
	 * @cldr [Cldr instance].
	 *
	 * @options [Object]
	 * - form: [String] eg. "short" or "narrow". Or falsy for default long form.
	 *
	 * Return relative time properties.
	 */
	var relativeTimeProperties = function( unit, cldr, options ) {

		var form = options.form,
			raw, properties, key, match;

		if ( form ) {
			unit = unit + "-" + form;
		}

		raw = cldr.main( [ "dates", "fields", unit ] );
		properties = {
			"relativeTime-type-future": raw[ "relativeTime-type-future" ],
			"relativeTime-type-past": raw[ "relativeTime-type-past" ]
		};
		for ( key in raw ) {
			if ( raw.hasOwnProperty( key ) ) {
				match = /relative-type-(-?[0-9]+)/.exec( key );
				if ( match ) {
					properties[ key ] = raw[ key ];
				}
			}
		}

		return properties;
	};




	/**
	 * .formatRelativeTime( value, unit [, options] )
	 *
	 * @value [Number] The number of unit to format.
	 *
	 * @unit [String] see .relativeTimeFormatter() for details.
	 *
	 * @options [Object] see .relativeTimeFormatter() for details.
	 *
	 * Formats a relative time according to the given unit, options, and the default/instance locale.
	 */
	Globalize.formatRelativeTime =
	Globalize.prototype.formatRelativeTime = function( value, unit, options ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeNumber( value, "value" );

		return this.relativeTimeFormatter( unit, options )( value );
	};

	/**
	 * .relativeTimeFormatter( unit [, options ])
	 *
	 * @unit [String] String value indicating the unit to be formatted. eg. "day", "week", "month", etc.
	 *
	 * @options [Object]
	 * - form: [String] eg. "short" or "narrow". Or falsy for default long form.
	 *
	 * Returns a function that formats a relative time according to the given unit, options, and the
	 * default/instance locale.
	 */
	Globalize.relativeTimeFormatter =
	Globalize.prototype.relativeTimeFormatter = function( unit, options ) {
		var args, cldr, numberFormatter, pluralGenerator, properties, returnFn;

		validateParameterPresence( unit, "unit" );
		validateParameterTypeString( unit, "unit" );

		cldr = this.cldr;
		options = options || {};

		args = [ unit, options ];

		validateDefaultLocale( cldr );

		cldr.on( "get", validateCldr );
		properties = relativeTimeProperties( unit, cldr, options );
		cldr.off( "get", validateCldr );

		numberFormatter = this.numberFormatter( options );
		pluralGenerator = this.pluralGenerator();

		returnFn = relativeTimeFormatterFn( numberFormatter, pluralGenerator, properties );

		runtimeBind( args, cldr, returnFn, [ numberFormatter, pluralGenerator, properties ] );

		return returnFn;
	};

	return Globalize;




	}));


/***/ },

/***/ 393:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Globalize v1.2.1
	 *
	 * http://github.com/jquery/globalize
	 *
	 * Copyright 2010, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-12-14T18:34Z
	 */
	/*!
	 * Globalize v1.2.1 2016-12-14T18:34Z Released under the MIT license
	 * http://git.io/TrdQbw
	 */
	(function( root, factory ) {

		// UMD returnExports
		if ( true ) {

			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				!(function webpackMissingModule() { var e = new Error("Cannot find module \"cldr\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
				__webpack_require__(386),
				__webpack_require__(388),
				__webpack_require__(389)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if ( typeof exports === "object" ) {

			// Node, CommonJS
			module.exports = factory( require( "cldrjs" ), require( "../globalize" ) );
		} else {

			// Extend global
			factory( root.Cldr, root.Globalize );
		}
	}(this, function( Cldr, Globalize ) {

	var formatMessage = Globalize._formatMessage,
		runtimeBind = Globalize._runtimeBind,
		validateParameterPresence = Globalize._validateParameterPresence,
		validateParameterTypePlainObject = Globalize._validateParameterTypePlainObject,
		validateParameterTypeNumber = Globalize._validateParameterTypeNumber,
		validateParameterTypeString = Globalize._validateParameterTypeString;


	/**
	 * format( value, numberFormatter, pluralGenerator, unitProperies )
	 *
	 * @value [Number]
	 *
	 * @numberFormatter [Object]: A numberFormatter from Globalize.numberFormatter.
	 *
	 * @pluralGenerator [Object]: A pluralGenerator from Globalize.pluralGenerator.
	 *
	 * @unitProperies [Object]: localized unit data from cldr.
	 *
	 * Format units such as seconds, minutes, days, weeks, etc.
	 *
	 * OBS:
	 *
	 * Unit Sequences are not implemented.
	 * http://www.unicode.org/reports/tr35/tr35-35/tr35-general.html#Unit_Sequences
	 *
	 * Duration Unit (for composed time unit durations) is not implemented.
	 * http://www.unicode.org/reports/tr35/tr35-35/tr35-general.html#durationUnit
	 */
	var unitFormat = function( value, numberFormatter, pluralGenerator, unitProperties ) {
		var compoundUnitPattern = unitProperties.compoundUnitPattern, dividend, dividendProperties,
			formattedValue, divisor, divisorProperties, message, pluralValue;

		unitProperties = unitProperties.unitProperties;
		formattedValue = numberFormatter( value );
		pluralValue = pluralGenerator( value );

		// computed compound unit, eg. "megabyte-per-second".
		if ( unitProperties instanceof Array ) {
			dividendProperties = unitProperties[ 0 ];
			divisorProperties = unitProperties[ 1 ];

			dividend = formatMessage( dividendProperties[ pluralValue ], [ value ] );
			divisor = formatMessage( divisorProperties.one, [ "" ] ).trim();

			return formatMessage( compoundUnitPattern, [ dividend, divisor ] );
		}

		message = unitProperties[ pluralValue ];

		return formatMessage( message, [ formattedValue ] );
	};




	var unitFormatterFn = function( numberFormatter, pluralGenerator, unitProperties ) {
		return function unitFormatter( value ) {
			validateParameterPresence( value, "value" );
			validateParameterTypeNumber( value, "value" );

			return unitFormat( value, numberFormatter, pluralGenerator, unitProperties );
		};

	};




	/**
	 * categories()
	 *
	 * Return all unit categories.
	 */
	var unitCategories = [ "acceleration", "angle", "area", "digital", "duration", "length", "mass", "power",
	"pressure", "speed", "temperature", "volume" ];




	function stripPluralGarbage( data ) {
		var aux, pluralCount;

		if ( data ) {
			aux = {};
			for ( pluralCount in data ) {
				aux[ pluralCount.replace( /unitPattern-count-/, "" ) ] = data[ pluralCount ];
			}
		}

		return aux;
	}

	/**
	 * get( unit, form, cldr )
	 *
	 * @unit [String] The full type-unit name (eg. duration-second), or the short unit name
	 * (eg. second).
	 *
	 * @form [String] A string describing the form of the unit representation (eg. long,
	 * short, narrow).
	 *
	 * @cldr [Cldr instance].
	 *
	 * Return the plural map of a unit, eg: "second"
	 * { "one": "{0} second",
	 *   "other": "{0} seconds" }
	 * }
	 *
	 * Or the Array of plural maps of a compound-unit, eg: "foot-per-second"
	 * [ { "one": "{0} foot",
	 *     "other": "{0} feet" },
	 *   { "one": "{0} second",
	 *     "other": "{0} seconds" } ]
	 *
	 * Uses the precomputed form of a compound-unit if available, eg: "mile-per-hour"
	 * { "displayName": "miles per hour",
	 *    "unitPattern-count-one": "{0} mile per hour",
	 *    "unitPattern-count-other": "{0} miles per hour"
	 * },
	 *
	 * Also supports "/" instead of "-per-", eg. "foot/second", using the precomputed form if
	 * available.
	 *
	 * Or the Array of plural maps of a compound-unit, eg: "foot-per-second"
	 * [ { "one": "{0} foot",
	 *     "other": "{0} feet" },
	 *   { "one": "{0} second",
	 *     "other": "{0} seconds" } ]
	 *
	 * Or undefined in case the unit (or a unit of the compound-unit) doesn't exist.
	 */
	var get = function( unit, form, cldr ) {
		var ret;

		// Ensure that we get the 'precomputed' form, if present.
		unit = unit.replace( /\//, "-per-" );

		// Get unit or <category>-unit (eg. "duration-second").
		[ "" ].concat( unitCategories ).some(function( category ) {
			return ret = cldr.main([
				"units",
				form,
				category.length ? category + "-" + unit : unit
			]);
		});

		// Rename keys s/unitPattern-count-//g.
		ret = stripPluralGarbage( ret );

		// Compound Unit, eg. "foot-per-second" or "foot/second".
		if ( !ret && ( /-per-/ ).test( unit ) ) {

			// "Some units already have 'precomputed' forms, such as kilometer-per-hour;
			// where such units exist, they should be used in preference" UTS#35.
			// Note that precomputed form has already been handled above (!ret).

			// Get both recursively.
			unit = unit.split( "-per-" );
			ret = unit.map(function( unit ) {
				return get( unit, form, cldr );
			});
			if ( !ret[ 0 ] || !ret[ 1 ] ) {
				return;
			}
		}

		return ret;
	};

	var unitGet = get;




	/**
	 * properties( unit, form, cldr )
	 *
	 * @unit [String] The full type-unit name (eg. duration-second), or the short unit name
	 * (eg. second).
	 *
	 * @form [String] A string describing the form of the unit representation (eg. long,
	 * short, narrow).
	 *
	 * @cldr [Cldr instance].
	 */
	var unitProperties = function( unit, form, cldr ) {
		var compoundUnitPattern, unitProperties;

		compoundUnitPattern = cldr.main( [ "units", form, "per/compoundUnitPattern" ] );
		unitProperties = unitGet( unit, form, cldr );

		return {
			compoundUnitPattern: compoundUnitPattern,
			unitProperties: unitProperties
		};
	};




	/**
	 * Globalize.formatUnit( value, unit, options )
	 *
	 * @value [Number]
	 *
	 * @unit [String]: The unit (e.g "second", "day", "year")
	 *
	 * @options [Object]
	 * - form: [String] "long", "short" (default), or "narrow".
	 *
	 * Format units such as seconds, minutes, days, weeks, etc.
	 */
	Globalize.formatUnit =
	Globalize.prototype.formatUnit = function( value, unit, options ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeNumber( value, "value" );

		return this.unitFormatter( unit, options )( value );
	};

	/**
	 * Globalize.unitFormatter( unit, options )
	 *
	 * @unit [String]: The unit (e.g "second", "day", "year")
	 *
	 * @options [Object]
	 * - form: [String] "long", "short" (default), or "narrow".
	 *
	 * - numberFormatter: [Function] a number formatter function. Defaults to Globalize
	 *   `.numberFormatter()` for the current locale using the default options.
	 */
	Globalize.unitFormatter =
	Globalize.prototype.unitFormatter = function( unit, options ) {
		var args, form, numberFormatter, pluralGenerator, returnFn, properties;

		validateParameterPresence( unit, "unit" );
		validateParameterTypeString( unit, "unit" );

		validateParameterTypePlainObject( options, "options" );

		options = options || {};

		args = [ unit, options ];
		form = options.form || "long";
		properties = unitProperties( unit, form, this.cldr );

		numberFormatter = options.numberFormatter || this.numberFormatter();
		pluralGenerator = this.pluralGenerator();
		returnFn = unitFormatterFn( numberFormatter, pluralGenerator, properties );

		runtimeBind( args, this.cldr, returnFn, [ numberFormatter, pluralGenerator, properties ] );

		return returnFn;
	};

	return Globalize;




	}));


/***/ },

/***/ 394:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Globalize Runtime v1.2.1
	 *
	 * http://github.com/jquery/globalize
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-12-14T18:34Z
	 */
	/*!
	 * Globalize Runtime v1.2.1 2016-12-14T18:34Z Released under the MIT license
	 * http://git.io/TrdQbw
	 */
	(function( root, factory ) {

		// UMD returnExports
		if ( true ) {

			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(395)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if ( typeof exports === "object" ) {

			// Node, CommonJS
			module.exports = factory( require( "../globalize-runtime" ) );
		} else {

			// Extend global
			factory( root.Globalize );
		}
	}(this, function( Globalize ) {

	var createError = Globalize._createError,
		regexpEscape = Globalize._regexpEscape,
		runtimeKey = Globalize._runtimeKey,
		stringPad = Globalize._stringPad,
		validateParameterType = Globalize._validateParameterType,
		validateParameterPresence = Globalize._validateParameterPresence,
		validateParameterTypeString = Globalize._validateParameterTypeString;


	var createErrorUnsupportedFeature = function( feature ) {
		return createError( "E_UNSUPPORTED", "Unsupported {feature}.", {
			feature: feature
		});
	};




	var validateParameterTypeNumber = function( value, name ) {
		validateParameterType(
			value,
			name,
			value === undefined || typeof value === "number",
			"Number"
		);
	};




	/**
	 * goupingSeparator( number, primaryGroupingSize, secondaryGroupingSize )
	 *
	 * @number [Number].
	 *
	 * @primaryGroupingSize [Number]
	 *
	 * @secondaryGroupingSize [Number]
	 *
	 * Return the formatted number with group separator.
	 */
	var numberFormatGroupingSeparator = function( number, primaryGroupingSize, secondaryGroupingSize ) {
		var index,
			currentGroupingSize = primaryGroupingSize,
			ret = "",
			sep = ",",
			switchToSecondary = secondaryGroupingSize ? true : false;

		number = String( number ).split( "." );
		index = number[ 0 ].length;

		while ( index > currentGroupingSize ) {
			ret = number[ 0 ].slice( index - currentGroupingSize, index ) +
				( ret.length ? sep : "" ) + ret;
			index -= currentGroupingSize;
			if ( switchToSecondary ) {
				currentGroupingSize = secondaryGroupingSize;
				switchToSecondary = false;
			}
		}

		number[ 0 ] = number[ 0 ].slice( 0, index ) + ( ret.length ? sep : "" ) + ret;
		return number.join( "." );
	};




	/**
	 * integerFractionDigits( number, minimumIntegerDigits, minimumFractionDigits,
	 * maximumFractionDigits, round, roundIncrement )
	 *
	 * @number [Number]
	 *
	 * @minimumIntegerDigits [Number]
	 *
	 * @minimumFractionDigits [Number]
	 *
	 * @maximumFractionDigits [Number]
	 *
	 * @round [Function]
	 *
	 * @roundIncrement [Function]
	 *
	 * Return the formatted integer and fraction digits.
	 */
	var numberFormatIntegerFractionDigits = function( number, minimumIntegerDigits, minimumFractionDigits, maximumFractionDigits, round,
		roundIncrement ) {

		// Fraction
		if ( maximumFractionDigits ) {

			// Rounding
			if ( roundIncrement ) {
				number = round( number, roundIncrement );

			// Maximum fraction digits
			} else {
				number = round( number, { exponent: -maximumFractionDigits } );
			}

			// Minimum fraction digits
			if ( minimumFractionDigits ) {
				number = String( number ).split( "." );
				number[ 1 ] = stringPad( number[ 1 ] || "", minimumFractionDigits, true );
				number = number.join( "." );
			}
		} else {
			number = round( number );
		}

		number = String( number );

		// Minimum integer digits
		if ( minimumIntegerDigits ) {
			number = number.split( "." );
			number[ 0 ] = stringPad( number[ 0 ], minimumIntegerDigits );
			number = number.join( "." );
		}

		return number;
	};




	/**
	 * toPrecision( number, precision, round )
	 *
	 * @number (Number)
	 *
	 * @precision (Number) significant figures precision (not decimal precision).
	 *
	 * @round (Function)
	 *
	 * Return number.toPrecision( precision ) using the given round function.
	 */
	var numberToPrecision = function( number, precision, round ) {
		var roundOrder;

		// Get number at two extra significant figure precision.
		number = number.toPrecision( precision + 2 );

		// Then, round it to the required significant figure precision.
		roundOrder = Math.ceil( Math.log( Math.abs( number ) ) / Math.log( 10 ) );
		roundOrder -= precision;

		return round( number, { exponent: roundOrder } );
	};




	/**
	 * toPrecision( number, minimumSignificantDigits, maximumSignificantDigits, round )
	 *
	 * @number [Number]
	 *
	 * @minimumSignificantDigits [Number]
	 *
	 * @maximumSignificantDigits [Number]
	 *
	 * @round [Function]
	 *
	 * Return the formatted significant digits number.
	 */
	var numberFormatSignificantDigits = function( number, minimumSignificantDigits, maximumSignificantDigits, round ) {
		var atMinimum, atMaximum;

		// Sanity check.
		if ( minimumSignificantDigits > maximumSignificantDigits ) {
			maximumSignificantDigits = minimumSignificantDigits;
		}

		atMinimum = numberToPrecision( number, minimumSignificantDigits, round );
		atMaximum = numberToPrecision( number, maximumSignificantDigits, round );

		// Use atMaximum only if it has more significant digits than atMinimum.
		number = +atMinimum === +atMaximum ? atMinimum : atMaximum;

		// Expand integer numbers, eg. 123e5 to 12300.
		number = ( +number ).toString( 10 );

		if ( ( /e/ ).test( number ) ) {
			throw createErrorUnsupportedFeature({
				feature: "integers out of (1e21, 1e-7)"
			});
		}

		// Add trailing zeros if necessary.
		if ( minimumSignificantDigits - number.replace( /^0+|\./g, "" ).length > 0 ) {
			number = number.split( "." );
			number[ 1 ] = stringPad( number[ 1 ] || "", minimumSignificantDigits - number[ 0 ].replace( /^0+/, "" ).length, true );
			number = number.join( "." );
		}

		return number;
	};




	/**
	 * removeLiteralQuotes( string )
	 *
	 * Return:
	 * - `` if input string is `''`.
	 * - `o'clock` if input string is `'o''clock'`.
	 * - `foo` if input string is `foo`, i.e., return the same value in case it isn't a single-quoted
	 *   string.
	 */
	var removeLiteralQuotes = function( string ) {
		if ( string[ 0 ] + string[ string.length - 1 ] !== "''" ) {
			return string;
		}
		if ( string === "''" ) {
			return "";
		}
		return string.replace( /''/g, "'" ).slice( 1, -1 );
	};




	/**
	 * format( number, properties )
	 *
	 * @number [Number].
	 *
	 * @properties [Object] Output of number/format-properties.
	 *
	 * Return the formatted number.
	 * ref: http://www.unicode.org/reports/tr35/tr35-numbers.html
	 */
	var numberFormat = function( number, properties ) {
		var infinitySymbol, maximumFractionDigits, maximumSignificantDigits, minimumFractionDigits,
		minimumIntegerDigits, minimumSignificantDigits, nanSymbol, nuDigitsMap, padding, prefix,
		primaryGroupingSize, pattern, ret, round, roundIncrement, secondaryGroupingSize, suffix,
		symbolMap;

		padding = properties[ 1 ];
		minimumIntegerDigits = properties[ 2 ];
		minimumFractionDigits = properties[ 3 ];
		maximumFractionDigits = properties[ 4 ];
		minimumSignificantDigits = properties[ 5 ];
		maximumSignificantDigits = properties[ 6 ];
		roundIncrement = properties[ 7 ];
		primaryGroupingSize = properties[ 8 ];
		secondaryGroupingSize = properties[ 9 ];
		round = properties[ 15 ];
		infinitySymbol = properties[ 16 ];
		nanSymbol = properties[ 17 ];
		symbolMap = properties[ 18 ];
		nuDigitsMap = properties[ 19 ];

		// NaN
		if ( isNaN( number ) ) {
			return nanSymbol;
		}

		if ( number < 0 ) {
			pattern = properties[ 12 ];
			prefix = properties[ 13 ];
			suffix = properties[ 14 ];
		} else {
			pattern = properties[ 11 ];
			prefix = properties[ 0 ];
			suffix = properties[ 10 ];
		}

		// Infinity
		if ( !isFinite( number ) ) {
			return prefix + infinitySymbol + suffix;
		}

		ret = prefix;

		// Percent
		if ( pattern.indexOf( "%" ) !== -1 ) {
			number *= 100;

		// Per mille
		} else if ( pattern.indexOf( "\u2030" ) !== -1 ) {
			number *= 1000;
		}

		// Significant digit format
		if ( !isNaN( minimumSignificantDigits * maximumSignificantDigits ) ) {
			number = numberFormatSignificantDigits( number, minimumSignificantDigits,
				maximumSignificantDigits, round );

		// Integer and fractional format
		} else {
			number = numberFormatIntegerFractionDigits( number, minimumIntegerDigits,
				minimumFractionDigits, maximumFractionDigits, round, roundIncrement );
		}

		// Remove the possible number minus sign
		number = number.replace( /^-/, "" );

		// Grouping separators
		if ( primaryGroupingSize ) {
			number = numberFormatGroupingSeparator( number, primaryGroupingSize,
				secondaryGroupingSize );
		}

		ret += number;

		// Scientific notation
		// TODO implement here

		// Padding/'([^']|'')+'|''|[.,\-+E%\u2030]/g
		// TODO implement here

		ret += suffix;

		return ret.replace( /('([^']|'')+'|'')|./g, function( character, literal ) {

			// Literals
			if ( literal ) {
				return removeLiteralQuotes( literal );
			}

			// Symbols
			character = character.replace( /[.,\-+E%\u2030]/, function( symbol ) {
				return symbolMap[ symbol ];
			});

			// Numbering system
			if ( nuDigitsMap ) {
				character = character.replace( /[0-9]/, function( digit ) {
					return nuDigitsMap[ +digit ];
				});
			}

			return character;
		});
	};




	var numberFormatterFn = function( properties ) {
		return function numberFormatter( value ) {
			validateParameterPresence( value, "value" );
			validateParameterTypeNumber( value, "value" );

			return numberFormat( value, properties );
		};
	};




	/**
	 * Generated by:
	 *
	 * var regenerate = require( "regenerate" );
	 * var dashSymbols = require( * "unicode-8.0.0/General_Category/Format/symbols" );
	 * regenerate().add( dashSymbols ).toString();
	 *
	 * https://github.com/mathiasbynens/regenerate
	 * https://github.com/mathiasbynens/unicode-8.0.0
	 */
	var regexpCfG = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804\uDCBD|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/g;




	/**
	 * Generated by:
	 *
	 * var regenerate = require( "regenerate" );
	 * var dashSymbols = require( * "unicode-8.0.0/General_Category/Dash_Punctuation/symbols" );
	 * regenerate().add( dashSymbols ).toString();
	 *
	 * https://github.com/mathiasbynens/regenerate
	 * https://github.com/mathiasbynens/unicode-8.0.0
	 *
	 * NOTE: In addition to [:dash:],  the below includes MINUS SIGN U+2212.
	 */
	var regexpDashG = /[\-\u058A\u05BE\u1400\u1806\u2010-\u2015\u2E17\u2E1A\u2E3A\u2E3B\u2E40\u301C\u3030\u30A0\uFE31\uFE32\uFE58\uFE63\uFF0D\u2212]/g;




	/**
	 * Generated by:
	 *
	 * var regenerate = require( "regenerate" );
	 * var dashSymbols = require( "unicode-8.0.0/General_Category/Space_Separator/symbols" );
	 * regenerate().add( dashSymbols ).toString();
	 *
	 * https://github.com/mathiasbynens/regenerate
	 * https://github.com/mathiasbynens/unicode-8.0.0
	 */
	var regexpZsG = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/g;




	/**
	 * parse( value, properties )
	 *
	 * @value [String].
	 *
	 * @properties [Object] Parser properties is a reduced pre-processed cldr
	 * data set returned by numberParserProperties().
	 *
	 * Return the parsed Number (including Infinity) or NaN when value is invalid.
	 * ref: http://www.unicode.org/reports/tr35/tr35-numbers.html
	 */
	var numberParse = function( value, properties ) {
		var grammar, invertedNuDigitsMap, invertedSymbolMap, negative, number, prefix, prefixNSuffix,
			suffix, tokenizer, valid;

		// Grammar:
		// - Value <=           NaN | PositiveNumber | NegativeNumber
		// - PositiveNumber <=  PositivePrefix NumberOrInf PositiveSufix
		// - NegativeNumber <=  NegativePrefix NumberOrInf
		// - NumberOrInf <=     Number | Inf
		grammar = [
			[ "nan" ],
			[ "prefix", "infinity", "suffix" ],
			[ "prefix", "number", "suffix" ],
			[ "negativePrefix", "infinity", "negativeSuffix" ],
			[ "negativePrefix", "number", "negativeSuffix" ]
		];

		invertedSymbolMap = properties[ 0 ];
		invertedNuDigitsMap = properties[ 1 ] || {};
		tokenizer = properties[ 2 ];

		// Loose Matching:
		// - Ignore all format characters, which includes RLM, LRM or ALM used to control BIDI
		//   formatting.
		// - Map all characters in [:Zs:] to U+0020 SPACE;
		// - Map all characters in [:Dash:] to U+002D HYPHEN-MINUS;
		value = value
			.replace( regexpCfG, "" )
			.replace( regexpDashG, "-" )
			.replace( regexpZsG, " " );

		function parse( type ) {
			return function( lexeme ) {

				// Reverse localized symbols and numbering system.
				lexeme = lexeme.split( "" ).map(function( character ) {
					return invertedSymbolMap[ character ] ||
						invertedNuDigitsMap[ character ] ||
						character;
				}).join( "" );

				switch ( type ) {
					case "infinity":
						number = Infinity;
						break;

					case "nan":
						number = NaN;
						break;

					case "number":

						// Remove grouping separators.
						lexeme = lexeme.replace( /,/g, "" );

						number = +lexeme;
						break;

					case "prefix":
					case "negativePrefix":
						prefix = lexeme;
						break;

					case "suffix":
						suffix = lexeme;
						break;

					case "negativeSuffix":
						suffix = lexeme;
						negative = true;
						break;

					// This should never be reached.
					default:
						throw new Error( "Internal error" );
				}
				return "";
			};
		}

		function tokenizeNParse( _value, grammar ) {
			return grammar.some(function( statement ) {
				var value = _value;
				statement.every(function( type ) {
					if ( value.match( tokenizer[ type ] ) === null ) {
						return false;
					}

					// Consume and parse it.
					value = value.replace( tokenizer[ type ], parse( type ) );
					return true;
				});

				// Note: .every() return value above is ignored, because what counts in the end is
				// whether value is entirely consumed.
				return !value.length;
			});
		}

		valid = tokenizeNParse( value, grammar );

		// NaN
		if ( !valid || isNaN( number ) ) {
			return NaN;
		}

		prefixNSuffix = "" + prefix + suffix;

		// Percent
		if ( prefixNSuffix.indexOf( "%" ) !== -1 ) {
			number /= 100;

		// Per mille
		} else if ( prefixNSuffix.indexOf( "\u2030" ) !== -1 ) {
			number /= 1000;
		}

		// Negative number
		if ( negative ) {
			number *= -1;
		}

		return number;
	};




	var numberParserFn = function( properties ) {
		return function numberParser( value ) {
			validateParameterPresence( value, "value" );
			validateParameterTypeString( value, "value" );

			return numberParse( value, properties );
		};

	};




	var numberTruncate = function( value ) {
		if ( isNaN( value ) ) {
			return NaN;
		}
		return Math[ value < 0 ? "ceil" : "floor" ]( value );
	};




	/**
	 * round( method )
	 *
	 * @method [String] with either "round", "ceil", "floor", or "truncate".
	 *
	 * Return function( value, incrementOrExp ):
	 *
	 *   @value [Number] eg. 123.45.
	 *
	 *   @incrementOrExp [Number] optional, eg. 0.1; or
	 *     [Object] Either { increment: <value> } or { exponent: <value> }
	 *
	 *   Return the rounded number, eg:
	 *   - round( "round" )( 123.45 ): 123;
	 *   - round( "ceil" )( 123.45 ): 124;
	 *   - round( "floor" )( 123.45 ): 123;
	 *   - round( "truncate" )( 123.45 ): 123;
	 *   - round( "round" )( 123.45, 0.1 ): 123.5;
	 *   - round( "round" )( 123.45, 10 ): 120;
	 *
	 *   Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
	 *   Ref: #376
	 */
	var numberRound = function( method ) {
		method = method || "round";
		method = method === "truncate" ? numberTruncate : Math[ method ];

		return function( value, incrementOrExp ) {
			var exp, increment;

			value = +value;

			// If the value is not a number, return NaN.
			if ( isNaN( value ) ) {
				return NaN;
			}

			// Exponent given.
			if ( typeof incrementOrExp === "object" && incrementOrExp.exponent ) {
				exp = +incrementOrExp.exponent;
				increment = 1;

				if ( exp === 0 ) {
					return method( value );
				}

				// If the exp is not an integer, return NaN.
				if ( !( typeof exp === "number" && exp % 1 === 0 ) ) {
					return NaN;
				}

			// Increment given.
			} else {
				increment = +incrementOrExp || 1;

				if ( increment === 1 ) {
					return method( value );
				}

				// If the increment is not a number, return NaN.
				if ( isNaN( increment ) ) {
					return NaN;
				}

				increment = increment.toExponential().split( "e" );
				exp = +increment[ 1 ];
				increment = +increment[ 0 ];
			}

			// Shift & Round
			value = value.toString().split( "e" );
			value[ 0 ] = +value[ 0 ] / increment;
			value[ 1 ] = value[ 1 ] ? ( +value[ 1 ] - exp ) : -exp;
			value = method( +( value[ 0 ] + "e" + value[ 1 ] ) );

			// Shift back
			value = value.toString().split( "e" );
			value[ 0 ] = +value[ 0 ] * increment;
			value[ 1 ] = value[ 1 ] ? ( +value[ 1 ] + exp ) : exp;
			return +( value[ 0 ] + "e" + value[ 1 ] );
		};
	};




	Globalize._createErrorUnsupportedFeature = createErrorUnsupportedFeature;
	Globalize._numberFormat = numberFormat;
	Globalize._numberFormatterFn = numberFormatterFn;
	Globalize._numberParse = numberParse;
	Globalize._numberParserFn = numberParserFn;
	Globalize._numberRound = numberRound;
	Globalize._removeLiteralQuotes = removeLiteralQuotes;
	Globalize._validateParameterPresence = validateParameterPresence;
	Globalize._validateParameterTypeNumber = validateParameterTypeNumber;
	Globalize._validateParameterTypeString = validateParameterTypeString;

	Globalize.numberFormatter =
	Globalize.prototype.numberFormatter = function( options ) {
		options = options || {};
		return Globalize[ runtimeKey( "numberFormatter", this._locale, [ options ] ) ];
	};

	Globalize.numberParser =
	Globalize.prototype.numberParser = function( options ) {
		options = options || {};
		return Globalize[ runtimeKey( "numberParser", this._locale, [ options ] ) ];
	};

	Globalize.formatNumber =
	Globalize.prototype.formatNumber = function( value, options ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeNumber( value, "value" );

		return this.numberFormatter( options )( value );
	};

	Globalize.parseNumber =
	Globalize.prototype.parseNumber = function( value, options ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeString( value, "value" );

		return this.numberParser( options )( value );
	};

	return Globalize;




	}));


/***/ },

/***/ 395:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Globalize Runtime v1.2.1
	 *
	 * http://github.com/jquery/globalize
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-12-14T18:34Z
	 */
	/*!
	 * Globalize Runtime v1.2.1 2016-12-14T18:34Z Released under the MIT license
	 * http://git.io/TrdQbw
	 */
	(function( root, factory ) {

		// UMD returnExports
		if ( true ) {

			// AMD
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if ( typeof exports === "object" ) {

			// Node, CommonJS
			module.exports = factory();
		} else {

			// Globalize
			root.Globalize = factory();
		}
	}( this, function() {


	/**
	 * A toString method that outputs meaningful values for objects or arrays and
	 * still performs as fast as a plain string in case variable is string, or as
	 * fast as `"" + number` in case variable is a number.
	 * Ref: http://jsperf.com/my-stringify
	 */
	var toString = function( variable ) {
		return typeof variable === "string" ? variable : ( typeof variable === "number" ? "" +
			variable : JSON.stringify( variable ) );
	};




	/**
	 * formatMessage( message, data )
	 *
	 * @message [String] A message with optional {vars} to be replaced.
	 *
	 * @data [Array or JSON] Object with replacing-variables content.
	 *
	 * Return the formatted message. For example:
	 *
	 * - formatMessage( "{0} second", [ 1 ] ); // 1 second
	 *
	 * - formatMessage( "{0}/{1}", ["m", "s"] ); // m/s
	 *
	 * - formatMessage( "{name} <{email}>", {
	 *     name: "Foo",
	 *     email: "bar@baz.qux"
	 *   }); // Foo <bar@baz.qux>
	 */
	var formatMessage = function( message, data ) {

		// Replace {attribute}'s
		message = message.replace( /{[0-9a-zA-Z-_. ]+}/g, function( name ) {
			name = name.replace( /^{([^}]*)}$/, "$1" );
			return toString( data[ name ] );
		});

		return message;
	};




	var objectExtend = function() {
		var destination = arguments[ 0 ],
			sources = [].slice.call( arguments, 1 );

		sources.forEach(function( source ) {
			var prop;
			for ( prop in source ) {
				destination[ prop ] = source[ prop ];
			}
		});

		return destination;
	};




	var createError = function( code, message, attributes ) {
		var error;

		message = code + ( message ? ": " + formatMessage( message, attributes ) : "" );
		error = new Error( message );
		error.code = code;

		objectExtend( error, attributes );

		return error;
	};




	// Based on http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
	var stringHash = function( str ) {
		return [].reduce.call( str, function( hash, i ) {
			var chr = i.charCodeAt( 0 );
			hash = ( ( hash << 5 ) - hash ) + chr;
			return hash | 0;
		}, 0 );
	};




	var runtimeKey = function( fnName, locale, args, argsStr ) {
		var hash;
		argsStr = argsStr || JSON.stringify( args );
		hash = stringHash( fnName + locale + argsStr );
		return hash > 0 ? "a" + hash : "b" + Math.abs( hash );
	};




	var validate = function( code, message, check, attributes ) {
		if ( !check ) {
			throw createError( code, message, attributes );
		}
	};




	var validateParameterPresence = function( value, name ) {
		validate( "E_MISSING_PARAMETER", "Missing required parameter `{name}`.",
			value !== undefined, { name: name });
	};




	var validateParameterType = function( value, name, check, expected ) {
		validate(
			"E_INVALID_PAR_TYPE",
			"Invalid `{name}` parameter ({value}). {expected} expected.",
			check,
			{
				expected: expected,
				name: name,
				value: value
			}
		);
	};




	var validateParameterTypeString = function( value, name ) {
		validateParameterType(
			value,
			name,
			value === undefined || typeof value === "string",
			"a string"
		);
	};




	// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions?redirectlocale=en-US&redirectslug=JavaScript%2FGuide%2FRegular_Expressions
	var regexpEscape = function( string ) {
		return string.replace( /([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1" );
	};




	var stringPad = function( str, count, right ) {
		var length;
		if ( typeof str !== "string" ) {
			str = String( str );
		}
		for ( length = str.length; length < count; length += 1 ) {
			str = ( right ? ( str + "0" ) : ( "0" + str ) );
		}
		return str;
	};




	function Globalize( locale ) {
		if ( !( this instanceof Globalize ) ) {
			return new Globalize( locale );
		}

		validateParameterPresence( locale, "locale" );
		validateParameterTypeString( locale, "locale" );

		this._locale = locale;
	}

	Globalize.locale = function( locale ) {
		validateParameterTypeString( locale, "locale" );

		if ( arguments.length ) {
			this._locale = locale;
		}
		return this._locale;
	};

	Globalize._createError = createError;
	Globalize._formatMessage = formatMessage;
	Globalize._regexpEscape = regexpEscape;
	Globalize._runtimeKey = runtimeKey;
	Globalize._stringPad = stringPad;
	Globalize._validateParameterPresence = validateParameterPresence;
	Globalize._validateParameterTypeString = validateParameterTypeString;
	Globalize._validateParameterType = validateParameterType;

	return Globalize;




	}));


/***/ },

/***/ 396:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Globalize Runtime v1.2.1
	 *
	 * http://github.com/jquery/globalize
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-12-14T18:34Z
	 */
	/*!
	 * Globalize Runtime v1.2.1 2016-12-14T18:34Z Released under the MIT license
	 * http://git.io/TrdQbw
	 */
	(function( root, factory ) {

		// UMD returnExports
		if ( true ) {

			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(395),
				__webpack_require__(394)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if ( typeof exports === "object" ) {

			// Node, CommonJS
			module.exports = factory(
				require( "../globalize-runtime" ),
				require( "./number" )
			);
		} else {

			// Extend global
			factory( root.Globalize );
		}
	}(this, function( Globalize ) {

	var formatMessage = Globalize._formatMessage,
		runtimeKey = Globalize._runtimeKey,
		validateParameterPresence = Globalize._validateParameterPresence,
		validateParameterTypeNumber = Globalize._validateParameterTypeNumber;


	/**
	 * nameFormat( formattedNumber, pluralForm, properties )
	 *
	 * Return the appropriate name form currency format.
	 */
	var currencyNameFormat = function( formattedNumber, pluralForm, properties ) {
		var displayName, unitPattern,
			displayNames = properties.displayNames || {},
			unitPatterns = properties.unitPatterns;

		displayName = displayNames[ "displayName-count-" + pluralForm ] ||
			displayNames[ "displayName-count-other" ] ||
			displayNames.displayName ||
			properties.currency;
		unitPattern = unitPatterns[ "unitPattern-count-" + pluralForm ] ||
			unitPatterns[ "unitPattern-count-other" ];

		return formatMessage( unitPattern, [ formattedNumber, displayName ]);
	};




	var currencyFormatterFn = function( numberFormatter, pluralGenerator, properties ) {
		var fn;

		// Return formatter when style is "code" or "name".
		if ( pluralGenerator && properties ) {
			fn = function currencyFormatter( value ) {
				validateParameterPresence( value, "value" );
				validateParameterTypeNumber( value, "value" );
				return currencyNameFormat(
					numberFormatter( value ),
					pluralGenerator( value ),
					properties
				);
			};

		// Return formatter when style is "symbol" or "accounting".
		} else {
			fn = function currencyFormatter( value ) {
				return numberFormatter( value );
			};
		}

		return fn;
	};




	Globalize._currencyFormatterFn = currencyFormatterFn;
	Globalize._currencyNameFormat = currencyNameFormat;

	Globalize.currencyFormatter =
	Globalize.prototype.currencyFormatter = function( currency, options ) {
		options = options || {};
		return Globalize[ runtimeKey( "currencyFormatter", this._locale, [ currency, options ] ) ];
	};

	Globalize.formatCurrency =
	Globalize.prototype.formatCurrency = function( value, currency, options ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeNumber( value, "value" );

		return this.currencyFormatter( currency, options )( value );
	};

	return Globalize;




	}));


/***/ },

/***/ 397:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Globalize Runtime v1.2.1
	 *
	 * http://github.com/jquery/globalize
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-12-14T18:34Z
	 */
	/*!
	 * Globalize Runtime v1.2.1 2016-12-14T18:34Z Released under the MIT license
	 * http://git.io/TrdQbw
	 */
	(function( root, factory ) {

		// UMD returnExports
		if ( true ) {

			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(395),
				__webpack_require__(394)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if ( typeof exports === "object" ) {

			// Node, CommonJS
			module.exports = factory(
				require( "../globalize-runtime" ),
				require( "./number" )
			);
		} else {

			// Extend global
			factory( root.Globalize );
		}
	}(this, function( Globalize ) {

	var createErrorUnsupportedFeature = Globalize._createErrorUnsupportedFeature,
		regexpEscape = Globalize._regexpEscape,
		removeLiteralQuotes = Globalize._removeLiteralQuotes,
		runtimeKey = Globalize._runtimeKey,
		stringPad = Globalize._stringPad,
		validateParameterPresence = Globalize._validateParameterPresence,
		validateParameterType = Globalize._validateParameterType,
		validateParameterTypeString = Globalize._validateParameterTypeString;


	var validateParameterTypeDate = function( value, name ) {
		validateParameterType( value, name, value === undefined || value instanceof Date, "Date" );
	};




	/**
	 * dayOfWeek( date, firstDay )
	 *
	 * @date
	 *
	 * @firstDay the result of `dateFirstDayOfWeek( cldr )`
	 *
	 * Return the day of the week normalized by the territory's firstDay [0-6].
	 * Eg for "mon":
	 * - return 0 if territory is GB, or BR, or DE, or FR (week starts on "mon");
	 * - return 1 if territory is US (week starts on "sun");
	 * - return 2 if territory is EG (week starts on "sat");
	 */
	var dateDayOfWeek = function( date, firstDay ) {
		return ( date.getDay() - firstDay + 7 ) % 7;
	};




	/**
	 * distanceInDays( from, to )
	 *
	 * Return the distance in days between from and to Dates.
	 */
	var dateDistanceInDays = function( from, to ) {
		var inDays = 864e5;
		return ( to.getTime() - from.getTime() ) / inDays;
	};




	/**
	 * startOf changes the input to the beginning of the given unit.
	 *
	 * For example, starting at the start of a day, resets hours, minutes
	 * seconds and milliseconds to 0. Starting at the month does the same, but
	 * also sets the date to 1.
	 *
	 * Returns the modified date
	 */
	var dateStartOf = function( date, unit ) {
		date = new Date( date.getTime() );
		switch ( unit ) {
			case "year":
				date.setMonth( 0 );
			/* falls through */
			case "month":
				date.setDate( 1 );
			/* falls through */
			case "day":
				date.setHours( 0 );
			/* falls through */
			case "hour":
				date.setMinutes( 0 );
			/* falls through */
			case "minute":
				date.setSeconds( 0 );
			/* falls through */
			case "second":
				date.setMilliseconds( 0 );
		}
		return date;
	};




	/**
	 * dayOfYear
	 *
	 * Return the distance in days of the date to the begin of the year [0-d].
	 */
	var dateDayOfYear = function( date ) {
		return Math.floor( dateDistanceInDays( dateStartOf( date, "year" ), date ) );
	};




	/**
	 * millisecondsInDay
	 */
	var dateMillisecondsInDay = function( date ) {

		// TODO Handle daylight savings discontinuities
		return date - dateStartOf( date, "day" );
	};




	var datePatternRe = ( /([a-z])\1*|'([^']|'')+'|''|./ig );




	/**
	 * hourFormat( date, format, timeSeparator, formatNumber )
	 *
	 * Return date's timezone offset according to the format passed.
	 * Eg for format when timezone offset is 180:
	 * - "+H;-H": -3
	 * - "+HHmm;-HHmm": -0300
	 * - "+HH:mm;-HH:mm": -03:00
	 */
	var dateTimezoneHourFormat = function( date, format, timeSeparator, formatNumber ) {
		var absOffset,
			offset = date.getTimezoneOffset();

		absOffset = Math.abs( offset );
		formatNumber = formatNumber || {
			1: function( value ) {
				return stringPad( value, 1 );
			},
			2: function( value ) {
				return stringPad( value, 2 );
			}
		};

		return format

			// Pick the correct sign side (+ or -).
			.split( ";" )[ offset > 0 ? 1 : 0 ]

			// Localize time separator
			.replace( ":", timeSeparator )

			// Update hours offset.
			.replace( /HH?/, function( match ) {
				return formatNumber[ match.length ]( Math.floor( absOffset / 60 ) );
			})

			// Update minutes offset and return.
			.replace( /mm/, function() {
				return formatNumber[ 2 ]( absOffset % 60 );
			});
	};




	var dateWeekDays = [ "sun", "mon", "tue", "wed", "thu", "fri", "sat" ];




	/**
	 * format( date, properties )
	 *
	 * @date [Date instance].
	 *
	 * @properties
	 *
	 * TODO Support other calendar types.
	 *
	 * Disclosure: this function borrows excerpts of dojo/date/locale.
	 */
	var dateFormat = function( date, numberFormatters, properties ) {
		var timeSeparator = properties.timeSeparator;

		return properties.pattern.replace( datePatternRe, function( current ) {
			var ret,
				chr = current.charAt( 0 ),
				length = current.length;

			if ( chr === "j" ) {

				// Locale preferred hHKk.
				// http://www.unicode.org/reports/tr35/tr35-dates.html#Time_Data
				chr = properties.preferredTime;
			}

			if ( chr === "Z" ) {

				// Z..ZZZ: same as "xxxx".
				if ( length < 4 ) {
					chr = "x";
					length = 4;

				// ZZZZ: same as "OOOO".
				} else if ( length < 5 ) {
					chr = "O";
					length = 4;

				// ZZZZZ: same as "XXXXX"
				} else {
					chr = "X";
					length = 5;
				}
			}

			switch ( chr ) {

				// Era
				case "G":
					ret = properties.eras[ date.getFullYear() < 0 ? 0 : 1 ];
					break;

				// Year
				case "y":

					// Plain year.
					// The length specifies the padding, but for two letters it also specifies the
					// maximum length.
					ret = date.getFullYear();
					if ( length === 2 ) {
						ret = String( ret );
						ret = +ret.substr( ret.length - 2 );
					}
					break;

				case "Y":

					// Year in "Week of Year"
					// The length specifies the padding, but for two letters it also specifies the
					// maximum length.
					// yearInWeekofYear = date + DaysInAWeek - (dayOfWeek - firstDay) - minDays
					ret = new Date( date.getTime() );
					ret.setDate(
						ret.getDate() + 7 -
						dateDayOfWeek( date, properties.firstDay ) -
						properties.firstDay -
						properties.minDays
					);
					ret = ret.getFullYear();
					if ( length === 2 ) {
						ret = String( ret );
						ret = +ret.substr( ret.length - 2 );
					}
					break;

				// Quarter
				case "Q":
				case "q":
					ret = Math.ceil( ( date.getMonth() + 1 ) / 3 );
					if ( length > 2 ) {
						ret = properties.quarters[ chr ][ length ][ ret ];
					}
					break;

				// Month
				case "M":
				case "L":
					ret = date.getMonth() + 1;
					if ( length > 2 ) {
						ret = properties.months[ chr ][ length ][ ret ];
					}
					break;

				// Week
				case "w":

					// Week of Year.
					// woy = ceil( ( doy + dow of 1/1 ) / 7 ) - minDaysStuff ? 1 : 0.
					// TODO should pad on ww? Not documented, but I guess so.
					ret = dateDayOfWeek( dateStartOf( date, "year" ), properties.firstDay );
					ret = Math.ceil( ( dateDayOfYear( date ) + ret ) / 7 ) -
						( 7 - ret >= properties.minDays ? 0 : 1 );
					break;

				case "W":

					// Week of Month.
					// wom = ceil( ( dom + dow of `1/month` ) / 7 ) - minDaysStuff ? 1 : 0.
					ret = dateDayOfWeek( dateStartOf( date, "month" ), properties.firstDay );
					ret = Math.ceil( ( date.getDate() + ret ) / 7 ) -
						( 7 - ret >= properties.minDays ? 0 : 1 );
					break;

				// Day
				case "d":
					ret = date.getDate();
					break;

				case "D":
					ret = dateDayOfYear( date ) + 1;
					break;

				case "F":

					// Day of Week in month. eg. 2nd Wed in July.
					ret = Math.floor( date.getDate() / 7 ) + 1;
					break;

				// Week day
				case "e":
				case "c":
					if ( length <= 2 ) {

						// Range is [1-7] (deduced by example provided on documentation)
						// TODO Should pad with zeros (not specified in the docs)?
						ret = dateDayOfWeek( date, properties.firstDay ) + 1;
						break;
					}

				/* falls through */
				case "E":
					ret = dateWeekDays[ date.getDay() ];
					ret = properties.days[ chr ][ length ][ ret ];
					break;

				// Period (AM or PM)
				case "a":
					ret = properties.dayPeriods[ date.getHours() < 12 ? "am" : "pm" ];
					break;

				// Hour
				case "h": // 1-12
					ret = ( date.getHours() % 12 ) || 12;
					break;

				case "H": // 0-23
					ret = date.getHours();
					break;

				case "K": // 0-11
					ret = date.getHours() % 12;
					break;

				case "k": // 1-24
					ret = date.getHours() || 24;
					break;

				// Minute
				case "m":
					ret = date.getMinutes();
					break;

				// Second
				case "s":
					ret = date.getSeconds();
					break;

				case "S":
					ret = Math.round( date.getMilliseconds() * Math.pow( 10, length - 3 ) );
					break;

				case "A":
					ret = Math.round( dateMillisecondsInDay( date ) * Math.pow( 10, length - 3 ) );
					break;

				// Zone
				case "z":
				case "O":

					// O: "{gmtFormat}+H;{gmtFormat}-H" or "{gmtZeroFormat}", eg. "GMT-8" or "GMT".
					// OOOO: "{gmtFormat}{hourFormat}" or "{gmtZeroFormat}", eg. "GMT-08:00" or "GMT".
					if ( date.getTimezoneOffset() === 0 ) {
						ret = properties.gmtZeroFormat;
					} else {
						ret = dateTimezoneHourFormat(
							date,
							length < 4 ? "+H;-H" : properties.tzLongHourFormat,
							timeSeparator,
							numberFormatters
						);
						ret = properties.gmtFormat.replace( /\{0\}/, ret );
					}
					break;

				case "X":

					// Same as x*, except it uses "Z" for zero offset.
					if ( date.getTimezoneOffset() === 0 ) {
						ret = "Z";
						break;
					}

				/* falls through */
				case "x":

					// x: hourFormat("+HH;-HH")
					// xx or xxxx: hourFormat("+HHmm;-HHmm")
					// xxx or xxxxx: hourFormat("+HH:mm;-HH:mm")
					ret = length === 1 ? "+HH;-HH" : ( length % 2 ? "+HH:mm;-HH:mm" : "+HHmm;-HHmm" );
					ret = dateTimezoneHourFormat( date, ret, ":" );
					break;

				// timeSeparator
				case ":":
					ret = timeSeparator;
					break;

				// ' literals.
				case "'":
					ret = removeLiteralQuotes( current );
					break;

				// Anything else is considered a literal, including [ ,:/.@#], chinese, japonese, and
				// arabic characters.
				default:
					ret = current;
			}
			if ( typeof ret === "number" ) {
				ret = numberFormatters[ length ]( ret );
			}
			return ret;
		});
	};




	var dateFormatterFn = function( numberFormatters, properties ) {
		return function dateFormatter( value ) {
			validateParameterPresence( value, "value" );
			validateParameterTypeDate( value, "value" );

			return dateFormat( value, numberFormatters, properties );
		};

	};




	/**
	 * isLeapYear( year )
	 *
	 * @year [Number]
	 *
	 * Returns an indication whether the specified year is a leap year.
	 */
	var dateIsLeapYear = function( year ) {
		return new Date( year, 1, 29 ).getMonth() === 1;
	};




	/**
	 * lastDayOfMonth( date )
	 *
	 * @date [Date]
	 *
	 * Return the last day of the given date's month
	 */
	var dateLastDayOfMonth = function( date ) {
		return new Date( date.getFullYear(), date.getMonth() + 1, 0 ).getDate();
	};




	/**
	 * Differently from native date.setDate(), this function returns a date whose
	 * day remains inside the month boundaries. For example:
	 *
	 * setDate( FebDate, 31 ): a "Feb 28" date.
	 * setDate( SepDate, 31 ): a "Sep 30" date.
	 */
	var dateSetDate = function( date, day ) {
		var lastDay = new Date( date.getFullYear(), date.getMonth() + 1, 0 ).getDate();

		date.setDate( day < 1 ? 1 : day < lastDay ? day : lastDay );
	};




	/**
	 * Differently from native date.setMonth(), this function adjusts date if
	 * needed, so final month is always the one set.
	 *
	 * setMonth( Jan31Date, 1 ): a "Feb 28" date.
	 * setDate( Jan31Date, 8 ): a "Sep 30" date.
	 */
	var dateSetMonth = function( date, month ) {
		var originalDate = date.getDate();

		date.setDate( 1 );
		date.setMonth( month );
		dateSetDate( date, originalDate );
	};




	var outOfRange = function( value, low, high ) {
		return value < low || value > high;
	};




	/**
	 * parse( value, tokens, properties )
	 *
	 * @value [String] string date.
	 *
	 * @tokens [Object] tokens returned by date/tokenizer.
	 *
	 * @properties [Object] output returned by date/tokenizer-properties.
	 *
	 * ref: http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Format_Patterns
	 */
	var dateParse = function( value, tokens, properties ) {
		var amPm, day, daysOfYear, month, era, hour, hour12, timezoneOffset, valid,
			YEAR = 0,
			MONTH = 1,
			DAY = 2,
			HOUR = 3,
			MINUTE = 4,
			SECOND = 5,
			MILLISECONDS = 6,
			date = new Date(),
			truncateAt = [],
			units = [ "year", "month", "day", "hour", "minute", "second", "milliseconds" ];

		if ( !tokens.length ) {
			return null;
		}

		valid = tokens.every(function( token ) {
			var century, chr, value, length;

			if ( token.type === "literal" ) {

				// continue
				return true;
			}

			chr = token.type.charAt( 0 );
			length = token.type.length;

			if ( chr === "j" ) {

				// Locale preferred hHKk.
				// http://www.unicode.org/reports/tr35/tr35-dates.html#Time_Data
				chr = properties.preferredTimeData;
			}

			switch ( chr ) {

				// Era
				case "G":
					truncateAt.push( YEAR );
					era = +token.value;
					break;

				// Year
				case "y":
					value = token.value;
					if ( length === 2 ) {
						if ( outOfRange( value, 0, 99 ) ) {
							return false;
						}

						// mimic dojo/date/locale: choose century to apply, according to a sliding
						// window of 80 years before and 20 years after present year.
						century = Math.floor( date.getFullYear() / 100 ) * 100;
						value += century;
						if ( value > date.getFullYear() + 20 ) {
							value -= 100;
						}
					}
					date.setFullYear( value );
					truncateAt.push( YEAR );
					break;

				case "Y": // Year in "Week of Year"
					throw createErrorUnsupportedFeature({
						feature: "year pattern `" + chr + "`"
					});

				// Quarter (skip)
				case "Q":
				case "q":
					break;

				// Month
				case "M":
				case "L":
					if ( length <= 2 ) {
						value = token.value;
					} else {
						value = +token.value;
					}
					if ( outOfRange( value, 1, 12 ) ) {
						return false;
					}

					// Setting the month later so that we have the correct year and can determine
					// the correct last day of February in case of leap year.
					month = value;
					truncateAt.push( MONTH );
					break;

				// Week (skip)
				case "w": // Week of Year.
				case "W": // Week of Month.
					break;

				// Day
				case "d":
					day = token.value;
					truncateAt.push( DAY );
					break;

				case "D":
					daysOfYear = token.value;
					truncateAt.push( DAY );
					break;

				case "F":

					// Day of Week in month. eg. 2nd Wed in July.
					// Skip
					break;

				// Week day
				case "e":
				case "c":
				case "E":

					// Skip.
					// value = arrayIndexOf( dateWeekDays, token.value );
					break;

				// Period (AM or PM)
				case "a":
					amPm = token.value;
					break;

				// Hour
				case "h": // 1-12
					value = token.value;
					if ( outOfRange( value, 1, 12 ) ) {
						return false;
					}
					hour = hour12 = true;
					date.setHours( value === 12 ? 0 : value );
					truncateAt.push( HOUR );
					break;

				case "K": // 0-11
					value = token.value;
					if ( outOfRange( value, 0, 11 ) ) {
						return false;
					}
					hour = hour12 = true;
					date.setHours( value );
					truncateAt.push( HOUR );
					break;

				case "k": // 1-24
					value = token.value;
					if ( outOfRange( value, 1, 24 ) ) {
						return false;
					}
					hour = true;
					date.setHours( value === 24 ? 0 : value );
					truncateAt.push( HOUR );
					break;

				case "H": // 0-23
					value = token.value;
					if ( outOfRange( value, 0, 23 ) ) {
						return false;
					}
					hour = true;
					date.setHours( value );
					truncateAt.push( HOUR );
					break;

				// Minute
				case "m":
					value = token.value;
					if ( outOfRange( value, 0, 59 ) ) {
						return false;
					}
					date.setMinutes( value );
					truncateAt.push( MINUTE );
					break;

				// Second
				case "s":
					value = token.value;
					if ( outOfRange( value, 0, 59 ) ) {
						return false;
					}
					date.setSeconds( value );
					truncateAt.push( SECOND );
					break;

				case "A":
					date.setHours( 0 );
					date.setMinutes( 0 );
					date.setSeconds( 0 );

				/* falls through */
				case "S":
					value = Math.round( token.value * Math.pow( 10, 3 - length ) );
					date.setMilliseconds( value );
					truncateAt.push( MILLISECONDS );
					break;

				// Zone
				case "Z":
				case "z":
				case "O":
				case "X":
				case "x":
					timezoneOffset = token.value - date.getTimezoneOffset();
					break;
			}

			return true;
		});

		if ( !valid ) {
			return null;
		}

		// 12-hour format needs AM or PM, 24-hour format doesn't, ie. return null
		// if amPm && !hour12 || !amPm && hour12.
		if ( hour && !( !amPm ^ hour12 ) ) {
			return null;
		}

		if ( era === 0 ) {

			// 1 BC = year 0
			date.setFullYear( date.getFullYear() * -1 + 1 );
		}

		if ( month !== undefined ) {
			dateSetMonth( date, month - 1 );
		}

		if ( day !== undefined ) {
			if ( outOfRange( day, 1, dateLastDayOfMonth( date ) ) ) {
				return null;
			}
			date.setDate( day );
		} else if ( daysOfYear !== undefined ) {
			if ( outOfRange( daysOfYear, 1, dateIsLeapYear( date.getFullYear() ) ? 366 : 365 ) ) {
				return null;
			}
			date.setMonth( 0 );
			date.setDate( daysOfYear );
		}

		if ( hour12 && amPm === "pm" ) {
			date.setHours( date.getHours() + 12 );
		}

		if ( timezoneOffset ) {
			date.setMinutes( date.getMinutes() + timezoneOffset );
		}

		// Truncate date at the most precise unit defined. Eg.
		// If value is "12/31", and pattern is "MM/dd":
		// => new Date( <current Year>, 12, 31, 0, 0, 0, 0 );
		truncateAt = Math.max.apply( null, truncateAt );
		date = dateStartOf( date, units[ truncateAt ] );

		return date;
	};




	/**
	 * Generated by:
	 *
	 * regenerate().add( require( "unicode-7.0.0/categories/N/symbols" ) ).toString();
	 *
	 * https://github.com/mathiasbynens/regenerate
	 * https://github.com/mathiasbynens/unicode-7.0.0
	 */
	var regexpN = /[0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]|\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDD16-\uDD1B\uDE40-\uDE47\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDE60-\uDE7E]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9]|\uD806[\uDCE0-\uDCF2]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59\uDF5B-\uDF61]|\uD834[\uDF60-\uDF71]|\uD835[\uDFCE-\uDFFF]|\uD83A[\uDCC7-\uDCCF]|\uD83C[\uDD00-\uDD0C]/;




	/**
	 * tokenizer( value, pattern, properties )
	 *
	 * @value [String] string date.
	 *
	 * @properties [Object] output returned by date/tokenizer-properties.
	 *
	 * Returns an Array of tokens, eg. value "5 o'clock PM", pattern "h 'o''clock' a":
	 * [{
	 *   type: "h",
	 *   lexeme: "5"
	 * }, {
	 *   type: "literal",
	 *   lexeme: " "
	 * }, {
	 *   type: "literal",
	 *   lexeme: "o'clock"
	 * }, {
	 *   type: "literal",
	 *   lexeme: " "
	 * }, {
	 *   type: "a",
	 *   lexeme: "PM",
	 *   value: "pm"
	 * }]
	 *
	 * OBS: lexeme's are always String and may return invalid ranges depending of the token type.
	 * Eg. "99" for month number.
	 *
	 * Return an empty Array when not successfully parsed.
	 */
	var dateTokenizer = function( value, numberParser, properties ) {
		var valid,
			timeSeparator = properties.timeSeparator,
			tokens = [],
			widths = [ "abbreviated", "wide", "narrow" ];

		valid = properties.pattern.match( datePatternRe ).every(function( current ) {
			var chr, length, numeric, tokenRe,
				token = {};

			function hourFormatParse( tokenRe, numberParser ) {
				var aux = value.match( tokenRe );
				numberParser = numberParser || function( value ) {
					return +value;
				};

				if ( !aux ) {
					return false;
				}

				// hourFormat containing H only, e.g., `+H;-H`
				if ( aux.length < 8 ) {
					token.value =
						( aux[ 1 ] ? -numberParser( aux[ 1 ] ) : numberParser( aux[ 4 ] ) ) * 60;

				// hourFormat containing H and m, e.g., `+HHmm;-HHmm`
				} else {
					token.value =
						( aux[ 1 ] ? -numberParser( aux[ 1 ] ) : numberParser( aux[ 7 ] ) ) * 60 +
						( aux[ 1 ] ? -numberParser( aux[ 4 ] ) : numberParser( aux[ 10 ] ) );
				}

				return true;
			}

			// Transform:
			// - "+H;-H" -> /\+(\d\d?)|-(\d\d?)/
			// - "+HH;-HH" -> /\+(\d\d)|-(\d\d)/
			// - "+HHmm;-HHmm" -> /\+(\d\d)(\d\d)|-(\d\d)(\d\d)/
			// - "+HH:mm;-HH:mm" -> /\+(\d\d):(\d\d)|-(\d\d):(\d\d)/
			//
			// If gmtFormat is GMT{0}, the regexp must fill {0} in each side, e.g.:
			// - "+H;-H" -> /GMT\+(\d\d?)|GMT-(\d\d?)/
			function hourFormatRe( hourFormat, gmtFormat, timeSeparator ) {
				var re;

				if ( !gmtFormat ) {
					gmtFormat = "{0}";
				}

				re = hourFormat
					.replace( "+", "\\+" )

					// Unicode equivalent to (\\d\\d)
					.replace( /HH|mm/g, "((" + regexpN.source + ")(" + regexpN.source + "))" )

					// Unicode equivalent to (\\d\\d?)
					.replace( /H|m/g, "((" + regexpN.source + ")(" + regexpN.source + ")?)" );

				if ( timeSeparator ) {
					re = re.replace( /:/g, timeSeparator );
				}

				re = re.split( ";" ).map(function( part ) {
					return gmtFormat.replace( "{0}", part );
				}).join( "|" );

				return new RegExp( re );
			}

			function oneDigitIfLengthOne() {
				if ( length === 1 ) {

					// Unicode equivalent to /\d/
					numeric = true;
					return tokenRe = regexpN;
				}
			}

			function oneOrTwoDigitsIfLengthOne() {
				if ( length === 1 ) {

					// Unicode equivalent to /\d\d?/
					numeric = true;
					return tokenRe = new RegExp( "(" + regexpN.source + ")(" + regexpN.source + ")?" );
				}
			}

			function twoDigitsIfLengthTwo() {
				if ( length === 2 ) {

					// Unicode equivalent to /\d\d/
					numeric = true;
					return tokenRe = new RegExp( "(" + regexpN.source + ")(" + regexpN.source + ")" );
				}
			}

			// Brute-force test every locale entry in an attempt to match the given value.
			// Return the first found one (and set token accordingly), or null.
			function lookup( path ) {
				var i, re,
					data = properties[ path.join( "/" ) ];

				for ( i in data ) {
					re = new RegExp( "^" + data[ i ] );
					if ( re.test( value ) ) {
						token.value = i;
						return tokenRe = new RegExp( data[ i ] );
					}
				}
				return null;
			}

			token.type = current;
			chr = current.charAt( 0 ),
			length = current.length;

			if ( chr === "Z" ) {

				// Z..ZZZ: same as "xxxx".
				if ( length < 4 ) {
					chr = "x";
					length = 4;

				// ZZZZ: same as "OOOO".
				} else if ( length < 5 ) {
					chr = "O";
					length = 4;

				// ZZZZZ: same as "XXXXX"
				} else {
					chr = "X";
					length = 5;
				}
			}

			switch ( chr ) {

				// Era
				case "G":
					lookup([
						"gregorian/eras",
						length <= 3 ? "eraAbbr" : ( length === 4 ? "eraNames" : "eraNarrow" )
					]);
					break;

				// Year
				case "y":
				case "Y":
					numeric = true;

					// number l=1:+, l=2:{2}, l=3:{3,}, l=4:{4,}, ...
					if ( length === 1 ) {

						// Unicode equivalent to /\d+/.
						tokenRe = new RegExp( "(" + regexpN.source + ")+" );
					} else if ( length === 2 ) {

						// Unicode equivalent to /\d\d/
						tokenRe = new RegExp( "(" + regexpN.source + ")(" + regexpN.source + ")" );
					} else {

						// Unicode equivalent to /\d{length,}/
						tokenRe = new RegExp( "(" + regexpN.source + "){" + length + ",}" );
					}
					break;

				// Quarter
				case "Q":
				case "q":

					// number l=1:{1}, l=2:{2}.
					// lookup l=3...
					oneDigitIfLengthOne() || twoDigitsIfLengthTwo() || lookup([
						"gregorian/quarters",
						chr === "Q" ? "format" : "stand-alone",
						widths[ length - 3 ]
					]);
					break;

				// Month
				case "M":
				case "L":

					// number l=1:{1,2}, l=2:{2}.
					// lookup l=3...
					oneOrTwoDigitsIfLengthOne() || twoDigitsIfLengthTwo() || lookup([
						"gregorian/months",
						chr === "M" ? "format" : "stand-alone",
						widths[ length - 3 ]
					]);
					break;

				// Day
				case "D":

					// number {l,3}.
					if ( length <= 3 ) {

						// Unicode equivalent to /\d{length,3}/
						numeric = true;
						tokenRe = new RegExp( "(" + regexpN.source + "){" + length + ",3}" );
					}
					break;

				case "W":
				case "F":

					// number l=1:{1}.
					oneDigitIfLengthOne();
					break;

				// Week day
				case "e":
				case "c":

					// number l=1:{1}, l=2:{2}.
					// lookup for length >=3.
					if ( length <= 2 ) {
						oneDigitIfLengthOne() || twoDigitsIfLengthTwo();
						break;
					}

				/* falls through */
				case "E":
					if ( length === 6 ) {

						// Note: if short day names are not explicitly specified, abbreviated day
						// names are used instead http://www.unicode.org/reports/tr35/tr35-dates.html#months_days_quarters_eras
						lookup([
							"gregorian/days",
							[ chr === "c" ? "stand-alone" : "format" ],
							"short"
						]) || lookup([
							"gregorian/days",
							[ chr === "c" ? "stand-alone" : "format" ],
							"abbreviated"
						]);
					} else {
						lookup([
							"gregorian/days",
							[ chr === "c" ? "stand-alone" : "format" ],
							widths[ length < 3 ? 0 : length - 3 ]
						]);
					}
					break;

				// Period (AM or PM)
				case "a":
					lookup([
						"gregorian/dayPeriods/format/wide"
					]);
					break;

				// Week, Day, Hour, Minute, or Second
				case "w":
				case "d":
				case "h":
				case "H":
				case "K":
				case "k":
				case "j":
				case "m":
				case "s":

					// number l1:{1,2}, l2:{2}.
					oneOrTwoDigitsIfLengthOne() || twoDigitsIfLengthTwo();
					break;

				case "S":

					// number {l}.

					// Unicode equivalent to /\d{length}/
					numeric = true;
					tokenRe = new RegExp( "(" + regexpN.source + "){" + length + "}" );
					break;

				case "A":

					// number {l+5}.

					// Unicode equivalent to /\d{length+5}/
					numeric = true;
					tokenRe = new RegExp( "(" + regexpN.source + "){" + ( length + 5 ) + "}" );
					break;

				// Zone
				case "z":
				case "O":

					// O: "{gmtFormat}+H;{gmtFormat}-H" or "{gmtZeroFormat}", eg. "GMT-8" or "GMT".
					// OOOO: "{gmtFormat}{hourFormat}" or "{gmtZeroFormat}", eg. "GMT-08:00" or "GMT".
					if ( value === properties[ "timeZoneNames/gmtZeroFormat" ] ) {
						token.value = 0;
						tokenRe = new RegExp( properties[ "timeZoneNames/gmtZeroFormat" ] );
					} else {
						tokenRe = hourFormatRe(
							length < 4 ? "+H;-H" : properties[ "timeZoneNames/hourFormat" ],
							properties[ "timeZoneNames/gmtFormat" ],
							timeSeparator
						);
						if ( !hourFormatParse( tokenRe, numberParser ) ) {
							return null;
						}
					}
					break;

				case "X":

					// Same as x*, except it uses "Z" for zero offset.
					if ( value === "Z" ) {
						token.value = 0;
						tokenRe = /Z/;
						break;
					}

				/* falls through */
				case "x":

					// x: hourFormat("+HH;-HH")
					// xx or xxxx: hourFormat("+HHmm;-HHmm")
					// xxx or xxxxx: hourFormat("+HH:mm;-HH:mm")
					tokenRe = hourFormatRe(
						length === 1 ? "+HH;-HH" : ( length % 2 ? "+HH:mm;-HH:mm" : "+HHmm;-HHmm" )
					);
					if ( !hourFormatParse( tokenRe ) ) {
						return null;
					}
					break;

				case "'":
					token.type = "literal";
					tokenRe = new RegExp( regexpEscape( removeLiteralQuotes( current ) ) );
					break;

				default:
					token.type = "literal";
					tokenRe = /./;
			}

			if ( !tokenRe ) {
				return false;
			}

			// Get lexeme and consume it.
			value = value.replace( new RegExp( "^" + tokenRe.source ), function( lexeme ) {
				token.lexeme = lexeme;
				if ( numeric ) {
					token.value = numberParser( lexeme );
				}
				return "";
			});

			if ( !token.lexeme ) {
				return false;
			}

			tokens.push( token );
			return true;
		});

		if ( value !== "" ) {
			valid = false;
		}

		return valid ? tokens : [];
	};




	var dateParserFn = function( numberParser, parseProperties, tokenizerProperties ) {
		return function dateParser( value ) {
			var tokens;

			validateParameterPresence( value, "value" );
			validateParameterTypeString( value, "value" );

			tokens = dateTokenizer( value, numberParser, tokenizerProperties );
			return dateParse( value, tokens, parseProperties ) || null;
		};
	};




	Globalize._dateFormatterFn = dateFormatterFn;
	Globalize._dateParserFn = dateParserFn;
	Globalize._dateFormat = dateFormat;
	Globalize._dateParser = dateParse;
	Globalize._dateTokenizer = dateTokenizer;
	Globalize._validateParameterTypeDate = validateParameterTypeDate;

	Globalize.dateFormatter =
	Globalize.prototype.dateFormatter = function( options ) {
		options = options || { skeleton: "yMd" };
		return Globalize[ runtimeKey( "dateFormatter", this._locale, [ options ] ) ];
	};

	Globalize.dateParser =
	Globalize.prototype.dateParser = function( options ) {
		options = options || { skeleton: "yMd" };
		return Globalize[ runtimeKey( "dateParser", this._locale, [ options ] ) ];
	};

	Globalize.formatDate =
	Globalize.prototype.formatDate = function( value, options ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeDate( value, "value" );

		return this.dateFormatter( options )( value );
	};

	Globalize.parseDate =
	Globalize.prototype.parseDate = function( value, options ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeString( value, "value" );

		return this.dateParser( options )( value );
	};

	return Globalize;




	}));


/***/ },

/***/ 398:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Globalize Runtime v1.2.1
	 *
	 * http://github.com/jquery/globalize
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-12-14T18:34Z
	 */
	/*!
	 * Globalize Runtime v1.2.1 2016-12-14T18:34Z Released under the MIT license
	 * http://git.io/TrdQbw
	 */
	(function( root, factory ) {

		// UMD returnExports
		if ( true ) {

			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(395)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if ( typeof exports === "object" ) {

			// Node, CommonJS
			module.exports = factory( require( "../globalize-runtime" ) );
		} else {

			// Extend global
			factory( root.Globalize );
		}
	}(this, function( Globalize ) {

	var runtimeKey = Globalize._runtimeKey,
		validateParameterType = Globalize._validateParameterType;


	/**
	 * Function inspired by jQuery Core, but reduced to our use case.
	 */
	var isPlainObject = function( obj ) {
		return obj !== null && "" + obj === "[object Object]";
	};




	var validateParameterTypeMessageVariables = function( value, name ) {
		validateParameterType(
			value,
			name,
			value === undefined || isPlainObject( value ) || Array.isArray( value ),
			"Array or Plain Object"
		);
	};




	var messageFormatterFn = function( formatter ) {
		return function messageFormatter( variables ) {
			if ( typeof variables === "number" || typeof variables === "string" ) {
				variables = [].slice.call( arguments, 0 );
			}
			validateParameterTypeMessageVariables( variables, "variables" );
			return formatter( variables );
		};
	};




	Globalize._messageFormatterFn = messageFormatterFn;
	/* jshint ignore:start */
	Globalize._messageFormat = (function() {
	var number = function (value, offset) {
	  if (isNaN(value)) throw new Error("'" + value + "' isn't a number.");
	  return value - (offset || 0);
	};
	var plural = function (value, offset, lcfunc, data, isOrdinal) {
	  if ({}.hasOwnProperty.call(data, value)) return data[value]();
	  if (offset) value -= offset;
	  var key = lcfunc(value, isOrdinal);
	  if (key in data) return data[key]();
	  return data.other();
	};
	var select = function (value, data) {
	  if ({}.hasOwnProperty.call(data, value)) return data[value]();
	  return data.other()
	};

	return {number: number, plural: plural, select: select};
	}());
	/* jshint ignore:end */
	Globalize._validateParameterTypeMessageVariables = validateParameterTypeMessageVariables;

	Globalize.messageFormatter =
	Globalize.prototype.messageFormatter = function( /* path */ ) {
		return Globalize[
			runtimeKey( "messageFormatter", this._locale, [].slice.call( arguments, 0 ) )
		];
	};

	Globalize.formatMessage =
	Globalize.prototype.formatMessage = function( path /* , variables */ ) {
		return this.messageFormatter( path ).apply( {}, [].slice.call( arguments, 1 ) );
	};

	return Globalize;




	}));


/***/ },

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Globalize Runtime v1.2.1
	 *
	 * http://github.com/jquery/globalize
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-12-14T18:34Z
	 */
	/*!
	 * Globalize Runtime v1.2.1 2016-12-14T18:34Z Released under the MIT license
	 * http://git.io/TrdQbw
	 */
	(function( root, factory ) {

		// UMD returnExports
		if ( true ) {

			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(395)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if ( typeof exports === "object" ) {

			// Node, CommonJS
			module.exports = factory( require( "../globalize-runtime" ) );
		} else {

			// Extend global
			factory( root.Globalize );
		}
	}(this, function( Globalize ) {

	var runtimeKey = Globalize._runtimeKey,
		validateParameterPresence = Globalize._validateParameterPresence,
		validateParameterType = Globalize._validateParameterType;


	var validateParameterTypeNumber = function( value, name ) {
		validateParameterType(
			value,
			name,
			value === undefined || typeof value === "number",
			"Number"
		);
	};




	var pluralGeneratorFn = function( plural ) {
		return function pluralGenerator( value ) {
			validateParameterPresence( value, "value" );
			validateParameterTypeNumber( value, "value" );

			return plural( value );
		};
	};




	Globalize._pluralGeneratorFn = pluralGeneratorFn;
	Globalize._validateParameterTypeNumber = validateParameterTypeNumber;

	Globalize.plural =
	Globalize.prototype.plural = function( value, options ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeNumber( value, "value" );
		return this.pluralGenerator( options )( value );
	};

	Globalize.pluralGenerator =
	Globalize.prototype.pluralGenerator = function( options ) {
		options = options || {};
		return Globalize[ runtimeKey( "pluralGenerator", this._locale, [ options ] ) ];
	};

	return Globalize;




	}));


/***/ },

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Globalize Runtime v1.2.1
	 *
	 * http://github.com/jquery/globalize
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-12-14T18:34Z
	 */
	/*!
	 * Globalize Runtime v1.2.1 2016-12-14T18:34Z Released under the MIT license
	 * http://git.io/TrdQbw
	 */
	(function( root, factory ) {

		// UMD returnExports
		if ( true ) {

			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(395),
				__webpack_require__(394),
				__webpack_require__(399)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if ( typeof exports === "object" ) {

			// Node, CommonJS
			module.exports = factory(
				require( "../globalize-runtime" ),
				require( "./number" ),
				require( "./plural" )
			);
		} else {

			// Extend global
			factory( root.Globalize );
		}
	}(this, function( Globalize ) {

	var formatMessage = Globalize._formatMessage,
		runtimeKey = Globalize._runtimeKey,
		validateParameterPresence = Globalize._validateParameterPresence,
		validateParameterTypeNumber = Globalize._validateParameterTypeNumber;


	/**
	 * format( value, numberFormatter, pluralGenerator, properties )
	 *
	 * @value [Number] The number to format
	 *
	 * @numberFormatter [String] A numberFormatter from Globalize.numberFormatter
	 *
	 * @pluralGenerator [String] A pluralGenerator from Globalize.pluralGenerator
	 *
	 * @properties [Object] containing relative time plural message.
	 *
	 * Format relative time.
	 */
	var relativeTimeFormat = function( value, numberFormatter, pluralGenerator, properties ) {

		var relativeTime,
			message = properties[ "relative-type-" + value ];

		if ( message ) {
			return message;
		}

		relativeTime = value <= 0 ? properties[ "relativeTime-type-past" ]
			: properties[ "relativeTime-type-future" ];

		value = Math.abs( value );

		message = relativeTime[ "relativeTimePattern-count-" + pluralGenerator( value ) ];
		return formatMessage( message, [ numberFormatter( value ) ] );
	};




	var relativeTimeFormatterFn = function( numberFormatter, pluralGenerator, properties ) {
		return function relativeTimeFormatter( value ) {
			validateParameterPresence( value, "value" );
			validateParameterTypeNumber( value, "value" );

			return relativeTimeFormat( value, numberFormatter, pluralGenerator, properties );
		};

	};




	Globalize._relativeTimeFormatterFn = relativeTimeFormatterFn;

	Globalize.formatRelativeTime =
	Globalize.prototype.formatRelativeTime = function( value, unit, options ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeNumber( value, "value" );

		return this.relativeTimeFormatter( unit, options )( value );
	};

	Globalize.relativeTimeFormatter =
	Globalize.prototype.relativeTimeFormatter = function( unit, options ) {
		options = options || {};
		return Globalize[ runtimeKey( "relativeTimeFormatter", this._locale, [ unit, options ] ) ];
	};

	return Globalize;




	}));


/***/ },

/***/ 401:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Globalize Runtime v1.2.1
	 *
	 * http://github.com/jquery/globalize
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-12-14T18:34Z
	 */
	/*!
	 * Globalize Runtime v1.2.1 2016-12-14T18:34Z Released under the MIT license
	 * http://git.io/TrdQbw
	 */
	(function( root, factory ) {

		// UMD returnExports
		if ( true ) {

			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(395),
				__webpack_require__(394),
				__webpack_require__(399)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if ( typeof exports === "object" ) {

			// Node, CommonJS
			module.exports = factory(
				require( "../globalize-runtime" ),
				require( "./number" ),
				require( "./plural" )
			);
		} else {

			// Extend global
			factory( root.Globalize );
		}
	}(this, function( Globalize ) {

	var formatMessage = Globalize._formatMessage,
		runtimeKey = Globalize._runtimeKey,
		validateParameterPresence = Globalize._validateParameterPresence,
		validateParameterTypeNumber = Globalize._validateParameterTypeNumber;


	/**
	 * format( value, numberFormatter, pluralGenerator, unitProperies )
	 *
	 * @value [Number]
	 *
	 * @numberFormatter [Object]: A numberFormatter from Globalize.numberFormatter.
	 *
	 * @pluralGenerator [Object]: A pluralGenerator from Globalize.pluralGenerator.
	 *
	 * @unitProperies [Object]: localized unit data from cldr.
	 *
	 * Format units such as seconds, minutes, days, weeks, etc.
	 *
	 * OBS:
	 *
	 * Unit Sequences are not implemented.
	 * http://www.unicode.org/reports/tr35/tr35-35/tr35-general.html#Unit_Sequences
	 *
	 * Duration Unit (for composed time unit durations) is not implemented.
	 * http://www.unicode.org/reports/tr35/tr35-35/tr35-general.html#durationUnit
	 */
	var unitFormat = function( value, numberFormatter, pluralGenerator, unitProperties ) {
		var compoundUnitPattern = unitProperties.compoundUnitPattern, dividend, dividendProperties,
			formattedValue, divisor, divisorProperties, message, pluralValue;

		unitProperties = unitProperties.unitProperties;
		formattedValue = numberFormatter( value );
		pluralValue = pluralGenerator( value );

		// computed compound unit, eg. "megabyte-per-second".
		if ( unitProperties instanceof Array ) {
			dividendProperties = unitProperties[ 0 ];
			divisorProperties = unitProperties[ 1 ];

			dividend = formatMessage( dividendProperties[ pluralValue ], [ value ] );
			divisor = formatMessage( divisorProperties.one, [ "" ] ).trim();

			return formatMessage( compoundUnitPattern, [ dividend, divisor ] );
		}

		message = unitProperties[ pluralValue ];

		return formatMessage( message, [ formattedValue ] );
	};




	var unitFormatterFn = function( numberFormatter, pluralGenerator, unitProperties ) {
		return function unitFormatter( value ) {
			validateParameterPresence( value, "value" );
			validateParameterTypeNumber( value, "value" );

			return unitFormat( value, numberFormatter, pluralGenerator, unitProperties );
		};

	};




	Globalize._unitFormatterFn = unitFormatterFn;

	Globalize.formatUnit =
	Globalize.prototype.formatUnit = function( value, unit, options ) {
		return this.unitFormatter( unit, options )( value );
	};

	Globalize.unitFormatter =
	Globalize.prototype.unitFormatter = function( unit, options ) {
		options = options || {};
		return Globalize[ runtimeKey( "unitFormatter", this._locale, [ unit, options ] ) ];
	};

	return Globalize;




	}));


/***/ }

/******/ });