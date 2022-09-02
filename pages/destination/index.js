import Head from 'next/head'
import React from 'react'
import Layout from '../../components/shared_layout/Layout'

const index = () => {
    return (
        <div>
            <Head>
                <title>Space Tourism Website - Destination</title>
                <meta name="description" content="space tourism website destination page" />
                <link rel="icon" href="/assets/favicon.png" />
            </Head>
            <div className='h-screen bg-bg-destination-mobile'>
                <Layout>
                    <div className='text-center'>
                        <div className='intro-sub-heading'>
                            <p><span>01</span> &nbsp; &nbsp; pick your destination</p>
                        </div>
                    </div>

                </Layout>
            </div>
        </div>
    )
}
export default index


export const getStaticProps = async () => {
    // const getDestinations = await fetch('/data.json')
    // console.log(getDestinations);
    return {
        props: {
            // 
        }
    }
}