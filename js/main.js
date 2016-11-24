@charset "UTF-8";
/*!
*
*  Homebrew App Store    - 11/2016
*  Webpage code & design by Jaames
*  rakujira.jp | github.com/jaames
*
*  Third-party librabries used:
*  - Foundation Sites (ver 6.2.0) (SCSS version)
*
*  I appologise for the fact that this is a bit of a mess; it was done in a couple of days so hey ¯\_(ツ)_/¯
*
*/
/**
 * Foundation for Sites by ZURB
 * Version 6.2.1
 * foundation.zurb.com
 * Licensed under MIT Open Source
 */
/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */
/**
   * 1. Set default font family to sans-serif.
   * 2. Prevent iOS and IE text size adjust after device orientation change,
   *    without disabling user zoom.
   */
html {
  font-family: sans-serif;
  /* 1 */
  -ms-text-size-adjust: 100%;
  /* 2 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
}

/**
   * Remove default margin.
   */
body {
  margin: 0;
}

/* HTML5 display definitions
     ========================================================================== */
/**
   * Correct `block` display not defined for any HTML5 element in IE 8/9.
   * Correct `block` display not defined for `details` or `summary` in IE 10/11
   * and Firefox.
   * Correct `block` display not defined for `main` in IE 11.
   */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block;
}

/**
   * 1. Correct `inline-block` display not defined in IE 8/9.
   * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.
   */
audio,
canvas,
progress,
video {
  display: inline-block;
  /* 1 */
  vertical-align: baseline;
  /* 2 */
}

/**
   * Prevent modern browsers from displaying `audio` without controls.
   * Remove excess height in iOS 5 devices.
   */
audio:not([controls]) {
  display: none;
  height: 0;
}

/**
   * Address `[hidden]` styling not present in IE 8/9/10.
   * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.
   */
[hidden],
template {
  display: none;
}

/* Links
     ========================================================================== */
/**
   * Remove the gray background color from active links in IE 10.
   */
a {
  background-color: transparent;
}

/**
   * Improve readability of focused elements when they are also in an
   * active/hover state.
   */
a:active,
a:hover {
  outline: 0;
}

/* Text-level semantics
     ========================================================================== */
/**
   * Address styling not present in IE 8/9/10/11, Safari, and Chrome.
   */
abbr[title] {
  border-bottom: 1px dotted;
}

/**
   * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.
   */
b,
strong {
  font-weight: bold;
}

/**
   * Address styling not present in Safari and Chrome.
   */
dfn {
  font-style: italic;
}

/**
   * Address variable `h1` font-size and margin within `section` and `article`
   * contexts in Firefox 4+, Safari, and Chrome.
   */
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/**
   * Address styling not present in IE 8/9.
   */
mark {
  background: #ff0;
  color: #000;
}

/**
   * Address inconsistent and variable font size in all browsers.
   */
small {
  font-size: 80%;
}

/**
   * Prevent `sub` and `sup` affecting `line-height` in all browsers.
   */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

/* Embedded content
     ========================================================================== */
/**
   * Remove border when inside `a` element in IE 8/9/10.
   */
img {
  border: 0;
}

/**
   * Correct overflow not hidden in IE 9/10/11.
   */
svg:not(:root) {
  overflow: hidden;
}

/* Grouping content
     ========================================================================== */
/**
   * Address margin not present in IE 8/9 and Safari.
   */
figure {
  margin: 1em 40px;
}

/**
   * Address differences between Firefox and other browsers.
   */
hr {
  box-sizing: content-box;
  height: 0;
}

/**
   * Contain overflow in all browsers.
   */
pre {
  overflow: auto;
}

/**
   * Address odd `em`-unit font size rendering in all browsers.
   */
code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

/* Forms
     ========================================================================== */
/**
   * Known limitation: by default, Chrome and Safari on OS X allow very limited
   * styling of `select`, unless a `border` property is set.
   */
/**
   * 1. Correct color not being inherited.
   *    Known issue: affects color of disabled elements.
   * 2. Correct font properties not being inherited.
   * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.
   */
