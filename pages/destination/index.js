import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/shared_layout/Layout';

const Index = ({ dataResult }) => {
  const [destinations, setDestinations] = useState(dataResult.destinations);
  const [value, setValue] = useState(0);
  const { description, distance, images, name, travel } = destinations[value];

  return (
    <>
      <Head>
        <title>Space Tourism Website - Destination</title>
        <meta
          name='description'
          content='space tourism website destination page'
        />
      </Head>
      <main className='h-full min-h-screen bg-bg-destination-mobile bg-cover lg:bg-bg-destination-desktop'>
        <Layout>
          <div className='viewportHeight px-[1.5rem] pb-[3rem] xl:w-[80%] xl:mx-auto xl:flex items-center justify-between'>
            <div className='text-center'>
              <div className='intro-sub-heading xl:mb-[4rem]'>
                <p className='xl:text-[1.2rem] xl:text-left'>
                  <span>01</span> &nbsp; &nbsp; pick your destination
                </p>
              </div>
              <div className='mt-[2rem] mb-[1.6rem]'>
                <img
                  className='max-w-full w-[170px] h-[170px] mx-auto xl:w-[380px] xl:h-[380px]'
                  src={images.webp}
                  alt={name}
                />
              </div>
            </div>
            <div>
              <div className='text-center mb-[20px] xl:text-left'>
                {destinations.map((destination, index) => {
                  return (
                    <button
                      onClick={() => setValue(index)}
                      key={destination.name}
                      className={`tab-btn text-white text-[1rem] uppercase mx-[15px] py-[5px] text-[#D0D6F9] ${
                        value === index && 'active-tab-btn'
                      }`}
                    >
                      {destination.name}
                    </button>
                  );
                })}
              </div>
              <div className='text-center pb-[2rem] mb-[2rem] border-b-2 border-[#383B4B] xl:text-left'>
                <h2 className='text-[3.5rem]'>{name}</h2>
                <p className='max-w-[450px] mx-auto'>{description}</p>
              </div>
              <div className=' md:flex items-start justify-center xl:justify-start'>
                <div className='text-center mb-[2rem] md:mb-0 md:mr-[6rem]'>
                  <p className='text-[.85rem] mb-[0.75rem]'>AVG. DISTANCE</p>
                  <p className='text-[1.65rem] text-white'>{distance}</p>
                </div>
                <div className='text-center'>
                  <p className='text-[.85rem] mb-[0.75rem] uppercase'>
                    Est. travel time
                  </p>
                  <p className='text-[1.65rem] text-white'>{travel}</p>
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
