# umi-plugin-api-types

Type definitions for umi plugin api.

[![NPM version](https://img.shields.io/npm/v/umi-plugin-api-types.svg?style=flat)](https://npmjs.org/package/umi-plugin-api-types)
[![Build Status](https://img.shields.io/travis/umijs/umi-plugin-api-types.svg?style=flat)](https://travis-ci.org/umijs/umi-plugin-api-types)
[![NPM downloads](http://img.shields.io/npm/dm/umi-plugin-api-types.svg?style=flat)](https://npmjs.org/package/umi-plugin-api-types)

## Why

## Installation

```bash
$ yarn add umi-plugin-api-types
```

## Usage

```js
import { IApi } from 'umi-plugin-api-types';

export default function(api: IApi) {
  api.log.success('hello');
}
```

## LICENSE

MIT
