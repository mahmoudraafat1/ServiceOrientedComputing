import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

// eslint-disable-next-line react/prop-types
const BackButton = ({ destination = '/main' }) => {
  return (
    <div className='flex'>
      <Link
        to={destination}
        className='bg-yellow-800 text-white px-4 py-1 rounded-lg w-fit'
      >
        <BsArrowLeft className='text-2xl' />
      </Link>
    </div>
  );
};

export default BackButton;