# normalize-file-to-url-path

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

A simple function to normalize a file path into a [URL path](https://nodejs.org/api/url.html) that can be used when testing `req.url` from an HTTP server.

```js
var toUrl = require('normalize-file-to-url-path')

toUrl('./foo.js')
//=> 'foo.js'

toUrl('foo bar.js')
//=> 'foo%20bar.js'

toUrl('/')
//=> null
```

Experimental -- mostly used internally across some of my tools.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/normalize-file-to-url-path/blob/master/LICENSE.md) for details.
