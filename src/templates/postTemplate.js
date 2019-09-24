import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import styles from './postTemplate.module.css'
import Layout from '../components/layout'


const PostTemplate = ({ data }) => {
  const { title, date, author, image } = data.mdx.frontmatter
  const { body } = data.mdx
  const img = image.childImageSharp.fluid

  return (
    <Layout>
      <section className={styles.template}>
        <Link
          to='/'
          className={styles.link}
        >
          Back to all posts
        </Link>

        <div className={styles.info}>
          <h1>{title}</h1>
          <h4>
            <span>by {author}</span> / <span>{date}</span>
          </h4>
        </div>

        <Img fluid={img} />

        <div className={styles.content}>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </section>
    </Layout>
  )
}

export default PostTemplate


// query
export const getPostQuery = graphql`
  # $slug --> comes from the gatsby-node file (context)
  query getPost($slug: String!) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
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
      body
    }
  }
`
