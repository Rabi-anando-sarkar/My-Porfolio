import { useState } from 'react';
import { useRef } from 'react';
import Draggable from "react-draggable";
import LinkCard from '../LinkCard';

const LinksModal = ({ isOpen, onClose, zIndex }) => {
  const nodeRef = useRef(null);
  const [position, setPosition] = useState({ x: 120, y: -300 });
  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };
  if (!isOpen) return null;
  return (
    <Draggable
      handle=".link-bar"
      nodeRef={nodeRef}
      position={position}
      onDrag={handleDrag}
    >
      <div
        ref={nodeRef}
        className="link-container absolute"
        style={{
          zIndex,
        }}
      >
        <div className="link-bar cursor-move">
          <p className="text-black dark:text-black font-jetB text-[1.1rem] uppercase tracking-[0.25rem]">Links</p>
          <div className='flex gap-2'>
            <button onClick={onClose} className="interact font-jetB text-blue-600/80 text-lg font-bold hover:text-blue-600 ">[_]</button>
            <button onClick={onClose} className="interact font-jetB text-red-600/80 text-lg font-bold hover:text-red-600 ">[X]</button>
          </div>
        </div>
        <div className='link-scroll cards-wrapper'>
          <LinkCard />
        </div>
        <div className='pl-8 pr-8 pt-6 flex items-center justify-center'>
          <p className='text-black dark:text-white border border-solid p-3 rounded-md'>These links will open in the new tab!</p>
        </div>
      </div>
    </Draggable>
  );
};

export default LinksModal