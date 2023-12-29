import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';
//import BooksTable from './home/BooksTable';
import BooksCard from './home/BooksCard';
import { Books } from "./"
import { Navbarr } from "./"
const Main = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

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
    <>
      <Navbarr/>
      <div className='p-4 bg-yellow-500'>
     
     <br/>
      <div className='flex justify-center items-center gap-x-4'>
          <button
            className='bg-yellow-500 hover:bg-yellow-500 px-4 py-1 rounded-lg'
            onClick={() => setShowType('table')}
          >
        
          </button>
          <button
            className='bg-yellow-500 hover:bg-yellow-500 px-4 py-1 rounded-lg'
            onClick={() => setShowType('card')}
          >
       
      </button>
    </div>
    <div className='flex justify-between items-center '>
      <h1 className='text-3xl my-8'>Books List</h1>
      <Link to='/main/create'>
      <button className="px-4 py-2 bg-yellow-700 text-black rounded-md hover:bg-yellow-900 hover:text-white mx-2"> Add book </button>
      </Link>
    </div>

    {loading ? (
      <Spinner />
    ) : showType === 'table' ? (
      <BooksCard books={books} />
    ) : (
      <BooksCard books={books} />
    )}
     <Books/>
  </div>
    </>
  
    
    
  );

};

export default Main;