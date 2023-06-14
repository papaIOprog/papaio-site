import * as React from "react"
import * as styles from './footer.module.scss';
import 'css.gg/icons/all.css'
import githubButton from "../../images/icons/github.svg"
import telegramButton from "../../images/icons/telegram.svg"
import linkedinButton from "../../images/icons/linkedin.svg"
import logo from "../../images/icons/logo-round.svg"
import classNames from "classnames/bind";
import {Link} from "gatsby";

const FooterComponent = () => {
    return (
        <footer className={styles.footer}>
            <div className={classNames("container", styles.footerContent)}>
                <div className={styles.logoContainer}>
                    <img className={styles.logo} src={logo}/>
                </div>
                <div className={styles.linksColumn}>
                    <h6 className={styles.columnHeader}>Blog</h6>
                    <ul className={styles.linksList}>
                        <li className={styles.linksListItem}>Blog</li>
                        <li className={styles.linksListItem}>Projects</li>
                        <li className={styles.linksListItem}>About</li>
                    </ul>
                </div>
                <div className={styles.linksColumn}>
                    <h6 className={styles.columnHeader}>Social media</h6>
                    <ul className={styles.linksList}>
                        <li className={styles.linksListItem}>Github</li>
                        <li className={styles.linksListItem}>Telegram</li>
                        <li className={styles.linksListItem}>LinkedIn</li>
                    </ul>
                </div>
                <div className={styles.linksColumn}>
                    <h6 className={styles.columnHeader}>Projects</h6>
                    <ul className={styles.linksList}>
                        <li className={styles.linksListItem}>Anonchat</li>
                        <li className={styles.linksListItem}>Bridgify</li>
                        <li className={styles.linksListItem}>Website</li>
                    </ul>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div className={classNames("container", styles.footerContent)}>
                    <div className={styles.copyright}>© 2023 PapaIO</div>
                    <div className={styles.linksListContainer}>
                        <ul className={styles.linksList}>
                            <li className={styles.linksListItem}><Link to={"#"}><img src={githubButton}/></Link></li>
                            <li className={styles.linksListItem}><Link to={"#"}><img src={telegramButton}/></Link></li>
                            <li className={styles.linksListItem}><Link to={"#"}><img src={linkedinButton}/></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent
