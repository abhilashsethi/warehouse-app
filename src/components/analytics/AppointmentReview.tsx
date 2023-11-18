import React, { useState } from "react";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const AppointmentReview = ({
	type,
	text = "",
}: {
	type: "bar" | "area" | "line" | "pie" | "donut" | "radialBar";
	text?: string;
}) => {
	const options = {
		labels: ["Offline", "Video Call", "Chat"],
		series: [85, 67, 83],
		chart: {
			height: 350,
			type: "radialBar",
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
		title: {
			text: "Appointment Review",
			floating: true,
			offsetY: 10,
			align: "center",
			style: {
				color: "#444",
			},
		},
		plotOptions: {
			radialBar: {
				dataLabels: {
					name: {
						fontSize: "22px",
					},
					value: {
						fontSize: "16px",
					},
					total: {
						show: true,
						label: "Total",
						// formatter: function (w) {
						//   By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
						// return 249
						// }
					},
				},
			},
		},
		// labels: ["Apples", "Oranges", "Bananas", "Berries"],
	};

	return (
		<ApexCharts
			height={"500"}
			options={{
				series: [85, 67, 83],
				chart: {
					height: 350,
					type: "radialBar",
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
				title: {
					text: "Appointment Review",
					floating: true,
					offsetY: 10,
					align: "center",
					style: {
						color: "#444",
					},
				},
				labels: ["Offline", "Video Call", "Chat"],
				plotOptions: {
					radialBar: {
						dataLabels: {
							name: {
								fontSize: "22px",
							},
							value: {
								fontSize: "16px",
							},
							total: {
								show: true,
								label: "Total",
								// formatter: function (w) {
								//   By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
								//   return 249
								// }
							},
						},
					},
				},
				// labels: ["Apples", "Oranges", "Bananas", "Berries"],
			}}
			series={options.series}
			type={type}
		/>
	);
};

export default AppointmentReview;
