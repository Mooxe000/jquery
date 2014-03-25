define([
    "../core"
], function( jQuery ) {

// Expose jQuery as module.exports in loaders that implement the Node
// module pattern (including browserify). Do not create the global, since
// the user will be storing it themselves locally, and globals are frowned
// upon in the Node module world.

if (typeof define === "function" && define.cmd) {
    define("jquery", [], function( require, exports, module ) {
        module.exports = jQuery;
    });
}

});
