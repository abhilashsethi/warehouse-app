import dynamic from "next/dynamic";
import { useState } from "react";
import React from "react";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const Clinics = ({
	type,
	text = "",
}: {
	type: "bar" | "area" | "line" | "pie";
	text?: string;
}) => {
	const [monthlyData, setMonthlyData] = useState([]);

	let mounted = false;

	const options = {
		series: [80, 20],
		chart: {
			width: 380,
			type: "pie",
		},
		labels: ["Active", "Inactive"],
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
			text: "Active Clinics",
			floating: true,
			offsetY: -6,
			offsetX: -1,
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
				series: [80, 20],
				chart: {
					width: 380,
					type: "pie",
				},
				labels: ["Active", "Inactive"],
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
					text: "Active Clinics",
					floating: true,
					offsetY: -6,
					offsetX: 10,
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

export default Clinics;
