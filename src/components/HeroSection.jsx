import { useState } from "react";
import { tabs, words } from "../constants";
import { FlipWords } from "./ui/flip-words";
import AboutModal from "./Modals/AboutModal";
import LinksModal from "./Modals/LinksModal";
import WorksModal from "./Modals/WorksModal";
import ContactModal from "./Modals/ContactModal";
import MoreModal from "./Modals/MoreModal";

const HeroSection = () => {
  const [openPanels, setOpenPanels] = useState({
    About: false,
    Links: false,
    Works: false,
    Contact: false,
    More: false,
  });

  const [zIndices, setZIndices] = useState({});
  const [zCounter, setZCounter] = useState(100);

  const openPanel = (label) => {
    setOpenPanels((prev) => ({ ...prev, [label]: true }));
    setZIndices((prev) => ({
      ...prev,
      [label]: zCounter,
    }));
    setZCounter((prev) => prev + 1);
  };

  const closePanel = (label) => {
    setOpenPanels((prev) => ({ ...prev, [label]: false }));
  };

  return (
    <>
      <div className="content">
        <div className="bar">
          <p className="text-black dark:text-black uppercase font-jetB text-[1.1rem] tracking-[0.25rem]">Dextop</p>
        </div>
        <div className="content-body">
          <div className="text-4xl mx-auto font-jetB tracking-wide text-black dark:text-white">
            Welcome, everyone!
            <br />
            Hi, I'm Rabi. <br />
            I bring ideas to life on the web:
            <FlipWords words={words} className="text-purple-400 dark:text-purple-500" /> <br />
          </div>
          <div>
            <p className="font-jetB tracking-wide text-base mx-auto text-black dark:text-white pt-12">
              Click the Below tabs to know more :
            </p>
          </div>
          <div>
            <ul className="flex gap-6 justify-around pt-9 text-black dark:text-white">
              {tabs.map((tab, label) => (
                <li key={label} className="flex flex-col items-center">
                  <button onClick={() => openPanel(tab.label)}
                    className="flex flex-col items-center focus:outline-none">
                    <tab.icon className="w-16 h-16 text-purple-400 dark:text-purple-500" />
                    <p className="font-jetB tracking-wide text-base mt-1 text-purple-400 dark:text-purple-500">
                      {tab.label}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <AboutModal isOpen={openPanels.About} onClose={() => closePanel("About")} zIndex={zIndices.About || 0} />
          <LinksModal isOpen={openPanels.Links} onClose={() => closePanel("Links")} zIndex={zIndices.Links || 0} />
          <WorksModal isOpen={openPanels.Works} onClose={() => closePanel("Works")} zIndex={zIndices.Works || 0} />
          <ContactModal isOpen={openPanels.Contact} onClose={() => closePanel("Contact")} zIndex={zIndices.Contact || 0} />
          <MoreModal isOpen={openPanels.More} onClose={() => closePanel("More")} zIndex={zIndices.More || 0} />
        </div>
      </div>
    </>

  );
};

export default HeroSection;
