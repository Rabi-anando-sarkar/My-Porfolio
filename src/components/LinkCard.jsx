import { linkTab } from "../constants.js";


const LinkCard = () => {
    return (
        <>
            {
                linkTab.map((item,index) => (
                    <div className="main-card-container" key={index}>
                        <div className="sub-card-container">
                            <div className="links-items">
                                <item.icon className="text-2xl font-jetB text-black dark:text-white"/>
                                <a className="text-md font-jetB text-black dark:text-white" href={item.link} target="_blank">{item.label}</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default LinkCard