import { getPosts } from '../utils/mdx-utils';

import FBChat from '../components/FacebooChat';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
    
  return (
    <>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <FBChat/>
      
      <main className="w-full pt-20 pb-12">
        
        tournament
        
      </main>
      
    </>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
