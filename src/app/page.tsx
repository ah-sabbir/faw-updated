import Image from 'next/image'
import Link from 'next/link'


import news1 from '@/images/news/f1.jpg'
import news2 from '@/images/news/f2.jpg'
import news3 from '@/images/news/f3.jpg'
import news4 from '@/images/news/f4.jpg'
import news5 from '@/images/news/f5.jpg'
import news6 from '@/images/news/f6.jpg'
import news7 from '@/images/news/f7.jpg'
import news8 from '@/images/news/f8.jpg'
import news9 from '@/images/news/f9.jpg'
import news10 from '@/images/news/f10.jpg'
import news11 from '@/images/news/f11.jpg'
import news12 from '@/images/news/f12.jpg'
import ImageSlider from '@/components/sliderSection';

// 
// @/images/news/f2.jpg
// @/images/news/f3.jpg
// @/images/news/f4.jpg
// @/images/news/f5.jpg
// @/images/news/f6.jpg
// @/images/news/f7.jpg
// @/images/news/f8.jpg
// @/images/news/f9.jpg
// @/images/news/f10.jpg
// @/images/news/f11.jpg
// @/images/news/f12.jpg
// @/images/logo.png
// @/images/slider/slider1.jpg
// @/images/slider/slider2.jpg





export default function Home() {
  return (
<>

	<section className="slider mt-4">
		<div className="p-2 m-auto w-full">
			<ImageSlider/>
		</div>
	</section>


{/* blog section */}
	<section className=" pt-[70px] pb-[70px] relative">
		<div className=" md:max-w-screen-md lg:max-w-6xl px-[15px] mx-auto">
				{/* main blog container */}
				<div className="flex flex-wrap mr-[-15px] items-center justify-center">
					{
						[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,1,1,1,1,1,1,1,1,1].map((d,i)=>{
							return (
								<div key={i} className="lg:w-1/4 px-4 md:w-1/2">
									<article className="block mb-5 p-2 rounded ">
										<Link className="post-thumb mb-4 d-block" href="/blog-heading">
											<Image src={news1} alt="" layout='responsive'  className="block mb-4 "/>
										</Link>
										<span className="font-extra text-sm uppercase letter-spacing-1 text-[#ce8460]">Explore</span>
										<h3 className="post-title mt-1"><Link href="/The-best-place">The best place to explore to enjoy</Link></h3>
										<p className='pt-5 pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repudiandae aliquid voluptas laboriosam consequatur id numquam adipisci quo labore vel necessitatibus dicta, assumenda iusto voluptate aperiam impedit sed nam officiis!</p>
										<span className="letter-spacing text-uppercase font-sm tracking-[3px]">June 15, 2019</span>
									</article>
								</div>
							)
						})
					}
				</div>

				<div className="m-auto">
					<div className="pagination flex items-center justify-center pl-0 list-none rounded-[0.25rem] mt-5 pt-4">
						<ul className="flex list-inline  ">
							<li className="list-inline-item active:bg-[#ce8460] active:text-[#fff] active:border-[#ce8460]"><a href="#" className="active">1</a></li>
							<li className="list-inline-item"><a href="#">2</a></li>
							<li className="list-inline-item"><a href="#">3</a></li>
							<li className="list-inline-item"><a href="#" className="prev-posts"><i className="ti-arrow-right"></i></a></li>
						</ul>
					</div>
				</div>
		</div>
	</section>
</>
  )
}
