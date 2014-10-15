# karma-esnext-preprocessor

> Preprocessor to compile tomorrow's JavaScript syntax to the language of today using [esnext](https://github.com/esnext/esnext).

## Installation

The easiest way is to keep `karma-esnext-preprocessor` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma": "~0.12",
    "karma-esnext-preprocessor": "~0.1"
  }
}
```

You can easily add it by doing:
```bash
npm install karma-esnext-preprocessor --save-dev
```

## Configuration
Following code shows the default configuration...
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    preprocessors: {
      '**/*.js': ['esnext']
    },

    esnextPreprocessor: {
      options: {
        defaultOnly: true
      }
    }
  });
};
```

#### options

[Options](https://github.com/square/esnext/blob/b12248e0a0e60df04c5292bf8265b55c42d4b480/lib/index.js#L42) are passed through to esnext.

----

For more information on Karma see the [homepage].


[homepage]: http://karma-runner.github.com

