import * as React from "react"
import "@fontsource/roboto";
import '../app.css';
import Layout from "../components/layout";
import LeadMyDecision from '../components/LeadMyDecision/LeadMyDecision';

// styles
const pageStyles = {
  color: "#232129",
  fontSize: '55px',
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Lead My Decision">
      <LeadMyDecision />
    </Layout>
  )
}

export default IndexPage
