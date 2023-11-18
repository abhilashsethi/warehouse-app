import { patients } from "configs";
import { useRouter } from "next/router";

const NewPatientSelecter = ({
	name,
	onChange,
	onBlur,
	value,
	defaultValue,
	className,
}: any) => {
	console.log(value, defaultValue);
	const router = useRouter();
	return (
		<div className="flex flex-col gap-2">
			<div className="text-theme font-bold pt-3 flex justify-between items-center">
				Select Patient *{" "}
			</div>
			<select
				// defaultValue={defaultValue}
				name={name}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
				id=""
				className={`flex w-full gap-3 rounded-lg border  p-3 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 ${className}`}
			>
				{patients.map((item, index) => (
					<option key={index} value={item.title}>
						{item.title}
					</option>
				))}
			</select>
		</div>
	);
};

export default NewPatientSelecter;

// interface CountryType {
//   code: string;
//   label: string;
//   phone: string;
//   suggested?: boolean;
// }
