import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import { useNavigate } from "react-router-dom";

import BooksTable from './home/BooksTable';
import BooksCard from './home/BooksCard';
//import { Books } from "../"
const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/main/create");
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:8000/book')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4 bg-yellow-500'>
     <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>
      <div className='flex justify-between items-center '>
        <h1 className='text-3xl my-8'>BookList</h1>
        <button
          type="button"
          className="flex justify-center items-center my-5 border-2 border-white bg-black p-3 rounded-full cursor-pointer hover:bg-orange-500 px-8 md:px-12 lg:px-16 mx-2 md:mx-4 transition-colors duration-500 transform-gpu hover:scale-105"
          onClick={handleLoginClick}
        >
          <p className="text-white hover:text-black   text-base md:text-lg lg:text-xl font-semibold">Add book</p>
        </button>
      </div>
    
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
    
    
  );

};

export default Home;