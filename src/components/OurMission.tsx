import Link from "next/link";

export default function OurMission() {
	return (
		<section className="bg-gradient-to-r from-primary-blue/80 to-primary-dark/80 text-white">
			<div className="container m-auto px-2 py-8 lg:py-10">
				<div className="grid gap-4 lg:grid-cols-2">
					<div className="grid place-items-start gap-2">
						<h2 className="font-bold">OUR MISSION</h2>
						{/* <h3 className="text-3xl font-bold lg:mb-2 lg:text-5xl">
                We're on a mission to empower the world
              </h3> */}
						<p className="my-2 text-justify">
							Our mission is to help all the healthcare institutions to work
							seamlessly and digitally. To fulfill all the goals and
							requirements of our clients is our priority so that we can justify
							the choice they made by giving us the opportunity.
						</p>
						<Link href="/career">
							<p className="border rounded-md border-white bg-white px-12 py-4 font-medium text-indigo-800 shadow transition hover:scale-105 active:scale-95">
								Join us
							</p>
						</Link>
					</div>
					<div className="grid place-items-center">
						<figure className="">
							<img
								src="/about/mission.webp"
								alt="ourMission"
								className="h-full w-full rounded-lg shadow-lg shadow-white/25"
							/>
						</figure>
					</div>
				</div>
			</div>
		</section>
	);
}
