import Head from 'next/head'
import Layout from '../components/shared_layout/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Space Tourism Website</title>
        <meta name="description" content="Multi-page space tourism website" />
      </Head>
      <div className='bg-bg-home-mobile h-full min-h-screen bg-cover '>
        <Layout>
          <div className="px-[1.5rem] text-center pb-[3rem]">
            <div className='intro-sub-heading'>
              <p>So you want to travel to space</p>
            </div>
            <div className="intro-heading text-[80px] my-[16px]">
              <h1 className='leading-[100px]'>space</h1>
              <p className='mb-[81px]'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className='w-[150px] h-[150px] rounded-full bg-white flex justify-center items-center mx-auto'>
              <button className='text-[20px] text-[#0B0D17] uppercase'>Explore</button>
            </div>
          </div>
        </Layout>
      </div>
    </>
  )
}
