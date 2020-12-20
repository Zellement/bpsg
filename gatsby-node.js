const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = async function({ actions, graphql }) {
    const { data } = await graphql(`
    query {
      standardPages: allMarkdownRemark(filter: {frontmatter: {templateKey: {ne: "stories"}}}) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
      singleStoryPages: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "stories"}}}) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    } 
  `)

    data.standardPages.edges.forEach(edge => {
      const id = edge.node.id
      actions.createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        context: {
          id,
        },
      })
    })

    data.singleStoryPages.edges.forEach(edge => {
      const id = edge.node.id
      actions.createPage({
        path: "stories" + edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        context: {
          id,
        },
      })
    })
    // data.allDatoCmsPage.edges.forEach(edge => {
    //   actions.createPage({
    //     path: edge.node.slug + '/',
    //     component: require.resolve(`./src/templates/page.js`),
    //     context: { slug: edge.node.slug },
    //   })
    // })
    // data.allDatoCmsRecentProject.edges.forEach(edge => {
    //   actions.createPage({
    //     path: '/recent-projects/' + edge.node.slug + '/',
    //     component: require.resolve(`./src/templates/project.js`),
    //     context: { slug: edge.node.slug },
    //   })
    // })
  }
  

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions

//   return graphql(`
//     {
//       allMarkdownRemark{
//         edges {
//           node {
//             id
//             fields {
//               slug
//             }
//             frontmatter {
//               templateKey
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       result.errors.forEach(e => console.error(e.toString()))
//       return Promise.reject(result.errors)
//     }

//     const posts = result.data.allMarkdownRemark.edges

//     posts.forEach(edge => {
//       const id = edge.node.id
//       createPage({
//         path: edge.node.fields.slug,
//         component: path.resolve(
//           `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
//         ),
//         context: {
//           id,
//         },
//       })
//     })
//   })
// }

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
