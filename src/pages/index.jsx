import SEO from "../common/seo"
import Home from "../components/home"
import Wrapper from "../layout/wrapper"

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home'} />
      <Home />
    </Wrapper>
  )
}

export default index