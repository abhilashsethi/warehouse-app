import { bedCategory, clinics } from "configs";

const BedCategorySelecter = ({
	name,
	onChange,
	onBlur,
	value,
	defaultValue,
	className,
	icon,
}: any) => {
	console.log(value, defaultValue);
	return (
		<div className="flex flex-col gap-2">
			<p className="text-theme font-bold pt-3">Bed Category *</p>
			<select
				// defaultValue={defaultValue}
				name={name}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
				id=""
				className={`flex w-full gap-3 rounded-lg border  p-3 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 ${className}`}
			>
				{bedCategory.map((item, index) => (
					<option key={index} value={item.title}>
						{item.title}
					</option>
				))}
			</select>
		</div>
	);
};

export default BedCategorySelecter;

// interface CountryType {
//   code: string;
//   label: string;
//   phone: string;
//   suggested?: boolean;
// }
