import React from "react";
import SiteContainer from "../SiteContainer";
import Header from "../Header";
import Container from "../Container";
// eslint-disable-next-line
import _ from "../../styles/index.css";

export default ({ children }) => (
  <SiteContainer>
    <Header />
    <Container> {children}</Container>
  </SiteContainer>
);
