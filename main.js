var pointClickBase = 1;
var pointClickMult = 1;
var points = 0;
var pointMakers = 0;
var pointMakerMult = 1;
var dotMakers = 0;

var upgradeList = [
  pointClickBaseUpgrade1 = {
    name:'Bigger Clicks I',
    visible:true,
    cost:10,
    currency:'points',
    func:increasePointClickBase,
    value:1,
    desc:'Increases point click value by 1.',
    purchased:false
  },
  pointClickBaseUpgrade2 = {
    name:'Bigger Clicks II',
    visible:true,
    cost:10,
    currency:'points',
    func:increasePointClickBase,
    value:1,
    desc:'Increases point click value by 1.',
    purchased:false
  },
  pointClickBaseUpgrade3 = {
    name:'Bigger Clicks III',
    visible:true,
    cost:10,
    currency:'points',
    func:increasePointClickBase,
    value:1,
    desc:'Increases point click value by 1.',
    purchased:false
  },
  pointClickBaseUpgrade4 = {
    name:'Bigger Clicks IV',
    visible:true,
    cost:10,
    currency:'points',
    func:increasePointClickBase,
    value:1,
    desc:'Increases point click value by 1.',
    purchased:false
  },
  pointMakerUpgrade1 = {
    name:'Pointy Point Makers',
    visible:true,
    cost:10,
    currency:'points',
    func:increasePointMakerMult,
    value:2,
    desc:'Doubles the production of Point Makers.',
    purchased:false
  },
  pointMakerUpgrade2 = {
    name:'Very Pointy Point Makers',
    visible:true,
    cost:20,
    currency:'points',
    func:increasePointMakerMult,
    value:3,
    desc:'Triples the production of Point Makers.',
    purchased:false
  }
];

function pointClick(){
  points = points + (pointClickBase * pointClickMult);
  document.getElementById('pointAmount').innerHTML = points;
};

function pointAdd(number){
  points = points + number;
  document.getElementById('pointAmount').innerHTML = points;
};

function buyPointMaker(){
  var pointMakerCost = Math.floor(10 * Math.pow(1.1, pointMakers));
  if (points >= pointMakerCost){
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
  if (points >= dotMakerCost){
  dotMakers = dotMakers + 1;
  points = points - dotMakerCost;
  document.getElementById('dotMakerAmount').innerHTML = dotMakers;
  document.getElementById('pointAmount').innerHTML = points;
  };
  var nextDotMakerCost = Math.floor(100 * Math.pow(1.1, dotMakers));
  document.getElementById('dotMakerCost').innerHTML = nextDotMakerCost;
};

function increasePointClickBase(number){
  pointClickBase = pointClickBase + number
};

function increasePointClickMult(number){
  pointClickMult = pointClickMult * number
};

function increasePointMakerMult(number){
  pointMakerMult = pointMakerMult * number;
};

function updateUpgradeBox(){
  var content = '';
  for (i in upgradeList){
    if (upgradeList[i].visible == true && upgradeList[i].purchased == false) {
      u = upgradeList[i]
      content = content + u.name + ' <button type="button"; onClick="purchaseUpgrade(upgradeList[';
      content = content + i + '])">Buy (' + u.cost + ' ' + u.currency + ')</button> ' + u.desc + '<br />';
    };
  };
  document.getElementById('upgradeBox').innerHTML = content;
};

function purchaseUpgrade(upgrade){
  if (upgrade.cost <= window[upgrade.currency]){
    window[upgrade.currency] -= upgrade.cost;
    upgrade.func(upgrade.value);
    upgrade.purchased = true;
    updateUpgradeBox();
    pointAdd(0);
  };
};

window.setInterval(function(){
  updateUpgradeBox();
  pointAdd(pointMakers * pointMakerMult);
  pointAdd(dotMakers * 10);
}, 1000);
