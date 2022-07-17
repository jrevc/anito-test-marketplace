import { useState, useEffect } from 'react';
// import AnitoFilter from '../AnitoGallery/AnitoFilter';
import LineIcon from 'react-lineicons';
import './Sidebar.css';

const Sidebar = (props) => {
    const [filterState, setFilterState] = useState('plus');

    // const filterChangeHandler = (anitos, atk, hp, def) => {
    //     props.onFilterChange(anitos, atk, hp, def);
    // };

    const filterToggleHandler = () => {
        let filterPanel = document.querySelector('#sidebar-content');
        if (filterPanel.classList.contains('active')) {
            filterPanel.classList.remove('active');
            filterPanel.style.height = '59px';
            setFilterState('plus');
        } else {
            filterPanel.classList.add('active');
            filterPanel.style.height = filterHeight + 'px';
            setFilterState('minus');
        }
    };

    let filterHeight;
    useEffect(() => {
        // filterHeight = document.querySelector('#sidebar-content').scrollHeight;
    });

    return (
        <aside id="sidebar-content">
            {/*<AnitoFilter onFilterChange={filterChangeHandler} />*/}
            <a className="sidebar-button" onClick={filterToggleHandler}>
                <LineIcon name={filterState} size="md" />
            </a>
            {props.children}
        </aside>
    );
};

export default Sidebar;
