import './OrderTotalItem.css';
import { useSelector } from 'react-redux'

function OrderTotalItem() {

    const cartState = useSelector((state) => { return state.cart });

    return (
        <section>
            <div className="menu-item-container">
                <div>
                    <div>
                        <div>
                            <span>

                            </span>
                        </div>
                        <div></div>
                        <div>
                            <span>
                                {cartState.cart.reduce((total, currentValue) => total = total + currentValue.count * currentValue.price, 0)}
                            </span>
                        </div>
                    </div>
                    <div>
                        <span>

                        </span>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default OrderTotalItem;