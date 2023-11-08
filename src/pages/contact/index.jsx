import SEO from "@/src/common/seo"
import Contact from "@/src/components/contact"
import Wrapper from "@/src/layout/wrapper"

const index = () => {
  return (
    <>
      <Wrapper>
        <SEO pageTitle={'Contact Us'} />
        <Contact />
      </Wrapper>
    </>
  )
}

export default index