button,
input,
optgroup,
select,
textarea {
  color: inherit;
  /* 1 */
  font: inherit;
  /* 2 */
  margin: 0;
  /* 3 */
}

/**
   * Address `overflow` set to `hidden` in IE 8/9/10/11.
   */
button {
  overflow: visible;
}

/**
   * Address inconsistent `text-transform` inheritance for `button` and `select`.
   * All other form control elements do not inherit `text-transform` values.
   * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.
   * Correct `select` style inheritance in Firefox.
   */
button,
select {
  text-transform: none;
}

/**
   * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`
   *    and `video` controls.
   * 2. Correct inability to style clickable `input` types in iOS.
   * 3. Improve usability and consistency of cursor style between image-type
   *    `input` and others.
   */
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  /* 2 */
  cursor: pointer;
  /* 3 */
}

/**
   * Re-set default cursor for disabled elements.
   */
button[disabled],
html input[disabled] {
  cursor: not-allowed;
}

/**
   * Remove inner padding and border in Firefox 4+.
   */
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

/**
   * Address Firefox 4+ setting `line-height` on `input` using `!important` in
   * the UA stylesheet.
   */
input {
  line-height: normal;
}

/**
   * It's recommended that you don't attempt to style these elements.
   * Firefox's implementation doesn't respect box-sizing, padding, or width.
   *
   * 1. Address box sizing set to `content-box` in IE 8/9/10.
   * 2. Remove excess padding in IE 8/9/10.
   */
input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  /* 1 */
  padding: 0;
  /* 2 */
}

/**
   * Fix the cursor style for Chrome's increment/decrement buttons. For certain
   * `font-size` values of the `input`, it causes the cursor style of the
   * decrement button to change from `default` to `text`.
   */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
   * 1. Address `appearance` set to `searchfield` in Safari and Chrome.
   * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.
   */
input[type="search"] {
  -webkit-appearance: textfield;
  /* 1 */
  box-sizing: content-box;
  /* 2 */
}

/**
   * Remove inner padding and search cancel button in Safari and Chrome on OS X.
   * Safari (but not Chrome) clips the cancel button when the search input has
   * padding (and `textfield` appearance).
   */
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
   * Define consistent border, margin, and padding.
   * [NOTE] We don't enable this ruleset in Foundation, because we want the <fieldset> element to have plain styling.
   */
/* fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  } */
/**
   * 1. Correct `color` not being inherited in IE 8/9/10/11.
   * 2. Remove padding so people aren't caught out if they zero out fieldsets.
   */
legend {
  border: 0;
  /* 1 */
  padding: 0;
  /* 2 */
}

/**
   * Remove default vertical scrollbar in IE 8/9/10/11.
   */
textarea {
  overflow: auto;
}

/**
   * Don't inherit the `font-weight` (applied by a rule above).
   * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.
   */
optgroup {
  font-weight: bold;
}

/* Tables
     ========================================================================== */
/**
   * Remove most spacing between table cells.
   */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}

.foundation-mq {
  font-family: "small=0em&medium=40em&large=70.25em&xlarge=75em&xxlarge=90em";
}

html {
  font-size: 100%;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  padding: 0;
  margin: 0;
  font-family: "Open Sans", Helvetica, Roboto, Arial, sans-serif;
  font-weight: normal;
  line-height: 1.5;
  color: #0a0a0a;
  background: #54556e;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  max-width: 100%;
  height: auto;
  -ms-interpolation-mode: bicubic;
  display: inline-block;
  vertical-align: middle;
}

textarea {
  height: auto;
  min-height: 50px;
  border-radius: 0;
}

select {
  width: 100%;
  border-radius: 0;
}

button {
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  padding: 0;
  border: 0;
  border-radius: 0;
  line-height: 1;
}

[data-whatinput='mouse'] button {
  outline: 0;
}

.is-visible {
  display: block !important;
}

.is-hidden {
  display: none !important;
}

div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
p,
blockquote,
th,
td {
  margin: 0;
  padding: 0;
}

p {
  font-size: inherit;
  line-height: 1.6;
  margin-bottom: 1rem;
  text-rendering: optimizeLegibility;
}

