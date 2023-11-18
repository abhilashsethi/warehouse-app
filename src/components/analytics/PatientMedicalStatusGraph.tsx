import dynamic from "next/dynamic";
import { useState } from "react";
import React from "react";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const PatientMedicalStatusGraph = ({
	type,
	text = "",
}: {
	type: "bar" | "area" | "line" | "pie";
	text?: string;
}) => {
	const [monthlyData, setMonthlyData] = useState([]);

	let mounted = false;

	const options = {
		series: [37, 45, 18],
		chart: {
			width: 380,
			type: "pie",
		},
		labels: ["Cured", "Under Treatment", "Newly Referred"],
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
			text: "Patient Medical Status",
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
				series: [37, 45, 18],
				chart: {
					width: 380,
					type: "pie",
				},
				labels: ["Cured", "Under Treatment", "Newly Referred"],
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
					text: "Patient Medical Status",
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

export default PatientMedicalStatusGraph;
