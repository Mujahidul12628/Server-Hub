import React, { useState } from 'react';
import MyToys from '../MyToys/MyToys';
import { useNavigate } from 'react-router-dom';
import DynamicTittle from '../Hook/DynamicTittle';


const AddToy = () => {

    DynamicTittle('add-a-toy')

    const [pictureUrl, setPictureUrl] = useState('');
    const [name, setName] = useState('');
    const [sellerName, setSellerName] = useState('');
    const [sellerEmail, setSellerEmail] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');
    const [toyList, setToyList] = useState([]);

    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if any field is empty
        if (
            pictureUrl.trim() === '' ||
            name.trim() === '' ||
            sellerName.trim() === '' ||
            sellerEmail.trim() === '' ||
            subCategory.trim() === '' ||
            price.trim() === '' ||
            rating.trim() === '' ||
            quantity.trim() === '' ||
            description.trim() === ''
        ) {
            alert('Please fill in all the input fields.');
            return;
        }

        const toyData = {
            pictureUrl,
            name,
            sellerName,
            sellerEmail,
            subCategory,
            price,
            rating,
            quantity,
            description,
        };

        console.log('Toy Data:', toyData);

        setToyList([...toyList, toyData]);

        clearForm();
    };
    const handleAddToy = () => {
        // Save data to local storage
        localStorage.setItem('toyName', toyName);
        localStorage.setItem('toyType', toyType);

        // Create toy object
        const toy = {
            name: toyName,
            type: toyType,
        };

        // Get existing toyList from local storage or initialize empty array
        const existingToyList = JSON.parse(localStorage.getItem('toyList')) || [];

        // Add the new toy to the existing toyList
        const updatedToyList = [...existingToyList, toy];

        // Save the updated toyList to local storage
        localStorage.setItem('toyList', JSON.stringify(updatedToyList));

        // Navigate to the MyToys page and pass the toyList as state
        navigate('/mytoys', { state: { toyList: updatedToyList } });
    };

    const clearForm = () => {
        setPictureUrl('');
        setName('');
        setSellerName('');
        setSellerEmail('');
        setSubCategory('');
        setPrice('');
        setRating('');
        setQuantity('');
        setDescription('');
    };
    return (
        <div className="container mx-auto px-2 py-8">
            <form onSubmit={handleSubmit} className="mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 sm:gap-2 md:gap-4 w-full">
                    <div>
                        <label htmlFor="pictureUrl" className="block text-gray-700 text-sm font-semibold mb-2">
                            Picture URL
                        </label>
                        <input
                            type="text"
                            id="pictureUrl"
                            value={pictureUrl}
                            onChange={(e) => setPictureUrl(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-600"
                            placeholder="Enter Picture URL"
                        />
                    </div>

                    <div>
                        <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-600"
                            placeholder="Enter Name"
                        />
                    </div>

                    <div>
                        <label htmlFor="sellerName" className="block text-gray-700 text-sm font-semibold mb-2">
                            Seller Name
                        </label>
                        <input
                            type="text"
                            id="sellerName"
                            value={sellerName}
                            onChange={(e) => setSellerName(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-600"
                            placeholder="Enter Seller Name"
                        />
                    </div>

                    <div>
                        <label htmlFor="sellerEmail" className="block text-gray-700 text-sm font-semibold mb-2">
                            Seller Email
                        </label>
                        <input
                            type="email"
                            id="sellerEmail"
                            value={sellerEmail}
                            onChange={(e) => setSellerEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-600"
                            placeholder="Enter Seller Email"
                        />
                    </div>


                    <div>
                        <label htmlFor="subCategory" className="block text-gray-700 text-sm font-semibold mb-2">
                            Sub-category
                        </label>
                        <select
                            id="subCategory"
                            value={subCategory}
                            onChange={(e) => setSubCategory(e.target.value)}
                            placeholder="Select Sub Category"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-600"
                        >
                            <option value="Classic zip" style={{ color: 'gray' }}>Select Sub-Category</option>
                            <option value="Classic zip">Classic zip</option>
                            <option value="Vintage Car">Vintage Car</option>
                            <option value="Racing Car">Racing Car</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="price" className="block text-gray-700 text-sm font-semibold mb-2">
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-600"
                            placeholder="Enter Price"
                        />
                    </div>

                    <div>
                        <label htmlFor="rating" className="block text-gray-700 text-sm font-semibold mb-2">
                            Rating
                        </label>
                        <input
                            type="number"
                            id="rating"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-600"
                            placeholder="Enter Rating"
                        />
                    </div>


                    <div>
                        <label htmlFor="quantity" className="block text-gray-700 text-sm font-semibold mb-2">
                            Quantity
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-600"
                            placeholder="Enter Available Quantity"
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-gray-700 text-sm font-semibold mb-2">
                            Description
                        </label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-600"
                            placeholder="Enter Detail Description"
                        />
                    </div>
                </div>

                <button
                    onClick={handleAddToy}
                    type="submit"
                    className="w-full md:w-1/2 mt-6 px-4 py-2 btn-bg text-white font-semibold rounded-md focus:outline-none hover:bg-purple-600"
                >
                    Add Toy
                </button>
            </form>

            {/* <MyToys toyList={toyList} /> */}


            {toyList.length > 0 && (
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
                            {toyList.map((toy, index) => (
                                <tr key={index}>
                                    <td className="border min-w-[100px]">
                                        <img src={toy.pictureUrl} alt={toy.name} className="w-16 h-16" />
                                    </td>
                                    <td className="border min-w-[100px]">{toy.name}</td>
                                    <td className="border min-w-[100px]">{toy.sellerName}</td>
                                    <td className="border min-w-[100px]">{toy.sellerEmail}</td>
                                    <td className="border min-w-[100px]">{toy.subCategory}</td>
                                    <td className="border min-w-[100px]">{toy.price}</td>
                                    <td className="border min-w-[100px]">{toy.rating}</td>
                                    <td className="border min-w-[100px]">{toy.quantity}</td>
                                    <td className="border min-w-[100px]">{toy.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>



                </div>

            )}
        </div>
    );
};

export default AddToy;


