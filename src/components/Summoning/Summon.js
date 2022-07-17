import Content from '../UI/Content';
import './Summon.css';

const Summon = () => {
    return (
        <Content>
            <section id="summoning">
                <div id="summon-filter"></div>
                <div className="hill">
                    <div className="container-swirl">
                        <img className="swirl" src="/images/summon/summon_swirl.png" />
                    </div>
                    <img className="summon-hill" src="/images/summon/summon_hill.png" />
                    <div className="summoning-stone">
                        <img
                            className="summoning-stone-img summoning-stone-position off"
                            src="/images/summon/summon_stone_off.png"
                        />
                        <img
                            className="summoning-stone-img glow summoning-stone-position"
                            src="/images/summon/summon_stone_glow.png"
                        />
                        <img
                            className="summoning-stone-img summoning-stone-position"
                            id="stone-slots"
                            src="/images/summon/summon_stone_slots.png"
                        />
                        <img
                            className="summoning-stone-img summoning-stone-position on"
                            src="/images/summon/summon_stone_on.png"
                        />
                    </div>
                    <div className="container-hill">
                        <h2 className="summon-title">The Rite of Ipa Tawag</h2>
                        <div className="stone-indicator left"></div>

                        {/* Left */}

                        <button type="button" id="summon-button-left" className="summon-button left">
                            Luntian
                        </button>
                        <div className="anito-summoner left">
                            <img id="anito-image-left" src="/images/summon/anitos/kiwig_05.png" />
                        </div>

                        {/* Middle */}

                        <div className="stone-indicator right">
                            <img className="summon-stone" src="/images/summon/summoning_stone.png" />
                        </div>

                        {/* Right */}

                        <button type="button" id="summon-button-right" className="summon-button right">
                            Sungay
                        </button>
                        <div className="anito-summoner right">
                            <img id="anito-image-right" src="/images/summon/anitos/tikbalang_06.png" />
                        </div>

                        {/* Bottom */}
                        <div className="summon-interface">
                            <button type="button" className="summon-button" id="summon-button">
                                Begin summoning!
                            </button>
                        </div>
                    </div>
                </div>

                <section id="panel-left" className="panel">
                    <div className="panel-heading">
                        <h2>Select summoning Anito</h2>
                    </div>
                    <div className="anito-list"></div>
                </section>

                <section id="panel-right" className="panel">
                    <div className="panel-heading">
                        <h2>Select summoning Anito</h2>
                    </div>
                    <div className="anito-list"></div>
                </section>
            </section>
        </Content>
    );
};

export default Summon;
