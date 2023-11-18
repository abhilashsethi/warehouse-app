import React, { useState } from "react";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const PatientVisitByGender = ({
	type,
	text = "",
}: {
	type: "bar" | "area" | "line" | "pie" | "donut";
	text?: string;
}) => {
	const options = {
		labels: ["Male", "Female", "Other"],
		series: [120, 80, 40],
		chart: {
			type: "donut",
		},
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
		colors: ["#b00b13", "#005d32"],
		title: {
			text: "Patient's Gender Ratio",
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
				series: [44, 55, 41, 17, 15],
				chart: {
					type: "donut",
				},
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

				labels: ["Male", "Female", "Other"],

				// colors: ["#db2777", "#C04000", "#E97451", "#F2D2BD"],

				title: {
					text: "Patient's Gender Ratio",
					floating: true,
					offsetY: -5,
					offsetX: 1,
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

export default PatientVisitByGender;
