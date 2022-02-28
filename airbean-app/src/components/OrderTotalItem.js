import './OrderTotalItem.css';
import { useSelector } from 'react-redux'

function OrderTotalItem() {

    const cartState = useSelector((state) => { return state.cart });

    function checkForSpecialPrice() {
        if(cartState.cart.find(x => x.id === 7) 
        && cartState.cart.find(x => x.id === 7).count === 1 
        && cartState.cart.find(x => x.id === 1) 
        && cartState.cart.find(x => x.id === 1).count === 1 
        && cartState.cart.reduce((total, currentValue) => total = total + currentValue.count, 0) === 2) {
            return true
        } else {
            return false
        }
    }

    return (
        <section>
            <div className="order-total-item-container">
                <div className="order-total-item-content">
                    <div className="order-total-item-total">
                        <span>
                            Total
                        </span>
                    </div>
                    <div className="order-total-item-line-container">
                        <div className="order-total-item-line"></div>
                    </div>
                    <div className="order-total-item-price">
                        <span>
                            {checkForSpecialPrice() ? '40 kr' : cartState.cart.reduce((total, currentValue) => total = total + currentValue.count * currentValue.price, 0) + ' kr'}
                        </span>
                    </div>
                </div>
                <div className="order-total-item-text">
                    <span>
                        {checkForSpecialPrice() ? 'inkl moms + drönarleverans + 39kr rabatt' : 'inkl moms + drönarleverans'}
                    </span>
                </div>
            </div>
        </section>
    )
}

export default OrderTotalItem;