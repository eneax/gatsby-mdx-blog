exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  // query for posts
  const { data: { allMdx: { edges: posts } } } = await graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // create a page for each item in the array
  posts.forEach(({ node }) => {
    const { slug } = node.frontmatter 

    createPage({
      path: slug,
      component: require.resolve('./src/templates/postTemplate.js'),
      context: {
        slug: slug
      }
    })
  });
}
