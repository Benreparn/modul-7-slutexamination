import './OrderButton.css';

import bagGraphic from '../assets/graphics/bag.svg';
import { useSelector } from 'react-redux'

function OrderButton() {

    const items = useSelector(state => state.cart);

    return (
        <section>
            <div className="order-button">
                <div className="order-count">
                    {
                        items.cart.reduce((total, currentValue) => total = total + currentValue.count, 0)
                    }
                </div>
                <img className="bag-graphic" src={bagGraphic} alt="bag" />
            </div>
        </section>
    )
}

export default OrderButton;