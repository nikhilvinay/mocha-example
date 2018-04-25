//THis file contains only function definition
var definitions = {};
definitions.multi = function(a , b){
	if (typeof a !== 'number')
		return undefined;
	if (typeof b!=='number')
		return undefined;
	return a*b;
}

definitions.div = function(a ,  b){
	if (typeof a !== 'number')
		return undefined;
	if (typeof b!== 'number')
		return undefined;
	return a/b;
}

module.exports = {
	multi : definitions.multi
};

