import { fetchData } from './fetchData'

export async function getPostById(id: string) {
  return await fetchData(`${process.env.JP_URL}posts/${id}`)
}
