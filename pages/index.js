import Head from 'next/head';
import Layout from '../components/shared_layout/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Space Tourism Website</title>
        <meta name='description' content='Multi-page space tourism website' />
      </Head>
      <main className='home-bg h-full min-h-screen bg-bg-home-mobile bg-no-repeat bg-cover lg:bg-bg-home-desktop  '>
        <Layout>
          <div
            className={
              'viewportHeight text-center pb-[2rem] xl:flex items-center justify-between w-[80%] mx-auto xl:pb-0 '
            }
          >
            <div>
              <div className='intro-sub-heading md:mb-[24px] xl:text-left mb-0 '>
                <p className='text xl:text-[1.2rem]'>
                  So you want to travel to space
                </p>
              </div>
              <div className='intro-heading text-[80px] my-[16px] xl:text-left'>
                <h1 className='text-[4.5rem] leading-[100px] mb-4 md:text-[8.4rem] md:mb-[24px] md:leading-[150px]'>
                  space
                </h1>
                <p className='mb-[81px]  max-w-[450px] mx-auto xl:mb-0'>
                  Let’s face it; if you want to go to space, you might as well
                  genuinely go to outer space and not hover kind of on the edge
                  of it. Well sit back, and relax because we’ll give you a truly
                  out of this world experience!
                </p>
              </div>
            </div>
            <div className='w-[150px] h-[150px] rounded-full bg-white flex justify-center items-center mx-auto xl:mx-0 xl:w-[200px] xl:h-[200px] self-center '>
              <button className='text-[20px] text-[#0B0D17] uppercase xl:text-[2rem]'>
                Explore
              </button>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
