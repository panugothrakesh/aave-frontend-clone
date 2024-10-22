import Bug_Bounty_Icon from "@/assets/svg_components/Navbar/Developers/Icons/Bug_Bounty_Icon";
import Documentation_Icon from "@/assets/svg_components/Navbar/Developers/Icons/Documentation_Icon";
import Security_Icon from "@/assets/svg_components/Navbar/Developers/Icons/Security_Icon";
import Documentation_Sg from "@/assets/svg_components/Navbar/Developers/Sideground/Documentation_Sg";
import { useState } from "react";

const Developers = ({ isHoveredDevelopers }: { isHoveredDevelopers: boolean | null }) => {
    const [isActive, setIsActive] = useState(0);
    const [previousIndex, setPreviousIndex] = useState<number | null>(null);

    const developersData = [
        {
            icon: <Documentation_Icon isActive={isActive}/>,
            title: "Documentation",
            description: "Technical guides for developers.",
        },
        {
            icon: <Security_Icon isActive={isActive}/>,
            title: "Security",
            description: "Audit reports and information.",
        },
        {
            icon: <Bug_Bounty_Icon isActive={isActive}/>,
            title: "Bug Bounty",
            description: "Report responsibly and get rewarded.",
        },
    ];

    const handleMouseEnter = (index: number) => {
        setIsActive(index);
        setPreviousIndex(index);
    };

    const getTranslateDirection = (index: number) => {
        if (previousIndex === null) return "0px";
        return previousIndex < index ? true : false;
    };

    return (
        <div className={`absolute -top-[1px] -left-[1px] ${isHoveredDevelopers ? "pointer-events-auto" : "pointer-events-none"}`}>
            <div className={`grid grid-flow-col transition-all duration-300 ease-in-out auto-cols-max gap-x-[10px] p-[10px]
                ${isHoveredDevelopers === true ? "opacity-100 transform-none" : ""}
                ${isHoveredDevelopers === false ? "-translate-x-20 opacity-0" : ""}
                ${isHoveredDevelopers === null ? "opacity-0 transform-none" : ""}
            `}>
                <div>
                    {developersData.map((item, index) => (
                        <a
                            href=""
                            key={index}
                            className="flex group items-center gap-x-3 relative z-0 rounded-lg py-2 pl-2 pr-4 w-full"
                            onMouseEnter={() => handleMouseEnter(index)}
                        >
                            {item.icon}
                            <div>
                                <p className="text-sm font-medium leading-[120%] tracking-[.1px] text-primaryHeadingGray">{item.title}</p>
                                <p className="text-sm font-normal leading-[150%] -tracking-[.09px] text-primaryParagraph">{item.description}</p>
                            </div>
                            <div className={`hover_bg origin-[50%_50%] absolute -z-[1] top-0 left-0 rounded-lg w-full h-full bg-backgroundHover opacity-0 ${isActive === index && isHoveredDevelopers ? "pointer-events-auto opacity-100 translate-y-0" : getTranslateDirection(index) ? "-translate-y-[50%]" : "translate-y-[50%]"} transition-all duration-200 ease-in-out pointer-events-none
                        `}></div>
                        </a>
                    ))}
                </div>
                <Documentation_Sg isActive={isActive} />
            </div>
        </div>
    );
};

export default Developers;