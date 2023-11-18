import dynamic from "next/dynamic";
import React from "react";
import { useEffect, useState } from "react";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const MonthWisePharmacySales = ({
	type,
	text = "",
}: {
	type: "bar" | "area" | "line";
	text?: string;
}) => {
	const [monthlyData, setMonthlyData] = useState([]);
	const months: any = {
		1: "Jan",
		2: "Feb",
		3: "Mar",
		4: "Apr",
		5: "May",
		6: "Jun",
		7: "Jul",
		8: "Aug",
		9: "Sep",
		10: "Oct",
		11: "Nov",
		12: "Dec",
	};
	let mounted = false;

	const options = {
		series: [
			{
				name: "Sales in ₹",
				data: [
					70000, 75000, 60000, 100000, 80000, 70000, 110000, 90000, 50000,
					80000, 60000, 80000,
				],
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
			categories: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec",
			],
			position: "bottom",
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
			text: "Month-Wise Sales Report",
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
						name: "Sales in ₹",
						data: [
							70000, 75000, 60000, 10000, 80000, 70000, 110000, 90000, 50000,
							80000, 60000, 80000,
						],
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
					categories: [
						"Jan",
						"Feb",
						"Mar",
						"Apr",
						"May",
						"Jun",
						"Jul",
						"Aug",
						"Sep",
						"Oct",
						"Nov",
						"Dec",
					],
					position: "bottom",
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
					text: "Month-Wise Sales Report",
					floating: true,
					offsetY: 1,
					offsetX: -10,
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

export default MonthWisePharmacySales;
