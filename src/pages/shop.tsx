import Layout from '@/components/Layout'
import ProductList from '@/components/ProductList'
import ProductCategories from '@/components/ProductCategories'
import FlexLayout from '@/components/Flex'

export default function Shop() {
    return (
        <>
            <Layout headingTitle='Shop'>
                <FlexLayout>
                    {/* <ProductCategories /> */}
                    <div className="flex flex-col items-center justify-between flex-1">
                        <ProductList />
                    </div>
                </FlexLayout>
            </Layout>
        </>
    )
}
