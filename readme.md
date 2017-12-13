# mongo-projection-from-keys [![Build Status](https://travis-ci.org/vladgolubev/mongo-projection-from-keys.svg?branch=master)](https://travis-ci.org/vladgolubev/mongo-projection-from-keys)

> Generate MongoDB projection from list of keys to include / exclude

## Install

```
$ yarn add mongo-projection-from-keys
```

## Usage

```js
const mongoProjectionFromKeys = require('mongo-projection-from-keys');

mongoProjectionFromKeys({
  include: ['email', 'username'],
  exclude: ['_id']
});

// => '{email: 1, username: 1, _id: 0}'
```

## API

### mongoProjectionFromKeys({include, exclude})

#### {include, exclude}

Type: `object`

Options object with `include` and `exclude` arrays.
`exclude` has higher priority.

## License

MIT © [Vlad Holubiev](https://vladholubiev.com)
