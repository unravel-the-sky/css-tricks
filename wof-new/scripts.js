console.log('hello');
var wheel = document.getElementById('spinner');

console.log(wheel);

wheel.addEventListener('click', spinWheel, false);

var currentDegree = 0;
var targetDegree = 10;

function getDegree(number) {
    var deg = Math.round(Math.random() * 10) * 360 + number;
    console.log('degree: ', deg);
    return deg;
}

function spinWheel() {
    console.log('weee');
    var deg = getDegree(targetDegree);

    if (deg > 0) {
        jQuery({
            deg: currentDegree
        }).animate({
            deg: deg
        }, {
            duration: 1000,
            step: function (now) {
                jQuery(wheel).css({
                    transform: 'rotate(' + now + 'deg)'
                });
            }
        });
        currentDegree = deg;
    } else {
        jQuery(wheel).css({
            transform: 'rotate(0deg)'
        });
    }
}