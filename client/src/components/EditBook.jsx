import { useState, useEffect } from 'react';
import BackButton from './BackButton';
import Spinner from './Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:8000/book/${id}`)
    .then((response) => {
        setName(response.data.name);
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear)
        setPrice(response.data.price);
        setDescription(response.data.description)
        setImage(response.data.image)
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please Chack console');
        console.log(error);
      });
  }, [id])
  const handleImageChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleEditBook = () => {
    const data = {
      name,
      author,
      publishYear,
      price,
      description,
      image
    };
    setLoading(true);
    axios
      .put(`http://localhost:8000/book/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Edited successfully', { variant: 'success' });
        alert('Book Edited successfully');
        navigate('/main');
      })
      .catch((error) => {
        setLoading(false);
         alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4 text-white'>Edit Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-yellow-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Name</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Description</label>
          <input
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Price</label>
          <input
            type='number'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input
            type='number'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Book Image</label>
          <input
            type='file'
            accept='image/*'
            onChange={handleImageChange}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
          {image && (
            <div className='mt-4'>
              <label className='text-xl mr-4 text-gray-500'>Preview</label>
              <img src={image} alt='Book Preview' className='max-w-full' />
            </div>
          )}
        </div>
        <button className='p-2 bg-yellow-400  m-8' onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditBook