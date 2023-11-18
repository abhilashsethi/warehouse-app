import dynamic from "next/dynamic";
import { useState } from "react";
import React from "react";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const ClinicIncome = ({
	type,
	text = "",
}: {
	type: "bar" | "area" | "line";
	text?: string;
}) => {
	const [monthlyData, setMonthlyData] = useState([]);
	const months: any = {
		1: "JAN",
		2: "FEB",
		3: "MAR",
		4: "APR",
		5: "MAY",
		6: "JUN",
		7: "JUL",
		8: "AUG",
		9: "SEP",
		10: "OCT",
		11: "NOV",
		12: "DEC",
	};
	let mounted = false;

	const options = {
		series: [
			{
				name: "Net Profit",
				data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
			},
			{
				name: "Income",
				data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
			},
			{
				name: "Expenditure",
				data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
			},
		],
		chart: {
			type: "bar",
			height: 350,
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: "55%",
				endingShape: "rounded",
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			show: true,
			width: 2,
			colors: ["transparent"],
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
		},
		yaxis: {
			title: {
				// text: "$ (thousands)",
			},
		},
		fill: {
			opacity: 1,
		},
		tooltip: {
			// y: {
			//   formatter: function (val) {
			//     return "$ " + val + " thousands"
			//   }
			// }
		},
	};

	return (
		<ApexCharts
			height={"500"}
			options={{
				series: [
					{
						name: "Net Profit",
						data: [65, 78, 86, 44, 55, 57, 56, 61, 58, 63, 60, 66],
					},
					{
						name: "Income",
						data: [72, 80, 66, 76, 85, 101, 98, 87, 105, 91, 114, 94],
					},
					{
						name: "Expenditure",
						data: [25, 30, 32, 35, 41, 36, 26, 45, 48, 52, 53, 41],
					},
				],
				chart: {
					type: "bar",
					height: 350,
				},
				plotOptions: {
					bar: {
						horizontal: false,
						columnWidth: "55%",
						// endingShape: 'rounded'
					},
				},
				dataLabels: {
					enabled: false,
				},
				stroke: {
					show: true,
					width: 2,
					colors: ["transparent"],
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
				},
				yaxis: {
					title: {
						// text: "$ (thousands)",
					},
				},
				fill: {
					opacity: 1,
				},
				tooltip: {
					y: {
						formatter: function (val) {
							return "$ " + val + " thousands";
						},
					},
				},
			}}
			series={options.series}
			type={type}
		/>
	);
};

export default ClinicIncome;
