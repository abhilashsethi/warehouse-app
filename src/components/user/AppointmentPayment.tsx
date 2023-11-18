import { InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import React, { useState } from "react";

const Sidebar = () => {
	const [selectedTab, setSelectedTab] = useState(0);

	const tabs = [
		{ name: "Debit / Credit Card", content: <Tab1Content /> },
		{ name: "Paytm Postpaid and Wallet", content: <Tab2Content /> },
		{ name: "UPI", content: <Tab3Content /> },
		{ name: "Google Pay", content: <Tab4Content /> },
		{ name: "Amazon Pay", content: <Tab5Content /> },
		{ name: "PhonePe / BHIM UPI", content: <Tab6Content /> },
		{ name: "Net Banking", content: <Tab7Content /> },
	];

	return (
		<section className="px-10 py-10 flex flex-col justify-center items-center ">
			<div className="shadow-lg shadow-gray-400 border border-theme rounded-md">
				<div className="flex justify-between w-[50vw]">
					<h1
						className="w-1/4 py-5 text-lg font-semibold px-2
					"
					>
						Payment options
					</h1>
					<div className="w-3/4 bg-[#28328c] text-lg  px-5 text-white py-5">
						Amount to pay : ₹400
					</div>
				</div>
				<div className="flex h-[67vh] w-[50vw]">
					{/* Sidebar */}
					<div className="w-1/4 bg-gray-200">
						<ul className="space-y-3 font-medium text-sm">
							{/* Map over tabs array and render each tab */}
							{tabs.map((tab, index) => (
								<li
									key={index}
									className={`p-2 cursor-pointer font-semibold ${
										index === selectedTab
											? "font-bold bg-theme text-white rounded-md"
											: ""
									}`}
									onClick={() => setSelectedTab(index)}
								>
									{tab.name}
								</li>
							))}
						</ul>
					</div>
					{/* Content */}
					<div className="w-3/4 p-4">{tabs[selectedTab].content}</div>
				</div>
			</div>
		</section>
	);
};

export default Sidebar;

// Example content components
function Tab1Content() {
	return (
		<div>
			<div className="flex flex-col gap-3 border border-gray-200 shadow-gray-400 rounded-lg w-[24rem] p-4 shadow-lg ml-10">
				<div className="text-theme">
					<p className="font-semibold text-sm">CARD NUMBER</p>
					<p className="text-sm text-gray-600">XXXX-XXXX-XXXX-XXXX</p>
				</div>
				<div className="w-full h-[1px] bg-gray-300"></div>
				<div className="text-theme">
					<p className="font-semibold text-sm">Name On Card</p>
					<p className="text-sm text-gray-600">Eg: John Doe</p>
				</div>
				<div className="w-full h-[1px] bg-gray-300"></div>
				<div className="flex justify-between items-center">
					<div className="text-theme">
						<p className="font-semibold text-sm">VALID UP TO</p>
						<p className="text-sm text-gray-600">MM/YY</p>
						<div className="w-full h-[1px] mt-2 bg-gray-300"></div>
					</div>

					<div className="text-theme">
						<p className="font-semibold text-sm">CVV</p>
						<p className="text-sm text-gray-600">***</p>
						<div className="w-full h-[1px] mt-2 bg-gray-300"></div>
					</div>
					<div className="w-32">
						<img
							src="https://media.istockphoto.com/id/1151397537/vector/emv-chip-icon-for-bank-plastic-credit-or-debit-charge-card-vector-illustration.jpg?s=612x612&w=0&k=20&c=y3ik8F80JuXPbxVcC7Xey4iJ_xpc-t2YzEy80s5jhx0="
							alt=""
						/>
					</div>
				</div>
			</div>
			<div className="flex items-center mt-5 gap-2">
				<input type="checkbox" name="" id="" />
				<p className="text-theme font-semibold text-sm">
					Securely Save card details (your CVV won't be saved)
				</p>
			</div>
			<div className="mt-5 flex items-center gap-2 justify-center">
				<div className="w-20 border border-gray-300 p-1 shadow-lg shadow-gray-400 rounded-lg">
					<img
						src="https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg"
						alt=""
					/>
				</div>
				<div className="w-20 border border-gray-300 p-1 shadow-lg shadow-gray-400 rounded-lg">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png"
						alt=""
					/>
				</div>
				<div className="w-20 border h-[3.2rem] flex justify-center items-center border-gray-300 p-1 shadow-lg shadow-gray-400 rounded-lg">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/0/0f/RuPay-Logo.png?20170423140208"
						alt=""
					/>
				</div>
				<div className="w-20 border border-gray-300 p-1 shadow-lg shadow-gray-400 rounded-lg">
					<img
						src="https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg"
						alt=""
					/>
				</div>
				<div className="w-20 border border-gray-300 p-1 shadow-lg shadow-gray-400 rounded-lg">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png"
						alt=""
					/>
				</div>
			</div>
			<div className="flex justify-center items-center mt-5">
				<p className="font-semibold text-theme text-sm">
					Your transactions are 100% secure
				</p>
			</div>
			<div className="flex justify-center items-center">
				<button className="font-bold text-white bg-theme px-5 py-2 mt-2 rounded-lg w-1/2">
					Pay
				</button>
			</div>
		</div>
	);
}

function Tab2Content() {
	return (
		<div className="w-full flex flex-col justify-between items-center space-y-10 mt-10 ">
			<div className="w-40">
				<img
					src="https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.png"
					alt=""
				/>
			</div>
			<div>
				<p>Link your Paytm wallet associated with your mobile number</p>
			</div>
			<button className="font-semibold rounded-lg text-white px-4 w-1/2 py-2 bg-[#14bef0]">
				Send OTP
			</button>
		</div>
	);
}

function Tab3Content() {
	return (
		<div className="w-full flex flex-col justify-between items-center space-y-8 mt-10 ">
			<div className="w-40">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1280px-UPI-Logo-vector.svg.png"
					alt=""
				/>
			</div>
			<div className="bg-gray-300 flex items-center gap-5 p-4 rounded-lg">
				<img
					className="w-16 cursor-pointer"
					src="https://www.freepnglogos.com/uploads/qr-code-png/qr-code-code-logo-vector-eps-download-4.png"
					alt=""
				/>
				<div className="">
					<p className="font-semibold">Show QR Code </p>
					<p className="text-xs font-semibold text-gray-600">
						Scan the QR code using your UPI app
					</p>
				</div>
			</div>
			<p className="text-gray-500">OR</p>
			<div>
				<input type="text" name="" id="" placeholder="Enter UPI ID" />
			</div>
			<button className="font-semibold rounded-lg text-white px-4 w-1/2 py-2 bg-[#14bef0]">
				Pay
			</button>
		</div>
	);
}
function Tab4Content() {
	return (
		<div className="w-full flex flex-col justify-between items-center space-y-8 mt-10">
			<div className="w-72">
				<img
					src="https://lh3.googleusercontent.com/RkN2IcvWd4DWNTVbh8Ma2G77D42Gd5HP0Deydf9FmzbDUMxLNsmWUSE8k562PgEPKzmF_OGWIiySxhdLUdNcxJ3t8kc7JugTaAhHYA"
					alt=""
				/>
			</div>

			<div>
				<input type="text" name="" id="" placeholder="Enter UPI ID" />
			</div>
			<button className="font-semibold rounded-lg text-white px-4 w-1/2 py-2 bg-[#4285f4]">
				Pay
			</button>
		</div>
	);
}
function Tab5Content() {
	return (
		<div className="w-full flex flex-col justify-between items-center space-y-10 mt-10 ">
			<div className="w-72">
				<img
					src="https://download.logo.wine/logo/Amazon_Pay/Amazon_Pay-Logo.wine.png"
					alt=""
				/>
			</div>
			<div>
				<p>Tap on Pay to proceed with Amazon Pay</p>
			</div>
			<button className="font-semibold rounded-lg text-white px-4 w-1/2 py-2 bg-[#f79c34]">
				Pay
			</button>
		</div>
	);
}
function Tab6Content() {
	return (
		<div className="w-full flex flex-col justify-between items-center space-y-10 mt-10 ">
			<div className="w-40">
				<img
					src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-logo-icon.png"
					alt=""
				/>
			</div>
			<div>
				<p>Tap on Pay to proceed with PhonePe</p>
			</div>
			<button className="font-semibold rounded-lg text-white px-4 w-1/2 py-2 bg-[#5f259f]">
				Pay
			</button>
		</div>
	);
}
function Tab7Content() {
	return (
		<div className="">
			{/* <div>Search for your bank : </div> */}
			<TextField
				className="mb-8"
				id="filled-search"
				label="Search For Your Bank"
				type="search"
				variant="filled"
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<Search />
						</InputAdornment>
					),
				}}
			/>
			<p className="font-semibold">Select from Popular Banks:</p>
			<div className="grid grid-cols-2 gap-7 mt-8">
				<div className="flex items-center gap-2 text-sm font-semibold">
					<input type="radio" name="" id="" />
					<img
						className="w-4"
						src="https://companieslogo.com/img/orig/HDB-bb6241fe.png?t=1633497370"
						alt=""
					/>
					<p>HDFC Bank</p>
				</div>
				<div className="flex items-center gap-2 text-sm font-semibold">
					<input type="radio" name="" id="" />
					<img
						className="w-4"
						src="https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg"
						alt=""
					/>
					<p>State Bank Of India</p>
				</div>
				<div className="flex items-center gap-2 text-sm font-semibold">
					<input type="radio" name="" id="" />
					<img
						className="w-4"
						src="https://grdp.co/cdn-cgi/image/width=500,height=500,quality=50,f=auto/https://gs-post-images.grdp.co/2020/6/71-718369_download-icici-bank-logo-hd-png-clipart-2-img1592917535563-78.png-rs-high-webp.png"
						alt=""
					/>
					<p>ICICI Bank</p>
				</div>
				<div className="flex items-center gap-2 text-sm font-semibold">
					<input type="radio" name="" id="" />
					<img
						className="w-4"
						src="https://companieslogo.com/img/orig/AXISBANK.BO-8f59e95b.png?t=1672905040"
						alt=""
					/>
					<p>Axis Bank</p>
				</div>
				<div className="flex items-center gap-2 text-sm font-semibold">
					<input type="radio" name="" id="" />
					<img
						className="w-4"
						src="https://companieslogo.com/img/orig/KOTAKBANK.NS-36440c5e.png?t=1593960269"
						alt=""
					/>
					<p>Kotak Bank</p>
				</div>
			</div>
			<div className="flex w-full justify-center items-end mt-8">
				<button className="font-semibold rounded-lg text-white px-4 w-1/2 py-2 bg-[#4285f4]">
					Pay
				</button>
			</div>
		</div>
	);
	// }
	// function Tab8Content() {
	// 	return <p>Tab 3 content goes here</p>;
}
