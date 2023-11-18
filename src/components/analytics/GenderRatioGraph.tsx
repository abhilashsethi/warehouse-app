import dynamic from "next/dynamic";
import { useState } from "react";
import React from "react";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const GenderRatioGraph = ({
	type,
	text = "",
}: {
	type: "bar" | "area" | "line" | "pie";
	text?: string;
}) => {
	const [monthlyData, setMonthlyData] = useState([]);

	let mounted = false;

	const options = {
		series: [3, 2],
		chart: {
			width: 380,
			type: "pie",
		},
		labels: ["Male", "Female"],
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200,
					},
					legend: {
						position: "bottom",
					},
				},
			},
		],
		title: {
			text: "Doctor's gender ratio",
			floating: true,
			offsetY: -6,
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
				series: [3, 2],
				chart: {
					width: 380,
					type: "pie",
				},
				labels: ["Male", "Female"],
				responsive: [
					{
						breakpoint: 480,
						options: {
							chart: {
								width: 200,
							},
							legend: {
								position: "bottom",
							},
						},
					},
				],
				title: {
					text: "Doctor's gender ratio",
					floating: true,
					offsetY: -6,
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

export default GenderRatioGraph;
