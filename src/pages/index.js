import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostList from '../components/postList'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    
    <PostList />
  </Layout>
)

export default IndexPage
