let anitoList = [
  {
    name: "Luntian",
    index: "155209",
    dna: "0204-005011012004",
    price: "50",
    currency: "busd",
    atk: "8",
    hp: "5",
    def: "15",
  },
  {
    name: "Momoa",
    index: "5207",
    dna: "0103-013014022020",
    price: "40",
    currency: "busd",
    atk: "18",
    hp: "8",
    def: "11",
  },
  {
    name: "Bituin",
    index: "20501",
    dna: "0204-001003001003",
    price: "45",
    currency: "busd",
    atk: "6",
    hp: "8",
    def: "9",
  }, 
  {
    name: "Razzmatazz",
    index: "102101",
    dna: "0204-008015019017",
    price: "60",
    currency: "busd",
    atk: "9",
    hp: "10",
    def: "6",
  }, 
  {
    name: "Balawis",
    index: "845902",
    dna: "0304-019019024019",
    price: "50",
    currency: "busd",
    atk: "5",
    hp: "5",
    def: "6",
  },
  {
    name: "Bulalord",
    index: "400010",
    dna: "0202-001005022006",
    price: "75",
    currency: "laro",
    atk: "11",
    hp: "4",
    def: "5",
  },
  {
    name: "Nilagod",
    index: "400011",
    dna: "0202-002005022006",
    price: "150",
    currency: "laro",
    atk: "7",
    hp: "20",
    def: "10",
  },
  {
    name: "Lechonk",
    index: "990841",
    dna: "0104-006033010007",
    price: "70",
    currency: "laro",
    atk: "11",
    hp: "12",
    def: "3",
  },
  {
    name: "Bojack",
    index: "25",
    dna: "0101-001032016028",
    price: "1000",
    currency: "busd",
    atk: "9",
    hp: "22",
    def: "6",
  },
  {
    name: "Kabayo",
    index: "601200",
    dna: "0201-002003024002",
    price: "50",
    currency: "busd",
    atk: "13",
    hp: "14",
    def: "9",
  },
  {
    name: "Pong",
    index: "980",
    dna: "0103-002001013018",
    price: "40",
    currency: "busd",
    atk: "12",
    hp: "7",
    def: "10",
  },
  {
    name: "Kadahon",
    index: "3001",
    dna: "0101-007017017005",
    price: "50",
    currency: "busd",
    atk: "8",
    hp: "11",
    def: "3",
  },
];

let gachaList = [
  {
    key: "00",
    rarity: "Common",
    image: "box_common.png",
    price: "40",
    currency: "busd",
    description: "This is a common blind box."
  },
  {
    key: "01",
    rarity: "Epic",
    image: "box_epic.png",
    price: "85",
    currency: "busd",
    description: "This is an epic blind box. Epic Anitos look more impressive!"
  },
  {
    key: "02",
    rarity: "Legendary",
    image: "box_legendary.png",
    price: "175",
    currency: "busd",
    description: "This is a legendary blind box. Legendary Anitos are unique and majestic!"
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
    type: "summon"
  },
  {
    key: "stone_rarity",
    name: "Rarity Stone",
    image: "rarity_stone.png",
    price1: "45",
    currency1: "laro",
    price2: "2,250",
    currency2: "ginto",
    type: "rarity"
  },
  {
    key: "stone_kiwig",
    name: "Kiwig Stone",
    image: "class_stone_kiwig.png",
    price1: "5",
    currency1: "laro",
    price2: "250",
    currency2: "ginto",
    type: "class"
  },
  {
    key: "stone_sarangay",
    name: "Sarangay Stone",
    image: "class_stone_sarangay.png",
    price1: "5",
    currency1: "laro",
    price2: "250",
    currency2: "ginto",
    type: "class"
  },
  {
    key: "stone_siyokoy",
    name: "Siyokoy Stone",
    image: "class_stone_siyokoy.png",
    price1: "5",
    currency1: "laro",
    price2: "250",
    currency2: "ginto",
    type: "class"
  },
  {
    key: "stone_tikbalang",
    name: "Tikbalang Stone",
    image: "class_stone_tikbalang.png",
    price1: "5",
    currency1: "laro",
    price2: "250",
    currency2: "ginto",
    type: "class"
  },
  {
    key: "stone_atk",
    name: "Attack Stat Stone",
    image: "stat_stone_str.png",
    price1: "10",
    currency1: "laro",
    price2: "500",
    currency2: "ginto",
    type: "stat"
  },
  {
    key: "stone_hp",
    name: "HP Stat Stone",
    image: "stat_stone_hp.png",
    price1: "10",
    currency1: "laro",
    price2: "500",
    currency2: "ginto",
    type: "stat"
  },
  {
    key: "stone_def",
    name: "Defense Stat Stone",
    image: "stat_stone_def.png",
    price1: "10",
    currency1: "laro",
    price2: "500",
    currency2: "ginto",
    type: "stat"
  },
]

export function getAnitos() {
  return anitoList;
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