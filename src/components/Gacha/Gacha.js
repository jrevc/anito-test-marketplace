import Sidebar from '../UI/Sidebar';
import Content from '../UI/Content';
import GachaGallery from './GachaGallery';
import SidebarFilter from '../UI/SidebarFilter';
import { getGachas } from '../../data-anitos';
import './Gacha.css';

const Gacha = () => {
    let gachaList = getGachas();

    return (
        <div>
            <Content>
                <Sidebar>
                    <SidebarFilter />
                </Sidebar>
                <GachaGallery gachas={gachaList} />
            </Content>
        </div>
    );
};

export default Gacha;
