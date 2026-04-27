import React from 'react';

import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa6';

const FooterLinks = [
    {
        title: "Home",
        link: "/#",

    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
    
];

// No background image — use solid overlay only



const Footer = () => {
    return (
    <div className="text-white">

    <div className="bg-black/50 py-1"> 
        <div className="container grid md:grid cols-3 pb-8 pt-2">
           {/* company  details*/}
           <div className="py-8 px-4">
            <a href="#"
            className="font-semibold tracking-widest text-2xl sm:font-3xl font-cursive">
                {" "} Coffee Cup</a>
            <p className="pt-4">
                Coffee Cup is a leading coffee company dedicated to providing high-quality coffee and exceptional customer service. With a passion for sourcing the finest beans and crafting delicious brews, we strive to create a memorable coffee experience for our customers. Whether you're looking for a cozy café atmosphere or convenient online ordering, Coffee Cup is your go-to destination for all things coffee.
            </p>    
            </div>
        {/* Footer Links */}
           <div className="col-span-2 grid-cols-2 sm:grid cols-3 md:pl-10">
            <div className="py-8 px-4">
                <h1 className="text-xl font-semibold sm:text-left mb-3">
                    Quick Links
                </h1>
                <ul className="space-y-3">
                    {FooterLinks.map((data, index) => (
                        <li key={index} className="mb-2">
                            <a href={data.link} 
                            className="inline-block hover-scale-105 duration-200">
                                {data.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            {/* company address*/}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
                <h1>
                    Address
                </h1>
                <div>
                    <p className="mb-2">123 Coffee Street, Brewtown, USA</p>
                    <p className="mb-2">Phone: (123) 456-7890</p>
                    <p className="mb-2">Email: info@coffeecup.com</p>

                    {/* social link*/}
                    <div className="space-x-4 pt-4">
                        <a href="#">
                                <FaFacebook className="text-3xl hover:scale-105 duration-200" />
                        </a>
                          <a href="#">
                                <FaLinkedin className="text-3xl hover:scale-105 duration-200" />
                        </a>
                          <a href="#">
                                <FaInstagram className="text-3xl hover:scale-105 duration-200" />
                        </a>
                        
                       
                    </div>
                </div>
            </div>
           </div>
           </div>
        </div>
     </div>
    
        
    )  
};

export default Footer;
