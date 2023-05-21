import React from 'react';

const UpdateMyToy = ({setUpdatedToys, handleUpdate}) => {
    const handleUpdateToyDetails = event => {
        event.preventDefault()
        const form = event.target
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updatedToy = {
            price,
            available_quantity: quantity,
            description
        }
        setUpdatedToys(updatedToy)
    }
    return (
        <div className='my-10 px-20'>
            <form onSubmit={handleUpdateToyDetails}>
                        {/* Price */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Price of the toy" className="input input-bordered" />
                        </div>
                        {/* Available quantity */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available quantity</span>
                            </label>
                            <input type="text" name="quantity" placeholder="Available quantity" className="input input-bordered" />
                        </div>

                        {/* Description */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name="description" placeholder="Detail Description" className="input input-bordered" />
                        </div>
                        {/* <div className="modal-action">
                            <label htmlFor="my-modal" className="btn bg-orange-500 border-0">Confirm</label>
                        </div> */}
                        <div className="form-control mt-5">
                            <input className="btn bg-orange-500 border-0 btn-block" onClick={() => handleUpdate(_id)} type="submit" value="Update" />
                        </div>
                    </form>
        </div>
    );
};

export default UpdateMyToy;