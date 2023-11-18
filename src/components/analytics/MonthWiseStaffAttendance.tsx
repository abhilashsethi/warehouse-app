import dynamic from "next/dynamic";
import React from "react";
import { useEffect, useState } from "react";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const MonthWiseStaffAttendance = ({
	type,
	text = "",
}: {
	type: "bar" | "area" | "line";
	text?: string;
}) => {
	const [monthlyData, setMonthlyData] = useState([]);
	const months: any = {
		1: "Nurse",
		2: "Laboratorist",
		3: "Accountant",
		4: "Receptionist",
	};
	let mounted = false;

	const options = {
		series: [
			{
				name: "Attendance",
				data: [50, 40, 60, 40],
			},
		],
		chart: {
			height: 350,
			type: "bar",
		},
		plotOptions: {
			bar: {
				borderRadius: 10,
				dataLabels: {
					position: "top", // top, center, bottom
				},
			},
		},
		dataLabels: {
			enabled: true,
			// formatter: function (val) {
			// 	return val + "%";
			// },
			offsetY: -20,
			style: {
				fontSize: "12px",
				colors: ["#304758"],
			},
		},

		xaxis: {
			categories: ["Nurse", "Laboratorist", "Accountant", "Receptionist"],
			position: "top",
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			crosshairs: {
				fill: {
					type: "gradient",
					gradient: {
						colorFrom: "#D8E3F0",
						colorTo: "#BED1E6",
						stops: [0, 100],
						opacityFrom: 0.4,
						opacityTo: 0.5,
					},
				},
			},
			tooltip: {
				enabled: true,
			},
		},
		yaxis: {
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			labels: {
				show: false,
				// formatter: function (val) {
				// 	return val + "%";
				// },
			},
		},
		title: {
			text: "Staff Attendance",
			floating: true,
			offsetY: 130,
			align: "center",
			style: {
				color: "#444",
			},
		},
	};

	return (
		<ApexCharts
			height={"500"}
			options={{
				series: [
					{
						name: "Attendance",
						data: [50, 40, 60, 40],
					},
				],
				chart: {
					height: 350,
					type: "bar",
				},
				plotOptions: {
					bar: {
						borderRadius: 10,
						dataLabels: {
							position: "top", // top, center, bottom
						},
					},
				},
				dataLabels: {
					enabled: true,
					// formatter: function (val) {
					// 	return val + "%";
					// },
					offsetY: -20,
					style: {
						fontSize: "12px",
						colors: ["#304758"],
					},
				},

				xaxis: {
					categories: ["Nurse", "Laboratorist", "Accountant", "Receptionist"],
					position: "top",
					axisBorder: {
						show: false,
					},
					axisTicks: {
						show: false,
					},
					crosshairs: {
						fill: {
							type: "gradient",
							gradient: {
								colorFrom: "#D8E3F0",
								colorTo: "#BED1E6",
								stops: [0, 100],
								opacityFrom: 0.4,
								opacityTo: 0.5,
							},
						},
					},
					tooltip: {
						enabled: true,
					},
				},
				yaxis: {
					axisBorder: {
						show: false,
					},
					axisTicks: {
						show: false,
					},
					labels: {
						show: false,
						// formatter: function (val) {
						// 	return val + "%";
						// },
					},
				},
				title: {
					text: "Staff Attendance",
					floating: true,
					offsetY: 480,
					align: "center",
					style: {
						color: "#444",
					},
				},
			}}
			series={options.series}
			type={type}
		/>
	);
};

export default MonthWiseStaffAttendance;
