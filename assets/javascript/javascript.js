// Contact page //

$(document).ready(function() {
    $( "form" ).submit(function( event ) {
        console.log( $( this ).serializeArray() );
        var x = $( this ).serializeArray();
        console.log(x);
        event.preventDefault();
        $("#inputNameDP").text = x;
      });
});