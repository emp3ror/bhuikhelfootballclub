import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
    
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      
      
      <main className="w-full pt-20 pb-12">
        <h1 className="text-3xl lg:text-5xl text-center mb-12 sentence">
            Bhuikhel Football
            <div class="slidingVertical">
                <span>Club</span>
                <span>Academy</span>
            </div>
        </h1>
        
      </main>
      
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
