# ab-array

Array prototype addons.

// move element up
Array.prototype.moveUp()
// move element down
Array.prototype.moveDown()
// get index of element
Array.prototype.indexOf()
// remove element
Array.prototype.removeElement()

## Install

With [npm](http://npmjs.org) do:

```bash
$ npm install ab-array --save-dev
```

## Usage
	
	require('ab-array');

	var myarray = ['a', 'b', 'c'];

	myarray.moveUp('c', 1);
	
	// myarray becomes ['a', 'c', 'b'];
	
	myarray.moveDown('c', 1);

	// myarray becomes ['a', 'b', 'c'];

	myarray.indexOf('c'); 

	// 2

	myarray.removeElement('c');

	// myarray becomes ['a', 'b'];

## License

MIT
