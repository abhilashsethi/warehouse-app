import React, { useState } from "react";
import { useRouter } from "next/router";
import moment from "moment";

const AvailableSlot = () => {
	const router = useRouter();
	const intime = "10:00 Am";
	const outtime = "01:00 Pm";
	const [result, setResult] = useState<any>([]);
	console.log("Array", result);

	function intervals(startString: any, endString: any) {
		const start = moment(startString, "hh:mm a");
		const end = moment(endString, "hh:mm a");
		start.minutes(Math.ceil(start.minutes() / 15) * 15);

		const current = moment(start);

		while (current <= end) {
			if (result.includes(current.format("hh:mm a"))) {
				return null;
			} else {
				result.push(current.format("hh:mm a"));
				current.add(15, "minutes");
			}
		}

		return result;
	}

	intervals(intime, outtime);

	const eIntime = "02:00 Pm";
	const eOuttime = "05:00 Pm";
	const [result2, setResult2] = useState<any>([]);
	console.log("Array", result2);

	function eIntervals(startString: any, endString: any) {
		const start = moment(startString, "hh:mm a");
		const end = moment(endString, "hh:mm a");
		start.minutes(Math.ceil(start.minutes() / 15) * 15);

		const current = moment(start);

		while (current <= end) {
			if (result2.includes(current.format("hh:mm a"))) {
				return null;
			} else {
				result2.push(current.format("hh:mm a"));
				current.add(15, "minutes");
			}
		}

		return result2;
	}

	eIntervals(eIntime, eOuttime);

	return (
		<>
			<p className="text-theme font-bold py-2">Available Slot *</p>
			<div className="border border-theme p-7 rounded-md ">
				<div className="">
					<p className="pb-3 text-theme font-semibold">Morning Session</p>
					<div className=" grid md:grid-cols-4 grid-cols-3 gap-x-7 gap-y-4 justify-items-center">
						{result && result.length > 0
							? result.map((time: any, index: any) => {
									return (
										<div
											className={`rounded-md text-theme cursor-pointer border border-theme w-24 p-2 hover:scale-105 transition-all ease-in-out duration-300 hover:bg-theme hover:text-white`}
											key={index}
										>
											<p
												className=""
												// onClick={() => router.push("/user/clinic-appointment")}
											>
												{time}
											</p>
										</div>
									);
							  })
							: null}
					</div>
				</div>

				<div className="pt-5">
					<p className="py-3 text-theme font-semibold">Evening Session</p>
					<div className=" grid md:grid-cols-4 grid-cols-3 gap-x-7 gap-y-4 justify-items-center">
						{result2 && result2.length > 0
							? result2.map((time: any, index: any) => {
									return (
										<div
											className={`rounded-md text-theme cursor-pointer border border-theme w-24 p-2 hover:scale-105 transition-all ease-in-out duration-300 hover:bg-theme hover:text-white`}
											key={index}
										>
											<p
												className=""
												// onClick={() => router.push("/user/clinic-appointment")}
											>
												{time}
											</p>
										</div>
									);
							  })
							: null}
					</div>
				</div>
			</div>
		</>
	);
};

export default AvailableSlot;
