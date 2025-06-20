import { useState } from 'react';
import { useRef } from 'react';
import Draggable from "react-draggable";

const AboutModal = ({ isOpen, onClose, zIndex }) => {
  const nodeRef = useRef(null);
  const [position, setPosition] = useState({ x: 120, y: -300 });
  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };
  if (!isOpen) return null;
  return (
    <Draggable
      handle=".about-bar"
      nodeRef={nodeRef}
      position={position}
      onDrag={handleDrag}
    >
      <div
        ref={nodeRef}
        className="about-container absolute"
        style={{
          zIndex,
        }}
      >
        <div className="about-bar  cursor-move">
          <p className="text-black dark:text-black uppercase font-jetB text-[1.1rem] tracking-[0.25rem]">About</p>
          <div className='flex gap-2'>
            <button onClick={onClose} className="interact font-jetB text-blue-600/80 text-lg font-bold hover:text-blue-600 ">[_]</button>
            <button onClick={onClose} className="interact font-jetB text-red-600/80 text-lg font-bold hover:text-red-600 ">[X]</button>
          </div>
        </div>
        <div className='about-scroll'>
          <div className='image-and-desc h-[12rem] flex items-center gap-20 pl-20 pr-8'>
            <img
              src='/images/demo.jpg'
              alt='Rabi Anando Sarkar'
              className="w-36 h-36 rounded-full object-cover"
            />
            <div className='flex flex-col items-start'>
              <h2 className="text-4xl text-black dark:text-white font-jetB tracking-normal">Rabi Anando Sarkar</h2>
              <p className='text-xl pt-1 text-black dark:text-white font-jetB tracking-normal'>Full Stack Web Developer</p>
              <p className='text-sm pt-2 text-black dark:text-white font-jetB'>rabianandos2002@gmail.com || New Delhi, India</p>
            </div>
          </div>
          <div className='pl-8 pr-8 pt-8 pb-8'>
            <h2 className='text-xl font-jetB text-black dark:text-white pb-2'>What do I do :</h2>
            <p className='text-md font-jetB tracking-normal text-black dark:text-white'>
              Hi, I'm Rabi I... <br />
              ~ code with intent, design with clarity, and cook with precision. <br />
              ~ build clean frontends, craft solid backends, and make the web feel like home. <br />
              ~ sketch wireframes, design posters, and stir up spicy ideas off-screen too. <br />
              ~ mix pixels, flavors, and functions — because why not do it all?
            </p>
          </div>
          <div>
            <hr className="border-t border-purple-700 dark:border-purple-700 mx-8" />
          </div>
          <div className='pl-8 pr-8 pt-8 pb-8'>
            <h2 className='text-xl font-jetB text-black dark:text-white pb-2'>Education : </h2>
            <p className='text-md font-jetB tracking-normal text-black dark:text-white'>
              ~ Bachelor's In Computer Applications (BCA)
            </p>
          </div>
          <div>
            <hr className="border-t border-purple-700 dark:border-purple-700 mx-8" />
          </div>
          <div className='pl-8 pr-8 pt-8 pb-8'>
            <h2 className='text-xl font-jetB text-black dark:text-white pb-2'>Tech Stack : </h2>
            <p className='text-md font-jetB tracking-normal text-black dark:text-white'>
              ~ <strong>Languages:</strong> C, C++, Java, JavaScript, TypeScript, Python<br />
              ~ <strong>Frontend:</strong> React.js, Next.js, Redux, TanStack Query<br />
              ~ <strong>Styling:</strong> Tailwind CSS, Material UI, DaisyUI, Aceternity UI, CSS<br />
              ~ <strong>Backend:</strong> Node.js, Express.js, Django, FastAPI<br />
              ~ <strong>Databases:</strong> MongoDB, Mongoose, MySQL, PostgreSQL, Prisma, Drizzle<br />
              ~ <strong>Auth & BaaS:</strong> OAuth 2.0, Clerk, Firebase, Appwrite<br />
              ~ <strong>Tools:</strong> Git, GitHub, Figma
            </p>
          </div>
          <div>
            <hr className="border-t border-purple-700 dark:border-purple-700 mx-8" />
          </div>
          <div className='pl-8 pr-8 pt-8 pb-2'>
            <h2 className='text-xl font-jetB text-black dark:text-white pb-2'>Also into :</h2>
            <p className='text-md font-jetB tracking-normal text-black dark:text-white'>
              ~ DSA, design psychology, and maybe a little into gaming <br />
              ~ Wireframing & illustrating ideas<br />
              ~ Chess, strategy games<br />
              ~ guitaaar <br />
              ~ Cooking (from aam panna to shahi paneer)
            </p>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default AboutModal