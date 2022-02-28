import './MenuItem.css';
import { useSelector, useDispatch } from 'react-redux'

import upArrowGraphic from '../assets/graphics/arrow-up.svg';
import downArrowGraphic from '../assets/graphics/arrow-down.svg';
import { addItemCount, reduceItemCount } from '../actions/cartActions';

function MenuItem({ id }) {

    const dispatch = useDispatch();
    const cartState = useSelector((state) => { return state.cart });

    return (
        <section>
            <div className="menu-item-container">
                <div>
                    <div>
                        <div>
                            <span>
                                {cartState.cart.find(element => element.id === id).title}
                            </span>
                        </div>
                        <div></div>
                        <div>
                            <span>
                                {cartState.cart.find(element => element.id === id).price * cartState.cart.find(element => element.id === id).count}
                            </span>
                        </div>
                    </div>
                    <div>
                        <span>
                            {cartState.cart.find(element => element.id === id).desc} 
                        </span>
                    </div>

                    <div>
                        <div className="arrow-container" onClick={()=> dispatch(addItemCount({id: id}))}>
                            <img className="arrow-graphic" src={upArrowGraphic} alt="up" />
                        </div>

                        <div>
                            <span>
                                {cartState.cart.find(element => element.id === id).count}
                            </span>
                        </div>

                        <div className="arrow-container" onClick={()=> dispatch(reduceItemCount({id: id}))}>
                            <img className="arrow-graphic" src={downArrowGraphic} alt="down" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default MenuItem;