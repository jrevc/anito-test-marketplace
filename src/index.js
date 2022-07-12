import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './index.css';
import Popup from './components/UI/Popup';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import App from './App';
import AnitoPage from './components/AnitoGallery/AnitoPage';
import Summon from './components/Summoning/Summon';
import Gacha from './components/Gacha/Gacha';
import Items from './components/Items/Items';
import Exchange from "./components/Exchange/Exchange";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <BrowserRouter basename="/anito-market-v2">
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/:anitoKey" element={<AnitoPage />} />
        <Route path="/" element={<App />}>
        </Route>
        <Route path="summon" element={<Summon />} />
        <Route path="gacha" element={<Gacha />}>
          <Route path=":gachaRarity" element={<Popup type="gacha" />} />
        </Route>
        <Route path="items" element={<Items />}>
          <Route path=":itemName" element={<Popup type="item" />} />
        </Route>
        <Route path="exchange" element={<Exchange />} />
        <Route path="*" element={
          <p>There's nothing here!</p>
        } />
      </Route>
    </Routes>
    <Footer />
  </BrowserRouter>
)