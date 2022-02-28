import './MenuItem.css';

import { useDispatch } from 'react-redux'
import addGraphic from '../assets/graphics/add.svg';
import { addNewItem } from '../actions/cartActions';

function MenuItem({ title, price, desc, id }) {

    const dispatch = useDispatch();

    return (
        <section>
            <div className="menu-item-container">
                <div className="add-container" onClick={()=> dispatch(addNewItem({title: title, price: price, desc: desc, id: id}))}>
                    <img className="add-graphic" src={addGraphic} alt="add" />
                </div>
                <div className="menu-item-content">
                    <div className="menu-item-header">
                        <div>
                            <span>
                                {title}
                            </span>
                        </div>
                        <div className="menu-item-line-container">
                            <div className="menu-item-line"></div>
                        </div>
                        <div>
                            <span>
                                {price} kr
                            </span>
                        </div>
                    </div>
                    <div className="menu-item-description">
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