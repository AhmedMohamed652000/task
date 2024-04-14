import React from 'react'
import { Link } from 'react-router-dom'
import  {StarIcon}  from '../../icon/Star';
function Card({ product }) {
    const roundedRating = Math?.floor(product?.rating);
    return (
        <div className="w-full max-w-sm bg-white border  border-gray-200 rounded-lg shadow-xl">
            <img className="p-8 rounded-t-lg h-[200px] mx-auto" src={product.thumbnail} alt={product.title} />
            <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 line-clamp-2">
                    {product.description}
                </h5>
                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        {Array.from({length:roundedRating}).map((_, index) => (
                            <StarIcon key={index} />
                        ))}
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-3">{product.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                    <Link to={`/product-details/${product.title}/${product.id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">View Details</Link>
                </div>
            </div>
        </div>
    )

}

export default Card