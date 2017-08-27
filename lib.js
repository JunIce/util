"use strict"
;(function(root, factory) {

	factory(root)

})(this, function( root ) {

	var ArrayProto = Array.prototype,
		ObjectProto = Object.prototype,
		StringProto = String.prototype;

	var _R,R;

	_R = function ( selector, context ) {
		return new _R.fn.init( selector, context )
	};
	_R.prototype.extend = _R.extend = function (target) {
	    target = target || {};

	    var args = [].slice.call(arguments), length = args.length, i = 1;

	    if (args.length === 1) {
	      target = this;
	      i = 0;
	    }
	    
	    for (; i < length; i++) {
	      if (!args[i]) {
	        continue;
	      }
	      for (var key in args[i]) {
	        if (args[i].hasOwnProperty(key)) {
	          target[key] = args[i][key];
	        }
	      }
	    }

	    return target;
	  };

	_R.fn = _R.prototype = {

	};

	_R.fn.init = function (selector , context ) {
		console.log('aaa')
	};

	_R.fn.init.prototype = _R.fn;

	root.R = _R
});
R.extend({
	map:function(){
		console.log('map')
	}
})
R.map()
