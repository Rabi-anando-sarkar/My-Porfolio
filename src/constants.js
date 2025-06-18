import {
    UserIcon,
    LinkIcon,
    FolderIcon,
    UserGroupIcon,
    QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

import About from "./components/About.jsx";

export const words = ["Develop.", "Design.", "Cook."];

export const tabs = [
    { icon: UserIcon, label: "About" , content: About},
    { icon: LinkIcon, label: "Links" , content: About},
    { icon: FolderIcon, label: "Works" , content: About},
    { icon: UserGroupIcon, label: "Contact" , content: About},
    { icon: QuestionMarkCircleIcon, label: "FAQ" , content: About},
];