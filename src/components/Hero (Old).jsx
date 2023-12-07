import data from '../assets/index-assets'

const Heroold = () => {
  return (
    <div className='relative'>
      <img src={data.mainBg} className='w-full'/>
      <h1 className='absolute inset-0 text-4xl text-white'>HELLO</h1>
    </div>
  )
}

export default Heroold