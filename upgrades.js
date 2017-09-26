var upgradeList = [
  pointClickBaseUpgrade1 = {
    name:'Bigger Clicks I',
    visible:false,
    requirement:1,
    cost:10,
    currency:'points',
    func:increasePointClickBase,
    value:1,
    desc:'Increases point click value by 1.',
    purchased:false
  },
  pointClickBaseUpgrade2 = {
    name:'Bigger Clicks II',
    visible:false,
    cost:25,
    requirement:10,
    currency:'points',
    func:increasePointClickBase,
    value:1,
    desc:'Increases point click value by 1.',
    purchased:false
  },
  pointClickBaseUpgrade3 = {
    name:'Bigger Clicks III',
    visible:false,
    requirement:25,
    cost:50,
    currency:'points',
    func:increasePointClickBase,
    value:1,
    desc:'Increases point click value by 1.',
    purchased:false
  },
  pointClickBaseUpgrade4 = {
    name:'Bigger Clicks IV',
    visible:false,
    requirement:50,
    cost:100,
    currency:'points',
    func:increasePointClickBase,
    value:1,
    desc:'Increases point click value by 1.',
    purchased:false
  },
  pointClickMultUpgrade1 = {
    name:'Five Fingers',
    visible:false,
    requirement:50,
    cost:100,
    currency:'points',
    func:increasePointClickMult,
    value:5,
    desc: 'Multiplies point click value by 5.',
    purchased:false
  },
  pointClickMultUpgrade2 = {
    name:'Two Hands',
    visible:false,
    requirement:500,
    cost:1000,
    currency:'points',
    func:increasePointClickMult,
    value:2,
    desc: 'Multiplies point click value by 2.',
    purchased:false
  },
  pointMakerUpgrade1 = {
    name:'Pointy Point Makers',
    visible:false,
    requirement:15,
    cost:25,
    currency:'points',
    func:increasePointMakerMult,
    value:2,
    desc:'Doubles the production of Point Makers.',
    purchased:false
  },
  pointMakerUpgrade2 = {
    name:'Very Pointy Point Makers',
    visible:false,
    requirement:35,
    cost:75,
    currency:'points',
    func:increasePointMakerMult,
    value:3,
    desc:'Triples the production of Point Makers.',
    purchased:false
  }
];
