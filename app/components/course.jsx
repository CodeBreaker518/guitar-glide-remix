const Course = ({ course }) => {
  const { Title, content, image } = course
  return (
    <section className='course'>
      <style jsx='true'>{`
        .course {
          background-image: linear-gradient(to right, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.7)), url(${image.data.attributes.url});
        }
      `}</style>
      <div className='container course-grid'>
        <div className='content'>
          <h2 className='heading'>{Title}</h2>
          <p className='text'>{content}</p>
        </div>
      </div>
    </section>
  )
}

export default Course
