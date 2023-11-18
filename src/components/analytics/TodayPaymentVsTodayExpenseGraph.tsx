import dynamic from "next/dynamic";
import { useState } from "react";
import React from "react";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const TodayPaymentVsTodayExpenseGraph = ({
	type,
	text = "",
}: {
	type: "bar" | "area" | "line" | "pie";
	text?: string;
}) => {
	const [monthlyData, setMonthlyData] = useState([]);

	let mounted = false;

	const options = {
		series: [45, 18],
		chart: {
			width: 380,
			type: "pie",
		},
		labels: ["Payment", "Expense"],
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
			text: "Today Payment Vs Today Expense",
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
				series: [45, 18],
				chart: {
					width: 380,
					type: "pie",
				},
				labels: ["Payment", "Expense"],
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
					text: "Today Payment Vs Today Expense",
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

export default TodayPaymentVsTodayExpenseGraph;
