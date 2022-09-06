import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '../../components/shared_layout/Layout'
import Image from 'next/image';

const Index = ({ dataResult }) => {
    const [crew, setCrew] = useState(dataResult.crew);
    const [value, setValue] = useState(0)

    const { bio, images, name, role } = crew[value]
    const replacedName = name.split(' ').join('-').toLowerCase()

    const API = 'https://raw.githubusercontent.com/FesoQue/Space-Tourism-Website'

    // loader function for next Image
    // const myLoader = ({ src }) => {
    //     return `${API}/main/public/assets/crew/image-${replacedName}.webp`;
    // }

    return (
        <main>
            <Head>
                <title>Space Tourism Website - Crew</title>
                <meta name="description" content="space tourism website crew page" />
            </Head>
            <div className='h-full min-h-screen bg-bg-crew-mobile bg-cover'>
                <Layout>
                    <div className='container mx-auto px-[1.5rem] pb-[1rem]'>
                        <div className='text-center'>
                            <div className='intro-sub-heading'>
                                <p><span>02</span> &nbsp; &nbsp; meet your crew</p>
                            </div>
                        </div>
                    </div>
                    <div className='container mx-auto px-[1.5rem] pb-[3rem]'>
                        <div className='flex justify-center mb-[1.5rem] border-b-2 border-[#383B4B] '>
                            <Image src={images.webp} alt={name} width={197} height={242} />
                            {/* <Image loader={myLoader} src={`${API}/main/public/assets/crew/image-${replacedName}.webp`} alt={name} width={197} height={242} className='mx-auto' /> */}
                        </div>
                        <div className='text-center'>
                            <div className='mb-[1.5rem]'>
                                {crew.map((member, index) => {
                                    return <button onClick={() => setValue(index)} key={member.name} className={`w-[10px] h-[10px] bg-white opacity-[.17] mix-blend-normal rounded-full mx-[1rem] ${value === index && 'active-tab-btn-dot'}`} ></button>
                                })}
                            </div>
                            <div>
                                <p className='uppercase text-white text-[1rem] opacity-[.5] mix-blend-normal font-bellefair mb-[8px]'>Commander</p>
                                <h2 className='text-[1.5rem] mb-[1rem]'>{name}</h2>
                                <p>{bio}</p>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
        </main>
    )
}
export default Index

export const getStaticProps = async () => {
    const getData = await fetch('https://raw.githubusercontent.com/FesoQue/Space-Tourism-Website/main/public/data.json')
    const dataResult = await getData.json()
    return {
        props: {
            dataResult
        }
    }
}