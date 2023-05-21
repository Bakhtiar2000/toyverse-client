import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToyRow from './MyToyRow';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])
    const navigate= useNavigate()

    const url = `http://localhost:5000/toys?email=${user?.email}`

    useEffect(() => {
        fetch(url,{
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setToys(data)
                }
                else navigate('/')
            })
    }, [url, navigate])

    const handleDelete= id=>{
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
                fetch(`http://localhost:5000/toys/${id}`,{
                    method: "DELETE"
                })
                .then(res=> res.json())
                .then(data=> {
                    console.log(data)
                    if(data.deletedCount> 0){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                        const remaining= toys.filter(booking=> booking._id !== id)
                        setToys(remaining)
                    }
                    
                })
            }
          })
            
        
    }

    return (
        <div>
            <h2 className='text-center font-semibold text-5xl my-8'>Your Added Toys</h2>

            <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Sub-category</th>
                        <th>Seller</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Rating</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map(toy=> <MyToyRow
                            key={toy._id}
                            toy={toy}
                            handleDelete={handleDelete}
                        ></MyToyRow>)
                    }
                </tbody>

            </table>
        </div>
        </div>
    );
};

export default MyToys;