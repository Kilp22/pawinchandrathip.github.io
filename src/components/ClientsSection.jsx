import data from '../data/index-data';

const ClientsSection = () => {
  return (
    <div className="w-full py-20 flex flex-col items-center justify-center bg-white text-black">
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-3xl md:text-[45px] pb-5'>Some of My Clients</h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center items-center w-full gap-8 px-4 md:px-20'>
        {data.logos.map((logo) => (
          <div key={logo.name} className='flex flex-col items-center w-48 h-40 justify-center'>
            <img src={logo.image} className='w-56' alt={logo.name} />
            <h2 className='text-center'>{logo.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientsSection;
