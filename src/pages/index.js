import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({data}) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout>
            <SEO title={frontmatter.title} />
            <h1>{frontmatter.title}</h1>
            <div
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </Layout>
    )
}

export const pageQuery = graphql`
    query {
        markdownRemark(fileAbsolutePath: { regex: "/home.md/" }) {
            html
            frontmatter {
                title
            }
        }
    }
`