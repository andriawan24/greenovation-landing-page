import SEO from "@/src/common/seo"
import About from "@/src/components/about"
import Wrapper from "@/src/layout/wrapper"

const index = () => {
  return (
    <>
      <Wrapper>
        <SEO pageTitle={"About Us"} />
        <About />
      </Wrapper>
    </>
  )
}

export default index