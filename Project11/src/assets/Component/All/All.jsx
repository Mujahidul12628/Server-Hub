import React, { useEffect, useState } from 'react';

const All = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://toys-galaxy-server-mujahidul12628.vercel.app/all')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Toys Table</h1>
            {data.length > 0 ? (
                <table className="w-full mt-8 border border-collapse">
                    <thead>
                        <tr>
                            <th className="sm:table-cell border min-w-[100px]">Picture</th>
                            <th className="sm:table-cell border min-w-[100px]">Name</th>
                            <th className="sm:table-cell border min-w-[100px]">Seller Name</th>
                            <th className="sm:table-cell border min-w-[100px]">Sub-category</th>
                            <th className="sm:table-cell border min-w-[100px]">Price</th>
                            <th className="sm:table-cell border min-w-[100px]">Rating</th>
                            <th className="sm:table-cell border min-w-[100px]">Quantity</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className="border min-w-[100px] flex items-center justify-center">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 m-2" />
                                </td>
                                <td className="border min-w-[100px]">{item.name}</td>
                                <td className="border min-w-[100px]">{item.seller}</td>
                                <td className="border min-w-[100px]">{item.subCategory}</td>
                                <td className="border min-w-[100px]">{item.price}</td>
                                <td className="border min-w-[100px]">{item.rating}</td>
                                <td className="border min-w-[100px]">{item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No data available.</p>
            )}
        </div>
    );
};

export default All;
