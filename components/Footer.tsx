import React from 'react'
import Image from 'next/image';

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
            <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 Floaty Code Pins. All rights reserved.</p>
        </div>
                <ul className='flex flex-1 justify-center gap-3 max-md:mt-10 md:judtify-end '>
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
        </div>
    </footer>
  )
}

export default Footer