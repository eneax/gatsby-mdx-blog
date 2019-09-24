import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './postCard.module.css'


const PostCard = ({ post }) => {
  const { title, date, author, slug } = post.frontmatter
  const img = post.frontmatter.image.childImageSharp.fluid

  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <Img fluid={img} />
      </div>
      <div className={styles.info}>
        <div>
          <h2>{title}</h2>
          <h6>
            <span>by {author}</span> / <span>{date}</span>
          </h6>
          <p>{post.excerpt}</p>
          <Link 
            to={slug}
            className={styles.link}
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  )
}

export default PostCard
