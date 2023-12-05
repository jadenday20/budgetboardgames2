import Link from 'next/link'
import Layout from '../components/layout'

export default function Home() {
    return (
        <>
            <Layout>
                <Link href="/shop/" className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-500 duration-500">Browse Games</Link>
            </Layout>
        </>
    )
}
