import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useMoralis } from 'react-moralis';

import MainContent from './components/UI/MainContent';
import Popup from './components/UI/Popup';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import AnitoPage from './components/AnitoGallery/AnitoPage';
import Summon from './components/Summoning/Summon';
import Gacha from './components/Gacha/Gacha';
import Items from './components/Items/Items';
import Exchange from './components/Exchange/Exchange';

export default function App() {
    const {
        isWeb3Enabled,
        enableWeb3,
        isWeb3EnableLoading,
        isAuthenticated
        // isAuthenticating,
        // user,
        // account,
    } = useMoralis();

    useEffect(() => {
        const connectorId = window.localStorage.getItem('connectorId');
        if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3({ provider: connectorId });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated, isWeb3Enabled]);

    return (
        <BrowserRouter basename="/anito-market-v2">
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route path="/:anitoKey" element={<AnitoPage />} />
                    <Route path="/" element={<MainContent />}></Route>
                    <Route path="summon" element={<Summon />} />
                    <Route path="gacha" element={<Gacha />}>
                        <Route path=":gachaRarity" element={<Popup type="gacha" />} />
                    </Route>
                    <Route path="items" element={<Items />}>
                        <Route path=":itemName" element={<Popup type="item" />} />
                    </Route>
                    <Route path="exchange" element={<Exchange />} />
                    <Route path="*" element={<p>There's nothing here!</p>} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
