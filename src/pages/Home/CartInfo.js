import React from 'react';

const CartInfo = ({img,cartTitle,bgColor}) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl ${bgColor}`}>
            <figure className='pl-5 mt-5'><img src={img} alt="Album"/></figure>
            <div class="card-body text-white">
                <h2 class="card-title">{cartTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default CartInfo;