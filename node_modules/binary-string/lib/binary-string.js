(function () {
    // I need to avoid mandatory warning about using deprecated
    // function, so I overwrite console.error(), so Node.js will
    // think that everything is fine. After I'll do it, I restore
    // original console.error()
    var consoleError = console.error
    console.error = function () {}
    try {
        // This is like "local" in Perl
        if (new Buffer([255]).toString('binary') !== "\xFF")
            throw new Exception
        // Node.js is good enough to not complain
        exports.toBuffer = function (binary) {
            return new Buffer(binary, 'binary')
        }
        exports.fromBuffer = function (buffer) {
            return buffer.toString('binary')
        }
    }
    catch (e) {
        // So we have to emulate functions removed for "performance"
        // while having even lower performance. Thank you, Node.js.
        exports.toBuffer = function (binary) {
            var i, length, array = []
            for (i = 0, length = binary.length; i < length; ++i) {
                array.push(binary.charCodeAt(i))
            }
            return new Buffer(array)
        }
        exports.fromBuffer = function (buffer) {
            return String.fromCharCode.apply(String, buffer)
        }
    }
    console.error = consoleError
}())
