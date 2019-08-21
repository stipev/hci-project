import React from "react";
import SideBar from "./SideBar";
import SideBarLink from "./SideBarLink";
import { StaticQuery, graphql } from "gatsby";

export default () => (
  <StaticQuery
    query={graphql`
      query BlogPostByCategoryAAA {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                category
                title
                slug
              }
            }
          }
        }
      }
    `}
    render={data => {
      console.log(data);
      const allArticleCategories = data.allMarkdownRemark.edges.map(function(
        Category
      ) {
        return Category.node.frontmatter.category;
      });
      console.log(allArticleCategories);
      allArticleCategories.sort();

      const Categories = Array.from(new Set(allArticleCategories));

      console.log(Categories);

      return (
        <>
          <SideBar>
            {Categories.map(category => (
              <SideBarLink>{category}</SideBarLink>
            ))}
          </SideBar>
        </>
      );
    }}
  />
);
