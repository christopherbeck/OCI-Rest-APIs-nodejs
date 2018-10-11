[![Build Status](https://secure.travis-ci.org/GlitchMr/binary-string.png?branch=master)](http://travis-ci.org/GlitchMr/binary-string) 

Binary strings still have their uses. Don't let huge warning of Node.js
stop you from using them. There are valid reasons to use binary strings
instead of low-level `Buffer`s. Who cares about performance? If we
would care so much, we all would write in assembly :-).

This module will try to use Node.js binary strings if you are using
version create before their removal (while destroying all warnings
about them). If your Node.js version doesn't have binary strings, they
are emulated which makes them even slower (but well, you have them,
and if you care about performance, write in assembly).

Unlike `Buffer`s, you can do anything you can with normal strings on
binary strings (internally, they are normal strings). You can use
regular expressions, you can compare them, you can use string methods
on them, you can use them as object keys. The only disadvantage is that
you cannot easily change single characters (this is probably only real
advantage of `Buffer`s).

```javascript
var binaryString = require('binary-string'),
    // Converts buffer to binary string
    fromBuffer   = binaryString.fromBuffer,
    // Converts binary string to buffer
    toBuffer     = binaryString.toBuffer
```
