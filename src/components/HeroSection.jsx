import { useState } from "react";
import { tabs, words } from "../constants";
import { FlipWords } from "./ui/flip-words";
import DraggablePanel from "./DraggablePanel";


const HeroSection = () => {
  const [activePanel, setActivePanel] = useState(null);

  return (
    <>
      <div className="content">
        <div className="bar">
          <p className="text-black dark:text-black  font-jetB tracking-normal">Dextop</p>
        </div>
        <div className="content-body">
          <div className="text-4xl mx-auto font-jetB tracking-wide text-black dark:text-white">
            Welcome, everyone!
            <br />
            Hi, I'm Rabi. <br />
            Mostly, I{" "}
            <FlipWords words={words} className="text-purple-400 dark:text-purple-700" /> <br />
          </div>
          <div>
            <p className="font-jetB tracking-wide text-base mx-auto text-black dark:text-white pt-12">
              Click the Below tabs to know more :
            </p>
          </div>
          <div>
            <ul className="flex gap-6 justify-around pt-9 text-black dark:text-white">
              {tabs.map(({ icon: Icon, label, content }) => (
  <li key={label} className="flex flex-col items-center">
    <button onClick={() => setActivePanel({ label, content })}>
      <Icon className="w-16 h-16 text-black dark:text-white" />
      <p className="font-jetB tracking-wide text-base mt-1 text-black dark:text-white">
        {label}
      </p>
    </button>
  </li>
))}
            </ul>
          </div>

          {activePanel && (
            <DraggablePanel
  label={activePanel.label}
  content={activePanel.content}
  onClose={() => setActivePanel(null)}
/>
          )}

        </div>
      </div>
    </>

  );
};

export default HeroSection;
