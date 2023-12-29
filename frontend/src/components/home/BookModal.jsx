import { AiOutlineClose } from 'react-icons/ai';
import {PiBookOpenTextLight} from 'react-icons/pi';
import {BiUserCircle} from 'react-icons/bi';

//defining props ..we use book to show some dat and onClose to close the modal.
const BookModal = ({book, onClose}) => {
  return (
    <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center' onClick={onClose}>
        {/* we use stopPropagation because with every click the parent onClick will not be invoked because we need this modal to be closed in only 2 conditions. The first is click outside of the white modal area and second click on the red close button of the modal white area. */}
        <div onClick={(event) => event.stopPropagation()} className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'>
        <AiOutlineClose className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer' onClick={onClose} />
        <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>{book.publishYear}</h2>
          <h4 className='my-2 text-gray-500'>{book._id}</h4>
          <div className='flex justify-start items-center gap-x-2'>
            <PiBookOpenTextLight className='text-red-300 text-2xl'/>
            <h2 className='my-1'>{book.title}</h2>
          </div>
          <div className='flex justify-start items-center gap-x-2'>
            <BiUserCircle className='text-red-300 text-2xl'/>
            <h2 className='my-1'>{book.author}</h2>
          </div>
          <p className='mt-4'>Anything You want to show</p>
          <p className='my-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsa non sapiente cumque repellat libero atque fugit quod ea nisi facilis quis, maxime vitae distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aut laborum veniam, consequuntur consectetur inventore suscipit laudantium sequi ex dolore odio possimus minus quas. Perferendis.
          </p>
        </div>
    </div>
  );
}

export default BookModal;