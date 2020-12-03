import { fetchData } from './fetchData'

export async function getAllPostIds() {
  const ids = await fetchData(process.env.JP_URL + 'posts?_limit=15')
  const finalIds = ids.map((post) => ({ params: { id: post.id.toString() } }))
  return finalIds
}
