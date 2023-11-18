import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";

const PatientDetails = () => {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			mobile: "",
			phone: "",
			subject: "",
			country: "91",
			message: "",
			payment: "",
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
			mobile: yup
				.number()
				.test("minlength", "mobile number at list 10 digits", (val) =>
					Boolean(val && val.toString().length >= 10)
				)
				.test("len", "phone number can not be more then 10 digits", (val) =>
					Boolean(val && val.toString().length <= 10)
				)
				.required("Mobile number is required"),
			subject: yup.string().required("Subject Required."),
			message: yup
				.string()
				.required("Message Required.")
				.min(15, "Minimum 15 letter")
				.max(200, "Maximum 200 letter"),
			payment: yup.string().required("Payment Required"),
		}),

		onSubmit: (values) => {
			console.log(values);
			formik.resetForm();
		},
	});
	const router = useRouter();

	return (
		<form onSubmit={formik.handleSubmit}>
			<div className=" w-full mb-3">
				<label className="mb-1 block text-sm font-semibold text-gray-700 ">
					Full Name <span className="text-red-500">*</span>
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

			<div className="mb-3 w-full">
				<label className="mb-1 block text-sm font-semibold text-gray-700 ">
					Email<span className="text-red-500">*</span>
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
			<div className="mb-3 w-full">
				<label className="mb-1 block text-sm font-semibold text-gray-700 ">
					Mobile<span className="text-red-500">*</span>
				</label>

				<input
					className={`block w-full rounded-md border bg-gray-100 px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40  ${
						formik.touched.mobile && Boolean(formik.errors.mobile)
							? "dark:border-red-600"
							: "dark:border-gray-400"
					}`}
					type="number"
					name="mobile"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.mobile}
					placeholder="Enter mobile Address"
				/>
				<span className="text-xs font-light text-red-600">
					{formik.touched.mobile && formik.errors.mobile}
				</span>
			</div>

			<div className="mt-4 w-full">
				<label className="mb-2 block text-sm font-semibold text-gray-700 ">
					Choose a payment option to Book Appointment
				</label>
				<div className="md:block flex md:gap-0 gap-2">
					<div className="flex items-center gap-2 bg-[#d7f5fe] w-1/2 cursor-pointer px-3 py-3 border border-[#1d83c5] rounded-md">
						<input
							className={`block border bg-gray-100  text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 ${
								formik.touched.payment && Boolean(formik.errors.payment)
									? "dark:border-red-600"
									: "dark:border-gray-400"
							}`}
							type="radio"
							name="payment"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.subject}
							// placeholder="Subject"
						/>
						<label className="font-semibold">Pay Online</label>
					</div>
					<div className="flex items-center gap-2 bg-[#d7f5fe] w-1/2 cursor-pointer px-3 py-3 border border-[#1d83c5] rounded-md md:mt-2">
						<input
							className={`block border bg-gray-100  text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 ${
								formik.touched.payment && Boolean(formik.errors.payment)
									? "dark:border-red-600"
									: "dark:border-gray-400"
							}`}
							type="radio"
							name="payment"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.subject}
							// placeholder="Subject"
						/>
						<label className="font-semibold">Pay at clinic</label>
					</div>
				</div>

				{/* <span className="text-xs font-light text-red-600">
					{formik.touched.message && formik.errors.message}
				</span> */}
			</div>

			<div className="mt-6">
				<button
					onClick={() => router.push(`/user/payment`)}
					className={`primary-inset rounded-lg px-10 py-3 md:w-1/3 w-full font-bold text-white ${
						formik.isSubmitting ? "opacity-50" : "opacity-100"
					}`}
					type="submit"
					disabled={formik.isSubmitting}
				>
					{formik.isSubmitting ? "Please Wait..." : "Confirm"}
				</button>
			</div>
		</form>
	);
};

export default PatientDetails;
