var a = [1,2,3].reduce(function(pre,next){
	return pre+ next
},0);
console.log(a) // 6 ES 6

//profill

Object.defineProperty(Array.prototype, 'reduce' ,
{
	value : function( callback, initiValue) {
	if(this === null) {
		throw new TypeError('Array.prototype.reduce called on null or undefined;')
	}

	if(typeof callback !== 'function') {
		throw new TypeError(callback + " is not a function;")
	}

	var o = Object(this);
	var len = o.length >>> 0;
	console.log(len)

	var k = 0, value;

	if(arguments.length >= 2) {
		value = arguments[1];
	}else{
		while(k < len && !(k in o)) {
			k++;
		}

		if(k >= len) {
			throw new TypeError("Reduce of empty array with no initial value")
		}
		value = o[k++];
	}

	while(k < len) {
		if(k in o) {
			value = callback(value , o[k], k ,o)
		}

		k++;
	}

	return value;
}
})
function reduce( list, iteratee, value , content) {
	if(list == null ) return list;

	var value,
		length = list.length,
		i = 0;

	if (arguments.length < 3) {
      value = list[i++];
    }
    for (; i < length; i++) {
      console.log(value)
      value = iteratee.call(value, list[i], i, list);
    }
    return value;
}

var b = reduce([1,2,3] , function(pre,next) {
	// console.log(pre)
	return pre + next
},0)
// console.log(b)