import {Link } from 'react-router-dom';
import { BsArrowBarLeft } from 'react-icons/bs';

const BackButton = ({des = '/Home'})=> {
    return (
        <div className='flex'>
            <Link to={des}
            className='bg-yellow-200 text-black px-4 py-1 rounded-lg w-fit'>
                <BsArrowBarLeft className='text-2xl' />

            </Link>
        </div>
    )
}
export default BackButton