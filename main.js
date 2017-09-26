var pointClickBase = 1;
var pointClickMult = 1;
var points = 0;
var pointMakers = 0;
var pointMakerMult = 1;
var dotMakers = 0;

function pointClick(){
  pointAdd(pointClickBase * pointClickMult);
};

function pointAdd(number){
  points = points + number;
  document.getElementById('pointAmount').innerHTML = points;
  updateUpgradeBox2()
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
    u = upgradeList[i]
    if (window[u.currency] >= u.requirement){
      u.visible = true;
    };
    if (u.visible == true && u.purchased == false){
      if (window[u.currency] >= u.cost) {
        content = content + u.name + ' <button type="button"; class="buyButton"; ';
        content = content + 'onClick="purchaseUpgrade(upgradeList[' + i
        content = content + '])">Buy (' + u.cost + ' ' + u.currency + ')</button> '
        content = content + u.desc + '<br />';
      }
      else {
        content = content + u.name + ' <button type="button"; class="buyButtonHidden">';
        content = content + 'Buy (' + u.cost + ' ' + u.currency + ')</button> '
        content = content + u.desc + '<br />';
      };
    };
  };
  document.getElementById('upgradeBox').innerHTML = content;
};

function updateUpgradeBox2(){
  var content = '<table>';
  for (i in upgradeList){
    u = upgradeList[i]
    if (window[u.currency] >= u.requirement){
      u.visible = true;
    };
    if (u.visible == true && u.purchased == false){
      content = content + '<tr><td class="upgradeTableCol">' + u.name;
      content = content + '</td><td><button type="button"; class="buyButton';
      if (window[u.currency] >= u.cost) {
        content = content + '"; onClick="purchaseUpgrade(upgradeList[' + i + '])">';
      }
      else {
        content = content + 'Hidden">';
      };
      content = content + 'Buy (' + u.cost + ' ' + u.currency + ')</button>'
      content = content + '</td><td>' + u.desc + '</td></tr>';
    };
  };
  content = content + '</table>';
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
  pointAdd(pointMakers * pointMakerMult);
  pointAdd(dotMakers * 10);
}, 1000);
