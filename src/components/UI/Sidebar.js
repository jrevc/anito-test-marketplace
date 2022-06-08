import AnitoFilter from "../AnitoGallery/AnitoFilter";
import "./Sidebar.css";

const Sidebar = (props) => {
  const filterChangeHandler = (anitos) => {
    props.onFilterChange(anitos);
  }

  return (
    <aside>
      <AnitoFilter onFilterChange={filterChangeHandler} />
    </aside>
  );
}

export default Sidebar;