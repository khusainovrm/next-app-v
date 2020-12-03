import { fetchData } from './fetchData'

export async function getPostById(id) {
  return await fetchData(`${process.env.JP_URL}posts/${id}`)
}
