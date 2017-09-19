var points = 0;
var pointMakers = 0;
var pointMakerMult = 1;
var dotMakers = 0;
var upgradeList = [
['upgrade1',true,increasePointMakerMult,2,false],
['upgrade2',true,increasePointMakerMult,3,false],
];


function pointClick(number){
    points = points + number;
    document.getElementById('pointAmount').innerHTML = points;
};

function buyPointMaker(){
    var pointMakerCost = Math.floor(10 * Math.pow(1.1, pointMakers));
    if(points >= pointMakerCost){
        pointMakers = pointMakers + 1;
        points = points - pointMakerCost
        document.getElementById('pointMakerAmount').innerHTML = pointMakers;
        document.getElementById('pointAmount').innerHTML = points;
    };
    var nextPointMakerCost = Math.floor(10 * Math.pow(1.1, pointMakers));
    document.getElementById('pointMakerCost').innerHTML = nextPointMakerCost;
};

function buyDotMaker(){
    var dotMakerCost = Math.floor(100 * Math.pow(1.1, dotMakers));
    if(points >= dotMakerCost){
        dotMakers = dotMakers + 1;
        points = points - dotMakerCost
        document.getElementById('dotMakerAmount').innerHTML = dotMakers;
        document.getElementById('pointAmount').innerHTML = points;
    };
    var nextDotMakerCost = Math.floor(100 * Math.pow(1.1, dotMakers));
    document.getElementById('dotMakerCost').innerHTML = nextDotMakerCost;
};

function increasePointMakerMult(number){
    pointMakerMult = pointMakerMult * number
};

function updateUpgradeBox(){
    var content = ''
    for (i = 0; i < upgradeList.length; i++){
        if(upgradeList[i][1]){
            content = content + upgradeList[i][0] + '<button type="button"; onClick="upgradeList[' + i + '][4]=true">Buy</button><br />'
        };
    };
    console.log(content)
    document.getElementById('upgradeBox').innerHTML = content;
    
};

window.setInterval(function(){
    pointClick(pointMakers);
    pointClick(dotMakers * 10)
}, 1000);