import imageAboutUs from '../../public/img/about.jpg'
import styles from '~/styles/about.css'

export function meta() {
  return [
    { title: 'GuitarGlide - About Us' },
    { description: 'GuitarGlide is a company that sells courses and guitars, also offers a blog.' },
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
    {
      rel: 'preload',
      href: imageAboutUs,
      as: 'image',
    },
  ]
}

function AboutUs() {
  return (
    <main className='container about'>
      <h2 className='heading'>About Us</h2>

      <div className='content'>
        <img src={imageAboutUs} alt='About us' />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, facilis non adipisci voluptas quos quae expedita,
            eligendi amet quam ad provident alias perspiciatis! Et, repudiandae unde deserunt modi enim minus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, facilis non adipisci voluptas quos quae expedita,
            eligendi amet quam ad provident alias perspiciatis! Et, repudiandae unde deserunt modi enim minus.
          </p>
        </div>
      </div>
    </main>
  )
}

export default AboutUs
