import { createGlobalStyle } from 'styled-components';
import theme from './_theme';


const GlobalStyle = createGlobalStyle`
  
  /* RESETS */
  
  
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  html {
    font-size: 10px;
  }
  /* make sure to set some focus styles for accessibility */
  :focus {
      outline: 0;
  }
  
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  
  body {
    line-height: 1;
  }
  
  ol, ul {
    list-style: none;
  }
  
  blockquote, q {
    quotes: none;
  }
  
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  input[type=search]::-webkit-search-cancel-button,
  input[type=search]::-webkit-search-decoration,
  input[type=search]::-webkit-search-results-button,
  input[type=search]::-webkit-search-results-decoration {
      -webkit-appearance: none;
      -moz-appearance: none;
  }
  
  input[type=search] {
      -webkit-appearance: none;
      -moz-appearance: none;
      -webkit-box-sizing: content-box;
      -moz-box-sizing: content-box;
      box-sizing: content-box;
  }
  
  textarea {
      overflow: auto;
      vertical-align: top;
      resize: vertical;
  }
  
  /**
   * Correct \`inline-block\` display not defined in IE 6/7/8/9 and Firefox 3.
   */
  
  audio,
  canvas,
  video {
      display: inline-block;
      *display: inline;
      *zoom: 1;
      max-width: 100%;
  }
  
  /**
   * Prevent modern browsers from displaying \`audio\` without controls.
   * Remove excess height in iOS 5 devices.
   */
  
  audio:not([controls]) {
      display: none;
      height: 0;
  }
  
  /**
   * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.
   * Known issue: no IE 6 support.
   */
  
  [hidden] {
      display: none;
  }
  
  /**
   * 1. Correct text resizing oddly in IE 6/7 when body \`font-size\` is set using
   *    \`em\` units.
   * 2. Prevent iOS text size adjust after orientation change, without disabling
   *    user zoom.
   */
  
  html {
      font-family: Roboto;
  }
  
  /**
   * Address \`outline\` inconsistency between Chrome and other browsers.
   */
  
  a:focus {
      outline: thin dotted;
  }
  
  /**
   * Improve readability when focused and also mouse hovered in all browsers.
   */
  
  a:active,
  a:hover {
      outline: 0;
  }
  
  /**
   * 1. Remove border when inside \`a\` element in IE 6/7/8/9 and Firefox 3.
   * 2. Improve image quality when scaled in IE 7.
   */
  
  img {
      border: 0; /* 1 */
      -ms-interpolation-mode: bicubic; /* 2 */
  }
  
  /**
   * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.
   */
  
  figure {
      margin: 0;
  }
  
  /**
   * Correct margin displayed oddly in IE 6/7.
   */
  
  form {
      margin: 0;
  }
  
  /**
   * Define consistent border, margin, and padding.
   */
  
  fieldset {
      border: 1px solid #c0c0c0;
      margin: 0 2px;
      padding: 0.35em 0.625em 0.75em;
  }
  
  /**
   * 1. Correct color not being inherited in IE 6/7/8/9.
   * 2. Correct text not wrapping in Firefox 3.
   * 3. Correct alignment displayed oddly in IE 6/7.
   */
  
  legend {
      border: 0; /* 1 */
      padding: 0;
      white-space: normal; /* 2 */
      *margin-left: -7px; /* 3 */
  }
  
  /**
   * 1. Correct font size not being inherited in all browsers.
   * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,
   *    and Chrome.
   * 3. Improve appearance and consistency in all browsers.
   */
  
  button,
  input,
  select,
  textarea {
      margin: 0; /* 2 */
      vertical-align: baseline; /* 3 */
      *vertical-align: middle; /* 3 */
  }
  
  /**
   * Address Firefox 3+ setting \`line-height\` on \`input\` using \`!important\` in
   * the UA stylesheet.
   */
  
  button,
  input {
      line-height: normal;
  }
  
  /**
   * Address inconsistent \`text-transform\` inheritance for \`button\` and \`select\`.
   * All other form control elements do not inherit \`text-transform\` values.
   * Correct \`button\` style inheritance in Chrome, Safari 5+, and IE 6+.
   * Correct \`select\` style inheritance in Firefox 4+ and Opera.
   */
  
  button,
  select {
      text-transform: none;
  }
  
  /**
   * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native \`audio\`
   *    and \`video\` controls.
   * 2. Correct inability to style clickable \`input\` types in iOS.
   * 3. Improve usability and consistency of cursor style between image-type
   *    \`input\` and others.
   * 4. Remove inner spacing in IE 7 without affecting normal text inputs.
   *    Known issue: inner spacing remains in IE 6.
   */
  
  button,
  html input[type="button"], /* 1 */
  input[type="reset"],
  input[type="submit"] {
      -webkit-appearance: button; /* 2 */
      cursor: pointer; /* 3 */
      *overflow: visible;  /* 4 */
  }
  
  /**
   * Re-set default cursor for disabled elements.
   */
  
  button[disabled],
  html input[disabled] {
      cursor: default;
  }
  
  /**
   * 1. Address box sizing set to content-box in IE 8/9.
   * 2. Remove excess padding in IE 8/9.
   * 3. Remove excess padding in IE 7.
   *    Known issue: excess padding remains in IE 6.
   */
  
  input[type="checkbox"],
  input[type="radio"] {
      box-sizing: border-box; /* 1 */
      padding: 0; /* 2 */
      *height: 13px; /* 3 */
      *width: 13px; /* 3 */
  }
  
  /**
   * 1. Address \`appearance\` set to \`searchfield\` in Safari 5 and Chrome.
   * 2. Address \`box-sizing\` set to \`border-box\` in Safari 5 and Chrome
   *    (include \`-moz\` to future-proof).
   */
  
  input[type="search"] {
      -webkit-appearance: textfield; /* 1 */
      -moz-box-sizing: content-box;
      -webkit-box-sizing: content-box; /* 2 */
      box-sizing: content-box;
  }
  
  /**
   * Remove inner padding and search cancel button in Safari 5 and Chrome
   * on OS X.
   */
  
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
  }
  
  /**
   * Remove inner padding and border in Firefox 3+.
   */
  
  button::-moz-focus-inner,
  input::-moz-focus-inner {
      border: 0;
      padding: 0;
  }
  
  /**
   * 1. Remove default vertical scrollbar in IE 6/7/8/9.
   * 2. Improve readability and alignment in all browsers.
   */
  
  textarea {
      overflow: auto; /* 1 */
      vertical-align: top; /* 2 */
  }
  
  /**
   * Remove most spacing between table cells.
   */
  
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }
  
  html,
  button,
  input,
  select,
  textarea {
      color: #222;
  }
  
  
  ::-moz-selection {
      background: #b3d4fc;
      text-shadow: none;
  }
  
  ::selection {
      background: #b3d4fc;
      text-shadow: none;
  }
  
  img {
      vertical-align: middle;
  }
  
  fieldset {
      border: 0;
      margin: 0;
      padding: 0;
  }
  
  textarea {
      resize: vertical;
  }
  
  .chromeframe {
      margin: 0.2em 0;
      background: #ccc;
      color: #000;
      padding: 0.2em 0;
  }
  
  /* END RESETS */
  
  
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  
  h1 {
  
  }
  
  h2 {
    font-family: Roboto,Helvetica,Arial,sans-serif;
    font-weight: 300;
    line-height: 1.5em;
    font-size: 4rem;
    margin: 1.2rem 0;
  }
  
  h3 {
    font-family: Roboto,Helvetica,Arial,sans-serif;
    font-weight: 300;
    line-height: 1.5rem;
    font-size: 1.2rem;
    margin: 1.2rem 0;
  }
  
  /* GRID DASHBOARD POSITIONS */
  .grid--full {
    grid-column: 1 / 9;
    grid-row: 1 / 9;
  }
  .grid--full_minus-top {
    grid-column: 1 / 9;
    grid-row: 2 / 9;
  }
  .grid--topRow {
    grid-column: 2 / 8;
    grid-row: 1 / 2;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .grid--topRow_full {
    grid-column: 1 / 9;
    grid-row: 1 / 2;
    margin: 1rem;
  }
  .grid--bottomRow {
    grid-column: 1 / 9;
    grid-row: 8 / 9;
  }
  .grid--leftColumn {
    grid-column: 1 / 2;
    grid-row: 1 / 9;
  }
  .grid--rightColumn {
    grid-column: 8 / 9;
    grid-row: 1 / 9;
  }
  .grid--middle {
    grid-column: 2 / 8;
    grid-row: 2 / 8;
  }
  .grid--middleInner {
    grid-column: 3 / 7;
    grid-row: 3 / 7;
  }
  .grid--quarter-top-left {
    grid-column: 2 / 5;
    grid-row: 2 / 5;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .grid--quarter-top-right {
    grid-column: 5 / 8;
    grid-row: 2 / 5;
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .grid--quarter-bottom-right {
    grid-column: 5 / 8;
    grid-row: 5 / 8;
  }
  .grid--quarter-bottom-left {
    grid-column: 2 / 5;
    grid-row: 5 / 8;
  }
  .grid--half-bottom {
    grid-column: 2 / 8;
    grid-row: 5 / 8;
  }
  .grid--half-bottom_all {
    grid-column: 2 / 8;
    grid-row: 5 / 9;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }
  .grid--half-top {
    grid-column: 2 / 8;
    grid-row: 2 / 5;
  }
  .grid--self-justify_center {
    justify-self: center;
  }
  .grid--self-justify_start {
    justify-self: start;
  }
  .grid--self-justify_end {
    justify-self: end;
  }
  .grid--self-align_start {
    align-self: start;
  }
  .grid--self-align_center {
    align-self: center;
  }
  .grid--self-align_end {
    align-self: end;
  }
  
  /* BUTTONS */
  .mesh--button {
    color: #FFF;
    border: none;
    margin: .3125rem 0.1vh;
    cursor: pointer;
    padding: 1.2vh 3vh;
    position: relative;
    min-width: auto;
    font-size: 1.3vh;
    min-height: auto;
    box-shadow: 0 0.2vh 0.2vh 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 0.1vh 0.5vh 0 rgba(153, 153, 153, 0.12);
    transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    font-weight: 500;
    will-change: box-shadow, transform;
    line-height: 1.42857143;
    white-space: nowrap;
    touch-action: manipulation;
    border-radius: 0.6vh;
    text-transform: uppercase;
    letter-spacing: 0;
    vertical-align: middle;
    background-color: #999;
  }
  .mesh--button_bigger {
    transform: scale(1.3);  
  }
  .mesh--button:hover {
    color: #FFF;
    box-shadow: 0 1.4vh 2.6vh -1.2vh rgba(153, 153, 153, 0.42), 0 0.4vh 2.3vh 0 rgba(0, 0, 0, 0.12), 0 0.8vh 1vh -.5vh rgba(153, 153, 153, 0.2);
    filter: brightness(85%);
  }
  .mesh--button-disabled {
    cursor: default;
    box-shadow: 0 0.2vh 0.2vh 0 rgba(153, 153, 153, 0.14), 0 0.3vh 0.1vh -0.2vh rgba(153, 153, 153, 0.2), 0 0.1vh 0.5vh 0 rgba(153, 153, 153, 0.12);
  }
  .mesh--button-disabled:hover {
    color: #FFF;
    filter: unset;
    box-shadow: 0 0.2vh 0.2vh 0 rgba(153, 153, 153, 0.14), 0 0.3vh 0.1vh -.2vh rgba(153, 153, 153, 0.2), 0 .1vh .5vh 0 rgba(153, 153, 153, 0.12);
  }
  .mesh--button_icon {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 2.05rem;
    height: 2.05rem;
    max-width: 2.05rem;
    max-height: 2.05rem;
    font-size: 1rem;
    min-width: 2.05rem;
    border-radius: 1.5rem;
    box-shadow: 0 .2vh .2vh 0 rgba(153, 153, 153, 0.14), 0 .3vh .1vh -.2vh rgba(153, 153, 153, 0.2), 0 .1vh .5vh 0 rgba(153, 153, 153, 0.12);
    background-color: #999;
    background-repeat: no-repeat;
    background-position: center;
  }
  .mesh--button_icon:hover {
    box-shadow: 0 1.4vh 2.6vh -1.2vh rgba(153, 153, 153, 0.42), 0 .4vh 2.3vh 0 rgba(0, 0, 0, 0.12), 0 .8vh 1.0vh -.5vh rgba(153, 153, 153, 0.2);
    filter: brightness(85%);
  }
  .mesh--button_icon-edit {
    background-image: url('/static/icons/1x/baseline_edit_white_18dp.png');
  }
  .mesh--button_icon-edit--black {
    background-image: url('/static/icons/1x/baseline_edit_black_18dp.png');
  }
  .mesh--button_icon-close {
    background-image: url('/static/icons/1x/baseline_close_white_18dp.png');
  }
  .mesh--button_icon-delete {
    background-image: url('/static/icons/1x/baseline_delete_outline_black_18dp.png');
  }
  .mesh--button_icon-check {
    background-image: url('/static/icons/1x/baseline_check_white_18dp.png');
  }
  .mesh--button_mini {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 1.025rem;
    height: 1.025rem;
    max-width: 1.025rem;
    max-height: 1.025rem;
    font-size: 0.5rem;
    min-width: 1.025rem;
    border-radius: .75rem;
    box-shadow: 0 .2vh .2vh 0 rgba(153, 153, 153, 0.14), 0 .3vh .1vh -.2vh rgba(153, 153, 153, 0.2), 0 .1vh .5vh 0 rgba(153, 153, 153, 0.12);
    background-color: #999;
    background-repeat: no-repeat;
    background-position: center;
    transform: scale(1.2);
    background-size: 70%;
  }
  .mesh--button_purple {
    box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12);
    background-color: #9c27b0;
  }
  .mesh--button_purple:hover {
    box-shadow: 0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2);
    background-color: #9c27b0;
  }
  .mesh--button_rose {
    box-shadow: 0 2px 2px 0 rgba(233, 30, 99, 0.14), 0 3px 1px -2px rgba(233, 30, 99, 0.2), 0 1px 5px 0 rgba(233, 30, 99, 0.12);
    background-color: #e91e63;
  }
  .mesh--button_rose:hover {
    box-shadow: 0 14px 26px -12px rgba(233, 30, 99, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(233, 30, 99, 0.2);
    background-color: #e91e63;
  }
  .mesh--button_red {
    box-shadow: 0 2px 2px 0 rgba(${theme.redRgbVal}, 0.14), 0 3px 1px -2px rgba(${theme.redRgbVal}, 0.2), 0 1px 5px 0 rgba(${theme.redRgbVal}, 0.12);
    background-color: ${theme.red};
  }
  .mesh--button_red:hover {
    box-shadow: 0 14px 26px -12px rgba(${theme.redRgbVal}, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(${theme.redRgbVal}, 0.2);
    background-color: ${theme.red};
  }
  .mesh--button_pacific-blue {
    box-shadow: 0 2px 2px 0 rgba(0, 172, 193, 0.14), 0 3px 1px -2px rgba(0, 172, 193, 0.2), 0 1px 5px 0 rgba(0, 172, 193, 0.12);
    background-color: #00acc1;
   }
   .mesh--button_pacific-blue:hover {
    box-shadow: 0 14px 26px -12px rgba(0, 172, 193, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 172, 193, 0.2);
    background-color: #00acc1;
  }
  .mesh--button_yellow {
    box-shadow: 0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12);
    background-color: #ff9800;
  }
  .mesh--button_yellow:hover {
    box-shadow: 0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2);
    background-color: #ff9800;
    filter: brightness(85%);
  }
  .mesh--box_outline {
    background-color: ${theme.soteraWhite};
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
    border-radius: 6px;
  }
  .noSelect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
}

  /* MARGINS */
  .margin--1rem {
    margin: 1rem;
  }
  .margin--bottom_1rem {
    margin-bottom: 1rem;
  }
  
  /* PADDINGS */
  .padding--left_1rem {
    padding-left: 1rem;
  }
  
  /* DETAILS */
  .divider--gray_bottom {};
  .divider--gray_bottom:after {
    content: '';
    width: calc(100% - 1rem);
    display: block;
    padding: 0.4rem 0.5rem;
    border-bottom: 0.1rem solid #eee
  }
  
  /* MODAL */
  .modal_overlay {
    display: grid;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-content: center;
  }
  .mesh--modal {
    display: grid;
    grid-template-columns: 1fr;
    height: auto;
  }
  .mesh--modal_50vh {
    height: 50vh;
  }
  .mesh--modal_70vh {
    height: 70vh;
  }
  .mesh--modal_80vh {
    height: 80vh;
  }
  .mesh--modal_90vh {
    height: 90vh;
  }
  .mesh--modal_25vh {
    height: 25vh;
  }
  .mesh--modal_30vw {
    width: 30vw;
    max-width: 30vw;
  }
  .mesh--modal_40vw {
    width: 40vw;
    max-width: 40vw;
  }
  .mesh--modal_50vw {
    width: 50vw;
    max-width: 50vw;
  }
  .mesh--modal_60vw {
    width: 60vw;
    max-width: 60vw;
  }
  .mesh--modal_70vw {
    width: 70vw;
    max-width: 70vw;
  }
  .mesh--modal_80vw {
    width: 80vw;
    max-width: 80vw;
  }
  .mesh--modal_min25vh {
    min-height: 25vh;
  }
  
  
  /* INPUT */
  .mesh--input {
    border: 0;
    margin: 0;
    padding: 6px 0 7px;
    border-bottom: 0.1rem solid #eee;
  }
  
  .font2rem {
    font-size: 2rem;
  }
  
  .lineHeight2-5rem {
    line-height: 2.5rem;
  }
  
  .width100per {
    width: 100%;
  }
  
  /* TRANSFORM */
  .scale07 {
    transform: scale(0.7);
  }
  
  .react-autosuggest__container {
    z-index: 10;
  }
  .react-autosuggest__container--open {
    background-color: brown;
  }
  .react-autosuggest__input {
    border: 0;
    margin: 0;
    padding: 6px 0 7px;
    border-bottom: 0.1rem solid #eee;
  }
  .react-autosuggest__input--open {
    background-color: cadetblue;
  }
  .react-autosuggest__input--focused {
    background-color: lawngreen;
  }
  .react-autosuggest__suggestions-container{
    z-index: 20;
  }
  .react-autosuggest__suggestions-container--open {
  
  }
  .react-autosuggest__suggestions-list {
    margin-top: -0.5rem;
    border-bottom: 0.1rem solid #eee;
    border-left: 0.1rem solid #eee;
    border-right: 0.1rem solid #eee;
    background-color: #fff;
    position: absolute;
    font-size: 1.4rem;
    line-height: 2rem;
  }
  .react-autosuggest__suggestion {
    padding-left: 1rem;
    margin: 0;
    padding-right: 0.5rem;
    cursor: pointer;
    max-height: 2rem;
    height: 2rem;
    overflow: hidden;
  }
  .react-autosuggest__suggestion:hover {
    
  }
  .react-autosuggest__suggestion--first {
  
  }
  .react-autosuggest__suggestion--highlighted {
    //box-shadow: 0 0 .5rem .3rem #eee;
    background-image: url('/static/icons/1x/baseline_keyboard_arrow_right_black_18dp.png');
    background-repeat: no-repeat;
    background-position: left center;
    transform: scale(1.005);
    display: block;
    background-color: var(--detailColor);
  }
  .react-autosuggest__section-container {
  
  }
  .react-autosuggest__section-container--first {
  
  }
  .react-autosuggest__section-title {
  
  }
  
  .ReactTable {
    font-size: 1.6rem;
  }
  
`;

export default GlobalStyle;
