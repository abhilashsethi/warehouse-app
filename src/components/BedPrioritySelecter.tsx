import { category } from "configs";

const BedPrioritySelecter = ({
	name,
	onChange,
	onBlur,
	value,
	defaultValue,
	className,
}: any) => {
	return (
		<div className="flex flex-col gap-2">
			<p className="text-theme font-bold pt-3">Priority *</p>
			<select
				// defaultValue={defaultValue}
				name={name}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
				id=""
				className={`flex w-full gap-3 rounded-lg border  p-3 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 ${className}`}
			>
				{category.map((item, index) => (
					<option key={index} value={item.title}>
						{item.title}
					</option>
				))}
			</select>
		</div>
	);
};

export default BedPrioritySelecter;

// interface CountryType {
//   code: string;
//   label: string;
//   phone: string;
//   suggested?: boolean;
// }
