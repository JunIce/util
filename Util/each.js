
function each(list, iteratee , content){
	if(typeof iteratee != 'function') return list;

	var i = 0, length = list.length;

	
	for(; i < length; i++ ) {
		iteratee(list[i] , i, list)
	}
	
	
	return list;
}

each( [{name : 1}, { name : 2} , { name : 3}] , function (item , index, list) {
	console.log(item, index, list)
})

each( [1,2,3] , function (item , index, list) {
	console.log(item, index, list)
})