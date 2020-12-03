import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { fetchData } from '../../lib/fetchData'

export default function FirstPost({ posts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>First Pos</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>

        <ul className={'list-disc mt-2'}>
          {' '}
          {posts.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const posts = await fetchData(
    'https://jsonplaceholder.typicode.com/todos?_limit=15'
  )
  console.log(posts)
  return {
    props: {
      posts,
    },
  }
}
