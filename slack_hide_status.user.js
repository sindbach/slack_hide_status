// ==UserScript==
// @name         SLACK_HIDE_STATUS
// @namespace    http://github.com/sindbach
// @version      0.1
// @description  Hide Slack user's status
// @author       Wan Bachtiar
// @include      https?://*.slack.com
// @updateURL    https://raw.githubusercontent.com/sindbach/slack_hide_status/master/slack_hide_status.user.js
// @run-at context-menu
// ==/UserScript==
/* jshint -W097 */
'use strict';
var message_status = "ts_tip_float message_current_status ts_tip ts_tip_top ts_tip_multiline";
var elements = document.getElementsByClassName(message_status);
Array.prototype.forEach.call(elements, function(element){
    element.style.visibility = "hidden";
});
