"use client"
import { useDispatch, useSelector } from 'react-redux';
import  {addItems} from "../redux/fetatures/AddItems"
import { AES, enc } from 'crypto-js';
export default function index() {

  let dispatch = useDispatch();
 
  const handleAddItem = () => {
    const newItem = { id: 1, name: "Some Item" }; // Example item
    dispatch(addItems(newItem));
  };
  let itemx = useSelector((state)=>state.addReducer.items)

  console.log(itemx)
  return (
    <div className='flex flex-col items-center'>
      hello stephen
      <button className='bg-gray-500 text-white px-2 rounded-sm' onClick={handleAddItem}>submit</button>
    </div>
  )
}
