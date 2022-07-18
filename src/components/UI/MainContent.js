import React, { useState } from 'react';

import { getAnitos } from '../../data-anitos';
// import { useNFTBalances } from 'react-moralis';

import AnitoGallery from '../AnitoGallery/AnitoGallery';
import Sidebar from './Sidebar';
import Content from './Content';
import AnitoFilter from '../AnitoGallery/AnitoFilter';

export default function MainContent() {
    let anitoList = getAnitos();
    const [visibleAnitoList, setVisibleAnitoList] = useState(anitoList);
    // const [rawVisibleAnitoList, setRawVisibleAnitoList] = useState(anitoList);
    // const { getNFTBalances } = useNFTBalances();

    const filterChangeHandler = (anitos, atk, hp, def) => {
        let visibleAnitos = anitoList.filter((anito) => {
            return (
                anitos.includes(anito.dna.substring(2, 4)) &&
                parseInt(anito.atk, 10) >= atk &&
                parseInt(anito.hp, 10) >= hp &&
                parseInt(anito.def, 10) >= def
            );
        });
        setVisibleAnitoList(visibleAnitos);
        // NFTBalances();
    };

    // const NFTBalances = () => {
    //     let visibleAnitos = getNFTBalances({ params: { chain: 'bsc testnet' } });
    //     console.log(visibleAnitos);
    //     // setRawVisibleAnitoList(visibleAnitos);
    // };

    return (
        <div>
            <Content>
                <Sidebar onFilterChange={filterChangeHandler}>
                    <AnitoFilter onFilterChange={filterChangeHandler} />
                </Sidebar>
                {/* {rawVisibleAnitoList} */}
                <AnitoGallery anitos={visibleAnitoList} />
            </Content>
        </div>
    );
}
