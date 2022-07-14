import Head from 'next/head'
import {ReactQueryCacheProvider, QueryCache, useQuery} from 'react-query'
import {ReactQueryDevtools} from 'react-query-devtools'

import { ArticleCollection } from '../components/ArticleCollection'

const queryCache = new QueryCache()
const toJSON = (_: Response) => _.json()
const fetcher = () => fetch('https://jsonplaceholder.typicode.com/posts').then(toJSON)

export default function Home() {

  const { data: articles, isLoading, error } = useQuery('articles', fetcher);

  if (isLoading) return 'Loading...'
  if (error) return error.message;
  
  return (
    <>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <div className="max-w-md mx-auto mt-4">
          <ArticleCollection collection={articles} />
        </div>
      </ReactQueryCacheProvider>
      <ReactQueryDevtools />
    </>
  );
}
