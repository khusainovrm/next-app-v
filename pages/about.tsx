import style from '../components/about.module.scss'
import Layout from '../components/layout'
import { useRouter } from 'next/router'

export default function About() {
  const router = useRouter()
  const clickHandler = () => router.push('/')
  return (
    <>
      <Layout>
        <button
          onClick={clickHandler}
          className={`${style.button} text-xs py-2`}
        >
          Go Home
        </button>
      </Layout>
    </>
  )
}
