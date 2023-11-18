import React, { useState } from "react";

const Sidebar = () => {
	const [selectedTab, setSelectedTab] = useState(0);

	const tabs = [
		{ name: "Tab 1", content: <Tab1Content /> },
		{ name: "Tab 2", content: <Tab2Content /> },
		{ name: "Tab 3", content: <Tab3Content /> },
	];

	return (
		<div className="flex h-screen">
			{/* Sidebar */}
			<div className="w-1/4 bg-gray-200">
				<ul className="space-y-2">
					{/* Map over tabs array and render each tab */}
					{tabs.map((tab, index) => (
						<li
							key={index}
							className={`p-2 cursor-pointer ${
								index === selectedTab ? "bg-gray-300" : ""
							}`}
							onClick={() => setSelectedTab(index)}
						>
							{tab.name}
						</li>
					))}
				</ul>
			</div>
			{/* Content */}
			<div className="w-3/4 p-4">{tabs[selectedTab].content}</div>
		</div>
	);
};

export default Sidebar;

// Example content components
function Tab1Content() {
	return <p>Tab 1 content goes here</p>;
}

function Tab2Content() {
	return <p>Tab 2 content goes here</p>;
}

function Tab3Content() {
	return <p>Tab 3 content goes here</p>;
}
