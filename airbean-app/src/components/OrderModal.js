import './OrderModal.css';

import { useSelector, useDispatch } from 'react-redux'
import { toggleModal } from '../actions/menuModalActions';
import OrderItem from '../components/OrderItem';
import { Link } from "react-router-dom";

function OrderModal() {

    const modalState = useSelector(state => state.modal);
    const cartState = useSelector((state) => { return state.cart });
    const dispatch = useDispatch();

    return (
        <section>
            {modalState.toggled && <div className="order-modal-backdrop" onClick={()=> dispatch(toggleModal(false))}></div>}
            {modalState.toggled &&  <div className="order-modal">
                <div className="order-modal-arrow"></div>


                { cartState.cart.map((item) => {
                    return <OrderItem title={ item.title } price={ item.price } desc={ item.desc } id={ item.id } key={ item.id }></OrderItem>
                })}

                <Link to="/order">
                    <div>
                        Take my money!
                    </div>
                </Link>

            </div>}
        </section>
    )
}

export default OrderModal;