function show(state) {
    document.getElementById('formm').style.display = state;
    document.getElementById('TB_overlay').style.display = state;
}
function hide(state) {
    document.getElementById('formm').style.display = state;
    document.getElementById('TB_overlay').style.display = state;
}


var smthng = document.getElementById('personal-photo');
alert(smthng);
smthng.onmousedown = function(e) {

    var coords = getCoords(smthng);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;

    smthng.style.position = 'absolute';
    smthng.style.height = '300px';
    smthng.style.width = '300px';
    document.body.appendChild(smthng);
    moveAt(e);

    smthng.style.zIndex = 1000; // над другими элементами

    function moveAt(e) {
        smthng.style.left = e.pageX - shiftX + 'px';
        smthng.style.top = e.pageY - shiftY + 'px';
    }

    document.onmousemove = function(e) {
        moveAt(e);
    };

    smthng.onmouseup = function() {
        document.onmousemove = null;
        smthng.onmouseup = null;
    };

};

smthng.ondragstart = function() {
    return false;
};

function getCoords(elem) { // кроме IE8-
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}