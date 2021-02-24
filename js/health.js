let x = 0

let options = {
    startAngle: -1.55,
    size: 150,
    value: x,
    fill: "#c80003",
}

$(".circle .bar").circleProgress(options).on('circle-animation-progress',
function(event, progress, stepValue){
    $(this).parent().find("span").text(String(parseInt(stepValue * 100) + "%"));
    var instance = $(this).data("circle-progress");
    instance.arcFill = setGradient(stepValue);
});

function setGradient(value) {
    // Start with: "if (value == 0.01)"
    let color = "#c80003";
    if (value >= 0.4) {
        color = "#FFBF00";
    }
    if (value >= 0.8) {
        color = "#238823";
    }
    return color;
}