em,
i {
  font-style: italic;
  line-height: inherit;
}

strong,
b {
  font-weight: bold;
  line-height: inherit;
}

small {
  font-size: 80%;
  line-height: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Open Sans", Helvetica, Roboto, Arial, sans-serif;
  font-weight: bold;
  font-style: normal;
  color: inherit;
  text-rendering: optimizeLegibility;
  margin-top: 0;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

h1 small,
h2 small,
h3 small,
h4 small,
h5 small,
h6 small {
  color: #cacaca;
  line-height: 0;
}

h1 {
  font-size: 1.5rem;
}

h2 {
  font-size: 1.25rem;
}

h3 {
  font-size: 1.1875rem;
}

h4 {
  font-size: 1.125rem;
}

h5 {
  font-size: 1.0625rem;
}

h6 {
  font-size: 1rem;
}

@media screen and (min-width: 40em) {
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.9375rem;
  }
  h4 {
    font-size: 1.5625rem;
  }
  h5 {
    font-size: 1.25rem;
  }
  h6 {
    font-size: 1rem;
  }
}

a {
  color: #2199e8;
  text-decoration: none;
  line-height: inherit;
  cursor: pointer;
}

a:hover, a:focus {
  color: #1585cf;
}

a img {
  border: 0;
}

hr {
  max-width: 75rem;
  height: 0;
  border-right: 0;
  border-top: 0;
  border-bottom: 1px solid #cacaca;
  border-left: 0;
  margin: 1.25rem auto;
  clear: both;
}

ul,
ol,
dl {
  line-height: 1.6;
  margin-bottom: 1rem;
  list-style-position: outside;
}

li {
  font-size: inherit;
}

ul {
  list-style-type: disc;
  margin-left: 1.25rem;
}

ol {
  margin-left: 1.25rem;
}

ul ul, ol ul, ul ol, ol ol {
  margin-left: 1.25rem;
  margin-bottom: 0;
}

dl {
  margin-bottom: 1rem;
}

dl dt {
  margin-bottom: 0.3rem;
  font-weight: bold;
}

blockquote {
  margin: 0 0 1rem;
  padding: 0.5625rem 1.25rem 0 1.1875rem;
  border-left: 1px solid #cacaca;
}

blockquote, blockquote p {
  line-height: 1.6;
  color: #8a8a8a;
}

cite {
  display: block;
  font-size: 0.8125rem;
  color: #8a8a8a;
}

cite:before {
  content: '\2014 \0020';
}

abbr {
  color: #0a0a0a;
  cursor: help;
  border-bottom: 1px dotted #0a0a0a;
}

code {
  font-family: Consolas, "Liberation Mono", Courier, monospace;
  font-weight: normal;
  color: #0a0a0a;
  background-color: #e6e6e6;
  border: 1px solid #cacaca;
  padding: 0.125rem 0.3125rem 0.0625rem;
}

kbd {
  padding: 0.125rem 0.25rem 0;
  margin: 0;
  background-color: #e6e6e6;
  color: #0a0a0a;
  font-family: Consolas, "Liberation Mono", Courier, monospace;
}

.subheader {
  margin-top: 0.2rem;
  margin-bottom: 0.5rem;
  font-weight: normal;
  line-height: 1.4;
  color: #8a8a8a;
}

.lead {
  font-size: 125%;
  line-height: 1.6;
}

.stat {
  font-size: 2.5rem;
  line-height: 1;
}

p + .stat {
  margin-top: -1rem;
}

.no-bullet {
  margin-left: 0;
  list-style: none;
}

/* BUTTONS */
.button {
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  height: 28px;
  font-size: 14px;
  line-height: 28px;
  padding: 0 9px;
  border-radius: 3px;
  background-color: #aef272;
  color: #5bb110;
  box-shadow: 0 2px 0 0 #83eb27;
  font-weight: bold;
}

.button.button--block {
  font-size: 16px;
  display: block;
  line-height: 36px;
  height: 36px;
}

