import React from "react"
import {AnimatePresence} from "framer-motion"
import SidebarComponent from "./src/components/Sidebar";
import FooterComponent from "./src/components/Footer";

export const onClientEntry = () => {
    document.addEventListener("click", function(e){
        const target = e.target.closest(".kg-toggle-card");
        const targetHeading = e.target.closest(".kg-toggle-heading");

        if(target && targetHeading){
            target.dataset.kgToggleState = target.dataset.kgToggleState === "close" ? "open" : "close"
        }
    });
}

export const wrapPageElement = ({element}) => (
<div>
    <div>
        <SidebarComponent></SidebarComponent>
        <div className="container page-container">
            <AnimatePresence mode={"wait"} initial={false}
                             style={
                                 {
                                     transformStyle: "preserve-3d",
                                     perspective: "240em",
                                     perspectiveOrigin: "100vh 0"
                                 }
                             }>
                {element}
            </AnimatePresence>
        </div>
    </div>
    <FooterComponent></FooterComponent>
</div>
)