import { getPost } from '~/models/posts.server'
import { useLoaderData } from '@remix-run/react'
import { formatDate } from '~/utils/helpers'

export function meta({ data }) {
  return [
    { charset: 'utf-8' },
    { title: `Guitar Glide - ${data.data[0].attributes.title}` },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { description: `Guitar Glide - Buy guitars, guitars on sale, guitar ${data.data[0].attributes.name}` },
    { keywords: 'learn, guitar, glide, guitars, cheap, quality' },
  ]
}

export async function loader({ params }) {
  const { postUrl } = params
  const post = await getPost(postUrl)

  // post not found?
  if (post.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Post not Found',
    })
  }

  return post
}

const PostUrl = () => {
  const post = useLoaderData()
  const { content, image, title, publishedAt } = post.data[0].attributes
  const date = formatDate(publishedAt)
  return (
    <article className='post mt-3'>
      <img src={image?.data?.attributes?.url} alt={`blog ${title}`} className='image' />
      <div className='content'>
        <h3>{title}</h3>
        <p className='date'>{date}</p>
        <p className='text'>{content}</p>
      </div>
    </article>
  )
}

export default PostUrl
