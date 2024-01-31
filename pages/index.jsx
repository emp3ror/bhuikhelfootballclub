import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import FBChat from '../components/FacebooChat';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
// import Video from 'next-video';
// import videoLoop from '/assets/bg.mp4'; // use your video file name

export default function Index({ posts, globalData }) {
    
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <FBChat/>
      
      <main className="w-full pt-20 pb-12">
        <h1 className="text-3xl lg:text-5xl text-center mb-12 sentence text-white	">
            Bhuikhel Football
            <div class="slidingVertical">
                <span>Club</span>
                <span>Academy</span>
            </div>
        </h1>
        <video
        className='bg-video'
        src="/assets/bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      ></video>

        
      </main>
      
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
