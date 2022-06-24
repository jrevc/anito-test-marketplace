import React, { useState } from "react";

import { getAnitos } from "./data-anitos";

import AnitoGallery from "./components/AnitoGallery/AnitoGallery";
import Sidebar from "./components/UI/Sidebar";
import Content from "./components/UI/Content";
import AnitoFilter from "./components/AnitoGallery/AnitoFilter";
import AnitoContainer from "./components/AnitoGallery/AnitoContainer";

function App() {
  let anitoList = getAnitos();
  const[visibleAnitoList, setVisibleAnitoList] = useState(anitoList);

  const filterChangeHandler = (anitos, atk, hp, def) => {
    let visibleAnitos = anitoList.filter(
      anito => {
        return (
          anitos.includes(anito.dna.substring(2, 4)) &&
          parseInt(anito.atk, 10) >= atk &&
          parseInt(anito.hp, 10) >= hp &&
          parseInt(anito.def, 10) >= def
        )
      }
    )
    setVisibleAnitoList(visibleAnitos);
  }

  return (
    <div>
      <Content>
        <Sidebar onFilterChange={filterChangeHandler}>
          <AnitoFilter onFilterChange={filterChangeHandler} />
        </Sidebar>
        <AnitoGallery anitos={visibleAnitoList} />
      </Content>
    </div>
  );
}

export default App;
