import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Testimonials from "../components/Testimonials"
import Ywitter from "../components/Ywitter"

const IndexPage = () => (
  //
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Trips heading="목적지는 많습니다, 골라보세요!" />
    <Testimonials />
    <Ywitter />
  </Layout>
)

export default IndexPage
