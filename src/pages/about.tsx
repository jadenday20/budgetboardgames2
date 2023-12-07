import Layout from '@/components/Layout'
import Image from 'next/image'
import FlexLayout from '@/components/Flex'

export default function About() {
    return (
        <>
            <Layout headingTitle='About'>
                <FlexLayout>
                    <div className='max-w-xl'>
                        <h3> Meet the Founder: Jaden Day</h3>
                        <p>Budget Board Games was founded in October of 2023 by Jaden Day. Jaden is a young college student and aspiring web developer. Jaden and his wife, Elisha are both proud gamers and owners of 33+ board games. Jaden is also an avid Magic: the Gathering player with over 15 years of Magic experience under his belt.</p>

                        <h3>Our Vision</h3>
                        <p>Budget Board Games was created with one idea in mind: Board games are the best! With that in mind, our vision is to make board games more accessible and affordable for everyone.</p>

                    </div>
                    <Image
                        className='w-96'
                        src={'/profile.jpg'}
                        alt='Jaden Day Profile Picture'
                        height={400}
                        width={320}>
                    </Image>
                </FlexLayout>
            </Layout>
        </>
    )
}
