import Sidebar from "../UI/Sidebar";
import Content from "../UI/Content";
import ItemGallery from "./ItemGallery";
import SidebarFilter from "../UI/SidebarFilter";
import { getItems } from "../../data-anitos";
import "./Items.css";

const Items = () => {
  let itemList = getItems();

  return (
    <div>
      <Content>
        <Sidebar>
          <SidebarFilter />
        </Sidebar>
        <ItemGallery items={itemList} />
      </Content>
    </div>
  )
}

export default Items;