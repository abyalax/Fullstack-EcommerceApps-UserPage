import getBanner from "@/actions/get-banner"
import getProducts from "@/actions/get-products"
import Banner from "@/components/banner"
import ProductList from "@/components/product-list"
import Container from "@/components/UI/container"

export const revalidate = 0

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true })
  const banner = await getBanner("252c2c30-45ca-400d-a287-cc87909c9e26")

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Banner data={banner} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 gap-4">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage
