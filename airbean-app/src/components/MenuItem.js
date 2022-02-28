import './MenuItem.css';

import { useDispatch } from 'react-redux'
import addGraphic from '../assets/graphics/add.svg';
import { addNewItem } from '../actions/cartActions';

function MenuItem({ title, price, desc, id }) {

    // const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();

    return (
        <section>
            <div className="menu-item-container">
                <div className="add-container" onClick={()=> dispatch(addNewItem({title: title, price: price, desc: desc, id: id}))}>
                    <img className="add-graphic" src={addGraphic} alt="add" />
                </div>
                <div>
                    <div>
                        <div>
                            <span>
                                {title}
                            </span>
                        </div>
                        <div></div>
                        <div>
                            <span>
                                {price}
                            </span>
                        </div>
                    </div>
                    <div>
                        <span>
                            {desc}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MenuItem;