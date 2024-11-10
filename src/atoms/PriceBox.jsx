import React from 'react';

const PriceBox = ({price, discount}) => {
    return (
        <div className='w-1/3'>
            <div>
                <h2></h2>
            </div>
            <div>
                ${price}
            </div>
        </div>
    );
};

export default PriceBox;