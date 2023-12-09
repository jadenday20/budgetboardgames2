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
                        <p>Your favorite board games shouldn&apos;t cost an arm and a leg. Shop with us to get great games at the right price.</p>
                        <Button linkTitle="Browse Games" href='/shop/' className='popingButton m-1 hover:border-red-400 hover:border-2' />
                    </div>
                    <div>
                        <Image src={'/bbg-logo.jpeg'} alt='Budget Board Games Logo' width={300} height={300} className='rounded-ee-3xl rounded-ss-3xl'></Image>
                    </div>
                </FlexLayout>
            </Layout>
        </>
    )
}
