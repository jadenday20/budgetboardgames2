import Layout from '@/components/Layout'
import Link from 'next/link'
import ContactLink from '@/components/ContactLink'
import Button from '@/components/Button'

export default function Contact() {
    return (
        <>
            <Layout headingTitle='Contact'>

                <div className='flex flex-col'>
                    <Button href={'tel:385-202-8190'} linkTitle={'Phone: (385) 202-8190'}></Button>
                    <Button href={'mailto:support@budgetboardgames.com'} linkTitle={'Email: support@budgetboardgames.com'}></Button>
                </div>
            </Layout>
        </>
    )
}
