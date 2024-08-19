import getBanner from "@/actions/get-banner"
import getProducts from "@/actions/get-products"
import Banner from "@/components/banner"
import Container from "@/components/UI/container"

export const revalidate = 0

const HomePage = async () => {
  const products = await getProducts({  isFeatured: true })
  const banner = await getBanner("9bd6a3cd-439f-4962-b6db-108e4d211644")

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Banner data={banner}/>
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">

      </div>
    </Container>
  )
}

export default HomePage
