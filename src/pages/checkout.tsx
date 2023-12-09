import Layout from '@/components/Layout'
import Button from '@/components/Button'

export default function Checkout() {
    return (
        <>
            <Layout headingTitle='Checkout'>
                <Button linkTitle="Order" href='/checkout' />
                <Button linkTitle="Shop for More" href='/shop' />
            </Layout>
        </>
    )
}
