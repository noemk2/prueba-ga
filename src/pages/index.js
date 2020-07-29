import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Noe" />
    <h1>Hi my name is Noe</h1>
    <p>Iam from developer</p>
    <p>Now go build something great.</p>
    <a to="https://bit.ly/noemk2">Go to my github</a> <br />
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
