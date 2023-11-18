import React from "react";
import dynamic from "next/dynamic";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const MonthWiseStaffAvl = ({
	type,
	text = "",
}: {
	type: "bar" | "area" | "line" | "pie" | "donut";
	text?: string;
}) => {
	const options = {
		series: [
			{
				name: "Present",
				data: [44, 55, 41, 67, 22, 43, 21, 49, 32, 40, 50, 45],
			},
			{
				name: "Absent",
				data: [13, 23, 20, 8, 13, 27, 33, 12, 15, 13, 10, 7],
			},
		],
		chart: {
			type: "bar",
			height: 350,
			stacked: true,
			stackType: "100%",
		},
		title: {
			text: "Users Availability",
			floating: true,
			offsetY: -5,
			offsetX: -50,
			align: "center",
			style: {
				color: "#444",
			},
		},
		responsive: [
			{
				breakpoint: 480,
				options: {
					legend: {
						position: "bottom",
						offsetX: -10,
						offsetY: 0,
					},
				},
			},
		],
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
		fill: {
			opacity: 1,
		},
		legend: {
			position: "right",
			offsetX: 0,
			offsetY: 50,
		},
	};

	return (
		<ApexCharts
			height={"500"}
			options={{
				series: [
					{
						name: "Present",
						data: [44, 55, 41, 67, 22, 43, 21, 49, 32, 40, 50, 45],
					},
					{
						name: "Absent",
						data: [13, 23, 20, 8, 13, 27, 33, 12, 15, 13, 10, 7],
					},
				],
				chart: {
					type: "bar",
					height: 350,
					stacked: true,
					stackType: "100%",
				},
				title: {
					text: "Users Availability",
					floating: true,
					offsetY: -5,
					offsetX: -50,
					align: "center",
					style: {
						color: "#444",
					},
				},
				responsive: [
					{
						breakpoint: 480,
						options: {
							legend: {
								position: "bottom",
								offsetX: -10,
								offsetY: 0,
							},
						},
					},
				],
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
				fill: {
					opacity: 1,
				},
				legend: {
					position: "right",
					offsetX: 0,
					offsetY: 50,
				},
			}}
			series={options.series}
			type={type}
		/>
	);
};

export default MonthWiseStaffAvl;
