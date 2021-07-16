import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket ,user},dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className='checkout__ad' src="https://image9.coupangcdn.com/image/ccm/banner/00b68bb2d92bcbb980348d694d0641fe.jpg" alt=""/>

                <div>
                    <h3>hello,{user?.email}</h3>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                    {basket.map(item =>(
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}/>
                    ))}
                   
                </div>
            </div>

            <div className="checout__right">
                <Subtotal/>

            </div>
        </div>
    )
}

export default Checkout
