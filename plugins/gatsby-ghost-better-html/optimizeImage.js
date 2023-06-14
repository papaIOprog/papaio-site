const { parse } = require(`node-html-parser`)

exports.optimizeImage = ({ node, actions }) => {
    const { createNode, createNodeField } = actions
    const root = parse(node.html);
    const images = root.querySelectorAll('img');
    images.forEach(img => {
        img.setAttribute("a", "b")
        console.log(img)
    })

    createNodeField({
        node,
        name: 'moddedHtml',
        value: root.toString(),
    });
}