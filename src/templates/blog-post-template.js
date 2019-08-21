import React from "react";
import { graphql } from "gatsby";
import {Layout} from "../components";

export default function Template({data}) {
const {markdownRemark: post} = data;
// drugciji zapis ista stvar --> const post = data.markdownRemark;
return (
    <Layout>
        <h1>{post.frontmatter.title}</h1>
         <div dangerouslySetInnerHTML={{__html: post.html}} />
    </Layout>
);
}


export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        slug
        title
      }
    }
  }
`


