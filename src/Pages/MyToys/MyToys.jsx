import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToyRow from './MyToyRow';
import Swal from 'sweetalert2';
import ModalButton from './MyToyRow';
import { Helmet } from 'react-helmet';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])
    const [updatedToys, setUpdatedToys] = useState([])
    const navigate = useNavigate()

    const url = `https://toyverse-server-ivory.vercel.app/toys?email=${user?.email}`

    useEffect(() => {
        fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setToys(data)
                }
                else navigate('/')
            })
    }, [url, navigate])


    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toyverse-server-ivory.vercel.app/toys/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(booking => booking._id !== id)
                            setToys(remaining)
                        }

                    })
            }
        })
    }


    const handleUpdate = id => {
        console.log(updatedToys)
        console.log(id)
        fetch(`https://toyverse-server-ivory.vercel.app/toys/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = toys.filter(toy => toy._id !== id);
                    const updated = toys.find(toy => toy._id === id);
                    updated.price = updatedToys.price
                    updated.description = updatedToys.description
                    updated.available_quantity = updatedToys.available_quantity
                    const newToys = [updated, ...remaining]
                    setToys(newToys)
                    Swal.fire(
                        'Good job!',
                        'Details updated successfully',
                        'success'
                      )
                }
            })
    }
      
      

    return (
        <div className='px-8 mb-6'>
            <Helmet>
                <title>Toy Verse | My Toys</title>
            </Helmet>
            <h2 className='text-center font-semibold text-5xl my-8'>Your Added Toys</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Name</th>
                            <th>Sub-category</th>
                            <th>Seller</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Rating</th>
                            <th>Description</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <MyToyRow
                                key={toy._id}
                                toy={toy}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                                setUpdatedToys={setUpdatedToys}
                            ></MyToyRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;