import { useState } from "react";

const BoolButton = () => {

    const [bool, setBool] = useState(false);

    const handleBool = () => {
        setBool((prevBool) => !prevBool);
    }

  return (
    <button 
    onClick={handleBool}
    className={`text-base ${bool ? 'bg-rose-700' : 'bg-blue-700'} text-white p-2 w-[160px] rounded-md shadow-md active:scale-95`}>
        {bool ? 'true' : 'false'}
    </button>
  )
}

export default BoolButton