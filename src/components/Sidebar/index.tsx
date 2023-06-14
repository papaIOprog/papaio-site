import * as React from "react"
import * as styles from './sidebar.module.scss';
import 'css.gg/icons/all.css'
import classNames from "classnames/bind";
import {JSX, useState} from "react";
import {Link} from "gatsby";
import {AnimatePresence, motion} from "framer-motion";
import {getLayout, isLayoutMobile, isMobile} from "../../utils/displaySize";
import { globalHistory } from "@reach/router";

type SidebarElement = {
    label: string
    iconClassName: string
    url: string
}

const SidebarComponent = () => {
    const defaultSidebarElements: SidebarElement[] = [
        {
            label: "Home",
            iconClassName: classNames("gg-home-alt", styles.ggHomeAlt),
            url: "/"
        },
        {
            label: "Blog",
            iconClassName: "gg-notes",
            url: "/blog/"
        },
        {
            label: "Projects",
            iconClassName: classNames("gg-stack", styles.ggHomeStack),
            url: "/projects/"
        },
        {
            label: "About",
            iconClassName: "gg-info",
            url: "/about/"
        },
    ]

    const getInitialState = () => {
        const loc = globalHistory.location.pathname;
        switch (true) {
            case (loc == "/"):
                return 0
            case (loc.startsWith("/blog")):
                return 1
            case (loc.startsWith("/projects")):
                return 2
            case (loc.startsWith("/about")):
                return 3
            default:
                return 1
        }
    }

    const [isVisible, setIsVisible] = useState(false)
    const toggleVisibility = () => setIsVisible((prevState) => !prevState)
    const [activeTab, setActiveTab] = useState(getInitialState())
    const isMobile = isLayoutMobile(getLayout())
    return (
        <>
            <motion.button
                className={styles.sidebarToggleButton}
                onClick={toggleVisibility}
                whileTap={{
                    scale: [null, 1.2],
                    left: [null, "-5px"],
                }}

                transition={{duration: 0.15}}
            >
                <i className="gg-sidebar-open"></i>
            </motion.button>
            <AnimatePresence>
                {(isVisible || !isMobile) && (
                    <motion.div

                        {...(isMobile ?
                            {
                                initial: {
                                    opacity: 0,
                                    left: "-2000px"
                                },
                                animate: {
                                    opacity: 1,
                                    left: "0px"
                                },
                                exit: {
                                    opacity: 0,
                                    left: "-2000px"
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 75,
                                    duration: 0.2
                                }
                            } : {})}

                        className={classNames(styles.sidebarWrapper, isVisible ? styles.shown : "")}>
                        <div className={styles.sidebar}>
                            {defaultSidebarElements.map((element, id) => {
                                return (
                                    <Link key={id}
                                          to={element.url}
                                          className={classNames(styles.sidebarElement, (activeTab == id ? styles.active : ""))}
                                          onClick={() => {
                                              setActiveTab(id)
                                              toggleVisibility()
                                          }}>
                                        <div className={styles.sidebarElementContent}>
                                            <div className={styles.sidebarElementIcon}><i
                                                className={element.iconClassName}></i></div>
                                            <span className={styles.sidebarElementLabel}>{element.label}</span>
                                        </div>
                                    </Link>
                                )
                            })}
                            <div className={styles.indicator}></div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default SidebarComponent
