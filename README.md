# sydinh-node-package v1.0.5

The sydinh-node-package library exported as Node.js modules.

## Requirements

- node & npm
- git

## Installation

```
$ npm i -g npm
$ npm i sydinh-node-package
```

## Usage

```Javascript
// imports whole library
import { add, subtract } from 'sydinh-node-package';

// imports whole library too because the *src/index.js* from the library imports/exports subtract function
import { add } from 'sydinh-node-package';

// imports add as standalone function without import whole library
import add from 'sydinh-node-package/lib/add';

// imports subtract as standalone function without import whole library
import subtract from 'sydinh-node-package/lib/subtract';

add(1, 1); // expected output: 2

subtract(1, 1); // expected output: 0
```