import React from "react";
import { Layout } from "../components";
import { graphql } from "gatsby";
import styles from "../styles/indexPages.module.css";
import { Link } from "gatsby";
import SideBar from "../components/ArticleSideBar/SideBar";
//import { Container } from "../components";
import { ArticleSideBar } from "../components";
import { FaSearch } from "react-icons/fa";

export default ({ data }) => {
  return (
    <Layout>
      <div className={styles.Container}>
        <div className={styles.CategoriesAndTitleContainer}>
          <h3
            style={{
              color: "#c74242",
              marginLeft: "5rem",
              marginBottom: "2.25rem"
            }}
          >
            Categories:
          </h3>

          <ArticleSideBar />
        </div>
        <div className={styles.ArticlesAndTitlesContainer}>
          <div className={styles.SearchContainer}>
            <input type="text" placeholder="Search for keyword.." />
            <FaSearch />
          </div>
          <div className={styles.ArticlesContainer}>
            {data.allMarkdownRemark.edges.map(function(article) {
              return (
                <div className={styles.articleContainer}>
                  <Link to={"articles/" + article.node.frontmatter.slug}>
                    <img
                      className={styles.articleImage}
                      src={
                        article.node.frontmatter.image.childImageSharp.original
                          .src
                      }
                      alt="picture"
                    />
                    <div className={styles.articleTitle}>
                      {article.node.frontmatter.title}
                    </div>
                    <div className={styles.articleText}>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout...
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getPostByImageQuerry = graphql`
  query BlogPostByImageTitleAndDate {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            slug
            category
            image {
              childImageSharp {
                original {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
