import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from './BackButton';
import Spinner from './Spinner';
import { BiUserCircle} from 'react-icons/bi'
const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8000/book/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-yellow-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span className='text-white'>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Name</span>
            <span className='text-white'>{book.name}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Author</span>
            <span className='text-white'>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Description</span>
            <span className='text-white'>{book.description}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
            <span className='text-white'>{book.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Price</span>
            <span className='text-white'>{book.price}</span>
          </div>
          <div className='my-4'>
          <div className='flex justify-start items-center gap-x-2'>
            <BiUserCircle className='text-red-300 text-2xl' />
            <img src={book.image} alt='Book Cover' className='my-1' />
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;