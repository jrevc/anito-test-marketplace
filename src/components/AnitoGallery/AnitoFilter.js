import React, { useState } from "react";

import AnitoClassLabel from "./AnitoClassLabel";
import SidebarFilter from "../UI/SidebarFilter";
import "./AnitoFilter.css";

const AnitoFilter = (props) => {
  const [atkFilter, setAtkFilter] = useState("1");
  const [HPFilter, setHPFilter] = useState("1");
  const [defFilter, setDefFilter] = useState("1");

  const onClassFilterChange = (event, atk = atkFilter, hp = HPFilter, def = defFilter) => {
    let classList = Array.from(document.querySelectorAll("input[name=name-anito-class]"));
    let filteredList = classList.filter(
      anitoClass => anitoClass.checked
      ).map(
        anitoClass => anitoClass.value
      );
    if (filteredList.length <= 0) {
      filteredList = classList.map(
        anitoClass => anitoClass.value
      )
    }

    props.onFilterChange(filteredList, atk, hp, def);
  }

  const onAtkSliderChange = (event) => {
    setAtkFilter(event.target.value)
    onClassFilterChange(event, event.target.value, HPFilter, defFilter);
  }

  const onHPSliderChange = (event) => {
    setHPFilter(event.target.value)
    onClassFilterChange(event, atkFilter, event.target.value, defFilter);
  }

  const onDefSliderChange = (event) => {
    setDefFilter(event.target.value);
    onClassFilterChange(event, atkFilter, HPFilter, event.target.value);
  }

  return (
    <div>
      <SidebarFilter />
      <div className="filter-section">
        <h2>Anito Class</h2>
        <div className="filter-class">
          <input type="checkbox" name="name-anito-class" id="filter-kiwig" value="04" className="filter-checkbox" onChange={onClassFilterChange}></input>
          <AnitoClassLabel anitoClass="kiwig" className="filter-class-label filter-checkbox-label" labelTarget="filter-kiwig">Kiwig</AnitoClassLabel>
        </div>
        <div className="filter-class">
          <input type="checkbox" name="name-anito-class" id="filter-sarangay" value="02" className="filter-checkbox" onChange={onClassFilterChange}></input>
          <AnitoClassLabel anitoClass="sarangay" className="filter-class-label filter-checkbox-label" labelTarget="filter-sarangay">Sarangay</AnitoClassLabel>
        </div>
        <div className="filter-class">
          <input type="checkbox" name="name-anito-class" id="filter-siyokoy" value="03" className="filter-checkbox" onChange={onClassFilterChange}></input>
          <AnitoClassLabel anitoClass="siyokoy" className="filter-class-label filter-checkbox-label" labelTarget="filter-siyokoy">Siyokoy</AnitoClassLabel>
        </div>
        <div className="filter-class">
          <input type="checkbox" name="name-anito-class" id="filter-tikbalang" value="01" className="filter-checkbox" onChange={onClassFilterChange}></input>
          <AnitoClassLabel anitoClass="tikbalang" className="filter-class-label filter-checkbox-label" labelTarget="filter-tikbalang">Tikbalang</AnitoClassLabel>
        </div>
      </div>
      <div className="filter-section">
        <h2>Stats</h2>
        <div className="filter-stat">
          <label className="filter-stat-label"><h3>Minimum Attack:</h3> <span>{atkFilter}</span></label>
          <input type="range" min="1" max="25" value={atkFilter} onChange={onAtkSliderChange}></input>
        </div>
        <div className="filter-stat">
        <label className="filter-stat-label"><h3>Minimum HP:</h3> <span>{HPFilter}</span></label>
          <input type="range" min="1" max="25" value={HPFilter} onChange={onHPSliderChange}></input>
        </div>
        <div className="filter-stat">
        <label className="filter-stat-label"><h3>Minimum Defense:</h3> <span>{defFilter}</span></label>
          <input type="range" min="1" max="25" value={defFilter} onChange={onDefSliderChange}></input>
        </div>
      </div>
      <div className="filter-section">
        <h2>Price</h2>
      </div>
    </div>
  );
}

export default AnitoFilter;