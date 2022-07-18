/* eslint-disable no-unused-vars */
import { NavLink, useParams } from 'react-router-dom';
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
import { getGacha } from '../../data-anitos';
import { getItem } from '../../data-anitos';
import './Popup.css';

const RARITY = { common: 0, epic: 1, legendary: 2 };

const Popup = (props) => {
    const { Moralis } = useMoralis();
    let data = useParams();
    let smartContractProcessor = useWeb3ExecuteFunction();
    let content;

    const BuyGacha = async (price) => {
        console.log(data);
        alert(RARITY[data.gachaRarity]);
        let approve_option = {
            abi: [
                {
                    inputs: [
                        { internalType: 'address', name: 'spender', type: 'address' },
                        { internalType: 'uint256', name: 'amount', type: 'uint256' }
                    ],
                    name: 'approve',
                    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
                    stateMutability: 'nonpayable',
                    type: 'function'
                }
            ],
            contractAddress: '0x710FF6864f39aB06c8585f7738d501BEa4f2612c',
            functionName: 'approve',
            params: {
                spender: '0x7A59582a85640d6bB6E7Dd018A19267Ca88649FD',
                amount: Moralis.Units.ETH(price)
            }
        };
        let buy_option = {
            abi: [
                {
                    inputs: [
                        { internalType: 'uint256', name: 'gachaCategory', type: 'uint256' },
                        { internalType: 'uint256', name: 'quantity', type: 'uint256' }
                    ],
                    name: 'buyGacha',
                    outputs: [],
                    stateMutability: 'nonpayable',
                    type: 'function'
                }
            ],
            contractAddress: '0x7A59582a85640d6bB6E7Dd018A19267Ca88649FD',
            functionName: 'buyGacha',
            params: {
                gachaCategory: RARITY[data.gachaRarity],
                quantity: 1
            }
        };

        await smartContractProcessor.fetch({
            params: approve_option,

            onSuccess: (approve_success) => {
                alert('Processing Payment...');

                return approve_success.wait().then((tx) => {
                    alert('Payment Successful!');

                    smartContractProcessor.fetch({
                        params: buy_option,

                        onSuccess: (buy_success) => {
                            alert('Transfering Gacha...');

                            return buy_success.wait().then((tx) => {
                                alert('Gacha Purchased!');
                                console.log('BUY CONFIRMED');
                                console.log(buy_success);
                            });
                        },

                        onError: (buy_error) => {
                            alert('Error in Purchasing Gacha!');
                            console.log('BUY ERROR');
                            console.log(buy_error);
                        }
                    });
                });
            },

            onError: (approve_error) => {
                alert('Error in Processing Payment!');
                console.log('APPROVE ERROR');
                console.log(approve_error);
            }
        });
    };

    if (props.type == 'gacha') {
        let rarity = data.gachaRarity[0].toUpperCase() + data.gachaRarity.slice(1).toLowerCase();
        let gacha = getGacha(rarity);

        content = (
            <div className="popup">
                <div className="popup-box">
                    <div className="popup-title">
                        <h4>Blind Box: {gacha.rarity}</h4>
                    </div>
                    <div className="popup-content">
                        <div className="popup-content-image">
                            <img src={process.env.PUBLIC_URL + '/images/boxes/' + gacha.image} />
                        </div>
                        <div className="popup-content-description">
                            <p>{gacha.description}</p>
                        </div>
                    </div>
                    <div className="popup-buttons">
                        <button
                            className="button btn-ok"
                            onClick={() => BuyGacha(gacha.price)}
                            disabled={smartContractProcessor.isFetching}
                        >
                            {'Purchase (' + gacha.price + ' ' + gacha.currency.toUpperCase() + ')'}
                        </button>
                        <NavLink to="/gacha" className="button btn-back">
                            Back
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    } else if (props.type == 'item') {
        let item = getItem(data.itemName);

        content = (
            <div className="popup">
                <div className="popup-box">
                    <div className="popup-title">
                        <h4>{item.name}</h4>
                    </div>
                    <div className="popup-content">
                        <div className="popup-content-image">
                            <img src={process.env.PUBLIC_URL + '/images/items/' + item.image} />
                        </div>
                        <div className="popup-content-description">
                            <p>{item.description}</p>
                        </div>
                    </div>
                    <div className="popup-buttons">
                        <NavLink to="/items" className="button btn-ok">
                            {'Purchase (' +
                                item.price1 +
                                ' ' +
                                item.currency1.toUpperCase() +
                                ' + ' +
                                item.price2 +
                                ' ' +
                                item.currency2.toUpperCase() +
                                ')'}
                        </NavLink>
                        <NavLink to="/items" className="button btn-back">
                            Back
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }

    return content;
};

export default Popup;
