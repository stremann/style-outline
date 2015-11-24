'use strict';

( function () {
    window.addEventListener( 'load', function () {
        [].forEach.call( document.querySelectorAll( '*' ), function ( el ) {
            el.style.outline = '1px solid #' + ( ~~( Math.random() * ( 1 << 24 ) ) ).toString( 16 );
        } );
    } );
} )();
