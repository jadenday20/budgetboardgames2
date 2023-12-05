import Layout from '@/components/layout'
import ProductList from '@/components/ProductList'
import ProductCategories from '@/components/ProductCategories'

export default function Shop() {
    return (
        <>
            <Layout>
                <div className="flex flex-col md:flex-row gap-10">
                    <ProductCategories />
                    <div className="flex flex-col items-center justify-between flex-1">
                        <h2>Shop</h2>
                        <ProductList />
                    </div>
                </div>
            </Layout>
        </>
    )
}
