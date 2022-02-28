import './OrderModal.css';

import { useSelector, useDispatch } from 'react-redux'
import { toggleModal } from '../actions/menuModalActions';
import { Link } from "react-router-dom";

import OrderItem from '../components/OrderItem';
import OrderTotalItem from '../components/OrderTotalItem';

function OrderModal() {

    const modalState = useSelector(state => state.modal);
    const cartState = useSelector((state) => { return state.cart });
    const dispatch = useDispatch();

    return (
        <section>
            {modalState.toggled && <div className="order-modal-backdrop" onClick={()=> dispatch(toggleModal(false))}></div>}
            {modalState.toggled &&  <div className="order-modal">
                <div className="order-modal-arrow"></div>
                <div className='order-modal-content'>

                    <div className="order-modal-header">
                        <span className='order-modal-header-text'>
                            Din beställning
                        </span> 
                    </div>

                    { cartState.cart.map((item) => {
                        return !!item.count && <OrderItem id={ item.id } key={ item.id }></OrderItem>
                    })}

                    <div className='order-modal-bottom-content'>
                        <OrderTotalItem></OrderTotalItem>
                        <div className='order-modal-order'>
                            {!(cartState.cart.reduce((total, currentValue) => total = total + currentValue.count, 0) === 0) && <Link to="/order" className='order-link'>
                                <div className='make-order-button'>
                                    Take my money!
                                </div>
                            </Link>}
                        </div>
                    </div>
                </div>
            </div>}
        </section>
    )
}

export default OrderModal;