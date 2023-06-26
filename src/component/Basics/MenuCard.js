import React from "react";

const MenuCard = ({ menuData }) => {
    console.log(menuData, "MenuCard  ")
    return (
        <>
        <section className="main-card--container">
            {
                menuData.map((obj) => {
                    const {id, category, name, description,image} = obj;
                    return (
                        <>
                            <div className='card-container' key={id}>
                                <div className='card'>
                                    <div className='card-body'>
                                        <span className='card-number card-circle subtle'>{id}</span>
                                        <span className='card-author subtle'>{category}</span>
                                        <h2 className='card-title'>{name}</h2>
                                        <span className='card-description subtle'>
                                            {description}
                                        </span>
                                        <div className='card-read'>Read</div>
                                    </div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI4LrFSwc4lnSFgoJqKPQ9DNmfdmNFNIZExMcNpZnh6RHaVrJaKhDM5PISoECsoefHAeIY6_iarkI&usqp=CAU&ec=48600113" alt='images' className='card-media' />
                                    <span className='card-tag subtle'>Order Now</span>
                                </div>
                            </div>
                        </>
                    )
                })
            }
            </section>

        </>
    )
}

export default MenuCard;