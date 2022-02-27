import './MenuItem.css';

function MenuItem({ title, price, desc, id }) {

    return (
        <section>
            <div className="menu-item-container">
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