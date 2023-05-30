

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const View = () => {
    const [toyData, setToyData] = useState([]);
    const [selectedToys, setSelectedToys] = useState([]);

    useEffect(() => {
        fetch(' https://toys-galaxy-server-mujahidul12628.vercel.app/toysData')
            .then(response => response.json())
            .then(data => setToyData(data))
            .catch(error => console.error('Error fetching toy data:', error));
    }, []);

    const addToCart = (toy) => {
        setSelectedToys(prevSelectedToys => {
            const updatedSelectedToys = [...prevSelectedToys, toy];
            localStorage.setItem('selectedToys', JSON.stringify(updatedSelectedToys));
            return updatedSelectedToys;
        });
    };

    useEffect(() => {
        const storedToys = localStorage.getItem('selectedToys');
        if (storedToys) {
            setSelectedToys(JSON.parse(storedToys));
        }
    }, []);

    return (
        <div>
            <h1 className="text-center mt-5 text-2xl font-medium">Shop by category</h1>

            <div className="container mx-auto p-4">
                {toyData.map((category, index) => (
                    <div key={index}>
                        <h2 className="text-lg font-semibold">{category.category}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {category.vehicles.map((vehicle, vIndex) => (
                                <div key={vIndex} className="card card-compact bg-base-100 box-shadow-card">
                                    <figure>
                                        <img src={vehicle.image} alt={vehicle.name} className="w-64 h-56 md:w-80 md:h-64" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="text-center text-xl font-semibold">{vehicle.name}</h2>
                                        <p>Price: {vehicle.price}</p>
                                        <p>Quantity: {vehicle.quantity}</p>
                                        <div className="card-actions justify-start">
                                            <button className="mx-auto" onClick={() => addToCart(vehicle)}>Add to Cart</button>
                                        </div>
                                        <Link to={`/toysData/${vehicle.id}`}>
                                            <button className="mt-3 px-6 py-3 text-white hover:font-semibold rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 button-bg">
                                                View Details
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default View;
