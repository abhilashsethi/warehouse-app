import dynamic from "next/dynamic";
import { useState } from "react";
import React from "react";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const IncomeVsExpence = ({
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
		labels: ["Income", "Expense"],
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
				labels: ["Income", "Expense"],
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
			}}
			series={options.series}
			type={type}
		/>
	);
};

export default IncomeVsExpence;