.button.button--secondary {
  background-color: #ebeef5;
  color: #7e92bf;
  box-shadow: 0 2px 0 0 #c2cbe1;
}

/* MAIN LAYOUT */
#app {
  z-index: 1;
  position: absolute;
  padding-top: 96px;
  top: 0;
  left: 0;
  right: 0;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100%;
  min-height: 100vh;
}

.navBar {
  z-index: 2;
  position: fixed;
  padding: 0 12px;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  line-height: 48px;
  height: 48px;
  background: #4b4c62;
  color: #fff;
}

.navBar__links {
  list-style-type: none;
  display: inline-block;
}

.navBar__links li {
  display: inline-block;
}

.navBar__links a {
  line-height: 44px;
  display: block;
  padding: 0 4.5px;
  color: #aef272;
  font-weight: bold;
  font-size: 16px;
  border-bottom: 2px solid transparent;
}

.navBar__links a:hover {
  border-bottom-color: #aef272;
}

.mobileNavToggle {
  color: #fff;
  float: right;
  height: 48px;
  line-height: 48px;
}

.mobileNavToggle i {
  font-size: 24px;
  height: 48px;
  line-height: 48px;
}

@media screen and (min-width: 40em) {
  .mobileNavToggle {
    display: none;
    visibility: hidden;
  }
}

/* SIDE MENU */
.sideMenu {
  z-index: 2;
  top: 48px;
  left: 0;
  bottom: 0;
  background-color: #54556e;
  width: 100%;
  z-index: 2;
  position: fixed;
  -webkit-transform: translateX(-100%);
          transform: translateX(-100%);
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}

.sideMenu.is-open {
  -webkit-transform: translateX(0%);
          transform: translateX(0%);
}

@media screen and (min-width: 70.25em) {
  .sideMenu, .sideMenu.is-open {
    top: 96px;
    -webkit-transition: none;
    transition: none;
    -webkit-transform: none;
            transform: none;
    width: 220px;
    background-color: none;
    background: none;
  }
}

.main {
  position: relative;
  padding-bottom: 48px;
  width: 100%;
  max-width: 268px;
  margin: 0 auto;
}

@media screen and (min-width: 40em) {
  .main {
    max-width: 518px;
  }
}

@media screen and (min-width: 70.25em) {
  .main {
    float: left;
    max-width: 804px;
    margin-left: 268px;
  }
}

.adSpace {
  margin-top: 10px;
  width: 268px;
  padding: 3px;
  margin: 0 auto;
}

@media screen and (min-width: 70.25em) {
  .adSpace {
    margin-top: 10px;
    float: left;
    width: 268px;
    padding: 3px;
    margin: 0;
    margin-left: 1px;
  }
}

/* CATEGORY MENU */
.categoryList {
  list-style-type: none;
  margin: 0;
  padding: 0 9px;
}

.categoryList .category a {
  border-left: 3px solid transparent;
  display: block;
  padding: 9px;
}

.categoryList .category .is-active {
  border-left-color: #efefef;
}

.categoryList .category .category__icon {
  border-radius: 3px;
  vertical-align: middle;
  display: inline-block;
  height: 28px;
  line-height: 28px;
  text-align: center;
  width: 28px;
  font-size: 20px;
  background-color: #efefef;
  color: #54556e;
}

.categoryList .category .category__title {
  text-transform: capitalize;
  margin-left: 9px;
  vertical-align: middle;
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  line-height: 28px;
  height: 28px;
  color: #efefef;
}

.categoryList .category.category--loaders .is-active {
  border-left-color: #62c8fb;
}

.categoryList .category.category--loaders .category__icon {
  color: #057ab5;
  background-color: #62c8fb;
}

.categoryList .category.category--loaders .category__title {
  color: #62c8fb;
}

.categoryList .category.category--games .is-active {
  border-left-color: #48e8ae;
}

.categoryList .category.category--games .category__icon {
  color: #107d55;
  background-color: #48e8ae;
}

.categoryList .category.category--games .category__title {
  color: #48e8ae;
}

.categoryList .category.category--emulators .is-active {
  border-left-color: #ff8463;
}

