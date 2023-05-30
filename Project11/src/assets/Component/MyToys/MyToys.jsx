// /* eslint-disable react/prop-types */
// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const MyToys = () => {
//     const location = useLocation();
//     const toyList = location.state?.toyList || [];

//     console.log('Current location:', 'myToys');
//     return (
//         <div className="mt-8">


//             {toyList.length > 0 ? (

//                 <table className="w-full border-collapse">
//                     <thead>
//                         <tr>
//                             <th className="border px-4 py-2">Picture</th>
//                             <th className="border px-4 py-2">Name</th>
//                             <th className="border px-4 py-2">Seller Name</th>
//                             <th className="border px-4 py-2">Seller Email</th>
//                             <th className="border px-4 py-2">Sub-category</th>
//                             <th className="border px-4 py-2">Price</th>
//                             <th className="border px-4 py-2">Rating</th>
//                             <th className="border px-4 py-2">Quantity</th>
//                             <th className="border px-4 py-2">Description</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {toyList.map((toy, index) => (
//                             <tr key={index}>
//                                 <td className="border px-4 py-2">
//                                     <img src={toy.pictureUrl} alt={toy.name} className="w-16 h-16" />
//                                 </td>
//                                 <td className="border px-4 py-2">{toy.name}</td>
//                                 <td className="border px-4 py-2">{toy.sellerName}</td>
//                                 <td className="border px-4 py-2">{toy.sellerEmail}</td>
//                                 <td className="border px-4 py-2">{toy.subCategory}</td>
//                                 <td className="border px-4 py-2">{toy.price}</td>
//                                 <td className="border px-4 py-2">{toy.rating}</td>
//                                 <td className="border px-4 py-2">{toy.quantity}</td>
//                                 <td className="border px-4 py-2">{toy.description}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>)
//                 : (
//                     <p>No toys added yet.</p>
//                 )
//             }
//         </div>
//     );
// };

// export default MyToys;


import React from 'react';
import { useLocation } from 'react-router-dom';
import DynamicTittle from '../Hook/DynamicTittle';

const MyToys = () => {
    DynamicTittle('my-toys')
    const location = useLocation();
    const toyList = location.state?.toyList || [];

    // Retrieve data from local storage
    const toyName = localStorage.getItem('toyName');
    const toyType = localStorage.getItem('toyType');

    return (
        <div className="mt-8">
            <h2>My Toys</h2>

            <div className="overflow-x-auto">
                <table className="w-full mt-8 border border-collapse">
                    <thead>
                        <tr>
                            <th className="sm:table-cell border min-w-[100px]">Picture</th>
                            <th className="sm:table-cell border min-w-[100px]">Name</th>
                            <th className="sm:table-cell border min-w-[100px]">Seller Name</th>
                            <th className="sm:table-cell border min-w-[100px]">Seller Email</th>
                            <th className="sm:table-cell border min-w-[100px]">Sub-category</th>
                            <th className="sm:table-cell border min-w-[100px]">Price</th>
                            <th className="sm:table-cell border min-w-[100px]">Rating</th>
                            <th className="sm:table-cell border min-w-[100px]">Quantity</th>
                            <th className="sm:table-cell border min-w-[100px]">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border min-w-[100px]">
                                <img src="https://i.ibb.co/HHRQj23/vintage8.jpg" alt="Toy" className="w-16 h-16" />
                            </td>
                            <td className="border min-w-[100px]">Toy Name 1</td>
                            <td className="border min-w-[100px]">Seller 1</td>
                            <td className="border min-w-[100px]">seller1@example.com</td>
                            <td className="border min-w-[100px]">Sub-category 1</td>
                            <td className="border min-w-[100px]">$19.99</td>
                            <td className="border min-w-[100px]">4.5</td>
                            <td className="border min-w-[100px]">10</td>
                            <td className="border min-w-[100px]">Toy description 1</td>
                        </tr>
                        <tr>
                            <td className="border min-w-[100px] mx-auto">
                                <img src="https://i.ibb.co/rsfZbFG/zip4.jpg" alt="Toy" className="w-16 h-16 " />
                            </td>
                            <td className="border min-w-[100px]">Toy Name 2</td>
                            <td className="border min-w-[100px]">Seller 2</td>
                            <td className="border min-w-[100px]">seller2@example.com</td>
                            <td className="border min-w-[100px]">Sub-category 2</td>
                            <td className="border min-w-[100px]">$24.99</td>
                            <td className="border min-w-[100px]">3.8</td>
                            <td className="border min-w-[100px]">5</td>
                            <td className="border min-w-[100px]">Toy description 2</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default MyToys;
