import bannerImg from '../../../assets/banner.jpg'

const Banner = () => {
  return (
    <div className=''>
      <div className='md:w-[800px] h-[350px] mx-auto'>
        <img className='w-full h-full rounded-xl outline-dotted ' src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;