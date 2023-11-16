import { Link } from '@remix-run/react'
import { formatDate } from '~/utils/helpers'

const Post = ({ post }) => {
  const { content, image, title, url, publishedAt } = post

  const date = formatDate(publishedAt)

  return (
    <article className='post'>
      <img src={image.data.attributes.formats.small.url} alt={`blog ${title}`} className='image' />
      <div className='content'>
        <h3>{title}</h3>
        <p className='date'>{date}</p>
        <p className='resume'>{content}</p>
        <Link className='link' to={`/posts/${url}`}>
          Read Post
        </Link>
      </div>
    </article>
  )
}

export default Post
