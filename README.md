# sydinh-node-package v1.0.5
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

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
## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://shopware.thuong.lv/"><img src="https://avatars3.githubusercontent.com/u/22548423?v=4" width="100px;" alt=""/><br /><sub><b>Thuong Le</b></sub></a><br /><a href="https://github.com/sydinh/sydinh-node-package/commits?author=vienthuong" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!