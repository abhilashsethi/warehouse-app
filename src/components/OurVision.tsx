export default function OurVision() {
	return (
		<>
			<section className="bg-gradient-to-tr from-white to-white">
				<div className="container m-auto px-2 py-8 lg:py-16 ">
					<div className="grid gap-4 lg:grid-cols-2">
						<div className="order-2 grid place-content-center gap-2">
							<h2 className="font-bold">OUR VISION</h2>
							{/* <h3 className="text-3xl font-bold lg:mb-2 lg:text-5xl">
								The vision that leads our amazing team success
							</h3> */}
							<p className="my-2 text-justify">
								Our vision is the digital transformation of all healthcare
								institutions in a more efficient manner which will be beneficial
								to all the healthcare platforms but also will be beneficial to
								their patients.
							</p>
						</div>
						<div className="order-1 grid place-items-center">
							<figure className="h-96 w-full">
								<img
									src="/about/vision.webp"
									alt=""
									className="h-full w-full rounded-lg shadow-lg shadow-white/25"
								/>
							</figure>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
