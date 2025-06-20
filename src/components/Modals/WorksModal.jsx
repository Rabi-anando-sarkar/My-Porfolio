import { useState } from 'react';
import { useRef } from 'react';
import Draggable from "react-draggable";

const WorksModal = ({ isOpen, onClose, zIndex }) => {
  const [activeTab, setActiveTab] = useState(1);
  const nodeRef = useRef(null);
  const [position, setPosition] = useState({ x: 120, y: -300 });
  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };
  if (!isOpen) return null;
  return (
    <Draggable
      handle=".work-bar"
      nodeRef={nodeRef}
      position={position}
      onDrag={handleDrag}
    >
      <div
        ref={nodeRef}
        className="work-container absolute"
        style={{
          zIndex,
          // width: "50rem",
          // height: "31rem"
        }}
      >
        <div className="work-bar cursor-move">
          <p className="text-black dark:text-black font-jetB text-[1.1rem] tracking-[0.25rem] uppercase">Works</p>
          <div className='flex gap-2'>
            <button onClick={onClose} className="interact font-jetB text-blue-600/80 text-lg font-bold hover:text-blue-600 ">[_]</button>
            <button onClick={onClose} className="interact font-jetB text-red-600/80 text-lg font-bold hover:text-red-600 ">[X]</button>
          </div>
        </div>
        <div className='tab-area work-scroll'>
          <ul className="tabs">
            <li className={`tab text-md font-jetB text-black dark:text-white ${activeTab === 1 ? "active" : ""}`}
              onClick={() => setActiveTab(1)}>Project #1</li>
            <li className={`tab text-md font-jetB text-black dark:text-white ${activeTab === 2 ? "active" : ""}`}
              onClick={() => setActiveTab(2)}>Project #2</li>
            <li className={`tab text-md font-jetB text-black dark:text-white ${activeTab === 3 ? "active" : ""}`}
              onClick={() => setActiveTab(3)}>Project #3</li>
          </ul>

          <div className={`tab-wrapper ${activeTab === 1 ? "" : "hidden"}`}>
            <div className='tab-content'>
              <h2 className='text-black dark:text-white font-jetB text-xl'>Image Manipulation App</h2>
              <p className='text-black dark:text-white font-jetB text-sm'>I needed to batch-convert image formats under a tight deadline. Free tools weren't enough, so I built my own API using Node.js and Sharp. Along the way, I explored image uploads, Cloudinary, and learned how to handle file processing securely.</p>
              <div className="flex gap-6 mt-4">
                <a className="text-blue-400" href="#">View on GitHub</a>
                <a className="text-orange-400" href="#">Postman Docs</a>
              </div>
            </div>
          </div>
          <div className={`tab-wrapper ${activeTab === 2 ? "" : "hidden"}`}>
            <div className='tab-content'>
              <h2 className='text-black dark:text-white font-jetB text-xl'>GitHub Repo2Pdf</h2>
              <p className='text-black dark:text-white font-jetB text-sm'>Used Puppeteer and APIs to extract content from URLs and turn it into clean PDFs — paste a link, and it's done. Handled multiple files, stored them on Cloudinary, and saved the access links in MongoDB for easy retrieval.</p>
              <div className="flex gap-6 mt-4">
                <a className="text-blue-400" href="#">View on GitHub</a>
                <a className="text-orange-400" href="#">Postman Docs</a>
              </div>
            </div>
          </div>
          <div className={`tab-wrapper ${activeTab === 3 ? "" : "hidden"}`}>
            <div className='tab-content'>
              <h2 className='text-black dark:text-white font-jetB text-xl'>Protfolio</h2>
              <p className='text-black dark:text-white font-jetB text-sm'>A personal portfolio built from scratch with a custom theme inspired by window-style glassmorphism and draggable UI, taking inspiration from Sheryians' unique design style. The layout mimics an OS-like experience with interactive, movable components.</p>
              <div className="flex gap-6 mt-4">
                <a className="text-blue-400" href="#">View on GitHub</a>
                <a className="text-purple-400" href="#">Live Site? You are here!</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Draggable>
  );
};

export default WorksModal