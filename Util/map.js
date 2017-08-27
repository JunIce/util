function map (list, iteratee, content) {
	if( list == null) return list;

	var i = 0,
		length = list.length,
		res = Array(length);

	for(; i < length; i++) {
		res[i] = iteratee(list[i], i, list);
	}

	return res;
}

var a = map([1,2,3] , function(i) {
	return i*3
})
console.log(a)