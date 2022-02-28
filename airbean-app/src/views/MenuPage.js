import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './MenuPage.css';

import graphicsHeader from '../assets/graphics/graphics-header.svg';
import graphicsFooter from '../assets/graphics/graphics-footer.svg';
import OrderButton from '../components/OrderButton';
import OrderModal from '../components/OrderModal';
import MenuItem from '../components/MenuItem';
import { addAllItems } from '../actions/menuActions';
import { toggleModal } from '../actions/menuModalActions';

function MenuPage() {

    const dispatch = useDispatch();
    const items = useSelector((state) => { return state.menu });

    useEffect(() => {
      async function getMenuItems() {
        const respone = await fetch('http://localhost:5000/api/beans', {method: "GET"});
        const data = await respone.json();
        dispatch(addAllItems(data.menu));
      }
      getMenuItems();
    }, [dispatch]);

    return (
        <section>
            <div className="menu-page">

                <div onClick={()=> dispatch(toggleModal(true))}>
                    <OrderButton className="order-button"/>
                </div>
                
                <img className="graphics-header" src={graphicsHeader} alt="graphics header" />

                <div className="menu-container">
                    <div className="item-container">

                        <div className="item-header">
                            <span className='header-text'>
                                MENY
                            </span> 
                        </div>

                        { items.menu.map((item) => {
                            return <MenuItem title={ item.title } price={ item.price } desc={ item.desc } id={ item.id } key={ item.id }></MenuItem>
                        })}
                    </div>
                </div>
                <OrderModal></OrderModal>
                <img className="graphics-footer" src={graphicsFooter} alt="graphics footer" />
            </div>
        </section>
    )
}

export default MenuPage;