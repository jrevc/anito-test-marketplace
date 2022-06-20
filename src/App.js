import React, { useState } from "react";

import { getAnitos } from "./data-anitos";

import AnitoGallery from "./components/AnitoGallery/AnitoGallery";
import Sidebar from "./components/UI/Sidebar";
import Content from "./components/UI/Content";
import AnitoFilter from "./components/AnitoGallery/AnitoFilter";

function App() {
  let anitoList = getAnitos();
  const[visibleAnitoList, setVisibleAnitoList] = useState(anitoList);

  const filterChangeHandler = (anitos) => {
    let visibleAnitos = anitoList.filter(
      anito =>  anitos.includes(anito.dna.substring(2, 4))
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
