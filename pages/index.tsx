import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { fetchData } from '../lib/fetchData'
import { GetServerSideProps } from 'next'

export default function Home({
  posts,
}: {
  posts: {
    id: string
    title: string
  }[]
}) {
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
          <Link href={`/posts/${id}`} key={id}>
            <a>
              <li>{title}</li>
            </a>
          </Link>
        ))}
      </ul>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = await fetchData(`${process.env.JP_URL}todos?_limit=15`)
  return {
    props: {
      posts,
    },
  }
}
