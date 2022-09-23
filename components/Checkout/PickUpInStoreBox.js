import CheckoutContext from '@/contexts/CheckoutContext';
import GlobalDataContext from '@/contexts/GlobalDataContext';
import { format } from '@/helpers';
import { useContext } from 'react';
import { CheckoutBox } from './CheckoutBox';


export function PickUpInStoreBox() {
    const { setDelivery } = useContext(CheckoutContext);
    const {
        institucional: {
            endereco, numero, complemento, bairro, cidade, estado, ddd, telefone,
        },
    } = useContext(GlobalDataContext);

    return (
        <CheckoutBox icon="fa-map-marker-alt" title="Dados para retirada">
            <div className="enderecos--escolhido">
                <span className="enderecos--itentificacao">
                    <span className="mr-2"><i className="fa-solid fa-arrow-right" /></span>
                    Endereço da nossa loja
                </span>
                <span>
                    {`${endereco}, ${numero} ${complemento ? `(${complemento})` : ''}`}
                    <br />
                    {`${bairro} - ${cidade}/${estado}`}
                    <br />
                    {`${format.telephone(`${ddd}${telefone}`)}`}
                </span>
            </div>
            <div className="mt-3">
                <button type="button" className="button-black" onClick={() => setDelivery({ retirarNaLoja: false })}>
                    Alterar meio de entrega
                </button>
            </div>
        </CheckoutBox>
    );
}
