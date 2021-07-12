import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
//import { SportsBasketball } from '@material-ui/icons';


function Subtotal() {
    const [{basket}, dispath] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) =>(
                    <>
                    <p>
                        전체가격 ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/>this order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                //value={0}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                />
                <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
