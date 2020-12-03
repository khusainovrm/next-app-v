import { getAllPostIds } from '../../lib/getAllPostIds'
import { getPostById } from '../../lib/getPostById'
import Layout from '../../components/layout'
import Head from 'next/head'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div>title: {postData.title}</div>
      <div>ID: {postData.id}</div>
    </Layout>
  )
}
export async function getStaticPaths() {
  const paths = await getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostById(params.id)
  return {
    props: {
      postData,
    },
  }
}
