import dynamic from "next/dynamic";
import { useState } from "react";
import React from "react";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const MonthlyAppointmentsChart = ({
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
				name: "Total Appointments",
				data: [120, 80, 100, 60, 130, 90, 100, 110, 70, 90, 80, 50],
			},
			{
				name: "Upcoming Appointments",
				data: [70, 20, 70, 40, 40, 30, 30, 80, 20, 70, 20, 25],
			},
			{
				name: "Previous Appointments",
				data: [50, 60, 30, 20, 90, 60, 70, 30, 50, 20, 60, 25],
			},
		],
		chart: {
			type: "bar",
			height: 350,
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: "75%",
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
		title: {
			text: "Appointment Analytics",
			floating: true,
			offsetY: -6,
			margin: 30,
			offsetX: -70,
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
						name: "Total Appointments",
						data: [120, 80, 100, 60, 130, 90, 100, 110, 70, 90, 80, 50],
					},
					{
						name: "Upcoming Appointments",
						data: [70, 20, 70, 40, 40, 30, 30, 80, 20, 70, 20, 25],
					},
					{
						name: "Previous Appointments",
						data: [50, 60, 30, 20, 90, 60, 70, 30, 50, 20, 60, 25],
					},
				],
				chart: {
					type: "bar",
					height: 350,
				},
				plotOptions: {
					bar: {
						horizontal: false,
						columnWidth: "75%",
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
							return "" + val + " appointments";
						},
					},
				},
				title: {
					text: "Appointment Analytics",
					floating: true,
					offsetY: -6,
					margin: 30,
					offsetX: -70,
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

export default MonthlyAppointmentsChart;
