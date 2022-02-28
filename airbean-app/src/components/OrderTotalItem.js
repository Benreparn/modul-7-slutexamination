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
                                {checkForSpecialPrice() ? '40 Kr' : cartState.cart.reduce((total, currentValue) => total = total + currentValue.count * currentValue.price, 0)}
                            </span>
                        </div>
                    </div>
                    <div>
                        <span>
                            {checkForSpecialPrice() ? 'inkl moms + drönarleverans + 39kr rabatt' : 'inkl moms + drönarleverans'}
                        </span>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default OrderTotalItem;