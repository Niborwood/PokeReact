const moves = [
  {
    id: 1,
    name: 'FRENESIE',
    damage: 20,
    statusChanger: null,
    type: 'normal',
  },
  {
    id: 2,
    name: 'TRANCHE',
    damage: 20,
    statusChanger: null,
    type: 'normal',
    effect: null,
  },
  {
    id: 3,
    name: 'LANCE-FLAMME',
    damage: 95,
    statusChanger: 'burn',
    type: 'fire',
    effect: null,
  },
  {
    id: 4,
    name: 'DANSE-FLAMME',
    damage: 35,
    statusChanger: null,
    type: 'fire',
    effect: 'trap',
  },
];

export default moves;
