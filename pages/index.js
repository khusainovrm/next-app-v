import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { fetchData } from '../lib/fetchData'

export default function Home({ posts }) {
  console.log(process.env.CORE_URL)
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My next app first application</p>
        <p>This is a sample website</p>
        <Link href={'/posts/first-post'}>
          <a className={'text-xs hover:text-green-500'}>Go to first post</a>
        </Link>
      </section>
      <ul className={'list-disc mt-2'}>
        {' '}
        {posts.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getServerSideProps(context) {
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
