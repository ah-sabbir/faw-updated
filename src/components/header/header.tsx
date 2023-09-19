import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import logo from '@/images/logo.png';

const RootHeader = () => {
  return (
        <header className="bg-[#f8efea] relative justify-center">
        <div className="w-full px-5 mx-auto ">{/* container */}
            <div className="flex flex-wrap items-center justify-between"> 
                <div className='min-w-[142px]'>
                    <Link href="#">
                        <Image src={logo} alt="" width={100} height={100} className=' max-w-full h-auto'/>
                    </Link>
                </div>

                <button className="lg:hidden" type="button">
                    <span className="ti-menu font-semibold"></span>
                </button>
            
                <nav className="hidden md:hidden lg:flex lg:justify-center lg:items-center">
                    <ul className='flex gap-2'>
                        <li className='p-2 m-2 font-semibold uppercase'> 
                            <Link className="" href="#">Home</Link>
                        </li>                       
                        <li className='p-2 m-2 font-semibold uppercase'> 
                            <Link className="" href="#">CULTURE</Link>
                        </li>
                        <li className='p-2 m-2 font-semibold uppercase'> 
                            <Link className="" href="#">TRENDS</Link>
                        </li>
                        <li className='p-2 m-2 font-semibold uppercase'> 
                            <Link className="" href="#">BEAUTY</Link>
                        </li>
                        <li className='p-2 m-2 font-semibold uppercase'> 
                            <Link className="" href="#">Outfits</Link>
                        </li>
                        <li className='p-2 m-2 font-semibold uppercase'> 
                            <Link className="" href="#">About Us</Link>
                        </li>
                    </ul>
                </nav>

                <div className="hidden lg:block lg:max-w-full lg:relative lg:min-h-[1px] lg:px-4">
                    <div className=" text-start">
                        <ul className="flex pl-0 list-none">
                            <li className='block mr-[0.5px]'><Link href="#" className='px-1 mx-1'><i className="ti-facebook text-base"></i></Link></li>
                            <li className='block mr-[0.5px]'><Link href="#" className='px-1 mx-1'><i className="ti-twitter text-base"></i></Link></li>
                            <li className='block mr-[0.5px]'><Link href="#" className='px-1 mx-1'><i className="ti-linkedin text-base"></i></Link></li>
                            <li className='block mr-[0.5px]'><Link href="#" className='px-1 mx-1'><i className="ti-pinterest text-base"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>

  )
}


export default RootHeader;