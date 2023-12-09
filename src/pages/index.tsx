import Link from 'next/link'
import Layout from '../components/Layout'
import Button from '@/components/Button'
import Image from 'next/image'
import FlexLayout from '@/components/Flex'

export default function Home() {
    return (
        <>
            <Layout headingTitle='Home'>
                <FlexLayout>
                    <div className='flex flex-col max-w-xl'>
                        <h3>Great Board Games at a Great Price</h3>
                        <p>Your favorite board games shouldn't cost an arm and a leg. Shop with us to get great games at the right price.</p>
                        <Button linkTitle="Browse Games" href='/shop/' />
                    </div>
                    <div>
                        <Image src={'/bbg-logo.jpeg'} alt='Budget Board Games Logo' width={500} height={500}></Image>
                    </div>
                </FlexLayout>
            </Layout>
        </>
    )
}
