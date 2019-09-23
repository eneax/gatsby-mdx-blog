import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostList from '../components/postList'

const IndexPage = () => {
  const { posts } = useStaticQuery(getPosts)

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
    posts: allMdx(sort: {fields: frontmatter___date, order: DESC}) {
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
