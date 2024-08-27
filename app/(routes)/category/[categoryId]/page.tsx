import getCategory from "@/actions/get-category"
import getProducts from "@/actions/get-products"
import Banner from "@/components/banner"
import Container from "@/components/UI/container"
import NoResult from "@/components/UI/no-results"
import ProductCard from "@/components/UI/product-card"

interface CategoryPageProps {
    params: { categoryId: string }
}

const CategoryPage = async ({ params }: CategoryPageProps) => {

    const products = await getProducts({ categoryId: params.categoryId })

    const category = await getCategory(params.categoryId)
    console.log(category)

    return (
        <div className="bg-white">
            <Container>
                <Banner data={category.banner} />
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="mt-6 lg:col-span-4 lg:mt-0">
                        {products.length === 0 && <NoResult />}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {products.map((product) => (
                                <ProductCard key={product.id} data={product}/>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CategoryPage
