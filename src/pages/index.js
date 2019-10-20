import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import PostList from '../components/postList/postList'

const IndexPage = () => {
  const response = useStaticQuery(getPosts)
  const posts = response.allMdx.edges

  return (
    <Layout>
      <SEO title='Home' />
      
      <PostList posts={posts} />
    </Layout>
  )
}

export default IndexPage


// query
const getPosts = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            date
            author
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
