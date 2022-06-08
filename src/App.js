import React, { useState } from "react";

import Header from "./components/UI/Header";
import AnitoGallery from "./components/AnitoGallery/AnitoGallery";
import Sidebar from "./components/UI/Sidebar";
import Content from "./components/UI/Content";
import Footer from "./components/UI/Footer";

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

function App() {
  const[visibleAnitoList, setVisibleAnitoList] = useState(anitoList);

  const filterChangeHandler = (anitos) => {
    let visibleAnitos = anitoList.filter(
      anito =>  anitos.includes(anito.dna.substring(2, 4))
    )
    setVisibleAnitoList(visibleAnitos);
  }

  return (
    <div>
      <Header />
      <Content>
        <Sidebar onFilterChange={filterChangeHandler} />
        <AnitoGallery anitos={visibleAnitoList} />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
