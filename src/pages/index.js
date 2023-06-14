import React from "react"

import githubButton from "../images/icons/github-round.svg"
import telegramButton from "../images/icons/telegram-round.svg"
import linkedinButton from "../images/icons/linkedin-round.svg"
import logo from "../images/icons/logo-round.svg"
import * as styles from "./index.module.scss"

import {Layout} from "../components/common"
import {Link} from "gatsby";

const NotFoundPage = () => (
    <Layout>
        <div className={styles.logoContainer}>
            <img className={styles.logo} src={logo} alt={"PapaIO Logo"}/>
        </div>
        <h1>Hi, I’m PapaIO, and I’m Software Developer</h1>
        <p>Check out my Github profile for projects or message me on social media with buttons below!</p>
        <ul className={styles.linkList}>
            <li className={styles.listItem}>
                <Link to="#"><img className={styles.icon} src={githubButton} alt={"GitHub Button"}/></Link>
            </li>
            <li className={styles.listItem}>
                <Link to="#"><img className={styles.icon} src={telegramButton} alt={"Telegram Button"}/></Link>
            </li>
            <li className={styles.listItem}>
                <Link to="#"><img className={styles.icon} src={linkedinButton} alt={"LinkedIn Button"}/></Link>
            </li>
        </ul>

    </Layout>
)

export default NotFoundPage
