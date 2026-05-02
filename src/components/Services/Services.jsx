import React from 'react'
import img2 from '../../assets/coffee2.png';

const ServicesData = [
  {
    id:1,
    img:img2,
    name:"Espresso",
    description:"A strong and concentrated coffee made by forcing hot water through finely-ground coffee beans.",
    aosDelay:"100",


  },
  { id:2,
    img:img2,
    name:"Cappuccino",
    description:"A coffee drink that consists of a shot of espresso topped with steamed milk and a layer of frothed milk.",
    aosDelay:"200",
  },
  {
    id:3,
    img:img2,
    name:"Latte",
    description:"A coffee drink that consists of a shot of espresso with steamed milk and a small amount of foam.",
    aosDelay:"300",
  }

]
export const Services = () => {
  return (
    <>
    <span id='services'></span>
    <div className="py-12 sm:py-14 bg-[#EDE3D9]" id='services'>
        <div className='container'>
        {/*header title  */}
        <div className='mb-15'>
            <h1 className="text-4xl font-bold font-cursive text-center" style={{color: '#2E2E2E'}}>Best Coffee For You</h1>
        </div>
        </div>

        {/* services cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-6 container mx-auto place-items-center">
          {ServicesData.map((data, index) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={index}
                className="p-6 rounded-2xl hover:text-white shadow-xl duration-200 max-w-300px  group relative" style={{backgroundColor: '#FBF7F3', borderLeft: '4px solid #C8A27A'}}
              >
                {/* image section */}
                <div className="h-36 sm:h-40">
                  <img
                    src={data.img}
                    alt=""
                    className="max-w-52 sm:max-w-56 block mx-auto transform -translate-y-12 group-hover:scale-110 group-hover:rotate-6 duration-300"
                  />
                </div>

                {/* text content */}
                <div className='p-4 text-center'>
                  <h1 className="text-xl font-bold" style={{color: '#2E2E2E'}}>{data.name}</h1>
                  <p className="text-sm line-clamp-2" style={{color: '#6D6D6D'}}>{data.description}</p>
                </div>
              </div>
            )
          })}
        </div>
    </div>
    </>
  )
}
