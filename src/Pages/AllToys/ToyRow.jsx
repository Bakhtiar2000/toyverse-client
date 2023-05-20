import React from 'react';

const ToyRow = ({ toy }) => {
    const { picture, name, seller, category, available_quantity } = toy
    return (
        <tr className=''>
            <td>
                <div className="mask mask-squircle w-10 h-10">
                    <img src={picture} />
                </div>
            </td>
            <td>{name}</td>
            <td>{seller}</td>
            <td>{category}</td>
            <td>{available_quantity}</td>
            <th>
                <button className="btn btn-ghost btn-xs">view Details</button>
            </th>
        </tr>
    );
};

export default ToyRow;