import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyRow from './ToyRow';

const AllToys = () => {
    const toys= useLoaderData()

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Seller</th>
                        <th>Sub-category</th>
                        <th>Available Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map(toy=> <ToyRow
                            key={toy._id}
                            toy={toy}
                        ></ToyRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default AllToys;