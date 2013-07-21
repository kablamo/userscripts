// ==UserScript==
// @name            ImageShack - Continue to the image links
// @namespace       http://userscripts.org/users/12
// @description     Continue to the image links after uploading
// @version         0.0
// @license         public domain
// @downloadURL     https://raw.github.com/LouCypher/userscripts/master/others/imageshack-continue-to-the-image-links.user.js
// @updateURL       https://raw.github.com/LouCypher/userscripts/master/others/imageshack-continue-to-the-image-links.user.js
// @include         http://imageshack.us/content-round.php?*page=done*
// @grant           none
// ==/UserScript==

var continueLink = document.querySelector("#continue-link a");
continueLink && location.replace(continueLink.href);