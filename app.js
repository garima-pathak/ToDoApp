//Add new Todo
$('input').keypress(function(e){
    if(e.which===13){
        const todoText=($(this).val());  //$(this) yaha represent kar raha jispe eventlistener laga hai 
        $('#list').append(`<li><span>X</span> ${todoText}</li>`);
        $(this).val('');
    }
});

// Mark completed
// $('li').click(function(){
//     $(this).toggleClass('completed');
// })
$('ul').on('click','li',function(){
    $(this).toggleClass('completed');
})

//Delete Todo
// $('span').click(function(){
//     $(this).parent().remove();
// })
$('ul').on('click','span',function(event){
    event.stopPropagation(); // to stop event bubbling
    $(this).parent().fadeOut(600,function(){
        $(this).remove();
    });
    
});


//Toggle Input
$('#plus').click(function(){
    $('input').fadeToggle();
});