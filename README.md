# `dom-inline-style-filter`

<p align="center"><img src="https://github.com/zm-cttae/dom-inline-style-filter/raw/dddefaf96c39378bf00a335bac76fc3839fd0a4e/assets/icon.png" height="128" /></p>

<p align="center"><a href="https://github.com/zm-cttae/dom-inline-style-filter" target="_blank"><img src="https://img.shields.io/github/v/release/zm-cttae/dom-inline-style-filter.svg?style=flat-square&label=Release&logo=github&logoColor=cacde2&labelColor=2c2c32&color=2196f3" /></a> <a href="https://www.npmjs.com/package/dom-inline-style-filter" target="_blank"><img src="https://img.shields.io/npm/dw/dom-inline-style-filter?style=flat-square&label=Downloads&logo=npm&logoColor=cacde2&labelColor=2c2c32&color=2196f3" /></a> <a href="https://github.com/zm-sdet/dom-inline-style-filter/pipelines" target="_blank"><img src="https://img.shields.io/github/actions/workflow/status/zm-cttae/dom-inline-style-filter/CI.svg?style=flat-square&label	=CI&logo=github&logoColor=cacde2&labelColor=2c2c32&color=2196f3" /></a></p>

`dom-inline-style-filter` library filters inline style declarations for a standalone DOM element tree by computed effect.

- As web developers, we would like elements that ship only with inline styling to be light so that they can be included in NPM packages.
- A main use case of this is SVG screenshots of HTML elements.
- Even after a filter algorithm to [filter out user agent styling when inlining the style][css-author-style-filter], there is some way to go with data size.

## Usage

### `dominlinestylefilter(node)`

**Parameter:** `node` - a `HTMLElement` with all style rules embedded as inline style attributes or `<style>` tags.

**Returns:** a `Promise` that resolves to `node`. Within `node`, all inline styling has been filtered to the minimum declarations that produce the same computed style.

### `dominlinestylefilter.sync(node)`

Synchronous version. Returns `node` when the styling compression is completed.

<!-- `dom-inline-style-filter` -->
[css-author-style-filter]: https://github.com/1904labs/dom-to-image-more/pull/71
