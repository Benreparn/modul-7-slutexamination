import './OrderPage.css';

import drone from '../assets/graphics/drone.svg';
import loader from '../assets/graphics/loader.png';

import { usePromiseTracker, trackPromise } from "react-promise-tracker";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeOrder } from '../actions/orderActions';
import { emptyCart } from '../actions/cartActions';
import { toggleModal } from '../actions/menuModalActions';

function OrderPage() {

    const dispatch = useDispatch();

    const cart = useSelector((state) => { return state.cart });
    const order = useSelector(state => state.order);
    const { promiseInProgress } = usePromiseTracker();

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cart.cart)
        };

        async function postOrder() {
            const respone = await fetch('http://localhost:5000/api/beans', requestOptions);
            const data = await respone.json();
            dispatch(makeOrder(data));
            dispatch(emptyCart());
            dispatch(toggleModal(false));
        }
        
        if (cart.cart.length) {
            trackPromise(postOrder());
        }
    }, [dispatch, cart]);


    return (
        <section>
            <div className="order-page">
                <div className="order-page-loader">
                    {(!order.order.eta || promiseInProgress) && <img className="loader" src={loader} alt="loader" />}
                </div>
                
                {!!order.order.eta && !promiseInProgress && 
                <div className="order-page-content">
                    <div className="order-page-order-container">
                        <span className="order-page-order">
                            Ordernummer
                        </span>
                        <span className="order-page-order-number">
                            #{order.order.orderNr}
                        </span>                        
                    </div>
                    <div>
                        <img className="order-page-drone" src={drone} alt="drone" />
                    </div>
                    <div>
                        <span className="order-page-order-confirmation">
                            Din beställning är på väg!
                        </span>
                    </div>
                    <div className="order-page-order-container">
                        <span className="order-page-order-eta">
                            {order.order.eta}
                        </span>
                        <span className="order-page-order-minutes">
                            minuter
                        </span>
                    </div>
                    <div className='order-page-button-container'>
                        <Link to="/menu" className='order-page-ok-link'>
                            <div className='order-page-ok-button'>
                                Ok, cool!
                            </div>
                        </Link>
                    </div>
                </div>}
            </div>
        </section>
    )
}

export default OrderPage;