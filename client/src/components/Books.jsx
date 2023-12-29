import { useState } from "react";
//import  { useContext } from "react";
import { bookList } from "./Data";


//const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

// eslint-disable-next-line react/prop-types

const Books = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBookList, setFilteredBookList] = useState(bookList);
  
  // Function to handle search query change
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
    filterBookList(event.target.value);
  };
  
  // Function to filter the book list based on search query
  const filterBookList = (query) => {
    const filteredList = bookList.filter(
      (property) =>
        property.title.toLowerCase().includes(query.toLowerCase()) ||
        property.price.toString().includes(query) ||
        property.author.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBookList(filteredList);
  };

 
  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  const handleBuyNowClick = () => {
    alert("Book bought successfully");
  };

  const handleCloseClick = () => {
    setSelectedProperty(null);
  };

  return (
    <div id="home" className="w-full min-h-screen p-2 flex items-center gradient-bg-services">
      <input
          type="text"
          placeholder="Search by name or price"
          value={searchQuery}
          onChange={handleSearchQueryChange}
          className="bg-gray-200 text-gray-700 rounded-md pl-8 pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-gray-700"
        />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8"> 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          
         {filteredBookList.map((property) => (
            <div
              key={property.id}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 white-glassmorphism"
              onClick={() => handlePropertyClick(property)}
            >
              <div className="bg-transparent rounded-lg shadow-lg">
                <img
                  src={property.image}
                  alt="Property"
                  className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64"
                />
                <div className="py-6 px-4">
                  <h3 className="text-lg font-medium text-gray-400">
                    {property.title}
                  </h3>
                  <p className="text-sm text-red-500">{property.description}</p>
                  <p className="text-lg font-bold text-gray-300 mt-4">
                    {property.author}
                  </p>
                  <p className="text-lg font-bold text-green-300 mt-4">
                    {property.price} 
                  </p>
                  <button
                    className="mt-6 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-400"
                    onClick={handleBuyNowClick}
                  >
                    View details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProperty && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 home__details  ">
           <div className='home__details'>     
                <div className="home__overview">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 home__close"
            onClick={handleCloseClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            
          </button>
          </div>
          <br/>
           <div className="mr-6">
          <img src={selectedProperty.image} alt="Property" className="w-80 h-60 object-cover rounded-lg" />
          <br/>
        </div>
        <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
          <p>Buy Book here</p>
           
          
                 
          </div>
          <h2 className="text-2xl font-semibold mb-4">Book Name : {selectedProperty.title}</h2>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          
          <h5 className="text-gray-500 mb-4">Book Author : {selectedProperty.author}</h5>
          <p className="text-lg font-bold text-green-500 mb-4">For buying this book</p>
         
          <p className="text-lg font-bold text-green-500 mb-4">Avaliable</p>
          <h2 className="text-1xl text-red-500 mb-4">

          In Stock
          <br/>
          {selectedProperty.account}
            <span className="text-gray-400 mb-4" ></span>

          </h2>
          <p className="text-lg font-bold text-gray-700 mb-4">Price: {selectedProperty.price}</p>
         
              <button
                className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                onClick={handleBuyNowClick}
              >
                  
               <p>Buy Now</p> 
              </button>
        
        </div>
        </div>
        
      )}
    </div>
  );
};

export default Books;