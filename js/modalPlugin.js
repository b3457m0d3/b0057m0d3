(function( $,_ ) {

    $.fn.mdlModal = function( action, options ) {
        options = (_.isObject(options))? options : {};
        data = (!_.isEmpty(this.data()))? this.data() : {};
        settings = _.defaults(_.assign(options,data),$.fn.mdlModal.defaults);

        if ( action === "open") {
            // Open popup code.
        }

        if ( action === "close" ) {
            // Close popup code.
        }


    };
    $.fn.mdlModal.defaults = {
      position: "c-c",
      effect: "fade",
      test: "default"
    };

}( jQuery,_ ));
