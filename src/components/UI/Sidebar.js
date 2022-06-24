import AnitoFilter from "../AnitoGallery/AnitoFilter";
import "./Sidebar.css";

const Sidebar = (props) => {
  const filterChangeHandler = (anitos, atk, hp, def) => {
    props.onFilterChange(anitos, atk, hp, def);
  }

  return (
    <aside>
      {/*<AnitoFilter onFilterChange={filterChangeHandler} />*/}
      {props.children}
    </aside>
  );
}

export default Sidebar;