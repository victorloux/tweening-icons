# Tweening icons

A proof of concept for tweening **groups of SVG paths** between two states on hover.

![Demo of the animation](demo.gif?raw=true "Demonstration of the tweening animation")

[See a live demo here](https://victorloux.github.io/tweening-icons/). Tip: if you hold down the Shift key, the animation slows down!

It uses [D3](https://d3js.org) so if you don't use D3 anywhere else on your site it's probably not a good tradeoff, given the size of the library.


## Credits

Most of the tweening logic is taken from the d3 example gist by @mbostock: https://gist.github.com/mbostock/3916621, but it only supports a single path. I only added support for multiple paths at once, and the logic for SVG hovers.

The SVGs are taken from [the Noun Project](https://thenounproject.com/).

## To do

- [ ] The links over SVGs are a bit of a hack, and don't work if Javascript is disabled
- [ ] It does not work on mobile touch
- [ ] Creating the paths from the SVG files is manual and a bit tedious (see main.js). Sadly because of the separation of groups it might be hard to automate.
