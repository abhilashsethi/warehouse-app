import { LoginOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, CircularProgress } from "@mui/material";
// import { Arvind_Logo } from "assets/home";
import { Field, Form, Formik } from "formik";
import { useLoginData, useWarehouseData } from "hooks";
// import { useAuth, useMutation } from "hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Swal from "sweetalert2";
// import { User } from "types";
import * as Yup from "yup";

const LoginSchema = [
	{
		key: "1",
		label: "Employee ID",
		placeHolder: "Type Your Employee ID",
		icon: "",
		name: "email",
		type: "text",
		validationSchema: Yup.string().required("Employee ID is required"),
		initialValue: "",
	},
	{
		key: "2",
		label: "Password",
		placeHolder: "Type Your Password",
		icon: "",
		name: "password",
		type: "password",
		validationSchema: Yup.string()
			.min(6, "Password must be at least 6 characters")
			.required("Password is required"),
		initialValue: "",
	},
];

const initialValues = LoginSchema.reduce(
	(accumulator: any, currentValue: any) => {
		accumulator[currentValue?.name] = currentValue.initialValue;
		return accumulator;
	},
	{} as { [key: string]: string }
);

const validationSchema = LoginSchema.reduce((accumulator, currentValue) => {
	accumulator[currentValue.name] = currentValue.validationSchema;
	return accumulator;
}, {} as { [key: string]: any });

