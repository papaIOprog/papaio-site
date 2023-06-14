import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"
import {globalHistory} from "@reach/router";

import "../../styles/app.scss"

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const DefaultLayout = ({ data, children, bodyClass, isHome, isVisible }) => {
    const site = data.allGhostSettings.edges[0].node
    const twitterUrl = site.twitter
        ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}`
        : null
    const facebookUrl = site.facebook
        ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}`
        : null

    return <>
        <Helmet>
            <html lang={site.lang}/>
            <style type="text/css">{`${site.codeinjection_styles}`}</style>
            <body className={bodyClass}/>
        </Helmet>
        <motion.div key={globalHistory.location.href}
                    style={{
                        overflowY: "hidden",
                        background: "white"
                    }}
                    initial={{
                        opacity: 0,
                        x: -200
                    }}
                    animate={{
                        opacity: 1,
                        x: 0
                    }}
                    exit={{
                        opacity: 0,
                        x: -100
                    }}
                    transition={{
                        type: "spring",
                        mass: 0.25,
                        stiffness: 200,
                        duration: 0.3
                    }}

        >
            {children}
        </motion.div>
    </>
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}

const DefaultLayoutSettingsQuery = (props) => (
    <StaticQuery
        query={graphql`query GhostSettings {
  allGhostSettings {
    edges {
      node {
        ...GhostSettingsFields
      }
    }
  }
  file(relativePath: {eq: "ghost-icon.png"}) {
    childImageSharp {
      gatsbyImageData(width: 30, height: 30, layout: FIXED)
    }
  }
}
`}
        render={(data) => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery
