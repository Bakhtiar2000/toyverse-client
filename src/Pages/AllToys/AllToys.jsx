import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyRow from './ToyRow';

const AllToys = () => {
    const toys = useLoaderData()
    const [page, setPage] = useState(1);
    const itemsPerPage = 20;

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleToys = toys.slice(startIndex, endIndex);

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
                        visibleToys.map(toy => <ToyRow
                            key={toy._id}
                            toy={toy}
                        ></ToyRow>)
                    }
                </tbody>
                
            </table>
            <div className='flex justify-center items-center gap-5 my-5'>
                    <button className='btn bg-orange-500 border-0' disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
                    <button className='btn bg-orange-500 border-0' disabled={endIndex >= toys.length} onClick={() => setPage(page + 1)}>Next</button>
                </div>
        </div>
    );
};

export default AllToys;