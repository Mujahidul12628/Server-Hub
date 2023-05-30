// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import DynamicTittle from '../Hook/DynamicTittle';

// const ViewDetails = () => {
//     DynamicTittle('all-toys');
//     const { id } = useParams();
//     const [toyData, setToyData] = useState(null);

//     useEffect(() => {
//         fetch(`https://toys-galaxy-server-mujahidul12628.vercel.app/${id}`)
//             .then((res) => res.json())
//             .then((data) => setToyData(data))
//             .catch((error) => {
//                 console.error('Error fetching toy data:', error);
//             });
//     }, [id]);
//     return (
//         <div>
//             <div>
//                 <h1>All Toys</h1>

//             </div>
//             {toyData ? (
//                 <div>
//                     <h3>{toyData.category}</h3>
//                     <div className="mx-auto my-5 flex justify-center items-center">
//                         <img
//                             src={toyData.image}
//                             alt="Toy"
//                             className="w-4/5 sm:w-full max-w-md rounded-lg shadow-lg"
//                         />
//                     </div>
//                     <table className="border-collapse border-2 border-gray-500 my-5  w-1/3 sm:w-full mx-auto">
//                         <thead className='p-5 bg-purple-300'>
//                             <tr className=''>
//                                 <th className="border border-gray-500 p-2">Toy Name</th>
//                                 <th className="hidden sm:block border border-gray-500 p-2">Sub-category</th>
//                                 <th className="border border-gray-500 p-2">Price</th>
//                                 <th className="border border-gray-500 p-2">Quantity</th>
//                                 <th className="border border-gray-500 p-2">Rating</th>
//                                 <th className="border border-gray-500 p-2">Button</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td className="border border-gray-500 p-2">{toyData.name}</td>
//                                 <td className="hidden sm:block border border-gray-500 p-3">{toyData.subCategory}</td>
//                                 <td className="border border-gray-500 p-2">{toyData.price}</td>
//                                 <td className="border border-gray-500 p-2">{toyData.quantity}</td>
//                                 <td className="border border-gray-500 p-2">{toyData.rating}</td>
//                                 <td className="border border-gray-500 p-2">
//                                     <label htmlFor="my-modal-3" className="p-0 sm:px-2 sm:py-2 text-white hover:font-semibold rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 button-bg text-xs">View Details</label>

//                                     <input type="checkbox" id="my-modal-3" className="modal-toggle" />
//                                     <div className="modal">
//                                         <div className="modal-box relative">
//                                             <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//                                             <h3 className="text-lg font-bold">Selected Toys Details</h3>
//                                             <img src={toyData.image} className='w-4/5 sm:w-4/6 mx-auto' alt="" />
//                                             <div className='text-start mx-10 flex flex-col gap-1'>
//                                                 <h1 className='text-xl font-semibold mb-2 text-center'>{toyData.name}</h1>
//                                                 <p><b>Price:</b> {toyData.price}</p>
//                                                 <p><b>Quantity:</b> {toyData.quantity}</p>
//                                                 <p><b>Rating:</b> {toyData.rating}</p>
//                                                 <p><b>Seller:</b> {toyData.seller}</p>
//                                                 <p><b>Sub-Category:</b> {toyData.subCategory}</p>
//                                                 <p className='text-justify mt-2'>Congratulations on choosing the perfect toy! Get ready for endless fun and exciting adventures.</p>
//                                             </div>
//                                         </div>
//                                     </div></td>
//                             </tr>
//                         </tbody>
//                     </table>


//                 </div>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };

// export default ViewDetails;



import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import All from '../All/All';

const ViewDetails = () => {
    const { id } = useParams();
    const [toyData, setToyData] = useState(null);

    useEffect(() => {
        fetch(`https://toys-galaxy-server-mujahidul12628.vercel.app/toysData/${id}`)
            .then((res) => res.json())
            .then((data) => setToyData(data))
            .catch((error) => {
                console.error('Error fetching toy data:', error);
            });
    }, [id]);

    return (
        <div>
            <div className='text-2xl'>ALL Toys</div>
            {toyData ? (
                <div>
                    <h3>{toyData.category}</h3>
                    <div className="mx-auto my-5 flex justify-center items-center">
                        <img
                            src={toyData.image}
                            alt="Toy"
                            className="w-4/5 sm:w-full max-w-md rounded-lg shadow-lg"
                        />
                    </div>
                    <table className="border-collapse border-2 border-gray-500 my-5  w-1/3 sm:w-full mx-auto">
                        <thead className='p-5 bg-purple-300'>
                            <tr className=''>
                                <th className="border border-gray-500 p-2">Toy Name</th>
                                <th className="hidden sm:block border border-gray-500 p-2">Sub-category</th>
                                <th className="border border-gray-500 p-2">Price</th>
                                <th className="border border-gray-500 p-2">Quantity</th>
                                <th className="border border-gray-500 p-2">Rating</th>
                                <th className="border border-gray-500 p-2">Button</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-500 p-2">{toyData.name}</td>
                                <td className="hidden sm:block border border-gray-500 p-3">{toyData.subCategory}</td>
                                <td className="border border-gray-500 p-2">{toyData.price}</td>
                                <td className="border border-gray-500 p-2">{toyData.quantity}</td>
                                <td className="border border-gray-500 p-2">{toyData.rating}</td>
                                <td className="border border-gray-500 p-2">
                                    <label htmlFor="my-modal-3" className="p-0 sm:px-2 sm:py-2 text-white hover:font-semibold rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 button-bg text-xs">View Details</label>

                                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box relative">
                                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                            <h3 className="text-lg font-bold">Selected Toys Details</h3>
                                            <img src={toyData.image} className='w-4/5 sm:w-4/6 mx-auto' alt="" />
                                            <div className='text-start mx-10 flex flex-col gap-1'>
                                                <h1 className='text-xl font-semibold mb-2 text-center'>{toyData.name}</h1>
                                                <p><b>Price:</b> {toyData.price}</p>
                                                <p><b>Quantity:</b> {toyData.quantity}</p>
                                                <p><b>Rating:</b> {toyData.rating}</p>
                                                <p><b>Seller:</b> {toyData.seller}</p>
                                                <p><b>Sub-Category:</b> {toyData.subCategory}</p>
                                                <p className='text-justify mt-2'>Congratulations on choosing the perfect toy! Get ready for endless fun and exciting adventures.</p>
                                            </div>
                                        </div>
                                    </div></td>
                            </tr>
                        </tbody>
                    </table>


                </div>
            ) : (
                <div>
                    ...
                </div>
            )}

            <div>
                <h1>Available Toys List</h1>
                <All></All>
            </div>
        </div>
    );
};

export default ViewDetails;

