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

                {(!order.order.eta || promiseInProgress) && <img className="loader" src={loader} alt="loader" />}

                {!!order.order.eta && !promiseInProgress && <div>
                    {order.order.eta}
                    <img className="drone" src={drone} alt="drone" />
                    {order.order.orderNr}

                    <Link to="/menu">
                        <div>
                            Ok, cool!
                        </div>
                    </Link>
                </div>}
            </div>
        </section>
    )
}

export default OrderPage;