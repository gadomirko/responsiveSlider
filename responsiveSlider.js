// define and load
var slider = $('ul.slider');
init();
sideStage();
stageing();

// stage this
function stageing() {
    slider.on('click','li', function(){
        slider.children().removeClass();
        $(this).addClass('stage');
        sideStage();
    });
}

// init
function init() {
    if(slider.children('li.stage').length == "") {
        slider.children('li:first-child').addClass('stage');
    };  
}

// sideStage before and after
function sideStage() {
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