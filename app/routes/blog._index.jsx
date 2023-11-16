import { useLoaderData } from '@remix-run/react'
import { getPosts } from '~/models/posts.server'
import PostsList from '~/components/posts-list'

export function meta() {
  return [{ title: 'Guitar Glide - Blog' }, { description: 'Guitar Glide - Our music blog & sell of guitars.' }]
}

export async function loader() {
  const posts = await getPosts()
  return posts.data
}

function Blog() {
  const posts = useLoaderData()
  return <PostsList posts={posts} />
}

export default Blog
