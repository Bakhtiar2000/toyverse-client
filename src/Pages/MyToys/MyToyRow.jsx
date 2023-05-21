import React from 'react';
import { AiFillDelete } from 'react-icons/Ai';

const MyToyRow = ({toy, handleDelete, handleUpdate }) => {
    const { _id, picture, name, seller, category, available_quantity, description, price, rating } = toy
    return (
        <tr>
            <td onClick={() => handleDelete(_id)} className='btn-ghost rounded'><AiFillDelete className='m-auto'/></td>
            <td>
                <div className="mask mask-squircle w-10 h-10">
                    <img src={picture} />
                </div>
            </td>
            <td>{name}</td>
            <td>{category}</td>
            <td>{seller}</td>
            <td>{price}</td>
            <td>{available_quantity}</td>
            <td>{rating}</td>
            <td>{description}</td>
            <th>
                <button className="btn btn-ghost btn-xs">Update</button>
            </th>
        </tr>
    );
};

export default MyToyRow;