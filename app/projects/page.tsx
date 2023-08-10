import data from '../../utils/data'

const Project = () => {
  return (
    <div>
      {data.map((index) => (
        <div key={index.id} className=''>
          {index.title}
        </div>
      ))}
    </div>
  )
}

export default Project