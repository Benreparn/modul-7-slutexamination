import './OrderPage.css';
import drone from '../assets/graphics/drone.svg';

function OrderPage() {
    return (
        <section>
            <div className="order-page">
                <img className="graphics-footer" src={drone} alt="drone" />
            </div>
        </section>
    )
}

export default OrderPage;