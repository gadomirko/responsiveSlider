// define and load
var slider = $('ul.slider');
init();
labelSiblings();
bindEventHandler();

// stage this
function bindEventHandler() {
    slider.on('click','li', function(){
        slider.children().removeClass();
        $(this).addClass('stage');
        labelSiblings();
    });
}

// init
function init() {
    if(slider.children('li.stage').length == "") {
        slider.children('li:first-child').addClass('stage');
    };  
}

// labelSiblings before and after
function labelSiblings() {
    var stage = slider.children('li.stage');

    //before
    if(stage.is(':first-child') == true) {
        slider.children('li:last-child').addClass('leftOne');
    } else {
        stage.prev().addClass('leftOne');
    }

    //after
    if(stage.is(':last-child') == true) {
        slider.children('li:first-child').addClass('rightOne');
    } else {
        stage.next().addClass('rightOne');
    }
}