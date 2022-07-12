let anitoList = [
  {
    name: "Luntian",
    index: "155209",
    dna: "0304-021012039019",
    price: "50",
    currency: "busd",
    atk: "8",
    hp: "5",
    def: "15",
    owner: "MadCupcake",
    summons: "0",
  },
  {
    name: "Momoa",
    index: "5207",
    dna: "0103-002004001013",
    price: "40",
    currency: "busd",
    atk: "18",
    hp: "8",
    def: "11",
    owner: "Namor",
    summons: "3",
  },
  {
    name: "Bituin",
    index: "20501",
    dna: "0104-007013036018",
    price: "45",
    currency: "busd",
    atk: "6",
    hp: "8",
    def: "9",
    owner: "StaceyComments",
    summons: "1",
  }, 
  {
    name: "Razzmatazz",
    index: "102101",
    dna: "0104-002020009033",
    price: "60",
    currency: "busd",
    atk: "9",
    hp: "10",
    def: "6",
    owner: "MissingNo",
    summons: "0",
  }, 
  {
    name: "Balawis",
    index: "845902",
    dna: "0104-002017038032",
    price: "50",
    currency: "busd",
    atk: "5",
    hp: "5",
    def: "6",
    owner: "Gaben",
    summons: "0",
  },
  {
    name: "Bulalord",
    index: "400010",
    dna: "0202-024028004040",
    price: "75",
    currency: "laro",
    atk: "11",
    hp: "4",
    def: "5",
    owner: "PointClickPics",
    summons: "1",
  },
  {
    name: "Nilagod",
    index: "400011",
    dna: "0102-002018011035",
    price: "150",
    currency: "laro",
    atk: "7",
    hp: "20",
    def: "10",
    owner: "adamgreattweet",
    summons: "0",
  },
  {
    name: "Lechonk",
    index: "990841",
    dna: "0204-026013039012",
    price: "70",
    currency: "laro",
    atk: "11",
    hp: "12",
    def: "3",
    owner: "BigItaly85",
    summons: "0",
  },
  {
    name: "Bojack",
    index: "25",
    dna: "0101-007008005032",
    price: "1000",
    currency: "busd",
    atk: "9",
    hp: "22",
    def: "6",
    owner: "Mords",
    summons: "0",
  },
  {
    name: "Kabayo",
    index: "601200",
    dna: "0301-005008019013",
    price: "50",
    currency: "busd",
    atk: "13",
    hp: "14",
    def: "9",
    owner: "mellifex",
    summons: "0",
  },
  {
    name: "Pong",
    index: "980",
    dna: "0103-002025033034",
    price: "40",
    currency: "busd",
    atk: "12",
    hp: "7",
    def: "10",
    owner: "HarryRox",
    summons: "2",
  },
  {
    name: "Kadahon",
    index: "3001",
    dna: "0101-003013015008",
    price: "50",
    currency: "busd",
    atk: "8",
    hp: "11",
    def: "3",
    owner: "TwoGuysRecords",
    summons: "0",
  },
];

let gachaList = [
  {
    key: "00",
    rarity: "Common",
    image: "box_common.png",
    price: "40",
    currency: "busd",
    description: "This is a common blind box.",
    quantity: "8000"
  },
  {
    key: "01",
    rarity: "Epic",
    image: "box_epic.png",
    price: "85",
    currency: "busd",
    description: "This is an epic blind box. Epic Anitos look more impressive!",
    quantity: "1750"
  },
  {
    key: "02",
    rarity: "Legendary",
    image: "box_legendary.png",
    price: "175",
    currency: "busd",
    description: "This is a legendary blind box. Legendary Anitos are unique and majestic!",
    quantity: "250"
  },
];

let itemList = [
  {
    key: "stone_summon",
    name: "Summoning Stone",
    image: "summoning_stone.png",
    price1: "10",
    currency1: "laro",
    price2: "500",
    currency2: "ginto",
    type: "summon",
    description: "Summoning Stone description here."
  },
  {
    key: "stone_rarity",
    name: "Rarity Stone",
    image: "rarity_stone.png",
    price1: "45",
    currency1: "laro",
    price2: "2,250",
    currency2: "ginto",
    type: "rarity",
    description: "Rarity Stone description here."
  },
  {
    key: "stone_kiwig",
    name: "Kiwig Stone",
    image: "class_stone_kiwig.png",
    price1: "5",
    currency1: "laro",
    price2: "250",
    currency2: "ginto",
    type: "class",
    description: "Kiwig Stone description here."
  },
  {
    key: "stone_sarangay",
    name: "Sarangay Stone",
    image: "class_stone_sarangay.png",
    price1: "5",
    currency1: "laro",
    price2: "250",
    currency2: "ginto",
    type: "class",
    description: "Sarangay Stone description here."
  },
  {
    key: "stone_siyokoy",
    name: "Siyokoy Stone",
    image: "class_stone_siyokoy.png",
    price1: "5",
    currency1: "laro",
    price2: "250",
    currency2: "ginto",
    type: "class",
    description: "Siyokoy Stone description here."
  },
  {
    key: "stone_tikbalang",
    name: "Tikbalang Stone",
    image: "class_stone_tikbalang.png",
    price1: "5",
    currency1: "laro",
    price2: "250",
    currency2: "ginto",
    type: "class",
    description: "Tikbalang Stone description here."
  },
  {
    key: "stone_atk",
    name: "Attack Stat Stone",
    image: "stat_stone_str.png",
    price1: "10",
    currency1: "laro",
    price2: "500",
    currency2: "ginto",
    type: "stat",
    description: "ATK Stone description here."
  },
  {
    key: "stone_hp",
    name: "HP Stat Stone",
    image: "stat_stone_hp.png",
    price1: "10",
    currency1: "laro",
    price2: "500",
    currency2: "ginto",
    type: "stat",
    description: "HP Stone description here."
  },
  {
    key: "stone_def",
    name: "Defense Stat Stone",
    image: "stat_stone_def.png",
    price1: "10",
    currency1: "laro",
    price2: "500",
    currency2: "ginto",
    type: "stat",
    description: "DEF Stone description here."
  },
]

let currencyList = [
  {
    name: "PERLAS",
    image: "perlas.png"
  },
  {
    name: "GINTO",
    image: "ginto.png"
  },
]

export function getAnitos() {
  return anitoList;
}

export function getAnito(i) {
  return anitoList.find(
    a => a.index === i
  )
}

export function getGachas() {
  return gachaList;
}

export function getGacha(rarity) {
  return gachaList.find(
    gacha => gacha.rarity === rarity
  )
}

export function getItems() {
  return itemList;
}

export function getItem(key) {
  return itemList.find(
    item => item.key === key
  )
}

export function getCurrency(index) {
  return currencyList[index]
}