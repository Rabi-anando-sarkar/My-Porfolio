import { useState } from 'react';
import { useRef } from 'react';
import Draggable from "react-draggable";
import LinkCard from '../LinkCard';

const MoreModal = ({ isOpen, onClose, zIndex }) => {
  const nodeRef = useRef(null);
  const [position, setPosition] = useState({ x: 120, y: -300 });
  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };
  if (!isOpen) return null;
  return (
    <Draggable
      handle=".more-bar"
      nodeRef={nodeRef}
      position={position}
      onDrag={handleDrag}
    >
      <div
        ref={nodeRef}
        className="more-container absolute"
        style={{
          zIndex,
        }}
      >
        <div className="more-bar cursor-move">
          <p className="text-black dark:text-black font-jetB text-[1.1rem] uppercase tracking-[0.25rem]">More</p>
          <div className='flex gap-2'>
            <button onClick={onClose} className="interact font-jetB text-blue-600/80 text-lg font-bold hover:text-blue-600 ">[_]</button>
            <button onClick={onClose} className="interact font-jetB text-red-600/80 text-lg font-bold hover:text-red-600 ">[X]</button>
          </div>
        </div>
        <div className='more-body'>
          <p className='text-xl font-jetB text-black dark:text-white'>Okay, so... finally - <br />
            Here's the extra stuff.  <br />
            The behind-the-scenes bits.   <br />
            And yes — *my resume!*  <br />
            (The PDF kind, not the boring kind.)</p>
          <div className="mt-4 text-center">
            <a
              href="https://drive.google.com/file/d/1XpPxfYFUXDqzgznoLQp_paWYIxD2kLGv/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-300 mt-2 dark:text-black font-jetB px-4 py-2 rounded"
            >
              curl -O resume.pdf
            </a>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default MoreModal