.categoryList .category.category--emulators .category__icon {
  color: #bf2800;
  background-color: #ff8463;
}

.categoryList .category.category--emulators .category__title {
  color: #ff8463;
}

.categoryList .category.category--tools .is-active {
  border-left-color: #fbbe55;
}

.categoryList .category.category--tools .category__icon {
  color: #a96c04;
  background-color: #fbbe55;
}

.categoryList .category.category--tools .category__title {
  color: #fbbe55;
}

.categoryList .category.category--concepts .is-active {
  border-left-color: #7576fb;
}

.categoryList .category.category--concepts .category__icon {
  color: #0607c7;
  background-color: #7576fb;
}

.categoryList .category.category--concepts .category__title {
  color: #7576fb;
}

/* SEARCH FIELD */
.searchField {
  padding: 9px 6px;
  padding-bottom: 18px;
  margin: 0 auto;
}

.searchField::before, .searchField::after {
  content: ' ';
  display: table;
}

.searchField::after {
  clear: both;
}

.searchField__input-wrap {
  float: left;
  width: 70%;
}

.searchField__input {
  display: block;
  width: 100%;
  height: 36px;
  line-height: 36px;
  border: none;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  background: #fff;
  padding: 0 9px;
}

.searchField__button-wrap {
  float: left;
  width: 30%;
}

.searchField__button {
  box-shadow: none !important;
  border-radius: 0;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  display: block;
  width: 100%;
  height: 36px;
  line-height: 36px;
}

@media screen and (min-width: 40em) {
  .searchField {
    padding: 9px 0;
  }
  .searchField__input-wrap {
    width: 75%;
  }
  .searchField__button-wrap {
    width: 25%;
  }
}

/* APP GRID */
.appGridHead {
  padding: 9px 0;
}

.appGridHead::before, .appGridHead::after {
  content: ' ';
  display: table;
}

.appGridHead::after {
  clear: both;
}

.appGridHead__title {
  text-transform: capitalize;
  font-weight: bold;
  font-size: 28px;
  line-height: 32px;
  float: left;
}

@media screen and (min-width: 40em) {
  .appGridHead__title {
    font-size: 32px;
  }
}

.appGridHead__button {
  float: right;
}

.category.category--loaders .appGridHead__title {
  color: #62c8fb;
}

.category.category--loaders .appGridHead__button {
  background: #62c8fb;
  color: #057ab5;
  margin: 2px 0;
  box-shadow: 0 2px 0 0 #12acf9;
}

.category.category--games .appGridHead__title {
  color: #48e8ae;
}

.category.category--games .appGridHead__button {
  background: #48e8ae;
  color: #107d55;
  margin: 2px 0;
  box-shadow: 0 2px 0 0 #19c687;
}

.category.category--emulators .appGridHead__title {
  color: #ff8463;
}

.category.category--emulators .appGridHead__button {
  background: #ff8463;
  color: #bf2800;
  margin: 2px 0;
  box-shadow: 0 2px 0 0 #ff4411;
}

.category.category--tools .appGridHead__title {
  color: #fbbe55;
}

.category.category--tools .appGridHead__button {
  background: #fbbe55;
  color: #a96c04;
  margin: 2px 0;
  box-shadow: 0 2px 0 0 #f99f06;
}

.category.category--concepts .appGridHead__title {
  color: #7576fb;
}

.category.category--concepts .appGridHead__button {
  background: #7576fb;
  color: #0607c7;
  margin: 2px 0;
  box-shadow: 0 2px 0 0 #2627f9;
}

.appGrid {
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
  padding-bottom: 36px;
  max-width: 256px;
}

.appGrid::before, .appGrid::after {
  content: ' ';
  display: table;
}

.appGrid::after {
  clear: both;
}

.appGrid__item {
  padding: 9px 0;
}

@media screen and (min-width: 40em) {
  .appGrid {
    margin: 0 -9px;
    max-width: none;
  }
  .appGrid__item {
    padding: 9px;
    float: left;
    width: 50%;
  }
}

