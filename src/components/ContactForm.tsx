import CountrySelector from "./CountrySelector";
import { useFormik } from "formik";
import * as yup from "yup";

export default function ContactForm() {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			phone: "",
			subject: "",
			country: "91",
			message: "",
		},
		validationSchema: yup.object({
			name: yup
				.string()
				.required("Name Required.")
				.min(3, "Minimum 3 letter")
				.max(100, "Maximum 100 letter"),
			email: yup
				.string()
				.required("Email Required.")
				.email("Enter valid email"),
			country: yup.string().required("Country Code Required."),
			phone: yup
				.number()
				.test("minlength", "phone number at list 6 digits", (val) =>
					Boolean(val && val.toString().length >= 6)
				)
				.test("len", "phone number can not be more then 16 digits", (val) =>
					Boolean(val && val.toString().length <= 16)
				)
				.required("Phone number is required"),
			subject: yup
				.string()
				.required("Subject Required.")
				.min(4, "Minimum 4 letter")
				.max(50, "Maximum 50 letter"),
			message: yup
				.string()
				.required("Message Required.")
				.min(15, "Minimum 15 letter")
				.max(200, "Maximum 200 letter"),
		}),

		onSubmit: (values) => {
			console.log(values);
			formik.resetForm();
		},
	});
	return (
		<>
			<form onSubmit={formik.handleSubmit}>
				<div className="flex w-full flex-col gap-3 md:flex-row">
					<div className="w-full">
						<label className="mb-2 block text-sm font-semibold text-gray-700">
							Name <span className="text-red-500">*</span>
						</label>

						<input
							className={`block w-full rounded-md border bg-gray-100 px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 lg:w-full ${
								formik.touched.name && Boolean(formik.errors.name)
									? "dark:border-red-600"
									: "dark:border-gray-400"
							} `}
							type="text"
							name="name"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.name}
							placeholder="Enter Full Name"
						/>
						<span className="text-xs font-extralight text-red-600">
							{formik.touched.name && formik.errors.name}
						</span>
					</div>

					<div className=" w-full">
						<label className="mb-2 block text-sm font-semibold text-gray-700">
							E-mail <span className="text-red-500">*</span>
						</label>

						<input
							className={`block w-full rounded-md border bg-gray-100 px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40  ${
								formik.touched.email && Boolean(formik.errors.email)
									? "dark:border-red-600"
									: "dark:border-gray-400"
							}`}
							type="email"
							name="email"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
							placeholder="Enter Email Address"
						/>
						<span className="text-xs font-light text-red-600">
							{formik.touched.email && formik.errors.email}
						</span>
					</div>
				</div>
				<div className=" mt-4 w-full pt-2 md:mt-0">
					<label className="mb-2 block text-sm font-semibold text-gray-700">
						Phone Number <span className="text-red-500">*</span>
					</label>
					<div className="flex w-full flex-col gap-3 md:flex-row">
						<div className=" w-full md:w-1/4 lg:w-32">
							<CountrySelector
								className="bg-gray-100"
								defaultValue="91"
								name="country"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.country}
							/>
						</div>
						<input
							className={`block w-full rounded-md border bg-gray-100 px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 md:w-3/4 lg:w-full  ${
								formik.touched.phone && Boolean(formik.errors.phone)
									? "dark:border-red-600"
									: "dark:border-gray-400"
							}`}
							type="number"
							name="phone"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.phone}
							placeholder="Enter Phone Number"
						/>
					</div>
					<span className="text-xs font-extralight text-red-600">
						{formik.touched.phone && formik.errors.phone}
					</span>
				</div>

				<div className="mt-4 w-full">
					<label className="mb-2 block text-sm font-semibold text-gray-700">
						Subject <span className="text-red-500">*</span>
					</label>

					<input
						className={`block w-full rounded-md border bg-gray-100 px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 ${
							formik.touched.subject && Boolean(formik.errors.subject)
								? "dark:border-red-600"
								: "dark:border-gray-400"
						}`}
						type="text"
						name="subject"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.subject}
						placeholder="Subject"
					/>
					<span className="text-xs font-light text-red-600">
						{formik.touched.subject && formik.errors.subject}
					</span>
				</div>

				<div className="mt-4 w-full">
					<label className="mb-2 block text-sm font-semibold text-gray-700">
						Message <span className="text-red-500">*</span>
					</label>

					<textarea
						className={`block h-32 w-full rounded-md border bg-gray-100 px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 ${
							formik.touched.message && Boolean(formik.errors.message)
								? "dark:border-red-600"
								: "dark:border-gray-400"
						}`}
						name="message"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.message}
						placeholder="Write Your Message...."
					></textarea>
					<span className="text-xs font-light text-red-600">
						{formik.touched.message && formik.errors.message}
					</span>
				</div>

				<div className="mt-6">
					<button
						className={`primary-inset rounded-lg px-5 py-3 font-bold text-white ${
							formik.isSubmitting ? "opacity-50" : "opacity-100"
						}`}
						type="submit"
						disabled={formik.isSubmitting}
					>
						{formik.isSubmitting ? "Please Wait..." : "Send Message"}
					</button>
				</div>
			</form>
		</>
	);
}
