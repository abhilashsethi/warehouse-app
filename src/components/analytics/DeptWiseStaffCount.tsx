import dynamic from "next/dynamic";
import React from "react";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const DeptWiseStaffCount = ({
	type,
	text = "",
}: {
	type: "bar" | "area" | "line" | "pie" | "donut";
	text?: string;
}) => {
	const options = {
		labels: [
			"Nurses",
			"Pharmacists",
			"Accountants",
			"Laboratorist",
			"Receptionist",
			"Admin",
		],
		series: [120, 40, 30, 80, 50, 20],
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
			text: "All Users",
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
				series: [120, 40, 30, 80, 50, 20],
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

				labels: [
					"Nurses",
					"Pharmacists",
					"Accountants",
					"Laboratorist",
					"Receptionist",
					"Admin",
				],

				// colors: ["#db2777", "#C04000", "#E97451", "#F2D2BD"],
				colors: [
					"#775dd0",
					"#ff4560",
					"#feb019",
					"#00e396",
					"#008ffb",
					"#db2777",
				],

				title: {
					text: "All users",
					floating: true,
					offsetY: -5,
					offsetX: -50,
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

export default DeptWiseStaffCount;
