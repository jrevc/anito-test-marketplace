import { useState } from 'react';
import { getCurrency } from '../../data-anitos';
import './Exchange.css';

const Exchange = () => {
    const [currencySwap, setCurrencySwap] = useState([0, 1]);

    const onCurrencySwapTrigger = () => {
        let value1 = currencySwap[0];
        let value2 = currencySwap[1];
        setCurrencySwap([value2, value1]);
    };

    return (
        <div className="exchange-page">
            <h1>Currency Exchange</h1>
            <form className="exchange-form">
                <div>
                    <label>From</label>
                    <div className="exchange-input">
                        <input type="number" id="id-exchange-from" name="exchange-from"></input>
                        <div className="exchange-input-unit">
                            <img src={process.env.PUBLIC_URL + '/images/' + getCurrency(currencySwap[0]).image} />
                            <span>{getCurrency(currencySwap[0]).name.toUpperCase()}</span>
                        </div>
                    </div>
                </div>
                <div className="exchange-swap">
                    <button type="button" onClick={onCurrencySwapTrigger}>
                        <img src={process.env.PUBLIC_URL + '/images/swap.png'} />
                    </button>
                </div>
                <div>
                    <label>To</label>
                    <div className="exchange-input">
                        <input type="number" id="id-exchange-to" name="exchange-to"></input>
                        <div className="exchange-input-unit">
                            <img src={process.env.PUBLIC_URL + '/images/' + getCurrency(currencySwap[1]).image} />
                            <span>{getCurrency(currencySwap[1]).name.toUpperCase()}</span>
                        </div>
                    </div>
                </div>
                <div className="exchange-submit">
                    <button type="submit" className="exchange-submit-btn">
                        Preview Conversion
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Exchange;
