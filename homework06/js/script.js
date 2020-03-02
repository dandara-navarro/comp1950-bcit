$(function(){
    
    $("#container1").twentytwenty();

    /* Here I changed the orientation of the after and before moviment putting to 'vertical' 
    instead of the default 'horizontal' and allowed the slider moviment with only the mouse hover */
    $("#container2").twentytwenty({
        orientation: 'vertical',
        move_slider_on_hover: true
    });

   
});
