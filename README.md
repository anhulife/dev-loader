# DEV-LOADER

> load file only in development environment.

## install

```shell
npm install dev-loader --save-dev
```

## useage

```javascript
// foo.js
console.log('foo');

// bar.js
import 'dev-loader!./foo.js';
console.log('bar');
```

```shell
node ./bar.bundle.js
# foo
# bar

cross-env NODE_ENV=production node ./bar.bundle.js
# bar
```

