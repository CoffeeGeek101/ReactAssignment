import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);
    const [randomColor, setRandomColor] = useState('#fff');

    const increment = () => {
        setCount((prevCount) => prevCount + 1);

        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        setRandomColor('#' + randomColor);
    };

  return (
    <div className="flex flex-col justify-between w-72 h-72 items-center">
        <div className="w-56 h-56 flex flex-row items-center justify-center bg-black/10 rounded-lg shadow-lg">
            <div 
            style={{backgroundColor: randomColor}}
            className="flex flex-col items-center justify-center p-2 text-black gap-1 h-[60%] w-[60%] rounded-full"
            >
                <p className="text-4xl"><span>{count < 10 ? '0' : ''}</span>{count}</p>
                <p className="text-[8px] underline">Click to increase counter</p>
            </div>
        </div>
        <button
        onClick={increment}
        className="text-xs bg-[#18bba8] text-white p-2 rounded-md shadow-md active:scale-95">
            Change Color
        </button>
    </div>
  )
}

export default Counter