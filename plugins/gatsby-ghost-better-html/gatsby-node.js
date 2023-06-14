const {optimizeImage} = require(`./optimizeImage.js`)

exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type === "GhostPost" && node.html) {
    optimizeImage({node, actions})
  }
}