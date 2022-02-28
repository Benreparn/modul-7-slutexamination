import './OrderItem.css';
import { useSelector, useDispatch } from 'react-redux'

import upArrowGraphic from '../assets/graphics/arrow-up.svg';
import downArrowGraphic from '../assets/graphics/arrow-down.svg';
import { addItemCount, reduceItemCount } from '../actions/cartActions';

function MenuItem({ id }) {

    const dispatch = useDispatch();
    const cartState = useSelector((state) => { return state.cart });

    return (
        <section>
            <div className="order-item-container">
                <div className="order-item-content">
                    <div className="order-item-title">
                        <span>
                            {cartState.cart.find(element => element.id === id).title}
                        </span>
                    </div>
                    <div className="order-item-price">
                        <span>
                            {cartState.cart.find(element => element.id === id).price * cartState.cart.find(element => element.id === id).count} kr
                        </span>
                    </div>
                </div>
                <div className="order-item-line-container">
                    <div className="order-item-line"></div>
                </div>
                <div className="order-item-toggle-container">
                    <div className="arrow-up-container" onClick={()=> dispatch(addItemCount({id: id}))}>
                        <img className="arrow-graphic" src={upArrowGraphic} alt="up" />
                    </div>
                    <div className="order-number-container">
                        <span>
                            {cartState.cart.find(element => element.id === id).count}
                        </span>
                    </div>
                    <div className="arrow-down-container" onClick={()=> dispatch(reduceItemCount({id: id}))}>
                        <img className="arrow-graphic" src={downArrowGraphic} alt="down" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MenuItem;