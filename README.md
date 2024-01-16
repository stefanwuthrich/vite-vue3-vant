Mobile Layout Solution An example application of mobile end layout using vant4.x + vue3.x + vite5.x + ts.4.x + REM layout + Viewport (VW) layout.

Three layout schemes are provided:

1. REM Layout

Dynamically set the font-size of HTML using JavaScript, use REM units in CSS, and the text size can be in pixels (px).

Set the viewport's scale with JavaScript to support 1px on high-definition devices.

Set the maximum and minimum page width.

2. VW Layout

Use VW units in CSS, and the text size can be in pixels (px).

Use transform to support 1px borders on high-definition devices (including rounded corners) using @mixin ./vw/scss/\_border.scss.

Set a fixed aspect ratio for containers, but cannot set the maximum and minimum page width.

3. REM + VW Layout

Set the font-size of HTML in VW units, use REM units in CSS, and the text size can be in pixels (px).

Use transform to support 1px borders on high-definition devices (including rounded corners) using @mixin ./vw-rem/scss/\_border.scss.

Set a fixed aspect ratio for containers, and can set the maximum and minimum page width.

Usage yarn dev

For the style call method in the business code, refer to the three files ./rem/scss/rem.scss, ./vw/scss/vw.scss, and ./vw-rem/scss/vw-rem.scss; you can configure the data-content-max attribute in the corresponding position of the HTML file

to limit the maximum and minimum width of the container.
