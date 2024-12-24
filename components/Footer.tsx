import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {

const socials = [
        {
          id: '0',
          title: 'Facebook',
          icon: '/socials/facebook.svg',
          url: '#',
        },
        {
          id: '1',
          title: 'Telegram',
          icon: '/socials/telegram-plane.svg',
          url: '#',
        },
        {
          id: '2',
          title: 'Whatsapp',
          icon: '/socials/whatsapp.svg',
          url: '#',
        },
      ];
  return (
    <footer>
        <div className='container py-10'>
            <div className='flex w-full max-md:flex-col '>
            <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
          
          <div className='flex items-center justify-center sm:ml-auto'>
            <p className='legal-after relative mr-9 text-black transition-all duration-500 hover:text-blue-75'>Terms of Use</p>
            <p className='text-black transition-all duration-500 hover:text-violet-300'>Customer Policy</p>
            <p className='legal-after relative ml-9 text-black transition-all duration-500 hover:text-blue-75'><Link href='/hosting-plans'>Hosting Plans</Link></p>
          </div>
        </div>
                <ul className='flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end '>
                    {socials.map(({id, url, icon, title}) => (
                        <li key={id}>
                            <a href={url} className=''>
                                <Image
                                src={icon}
                                alt={title}
                                width={24}
                                height={24}
                                className=' object-contain' />
                            </a>
                        </li>
                    ))}
                </ul>
                <div>
                
                </div>
            </div>
            <div className=' container py-10'>
              <div className='flex items-center justify-center sm:ml-auto'>
            <p className='text-black text-center justify-center'>&copy; 2025 Floaty Code Pins. All rights reserved.</p>
            </div>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer