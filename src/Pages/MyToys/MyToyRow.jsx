import React from 'react';
import { AiFillDelete } from 'react-icons/Ai';
import { Link } from 'react-router-dom';

const MyToyRow = ({ toy, handleDelete, setUpdatedToys, handleUpdate }) => {
    const { _id, picture, name, seller, category, available_quantity, description, price, rating } = toy

    return (

        <tr>
            <td onClick={() => handleDelete(_id)} className='btn-ghost rounded'><AiFillDelete className='m-auto' /></td>
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
                <Link to='/updatedToy' setUpdatedToys={setUpdatedToys} handleUpdate={()=> handleUpdate(_id)}><div className="btn btn-ghost btn-sm">Update</div></Link>
            </th>
        </tr>
    );
};

export default MyToyRow;