import Head from 'next/head'
import {ReactQueryCacheProvider, QueryCache, useQuery} from 'react-query'

import { ArticleCollection } from '../components/ArticleCollection'

export default function Home() {
  return (
    <ReactQueryCacheProvider>
      <div className='max-w-md mx-auto mt-4'>
        <ArticleCollection/>
      </div>
    </ReactQueryCacheProvider>
  )
}
