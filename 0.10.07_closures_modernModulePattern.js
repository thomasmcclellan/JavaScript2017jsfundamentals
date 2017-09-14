//Modern Module Patterns

define('foo', function(){
	var o = { bar: 'bar' };

	return {
		bar: function(){
			console.log(o.bar);
		}
	};
});