const LoginAuth = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [isChecked, setIsChecked] = useState<any>(false);
	// const { isMutating, trigger } = useMutation(
	//   isChecked ? `users/login` : `users/login`
	// );
	const { tender, setTender } = useLoginData();
	const { warehouse, setWareHouse } = useWarehouseData();
	const userDetails = {
		name: "ADMIN",
		email: "admin@gmail.com",
		phone: "7867543219",
	};

	const router = useRouter();
	// const { setUser, setToken, user } = useAuth();
	const handleLogin = async (values: any, submitProps: any) => {
		try {
			// const res = await trigger(values);
			// console.log(res);
			// if (!res.success) return Swal.fire("Error", res.msg, "error");
			// const user: User = { ...res.data.user };
			// setUser(user);
			// console.log({ user });
			// setToken(res.data.token);
			if (values?.email === "EMP0001" && values?.password === "EMP0001") {
				setTender(userDetails);

				console.log(tender);
				setWareHouse(data);
				localStorage.setItem("warehouseData", JSON.stringify(data));
				console.log(userDetails);
				router.push(`/panel/admin/patient/add-patient`);
			} else if (
				values?.email === "EMP0002" &&
				values?.password === "EMP0002"
			) {
				console.log({ userDetails });
				setTender(userDetails);
				setWareHouse(data);
				localStorage.setItem("warehouseData", data as any);
				router.push(`/admin`);
			} else {
				Swal.fire("Error", `Invalid Credentials`, "error");
				return;
			}
		} catch (err) {
			submitProps.setSubmitting(false);
			Swal.fire(
				"Error",
				"Server not available, Please try after sometime!",
				"error"
			);
		}
	};

	return (
		<article className="w-full md:flex-row flex flex-col justify-center items-center gap-5 text-themeDarkGray min-h-screen">
			<section className="lg:w-9/12 w-full md:flex-row flex flex-col">
				<div className="md:w-1/2 md:block hidden w-full md:h-[30rem] h-[22rem] relative overflow-hidden shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-blue-300 rounded-l bg-gradient-to-t from-blue-400 to-white py-3">
					<div className="flex md:w-[12rem] w-[10rem] md:h-[12rem] h-[10rem] bg-blue-400 rotate-animation-one absolute top-[110px] left-[-50px] items-center justify-center rotate-[38deg] rounded-md">
						<div className="md:w-[7rem] w-[5rem] md:h-[7rem] h-[5rem]  bg-[#fc811b]"></div>
					</div>
					<div className="flex absolute z-[30]  top-4 left-4 items-center justify-center px-8">
						{/* <img src={Arvind_Logo.src} alt="logo" className="w-full h-16" /> */}
					</div>
					<div className="flex  absolute md:top-60 z-[30] top-20 left-4 flex-col h-full gap-4 px-8">
						<h1 className="md:text-4xl text-3xl text-blue-800 font-bold text-start tracking-wide">
							Credore
						</h1>
						<p className="text-themeDarkGray md:font-medium text-sm md:tracking-wide tracking-normal  leading-6 md:text-start text-justify">
							With Credore, you're not just managing your financial supply
							chain; you're elevating it to new heights of efficiency, security,
							and growth.
						</p>
					</div>
					<div className="flex md:w-[12rem] w-[10rem] md:h-[12rem] h-[10rem] rotate-animation-two bg-blue-400 absolute top-[-50px] right-[-50px] items-center justify-center rotate-[38deg] rounded-lg">
						<div className="md:w-[7rem] w-[5rem] md:h-[7rem] h-[5rem]  bg-[#13223c] rounded-lg "></div>
					</div>
				</div>
				<div className="md:w-1/2 w-full md:h-[30rem] h-[30.7rem] bg-white md:rounded-r rounded-none">
					<div className="flex flex-col items-start justify-center h-full gap-4 px-8">
						<div className="md:hidden w-full flex flex-col items-center justify-center">
							{/* <img
                src={Arvind_Logo.src}
                alt="logo"
                className="md:h-6 h-14  object-contain"
              /> */}
							<p className="text-themeDarkGray md:text-sm text-xl font-medium">
								Welcome to Arvind Technocrafts
							</p>
						</div>
						<h1 className="text-2xl text-themeDarkGray font-bold text-start">
							Login
						</h1>
						<p className="text-blue-950 text-base leading-7 text-start">
							Sign in by entering information below
						</p>
						<Formik
							initialValues={initialValues}
							validationSchema={Yup.object(validationSchema)}
							onSubmit={handleLogin}
						>
							{(formik) => (
								<Form className="flex flex-col gap-4 w-full">
									{LoginSchema.map((item) => (
										<Field name={item.name} key={item.key}>
											{(props: {
												meta: { touched: any; error: any };
												field: JSX.IntrinsicAttributes & {
													name: string;
													type: string;
													placeholder: string;
													id: string;
													value: string;
													onChange: (event: any) => void;
													onBlur: (event: any) => void;
													checked: boolean;
													multiple: boolean;
												};
											}) => (
												<div
													className="flex flex-col gap-1 w-full"
													key={item.key}
												>
													<label
														htmlFor={item.name}
														className="text-themeDarkGray text-sm font-semibold"
													>
														{item.label}
													</label>
													<div
														className={`flex items-center ${
															props.meta.error
																? "border-red-500"
																: "border-black"
														} border-b justify-between w-full`}
													>
														<input
															id={item.name}
															name={item.name}
															placeholder={item.placeHolder}
															type={showPassword ? "text" : item.type}
															className="w-full h-10  px-4 bg-white"
															onChange={(e) => {
																props.field.onChange(e);
																formik.handleChange(e);
															}}
															onBlur={(e) => {
																props.field.onBlur(e);
																formik.handleBlur(e);
															}}
														/>
														{item.type === "password" && (
															<div
																className="focus:outline-none"
																onClick={() => setShowPassword(!showPassword)}
															>
																{showPassword ? (
																	<Visibility />
																) : (
																	<VisibilityOff />
																)}
															</div>
														)}
													</div>
													{props.meta.touched && props.meta.error && (
														<div className="text-red-600 text-sm">
															{props.meta.error}
														</div>
													)}
												</div>
											)}
										</Field>
									))}
									<div className="flex flex-col items-start justify-between w-full gap-4">
										<div className="w-full">
											<Button
												fullWidth
												type="submit"
												// disabled={
												//   formik.isSubmitting || !formik.isValid || isMutating
												// }
												variant="outlined"
												color="primary"
												size="large"
												// startIcon={
												//   isMutating ? (
												//     <CircularProgress size={16} />
												//   ) : (
												//     <LoginOutlined />
												//   )
												// }
											>
												LOGIN
											</Button>
										</div>
										<span className="flex w-full justify-center text-center">
											Don't have an account?{"  "}
										</span>
										<div className="flex justify-between w-full">
											<div>
												<Link
													href="/register"
													className="text-blue-600 px-2 hover:underline"
												>
													Register Now
												</Link>
											</div>
											<div>
												<Link
													href="/forgot-password"
													className="text-red-500 px-2 hover:underline"
												>
													Forgot Password
												</Link>
											</div>
										</div>
									</div>
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</section>
		</article>
	);
};

export default LoginAuth;

const data = [
	{
		name: "Warehouse-165",
		code: "W-00001",
		id: 1,
		city: "Delhi",
		space_available: 1234,
		type: "Leasable Space",
		cluster: "cluster-a-32",
		is_registered: true,
		is_live: false,
	},
	{
		name: "Warehouse-276",
		code: "W-00002",
		id: 2,
		city: "Chennai",
		space_available: 124,
		type: "Warehouse Service",
		cluster: "cluster-a-1",
		is_registered: true,
		is_live: false,
	},
	{
		name: "Warehouse-3039",
		code: "W-00003",
		id: 3,
		city: "Indore",
		space_available: 134,
		type: "Warehouse Service",
		cluster: "cluster-a-1",
		is_registered: true,
		is_live: false,
	},
	{
		name: "Warehouse-324",
		code: "W-00004",
		id: 4,
		city: "Chennai",
		space_available: 12,
		type: "Leasable Space",
		cluster: "cluster-a-21",
		is_registered: true,
		is_live: false,
	},
	{
		name: "Warehouse-5454",
		code: "W-00005",
		id: 5,
		city: "Chennai",
		space_available: 1243434,
		type: "Warehouse Service",
		cluster: "cluster-a-21",
		is_registered: true,
		is_live: false,
	},
	{
		name: "Warehouse-4345",
		code: "W-00006",
		id: 6,
		city: "Chennai",
		space_available: 1,
		type: "Leasable Space",
		cluster: "cluster-a-21",
		is_registered: true,
		is_live: false,
	},
	{
		name: "Warehouse-3455",
		code: "W-00007",
		id: 7,
		city: "Mumbai",
		space_available: 4,
		type: "Leasable Space",
		cluster: "cluster-a-2",
		is_registered: true,
		is_live: false,
	},
	{
		name: "Warehouse-23455",
		code: "W-00008",
		id: 8,
		city: "Bangalore",
		space_available: 3456,
		type: "Warehouse Service",
		cluster: "cluster-a-21",
		is_registered: true,
		is_live: true,
	},
	{
		name: "Warehouse-6457",
		code: "W-00009",
		id: 9,
		city: "Bangalore",
		space_available: 1234545,
		type: "Warehouse Service",
		cluster: "cluster-a-1",
		is_registered: true,
		is_live: false,
	},
	{
		name: "Warehouse-32456",
		code: "W-000010",
		id: 10,
		city: "Guwahati",
		space_available: 121234,
		type: "Warehouse Service",
		cluster: "cluster-a-1",
		is_registered: true,
		is_live: true,
	},
	{
		name: "Warehouse-3245678",
		code: "W-000011",
		id: 11,
		city: "Delhi",
		space_available: 98,
		type: "Leasable Space",
		cluster: "cluster-v-2",
		is_registered: true,
		is_live: false,
	},
	{
		name: "Warehouse-4567",
		code: "W-000012",
		id: 12,
		city: "Indore",
		space_available: 97,
		type: "Warehouse Service",
		cluster: "cluster-a-1",
		is_registered: true,
		is_live: true,
	},
	{
		name: "Warehouse-458",
		code: "W-000013",
		id: 13,
		city: "Delhi",
		space_available: 654,
		type: "Leasable Space",
		cluster: "cluster-a-1",
		is_registered: true,
		is_live: false,
	},
];
