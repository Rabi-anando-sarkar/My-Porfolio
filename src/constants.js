import {
    UserIcon,
    LinkIcon,
    FolderIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";

import { HiOutlineDotsCircleHorizontal  } from "react-icons/hi";

import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter,FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";


import WindowPanel from "./components/WindowPanel.jsx";

export const words = ["what you see.", "what it does.", "how it feels."];

export const tabs = [
    { icon: UserIcon, label: "About" , content: WindowPanel},
    { icon: LinkIcon, label: "Links" , content: WindowPanel},
    { icon: FolderIcon, label: "Works" , content: WindowPanel},
    { icon: UserGroupIcon, label: "Contact" , content: WindowPanel},
    { icon: HiOutlineDotsCircleHorizontal , label: "More" , content: WindowPanel},
];

export const linkTab = [
    { icon: FaGithub, label: "GitHub" , link: 'https://github.com/Rabi-anando-sarkar' },
    { icon: FaSquareXTwitter, label: "Twitter" , link: 'https://x.com/rabi_anando'},
    { icon: FaLinkedin, label: "LinkedIn", link: 'https://www.linkedin.com/in/anandorabi/' },
    { icon: SiLeetcode, label: "LeetCode", link: 'https://leetcode.com/u/Rabi-anando-sarkar/'}
]