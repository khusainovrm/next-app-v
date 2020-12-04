import { getAllPostIds } from '../../lib/getAllPostIds'
import { getPostById } from '../../lib/getPostById'
import Layout from '../../components/layout'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths, NextPageContext } from 'next'
import { useRouter } from 'next/router'
import { MyPost } from '../../interfaces/post'

interface MyPostDataProps {
  postData: MyPost
}

export default function Post({ postData }: MyPostDataProps) {
  const router = useRouter()

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
  const postData: MyPost = await getPostById(params.id as string)
  return {
    props: {
      postData,
    },
  }
}
