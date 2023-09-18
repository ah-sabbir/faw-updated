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
		<div className="container-fluid">
			<div className="d-flex justify-center row no-gutters">
				<div className="col-lg-6 col-sm-6 col-md-6 slider-wrap">

					<ImageSlider/>

				</div>
			</div>
		</div>
	</section>

	<section className="section-padding">
		<div className="container">
			<div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<article className="post-grid mb-5">
								<a className="post-thumb mb-4 d-block" href="blog-single.html">
									<Image src={news1} alt="" layout='responsive' width={100} height={100}   className="img-fluid"/>
								</a>
								<span className="cat-name text-color font-extra text-sm text-uppercase letter-spacing-1">Explore</span>
								<h3 className="post-title mt-1"><a href="blog-single.html">The best place to explore to enjoy</a></h3>

								<span className="text-muted letter-spacing text-uppercase font-sm">June 15, 2019</span>

							</article>
						</div>
						<div className="col-lg-3 col-md-6">
							<article className="post-grid mb-5">
								<a className="post-thumb mb-4 d-block" href="blog-single.html">
									<Image src={news2} alt=""  layout='responsive' width={100} height={100}   className="img-fluid"/>
								</a>
								<span className="cat-name text-color font-sm font-extra text-uppercase letter-spacing">Lifestyle</span>
								<h3 className="post-title mt-1"><a href="blog-single.html">How to Make list for travelling alone</a></h3>

								<span className="text-muted letter-spacing text-uppercase font-sm">September 15, 2019</span>

							</article>
						</div>
						<div className="col-lg-3 col-md-6">
							<article className="post-grid mb-5">
								<a className="post-thumb mb-4 d-block" href="blog-single.html">
									<Image src={news3} alt=""  layout='responsive' width={100} height={100}   className="img-fluid"/>
								</a>
								<span className=" cat-name text-color font-sm font-extra text-uppercase letter-spacing">Food</span>
								<h3 className="post-title mt-1"><a href="blog-single.html">5 ingredient cilantro vinaigrette</a></h3>

								<span className="text-muted letter-spacing text-uppercase font-sm">September 15, 2019</span>

							</article>
						</div>
						<div className="col-lg-3 col-md-6">
							<article className="post-grid mb-5">
								<a className="post-thumb mb-4 d-block" href="blog-single.html">
									<Image src={news4} alt=""  layout='responsive' width={100} height={100}   className="img-fluid"/>
								</a>
								<span className="cat-name text-color font-sm font-extra text-uppercase letter-spacing">Explore</span>
								<h3 className="post-title mt-1"><a href="blog-single.html">A Simple Way to Feel Like Home When You
										Travel</a></h3>

								<span className="text-muted letter-spacing text-uppercase font-sm">March 20, 2019</span>

							</article>
						</div>
						<div className="col-lg-3 col-md-6">
							<article className="post-grid mb-5">
								<a className="post-thumb mb-4 d-block" href="blog-single.html">
									<Image src={news5} alt=""  layout='responsive' width={100} height={100}   className="img-fluid"/>
								</a>
								<span className="cat-name text-color font-sm font-extra text-uppercase letter-spacing">Travel</span>
								<h3 className="post-title mt-1"><a href="blog-single.html">What Type of Traveller Are You?</a></h3>

								<span className="text-muted letter-spacing text-uppercase font-sm">September 15, 2019</span>

							</article>
						</div>
						<div className="col-lg-3 col-md-6">
							<article className="post-grid mb-5">
								<a className="post-thumb mb-4 d-block" href="blog-single.html">
									<Image src={news6} alt=""  layout='responsive' width={100} height={100}   className="img-fluid"/>
								</a>
								<span className="cat-name text-color font-sm font-extra text-uppercase letter-spacing">Experience</span>
								<h3 className="post-title mt-1"><a href="blog-single.html">A Road Trip Review of the 2018</a></h3>

								<span className="text-muted letter-spacing text-uppercase font-sm">July 10, 2019</span>

							</article>
						</div>
						<div className="col-lg-3 col-md-6">
							<article className="post-grid mb-5">
								<a className="post-thumb mb-4 d-block" href="blog-single.html">
									<Image src={news7} alt=""  layout='responsive' width={100} height={100}   className="img-fluid"/>
								</a>
								<span className=" cat-name text-color font-sm font-extra text-uppercase letter-spacing">music</span>
								<h3 className="post-title mt-1"><a href="blog-single.html">Portugal’s Sunset summer vission</a></h3>

								<span className="text-muted letter-spacing text-uppercase font-sm">September 15, 2019</span>

							</article>
						</div>
						<div className="col-lg-3 col-md-6">
							<article className="post-grid mb-5">
								<a className="post-thumb mb-4 d-block" href="blog-single.html">
									<Image src={news8} alt=""  layout='responsive' width={100} height={100}   className="img-fluid"/>
								</a>
								<span className="cat-name text-color font-sm font-extra text-uppercase letter-spacing">beauty</span>
								<h3 className="post-title mt-1"><a href="blog-single.html">The best soft Tropical Getaway</a></h3>

								<span className="text-muted letter-spacing text-uppercase font-sm">March 12, 2019</span>

							</article>
						</div>
						<div className="col-lg-3 col-md-6">
							<article className="post-grid mb-5">
								<a className="post-thumb mb-4 d-block" href="blog-single.html">
									<Image src={news9} alt=""  layout='responsive' width={100} height={100}   className="img-fluid"/>
								</a>
								<span className="cat-name text-color font-sm font-extra text-uppercase letter-spacing">Travel</span>
								<h3 className="post-title mt-1"><a href="blog-single.html">Memoriable Paris Girls Trip </a></h3>

								<span className="text-muted letter-spacing text-uppercase font-sm">April 19, 2019</span>

							</article>
						</div>
						<div className="col-lg-3 col-md-6">
							<article className="post-grid mb-5">
								<a className="post-thumb mb-4 d-block" href="blog-single.html">
									<Image src={news10} alt=""  layout='responsive' width={100} height={100}   className="img-fluid"/>
								</a>
								<span className="cat-name text-color font-sm font-extra text-uppercase letter-spacing">Experience</span>
								<h3 className="post-title mt-1"><a href="blog-single.html">How to Plan your Trip the Right Way</a></h3>

								<span className="text-muted letter-spacing text-uppercase font-sm">February 15, 2019</span>

							</article>
						</div>

						<div className="col-lg-3 col-md-6">
							<article className="post-grid mb-5">
								<a className="post-thumb mb-4 d-block" href="blog-single.html">
									<Image src={news11} alt=""  layout='responsive' width={100} height={100}   className="img-fluid"/>
								</a>
								<span className="cat-name text-color font-sm font-extra text-uppercase letter-spacing">Travel</span>
								<h3 className="post-title mt-1"><a href="blog-single.html">8 Powerful Ways to Add Vibrant Colour to Your
										Life</a></h3>

								<span className="text-muted letter-spacing text-uppercase font-sm">August 15, 2019</span>

							</article>
						</div>
						<div className="col-lg-3 col-md-6">
							<article className="post-grid mb-5">
								<a className="post-thumb mb-4 d-block" href="blog-single.html">
									<Image src={news12} alt="" layout='responsive' width={100} height={100}   className="img-fluid"/>
								</a>
								<span className=" cat-name text-color font-sm font-extra text-uppercase letter-spacing">Lifestyle</span>
								<h3 className="post-title mt-1"><a href="blog-single.html">The best to-do list to help boost your
										productivity</a></h3>

								<span className="text-muted letter-spacing text-uppercase font-sm">October 2, 2019</span>

							</article>
						</div>
					</div>
				</div>

				<div className="m-auto">
					<div className="pagination mt-5 pt-4">
						<ul className="d-flex list-inline  ">
							<li className="list-inline-item"><a href="#" className="active">1</a></li>
							<li className="list-inline-item"><a href="#">2</a></li>
							<li className="list-inline-item"><a href="#">3</a></li>
							<li className="list-inline-item"><a href="#" className="prev-posts"><i className="ti-arrow-right"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section className="footer-2 section-padding gray-bg pb-5">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-6">
					<div className="subscribe-footer text-center">
						<div className="form-group mb-0">
							<h2 className="mb-3">Subscribe Newsletter</h2>
							<p className="mb-4">Subscribe my Newsletter for new blog posts , tips and info.</p>
							<div className="d-flex form-group form-row align-items-center mb-0">
								<div className="col-sm-9">
									<input type="email" className="form-control" placeholder="Email Address"/>
								</div>
								<div className="col-sm-3">
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
