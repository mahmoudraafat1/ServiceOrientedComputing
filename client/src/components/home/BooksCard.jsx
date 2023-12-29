/* eslint-disable react/prop-types */
import BookSingleCard from './BookSingleCard';

// eslint-disable-next-line react/prop-types
const BooksCard = ({ books }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
};

export default BooksCard;