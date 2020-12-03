import { getAllPostIds } from '../../lib/getAllPostIds'
import { getPostById } from '../../lib/getPostById'
import Layout from '../../components/layout'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

export default function Post({
  postData,
}: {
  postData: {
    title: string
    id: string
  }
}) {
  const router = useRouter()
  console.log(router)
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div>title: {postData.title}</div>
      <div>ID: {postData.id}</div>
      <div>Router query id: {router.query.id}</div>
    </Layout>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostById(params.id as string)
  return {
    props: {
      postData,
    },
  }
}
