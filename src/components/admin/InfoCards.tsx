import { useRouter } from "next/router";

type Props = {
	title?: string;
	content?: string;
	className?: string;
	iconClassName?: string;
	titleClassName?: string;
	contain?: string;
	contentClassName?: string;
	clickableRoute?: string;
	icon?: React.ReactElement;
};

export default function InfoCards({
	title,
	icon,
	content,
	className = "",
	iconClassName = "",
	titleClassName = "",
	contentClassName = "",

	clickableRoute = "",
}: Props) {
	const router = useRouter();
	return (
		<>
			<div
				onClick={() => router.push(`${clickableRoute}`)}
				className={` group hover:bg-[#014488] flex cursor-pointer border-b-4 border-[#014488] flex-row dashboard-card-shadow items-center gap-4 rounded-[1.5rem] p-6 transition duration-150 ease-in-out ${className} `}
			>
				<div className={`rounded-xl  ${iconClassName}`}>
					<div className="h-full w-[20%] text-sm p-3 group-hover:text-white">
						{icon}
					</div>
				</div>
				<div className="flex h-full w-2/3 flex-col ">
					<h4
						className={`group-hover:text-white text-lg font-semibold ${contentClassName}`}
					>
						{content}
					</h4>

					{/* <h4 className={`text-sm ${contentClassName}`}>{content}</h4> */}
					<h1
						className={`group-hover:text-white w-60 text-md font-semibold ${titleClassName}`}
					>
						{title}
					</h1>
				</div>
			</div>
		</>
	);
}
