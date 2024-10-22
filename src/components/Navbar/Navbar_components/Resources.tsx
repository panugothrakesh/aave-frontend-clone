import Brand_Icon from "@/assets/svg_components/Navbar/Resources/Icons/Brand_Icon";
import FAQ_Icon from "@/assets/svg_components/Navbar/Resources/Icons/FAQ_Icon";
import Governance_Icon from "@/assets/svg_components/Navbar/Resources/Icons/Governance_Icon";
import HelpNSupport_Icon from "@/assets/svg_components/Navbar/Resources/Icons/HelpNSupport_Icon";
import Brand_Sg from "@/assets/svg_components/Navbar/Resources/Sideground/Brand_Sg";
import "./hover.css"
import { useState } from "react";

const Resources = ({ isHoveredResources }: { isHoveredResources: boolean | null }) => {
    const [isActive, setIsActive] = useState(0)
    const [previousIndex, setPreviousIndex] = useState<number | null>(null);

    const resourcesData = [
        {
          icon: <Brand_Icon isActive={isActive}/>,
          title: "Brand",
          description: "Assets, examples and guides.",
        },
        {
          icon: <FAQ_Icon isActive={isActive}/>,
          title: "FAQ",
          description: "Answers to common questions.",
        },
        {
          icon: <HelpNSupport_Icon isActive={isActive}/>,
          title: "Help & Support",
          description: "Guides, articles and more.",
        },
        {
          icon: <Governance_Icon isActive={isActive}/>,
          title: "Governance",
          description: "The Aave Governance forum.",
        },
      ];

      const handleMouseEnter = (index: number) => {
        setIsActive(index)
        setPreviousIndex(index);
      };
    
      const getTranslateDirection = (index: number) => {
        if (previousIndex === null) return "0px";
        return previousIndex < index ? true : false;
      };

    return (
        <div className={`absolute -top-[1px] -left-[1px] ${isHoveredResources ? "pointer-events-auto": "pointer-events-none"}`}>
            <div className={`grid grid-flow-col transition-all duration-300 ease-in-out  auto-cols-max gap-x-[10px] p-[10px]
              ${ isHoveredResources === true ? "opacity-100 transform-none" : "" }
              ${ isHoveredResources === false ? "-translate-x-20 opacity-0" : "" }
              ${ isHoveredResources === null ? "opacity-0 transform-none" : "" }
              `}>
                <div>
                {resourcesData.map((item, index) => (
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
                    <div className={`hover_bg origin-[50%_50%] absolute -z-[1] top-0 left-0 rounded-lg w-full h-full bg-backgroundHover opacity-0 ${isActive === index && isHoveredResources ? "pointer-events-auto opacity-100 translate-y-0" : getTranslateDirection(index) ? "-translate-y-[50%]" : "translate-y-[50%]"} transition-all duration-200 ease-in-out pointer-events-none
                        `}></div>
                    </a>
                ))}
                </div>
                <Brand_Sg isActive={isActive}/>
            </div>
        </div>
    )
}

export default Resources;