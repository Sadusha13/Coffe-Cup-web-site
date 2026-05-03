import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import { FaBars, FaCoffee, FaTimes } from 'react-icons/fa'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menus = [
    { id: 1, name: 'Home', link: '#' },
    { id: 2, name: 'Services', link: '#services' },
    { id: 3, name: 'About', link: '#about' },
  ]

  return (
    <div className="w-full" style={{ background: 'linear-gradient(90deg, #6F4E37 0%, #3E2723 100%)' }}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div data-aos="fade-down" data-aos-duration="700" data-aos-once />
            <img src={Logo} alt="Coffee Cafe logo" className="h-12 w-12 object-contain sm:h-12 sm:w-16" />
            <span className="text-xl sm:text-3xl font-bold font-cursive leading-none text-white">Master Cafe</span>
          </div>

          <button
            type="button"
            className="sm:hidden text-white text-2xl p-2"
            onClick={() => setIsMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div data-aos="fade-down" data-aos-duration="700" data-aos-delay="300" data-aos-once className="hidden sm:flex items-center gap-1 md:gap-3 lg:gap-4">
            <ul className="flex items-center gap-0 md:gap-2 lg:gap-4 text-white font-medium">
              {menus.map((link) => (
                <li key={link.id}>
                  <a href={link.link} className="inline-block px-2 md:px-3 py-2 text-sm md:text-base lg:text-lg text-white/80 hover:text-white duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <button className="flex items-center gap-2 px-4 md:px-5 lg:px-6 py-2 md:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:scale-105 transition text-sm md:text-base">
              Order
              <FaCoffee className="text-sm md:text-base text-white" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden pt-2 pb-3">
            <ul className="flex flex-col gap-1 text-white font-medium">
              {menus.map((link) => (
                <li key={link.id}>
                  <a href={link.link} onClick={() => setIsMenuOpen(false)} className="block rounded px-3 py-2 text-base text-white/85 hover:text-white hover:bg-white/10">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="mt-3 bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200 inline-flex items-center gap-2 text-white whitespace-nowrap text-sm">
              Order
              <FaCoffee className="text-sm text-white" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
