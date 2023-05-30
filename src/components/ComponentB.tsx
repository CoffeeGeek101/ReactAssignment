import React from 'react'
import { useAppDispatch } from '../redux/store';
import { incrementCerdol } from '../redux/CerdolSlice';

interface IComponentBProps {
    cerdol : number
}

const ComponentB : React.FC<IComponentBProps> = ({cerdol}) => {

    const [updated, setUpdated] = React.useState(false);
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(incrementCerdol());
        setUpdated(true);
    }

  return (
    <div className='flex flex-col justify-between w-auto h-auto items-center gap-5 bg-slate-400/10 p-5 rounded-md shadow-sm'>
        <p className='text-lg font-medium'>{updated ? 'This updated from component B' : 'This value is from component A'}</p>
        <p className='text-2xl text-[#18bba8]'>{cerdol}</p>
        <button
        onClick={handleClick}
        className="text-xs bg-[#18bba8] text-white p-2 rounded-md shadow-md active:scale-95"
        >increment by 10</button>
    </div>
  )
}

export default ComponentB