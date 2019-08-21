import React from "react";
import { Layout } from "../components";
import { graphql } from "gatsby";
import styles from "../styles/shopPage.module.css";
import { Link } from "gatsby";
import { FaStar, FaCartPlus, FaSearch } from "react-icons/fa";

export default ({ data }) => {
  return (
    <Layout>
      <div className={styles.Container}>
        <div className={styles.RightContainer}>
          <h3 className={styles.CartContainerTitle}>Cart:</h3>
          <div className={styles.CartContainer}>
            <div className={styles.CartContainerContent}>
              {data.allMarkdownRemark.edges.map(function(article) {
                return (
                  <div className={styles.smallCartContainer}>
                    <Link to={"articles/" + article.node.frontmatter.slug}>
                      <div className={styles.articleTitleParent}>
                        <div className={styles.articleTitle1}>
                          {"    " + article.node.frontmatter.book}
                        </div>
                        <div className={styles.buttonXContainer}>
                          <button className={styles.buttonX}>X</button>
                        </div>
                      </div>
                      <div className={styles.articleTextAndImageContainer}>
                        <img
                          className={styles.cartImage}
                          src={
                            article.node.frontmatter.image.childImageSharp
                              .original.src
                          }
                          alt="picture"
                        />
                      </div>
                      <div className={styles.itemRatingPriceAndCartContainer}>
                        <div className={styles.itemPriceAndCartContainer}>
                          <div className={styles.itemPrice}>Price: 99.99$ </div>
                          {"  "}
                        </div>{" "}
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className={styles.CartContainerFooter}>
              <p className={styles.TotalPrice}>Total items: 7</p>

              <p className={styles.TotalPrice}>Total price: 699.93$</p>
              <button className={styles.BuyButton}>
                <h3>BUY</h3>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.LeftContainer}>
          <div className={styles.SearchContainer}>
            <input type="text" placeholder="Search for keyword.." />
            <FaSearch />
          </div>
          <div className={styles.ArticlesContainer}>
            {data.allMarkdownRemark.edges.map(function(article) {
              return (
                <div className={styles.articleContainer}>
                  <Link to={"articles/" + article.node.frontmatter.slug}>
                    <div className={styles.articleTitle}>
                      {"    " + article.node.frontmatter.book}
                    </div>
                    <div className={styles.articleTextAndImageContainer}>
                      <img
                        className={styles.articleImage}
                        src={
                          article.node.frontmatter.image.childImageSharp
                            .original.src
                        }
                        alt="picture"
                      />

                      <div className={styles.articleText}>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout...
                        </p>
                      </div>
                    </div>
                    <div className={styles.itemRatingPriceAndCartContainer}>
                      <div className={styles.Rated}>
                        <div className={styles.itemRated}>
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                        <div className={styles.itemRating}>
                          <FaStar />
                        </div>
                        <div className={styles.votes}>(11 votes)</div>
                      </div>
                      <div className={styles.itemPriceAndCartContainer}>
                        <div className={styles.itemPrice}>Price: 99.99$ </div>
                        {"  "}
                        <div className={styles.itemCart}>
                          Add to cart <FaCartPlus />
                        </div>
                      </div>{" "}
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
  query BlogPostByImageTitleAndDate1 {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            slug
            category
            book
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
