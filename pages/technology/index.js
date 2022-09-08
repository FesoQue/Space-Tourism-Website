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
        <title>Space Tourism Website - Crew</title>
        <meta name='description' content='space tourism website crew page' />
      </Head>
      <main className='h-full min-h-screen bg-bg-technology-mobile bg-cover'>
        <Layout>
          <div className='container mx-auto px-[1.5rem] pb-[1rem]'>
            <div className='text-center'>
              <div className='intro-sub-heading'>
                <p>
                  <span>03</span> &nbsp; &nbsp; space launch 101
                </p>
              </div>
            </div>
          </div>
          <div className='w-full h-[180px] mb-[2rem] image-wrapper'>
            <img
              className='w-full h-full object-cover'
              src={images.portrait}
              alt={name}
            />
          </div>
          <div className='container mx-auto px-[1.5rem] pb-[3rem]'>
            <div className='text-center  mb-[1.6rem]'>
              {technology.map((tech, index) => {
                return (
                  <button
                    onClick={() => setValue(index)}
                    key={tech.name}
                    className={`w-[40px] h-[40px] text-white font-bellefair text-[1rem] rounded-full border-2 border-[#555] mx-[.5rem] ${
                      value === index && 'active-num-tab'
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
            <div className='text-center'>
              <p className='uppercase text-white text-[1rem] opacity-[.5] mix-blend-normal font-bellefair mb-[8px]'>
                the terminology
              </p>
              <h2 className='text-[1.5rem] mb-[1rem]'>{name}</h2>
              <p>{description}</p>
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
