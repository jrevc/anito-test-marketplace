import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
import { Modal } from 'antd';
import { approve_abi } from '../_abis/ginto_abis';
import { buy_gacha_abi } from '../_abis/gacha_abis';

export default function Buy(props) {
    const RARITY = { common: 0, epic: 1, legendary: 2 };
    const smartContractProcessor = useWeb3ExecuteFunction();
    const { Moralis } = useMoralis();
    const price = props.price;
    const currency = props.currency;

    const BuyGacha = async () => {
        let modal1 = Modal.info({
            title: 'Preparing Wallet',
            content:
                'Opening and preparing your wallet. Refrain from clicking anywhere, refreshing or closing tab. Please wait...',
            centered: true,
            okButtonProps: {
                style: { display: 'none' }
            }
        });

        let approve_option = {
            abi: approve_abi,
            contractAddress: process.env.REACT_APP_GINTO_ADDRESS,
            functionName: 'approve',
            params: {
                spender: process.env.REACT_APP_GACHA_ADDRESS,
                amount: Moralis.Units.ETH(price)
            }
        };

        let buy_option = {
            abi: buy_gacha_abi,
            contractAddress: process.env.REACT_APP_GACHA_ADDRESS,
            functionName: 'buyGacha',
            params: {
                gachaCategory: RARITY[props.rarity],
                quantity: 1
            }
        };

        await smartContractProcessor.fetch({
            params: approve_option,

            onSuccess: (approve_success) => {
                modal1.destroy();
                let modal = Modal.info({
                    title: 'Payment Approval',
                    content: 'Processing payment approval. Please wait...',
                    centered: true,
                    okButtonProps: {
                        style: { display: 'none' }
                    }
                });

                return approve_success.wait().then(() => {
                    modal.destroy();
                    let modal1 = Modal.info({
                        title: 'Payment Approved!',
                        content: 'Started wrapping your gacha. Please wait...',
                        centered: true,
                        okButtonProps: {
                            style: { display: 'none' }
                        }
                    });

                    smartContractProcessor.fetch({
                        params: buy_option,

                        onSuccess: (buy_success) => {
                            modal1.destroy();
                            const modal = Modal.info({
                                title: 'Sending',
                                content: 'Transfering Gacha. Please wait...',
                                centered: true,
                                okButtonProps: {
                                    style: { display: 'none' }
                                }
                            });

                            return buy_success.wait().then(() => {
                                modal.destroy();
                                Modal.success({
                                    title: 'Gacha Purchased!',
                                    content: 'Congratulations! You purchased a new mystery Anito!',
                                    centered: true
                                });
                            });
                        },

                        onError: () => {
                            modal1.destroy();
                            Modal.error({ title: 'Gacha Purchase', content: 'Unable in purchase gacha!' });
                        }
                    });
                });
            },

            onError: () => {
                modal1.destroy();
                Modal.error({ title: 'Gacha Purchase', content: 'Unable in process payment approval!' });
            }
        });
    };

    return (
        <button className="button btn-ok" onClick={() => BuyGacha()} disabled={smartContractProcessor.isFetching}>
            Purchase ({price} {currency})
        </button>
    );
}
