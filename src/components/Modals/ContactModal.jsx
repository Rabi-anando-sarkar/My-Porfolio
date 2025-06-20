import { useState } from 'react';
import { useRef } from 'react';
import Draggable from "react-draggable";

const ContactModal = ({ isOpen, onClose, zIndex }) => {
  const nodeRef = useRef(null);
  const [position, setPosition] = useState({ x: 120, y: -300 });
  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };
  if (!isOpen) return null;
  return (
    <Draggable
      handle=".contact-bar"
      nodeRef={nodeRef}
      position={position}
      onDrag={handleDrag}
    >
      <div
        ref={nodeRef}
        className="contact-container absolute"
        style={{
          zIndex,
        }}
      >
        <div className="contact-bar cursor-move">
          <p className="text-black dark:text-blac uppercase font-jetB text-[1.1rem] tracking-[0.25rem]">Contact</p>
          <div className='flex gap-2'>
            <button onClick={onClose} className="interact font-jetB text-blue-600/80 text-lg font-bold hover:text-blue-600 ">[_]</button>
            <button onClick={onClose} className="interact font-jetB text-red-600/80 text-lg font-bold hover:text-red-600 ">[X]</button>
          </div>
        </div>
        <div className='contact-body'>
          <h2 className='text-black dark:text-white font-jetB text-md'>Let's talk. Or type. Or send signals via email.</h2>

          <p className='text-black dark:text-white font-jetB text-md pt-8'>
            Got a cool idea? A project? <br />
            A bug that refuses to die? <br />
            Or maybe you just wanna say, “Hey, nice site”?
          </p>

          <p className='text-black dark:text-white font-jetB text-md pt-8'>
            I'm down. <br />
            I write code, design stuff, overthink pixels, and occasionally make really good food. <br />
            Drop a message — I’ll probably reply faster than your last client.
          </p>

          <p className='text-black dark:text-white font-jetB text-md pt-8'>
            Email? Here you go: <br />
            <a href="mailto:rabianandos2002@gmail.com" className="text-purple-500 underline">
              rabianandos2002@gmail.com
            </a>
          </p>
        </div>

      </div>
    </Draggable>
  );
};

export default ContactModal