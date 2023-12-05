import Link from 'next/link'
import Layout from '../components/layout'
import Button from '@/components/Button'

export default function Home() {
    return (
        <>
            <Layout>
                <div className='flex flex-col'>
                    <h2>Great Board Games at a Great Price</h2>
                    <p>Your favorite board games shouldn't cost an arm and a leg. Shop with us to get great games at the right price.</p>
                    <Button LinkTitle="Browse Games" href='/shop/' />
                </div>
            </Layout>
        </>
    )
}
