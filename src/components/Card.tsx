import { Rating } from "flowbite-react";
import React from "react";

type Props = {
	name: string;
	designation: string;
	title: string;
	image: string;
};

const Card = ({ name, designation, title, image }: Props) => {
	return (
		<div className="my-2 md:mx-10 relative">
			<div className="group px-2  flex flex-col gap-2 justify-center items-center ">
				<img className=" w-20 h-20 rounded-full" src={image} alt="cardImg" />
				<div className="h-[0.5px] my-2 w-1/3 bg-[#0E89E2]"></div>

				<p className="tracking-wider text-black text-xs text-center">{title}</p>
				<div className="h-[0.5px] my-2 w-2/3 bg-[#0E89E2]"></div>
				<div className="flex w-full justify-between">
					<div>
						<p className="text-xs font-bold  text-gray-800 italic">{name}</p>
						<p className="text-[10px] font-semibold text-gray-500 italic">
							{designation}
						</p>
					</div>
					<Rating>
						<Rating.Star />
						<Rating.Star />
						<Rating.Star />
						<Rating.Star />
						<Rating.Star filled={false} />
					</Rating>
				</div>
			</div>
		</div>
	);
};

export default Card;
