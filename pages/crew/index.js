import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../../components/shared_layout/Layout';
import Image from 'next/image';

const Index = ({ dataResult }) => {
  const [crew, setCrew] = useState(dataResult.crew);
  const [value, setValue] = useState(0);

  const { bio, images, name, role } = crew[value];
  const replacedName = name.split(' ').join('-').toLowerCase();

  const API = 'https://raw.githubusercontent.com/FesoQue/Space-Tourism-Website';

  // loader function for next Image
  // const myLoader = ({ src }) => {
  //     return `${API}/main/public/assets/crew/image-${replacedName}.webp`;
  // }

  return (
    <>
      <Head>
        <title>Space Tourism Website - Crew</title>
        <meta name='description' content='space tourism website crew page' />
      </Head>
      <main className='h-full min-h-screen bg-bg-crew-mobile bg-cover lg:bg-bg-crew-desktop'>
        <Layout>
          <div className='xl:w-[80%] xl:mx-auto'>
            <div className='px-[1.5rem] pb-[1rem]'>
              <div className='text-center'>
                <div className='intro-sub-heading'>
                  <p className='xl:text-left xl:text-[1.2rem]'>
                    <span>02</span> &nbsp; &nbsp; meet your crew
                  </p>
                </div>
              </div>
            </div>
            <div className='px-[1.5rem] pb-[3rem] md:flex flex-col md:pb-0 xl:flex xl:flex-row xl:justify-between xl:items-end xl:h-[71vh]'>
              <div className='flex justify-center mb-[1.5rem] border-b-2 border-[#383B4B] md:order-1 md:mb-0 md:border-0 '>
                <img
                  src={images.webp}
                  alt={name}
                  className='w-[200px] h-[245px] xl:w-[400px] xl:h-[500px]'
                />
                {/* <Image loader={myLoader} src={`${API}/main/public/assets/crew/image-${replacedName}.webp`} alt={name} width={197} height={242} className='mx-auto' /> */}
              </div>
              <div className='text-center md:flex flex-col xl:self-center xl:text-left'>
                <div className='mb-[1.5rem] order-1 md:mb-[2.8rem]'>
                  {crew.map((member, index) => {
                    return (
                      <button
                        onClick={() => setValue(index)}
                        key={member.name}
                        className={`w-[10px] h-[10px] bg-white opacity-[.17] mix-blend-normal rounded-full mx-[1rem] ${
                          value === index && 'active-tab-btn-dot'
                        }`}
                      ></button>
                    );
                  })}
                </div>
                <div className='md:pb-[1.8rem]'>
                  <p className='uppercase text-white text-[1rem] opacity-[.5] mix-blend-normal font-bellefair mb-[8px]xl:text-[1.2rem]'>
                    Commander
                  </p>
                  <h2 className='text-[1.5rem] mb-[1rem] xl:text-[2.5rem]'>
                    {name}
                  </h2>
                  <p className='max-w-[450px] mx-auto xl:mb-[4.5rem]'>{bio}</p>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};
export default Index;

export const getStaticProps = async () => {
  const getData = await fetch(
    'https://raw.githubusercontent.com/FesoQue/Space-Tourism-Website/main/public/data.json'
  );
  const dataResult = await getData.json();
  return {
    props: {
      dataResult,
    },
  };
};