@media screen and (min-width: 70.25em) {
  .appGrid__item {
    width: 33.333333%;
  }
}

/* CARDS */
.card {
  display: block;
  overflow: hidden;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0 2px 0 0 #e0e0e0;
}

.card__head, .card__body {
  font-size: 16px;
}

.card__head::before, .card__head::after, .card__body::before, .card__body::after {
  content: ' ';
  display: table;
}

.card__head::after, .card__body::after {
  clear: both;
}

.card.card--app {
  -webkit-transform: scale(1);
          transform: scale(1);
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}

.card.card--app .card__head {
  padding: 4px 8px 0 8px;
  font-weight: bold;
}

.card.card--app .card__body {
  font-size: 14px;
  padding: 0 8px 4px 8px;
}

.card.card--app:hover {
  -webkit-transform: scale(1.02);
          transform: scale(1.02);
}

.app__image {
  width: 256px;
  height: 96px;
  min-height: 96px;
  background: #efefef;
}

.app__desc {
  color: #8a8a8a;
}

.card--app .card__head {
  line-height: 32px;
  height: 32px;
  overflow: hidden;
}

.card--app .app__desc {
  position: relative;
  line-height: 22px;
  height: 22px;
  overflow: hidden;
}

.card--app .app__desc:after {
  background-image: -webkit-linear-gradient(left, transparent, #fff);
  background-image: linear-gradient(to right, transparent, #fff);
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 10%;
}

/* APP PAGE */
.appPage {
  position: relative;
  margin: -3px;
  padding: 9px;
}

.appPage .app__image {
  width: 274px;
  height: 114px;
  padding: 9px;
  border-radius: 3px;
  background: #ebeef5;
}

@media screen and (min-width: 40em) {
  .appPage .leftSection {
    width: 256px;
    float: left;
  }
  .appPage .rightSection {
    position: relative;
    margin-left: 256px;
    padding-left: 18px;
  }
}

.appPage .app__title {
  margin: 0;
  margin-top: 6px;
  font-size: 24px;
  line-height: 32px;
  font-weight: bold;
}
.appPage .app__data {
  margin: 0;
  margin-top: 6px;
  padding-left: 5px;
  font-size: 14px;
  line-height: 15px;
  font-weight: none;
  background: #ebeef5;
  color: #8a8a8a;

}
.appPage .app__databody {
  margin: 0;
  margin-top: 6px;
  padding-top: 6px;
  padding-bottom: 10px;
  border-radius: 4px;
  padding-left: 5px;
  font-size: 14px;
  line-height: 15px;
  font-weight: none;
  background: #ebeef5;
  color: #8a8a8a;

}
.appPage .app__datatitle {
  margin: 0;
  margin-top: 6px;
  padding-left: 5px;
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  background: #ebeef5;
}

.appPage .app__desc {
  line-height: 24px;
}

.appPage .app__authors {
  margin-top: 12px;
  line-height: 24px;
}

.appPage .app__type {
  font-weight: bold;
  border-radius: 3px;
  background: #d0d7e7;
  color: #fff;
  padding: 0 9px;
  position: absolute;
  top: 4.5px;
  right: 4.5px;
}

.appPage .app__type.app__type--hbl {
  background: #42c1ed;
}

.appPage .app__type.app__type--rpx {
  background: #ed6642;
}

@media screen and (min-width: 40em) {
  .appPage .app__type {
    top: 0;
    right: 0;
  }
}

.appPage .app__actionWrap {
  margin: 0 -4.5px;
}

.appPage .app__actionWrap::before, .appPage .app__actionWrap::after {
  content: ' ';
  display: table;
}

.appPage .app__actionWrap::after {
  clear: both;
}

.appPage .app__action {
  float: left;
  width: 50%;
  padding: 9px 4.5px 0 4.5px;
}

.appPage .app__longDesc {
  padding-top: 18px;
}

.appPage .app__longDesc p {
  margin: 0;
}

.appPage .app__longDesc p + p {
  padding-top: 0.5rem;
}

footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 48px;
  line-height: 48px;
  color: #fff;
}
/*# sourceMappingURL=main.css.map */
