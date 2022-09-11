import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../../components/shared_layout/Layout';
import Image from 'next/image';

const Index = ({ dataResult }) => {
  const [technology, setTechnology] = useState(dataResult.technology);
  const [value, setValue] = useState(0);

  const { name, images, description } = technology[value];

  return (
    <>
      <Head>
        <title>Space Tourism Website - Technology</title>
        <meta name='description' content='space tourism website crew page' />
      </Head>
      <main className='h-full min-h-screen bg-bg-technology-mobile bg-cover'>
        <Layout>
          <div className='viewportHeight pb-[1rem] xl:pl-[10%]  xl:pr-0'>
            <div className='mb-[2rem] text-center xl:text-left'>
              <div className='intro-sub-heading'>
                <p className=' xl:text-[1.2rem] '>
                  <span>03</span> &nbsp; &nbsp; space launch 101
                </p>
              </div>
            </div>

            <div className='xl:h-[70vh] xl:flex xl:justify-between xl:items-center'>
              <div className='w-full h-[200px] mb-[2rem] image-wrapper xl:order-1 xl:w-[60%] xl:h-[500px] xl:overflow-hidden '>
                <div className='w-full h-full xl:translate-x-[8rem]'>
                  <img
                    className='w-full h-full xl:w-[85%]'
                    src={images.portrait}
                    alt={name}
                  />
                </div>
              </div>
              <div className=' px-[1.5rem] pb-[3rem] xl:flex xl:justify-start xl:w-[50%] xl:px-0'>
                <div className='text-center  mb-[1.6rem] xl:flex xl:flex-col xl:justify-between xl:mr-[2rem] '>
                  {technology.map((tech, index) => {
                    return (
                      <button
                        onClick={() => setValue(index)}
                        key={tech.name}
                        className={`w-[40px] h-[40px] inline-block text-white font-bellefair text-[1rem] rounded-full border-2 border-[#555] mx-[.5rem] ${
                          value === index && 'active-num-tab'
                        } xl:w-[65px] xl:h-[65px] xl:mb-[1.2rem]`}
                      >
                        {index + 1}
                      </button>
                    );
                  })}
                </div>
                <div className='text-center xl:text-left'>
                  <p className='uppercase text-white text-[1rem] opacity-[.5] mix-blend-normal font-bellefair mb-[8px]xl:text-[1.2rem]'>
                    the terminology
                  </p>
                  <h2 className='text-[1.5rem] mb-[1rem] xl:text-[2.5rem]'>
                    {name}
                  </h2>
                  <p className='max-w-[450px] mx-auto'>{description}</p>
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
