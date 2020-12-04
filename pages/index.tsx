import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { fetchData } from '../lib/fetchData'
import { GetServerSideProps } from 'next'
import { MyPost } from '../interfaces/post'

interface MyPostsProps {
  posts: MyPost[]
}

export default function Home({ posts }: MyPostsProps) {
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
        <Link href={'/about'}>
          <a className={'ml-2 text-xs hover:text-green-500'}>
            Go to about page
          </a>
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

export const getServerSideProps: GetServerSideProps = async () => {
  const posts: MyPost[] = await fetchData(
    `${process.env.JP_URL}todos?_limit=15`
  )
  return {
    props: {
      posts,
    },
  }
}
