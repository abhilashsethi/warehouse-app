import React, { useState } from "react";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const PatientSurvey = ({
	type,
	text = "",
}: {
	type: "bar" | "area" | "line" | "pie" | "donut" | "radialBar" | "area";
	text?: string;
}) => {
	const options = {
		series: [
			{
				name: "series1",
				data: [31, 40, 28, 51, 42, 109, 100],
			},
			{
				name: "series2",
				data: [11, 32, 45, 32, 34, 52, 41],
			},
		],
		chart: {
			height: 350,
			type: "area",
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: "smooth",
		},
		xaxis: {
			type: "category",
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
		tooltip: {
			x: {
				format: "dd/MM/yy HH:mm",
			},
		},
		title: {
			text: "Patient Survey",
			floating: true,
			offsetY: -3,
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
						name: "series1",
						data: [31, 40, 28, 51, 42, 109, 100],
					},
					{
						name: "series2",
						data: [11, 32, 45, 32, 34, 52, 41],
					},
				],
				chart: {
					height: 350,
					type: "area",
				},
				dataLabels: {
					enabled: false,
				},
				stroke: {
					curve: "smooth",
				},
				xaxis: {
					type: "category",
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
				tooltip: {
					x: {
						format: "dd/MM/yy HH:mm",
					},
				},
				title: {
					text: "Patient Survey",
					floating: true,
					offsetY: -3,
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

export default PatientSurvey;
