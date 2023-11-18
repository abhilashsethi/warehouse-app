import doctor_signup from "../assets/animation/doctor_signup.json";
import { motion } from "framer-motion";
import { countries } from "configs";
import { useFormik } from "formik";
import Lottie from "lottie-react";
import * as Yup from "yup";

const Signup = () => {
	const formik = useFormik({
		initialValues: {
			Fname: "",
			Lname: "",
			email: "",
			phone: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: Yup.object({
			Fname: Yup.string().required("First name Required."),
			Lname: Yup.string().required("Last name Required."),
			email: Yup.string()
				.required("Email Required.")
				.email("Enter valid email"),
			phone: Yup.string()
				.matches(
					/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
					"Phone number is invalid"
				)
				.required("Enter phone Number.")
				.min(5, "Minimum 5 Digits")
				.max(16, "Maximum 16 Digits"),
			password: Yup.string()
				.required("Password is required")
				.min(6, "Password must be at least 6 characters")
				.max(12, "Password should not exceed 12 characters"),
			confirmPassword: Yup.string()
				.required("Password is required")
				.min(6, "Password must be at least 6 characters")
				.max(12, "Password should not exceed 12 characters"),
		}),
		onSubmit: (values) => {
			console.log(values);
			formik.resetForm();
		},
	});

	return (
		<div className="flex flex-col justify-center items-center w-full flex-1 md:px-20 px-3 text-center my-10 mb-28">
			<div className="bg-white rounded-2xl shadow-2xl flex-col md:flex-row flex md:w-[70vw]  shadow-slate-500">
				<div className="bg-blue-300 w-full order-2 md:order-1 md:w-2/3 md:rounded-tr-2xl md:rounded-br-none rounded-2xl md:px-1 flex flex-col justify-center items-center">
					<Lottie className="" animationData={doctor_signup} loop={true} />
				</div>
				<div className="w-full md:w-2/3 p-5 order-1 md:order-2 ">
					<div className="py-5">
						<div className="text-3xl font-bold text-center text-[#0E89E2] mb-5 flex flex-col justify-center items-center">
							Create your Account
							<motion.div
								initial={{ width: 0, opacity: 0 }}
								whileInView={{ width: 150, opacity: 1 }}
								transition={{
									delay: 0.5,
									duration: 2,
									type: "spring",
									stiffness: 100,
								}}
								className="mt-3 mb-5 hidden md:inline-block border-2 border-[#0E89E2] bg-[#0E89E2] m-1 rounded-full"
							></motion.div>
						</div>

						<form onSubmit={formik.handleSubmit} className="">
							<div className="] mt-2 flex flex-col gap-5 lg:grid lg:grid-cols-2">
								<div className="  w-full">
									<label className=" mb-2 block text-sm font-bold text-gray-500 ">
										First Name <span className="text-red-500">*</span>
									</label>

									<input
										className={`block w-full rounded-md border-gray-400 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 ${
											formik.touched.Fname && Boolean(formik.errors.Fname)
												? "dark:border-red-600"
												: "dark:border-gray-400"
										}`}
										name="Fname"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.Fname}
										type="text"
										placeholder="Enter First Name"
									/>
									<span className="text-xs font-extralight text-red-600">
										{formik.touched.Fname && formik.errors.Fname}
									</span>
								</div>
								<div className="w-full">
									<label className=" mb-2 block text-sm font-bold text-gray-500 ">
										Last Name <span className="text-red-500">*</span>
									</label>

									<input
										className={`block w-full rounded-md border-gray-400 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 ${
											formik.touched.Lname && Boolean(formik.errors.Lname)
												? "dark:border-red-600"
												: "dark:border-gray-400"
										}`}
										name="Lname"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.Lname}
										type="text"
										placeholder="Enter Last Name"
									/>
									<span className="text-xs font-extralight text-red-600">
										{formik.touched.Lname && formik.errors.Lname}
									</span>
								</div>
								<div className="w-full">
									<label className="mb-2 block text-sm font-bold text-gray-500 ">
										Email <span className="text-red-500">*</span>
									</label>

									<input
										className={`block w-full rounded-md border-gray-400 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 ${
											formik.touched.email && Boolean(formik.errors.email)
												? "dark:border-red-600"
												: "dark:border-gray-400"
										} `}
										type="email"
										name="email"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.email}
										placeholder="Enter Email"
									/>
									<span className="h-0 text-xs font-extralight text-red-600">
										{formik.touched.email && formik.errors.email}
									</span>
								</div>

								<div className="mt-1 w-full">
									<label className="mb-1 block text-sm font-bold text-gray-500 ">
										Contact Number <span className="text-red-500">*</span>
									</label>
									<div className="flex gap-1">
										<select
											className="rounded-md"
											name={"countryCode"}
											defaultValue={"91"}
											style={{
												width: "6rem !important",
												// border: "1px solid black",
												// borderRadius: "5px",
											}}
										>
											{countries?.map((option) => (
												<option key={option?.code} value={option.phone}>
													{option?.phone}
												</option>
											))}
										</select>
										<input
											className={`block w-full rounded-md border-gray-400 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40  ${
												formik.touched.phone && Boolean(formik.errors.phone)
													? "dark:border-red-600"
													: "dark:border-gray-400"
											}`}
											type="text"
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
								<div className=" mt-2 w-full pt-2 md:mt-0">
									<label className="mb-2 block text-sm font-bold text-gray-500 ">
										Password <span className="text-red-500">*</span>
									</label>

									<input
										className={`block w-full rounded-md border-gray-400 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 ${
											formik.touched.password && Boolean(formik.errors.password)
												? "dark:border-red-600"
												: "dark:border-gray-400"
										} `}
										type="password"
										name="password"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.password}
										placeholder="Enter Password"
									/>
									<span className="h-0 text-xs font-extralight text-red-600">
										{formik.touched.password && formik.errors.password}
									</span>
								</div>
								<div className=" mt-2 w-full pt-2 md:mt-0">
									<label className="mb-2 block text-sm font-bold text-gray-500 ">
										Confirm Password <span className="text-red-500">*</span>
									</label>

									<input
										className={`block w-full rounded-md border-gray-400 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 ${
											formik.touched.confirmPassword &&
											Boolean(formik.errors.confirmPassword)
												? "dark:border-red-600"
												: "dark:border-gray-400"
										} `}
										type="password"
										name="confirmPassword"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.confirmPassword}
										placeholder="Re-enter Password"
									/>
									<span className="h-0 text-xs font-extralight text-red-600">
										{formik.touched.confirmPassword &&
											formik.errors.confirmPassword}
									</span>
								</div>
							</div>
							<div className="mt-4 flex items-center justify-center ">
								<button
									className={`rounded-full primary-inset px-32 py-3 font-bold text-white ${
										formik.isSubmitting ? "opacity-50" : "opacity-100"
									}`}
									type="submit"
									disabled={formik.isSubmitting}
								>
									{formik.isSubmitting ? "Please Wait..." : "Signup"}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
