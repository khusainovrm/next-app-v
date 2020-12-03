import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My next app first application</p>
        <p>This is a sample website</p>
        <Link href={'/posts/first-post'}>
          <a>Go to first post</a>
        </Link>
      </section>
    </Layout>
  )
}
