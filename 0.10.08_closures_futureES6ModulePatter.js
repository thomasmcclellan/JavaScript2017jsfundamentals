//Future or ES6 Module Patterns

var o = { bar: 'bar' };

export functin bar(){
	return o.bar;
}

//Two keywords:
import bar from 'foo';
bar(); // 'bar'

module foo from 'foo';
foo.bar(); //'bar'