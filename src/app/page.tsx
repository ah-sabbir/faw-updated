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
		<div className="px-[15px] mx-auto w-full">
				{/* main blog container */}
				<div className="flex flex-wrap mr-[-15px] items-center justify-center">
					{
						[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,1,1,1,1,1,1,1,1,1].map((d,i)=>{
							return (
								<div key={i} className="lg:w-1/4 px-4 md:w-1/2">
									<article className="block mb-5 p-2 rounded ">
										<a className="post-thumb mb-4 d-block" href="blog-heading">
											<Image src={news1} alt="" layout='responsive'  className="block mb-4 "/>
										</a>
										<span className="cat-name text-color font-extra text-sm text-uppercase letter-spacing-1 text-[#ce8460]">Explore</span>
										<h3 className="post-title mt-1"><a href="blog-single.html">The best place to explore to enjoy</a></h3>
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





{/* footer section */}
	<section className="block pt-[70px] text-left leading-6 text-base font-normal text-gray-700 box-border pb-12 relative bg-[#f5f5f5] justify-center">
		<div className="px-[15px] mx-auto w-full">
			<div className="flex items-center justify-center">
				<div className="col-lg-6">
					<div className="subscribe-footer text-center">
						<div className="form-group mb-0">
							<h2 className="mb-3">Subscribe Newsletter</h2>
							<p className="mb-4">Subscribe my Newsletter for new blog posts , tips and info.</p>
							<div className="flex flex-row flex-1 gap-2">
								<div className="sm:w-3/4 pr-4 pl-4">
									<input type="email" className="w-full shadow-none border-solid border-transparent px-[12px] py-[18px] bg-[#ffffff] text-[14px]" placeholder="Email Address"/>
								</div>
								<div className="sm:w-1/4 pr-4 pl-4">
									<a href="#" className="btn btn-dark mt-auto ">Subscribe</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="footer-btm mt-5 pt-4 border-top">
				<div className="row">
					<div className="col-lg-12">
						<ul className="list-inline footer-socials-2 text-center">
							<li className="list-inline-item"><a href="#">Privacy policy</a></li>
							<li className="list-inline-item"><a href="#">Support</a></li>
							<li className="list-inline-item"><a href="#">About</a></li>
							<li className="list-inline-item"><a href="#">Contact</a></li>
							<li className="list-inline-item"><a href="#">Terms</a></li>
							<li className="list-inline-item"><a href="#">Category</a></li>
						</ul>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-6">
						<div className="copyright text-center ">
							@ copyright all reserved to <Link href="https://fashionanywhere.shop/">fashionanywhere.shop</Link>
              </div>
						</div>
					</div>
			</div>
		</div>
	</section>
</>
  )
}
