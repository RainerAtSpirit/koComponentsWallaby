!function(i){function n(e){if(t[e])return t[e].exports;var o=t[e]={exports:{},id:e,loaded:!1};return i[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var t={};return n.m=i,n.c=t,n.p="/",n(0)}([function(i,n,t){t(1)},function(i,n,t){ko.components.register("like-widget",t(2))},function(i,n,t){function e(i){this.chosenValue=i.value,this.like=function(){this.chosenValue("like")}.bind(this),this.dislike=function(){this.chosenValue("dislike")}.bind(this)}function o(i,n){return new e(i)}var s=t(3);i.exports={viewModel:{createViewModel:o},synchronous:!0,template:s}},function(i,n){i.exports='<div class="like-or-dislike" data-bind="visible: !chosenValue()">\r\n    <button data-bind="click: like">Like it</button>\r\n    <button data-bind="click: dislike">Dislike it</button>\r\n</div>\r\n<div class="result" data-bind="visible: chosenValue">\r\n    You <strong data-bind="text: chosenValue"></strong> it\r\n</div>\r\n<div class="result" data-bind="visible: chosenValue">\r\n    You <strong data-bind="text: chosenValue"></strong> it\r\n</div>\r\n\r\n\r\n'}]);
//# sourceMappingURL=main.js.map