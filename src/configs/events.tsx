export const EVENTS = [
	// {
	// 	event_id: 1,
	// 	title: "Event 1",
	// 	start: new Date(new Date(new Date().setHours(9)).setMinutes(0)),
	// 	end: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
	// 	disabled: true,
	// 	admin_id: [1, 2, 3, 4],
	// },
	{
		event_id: 2,
		title: "Appointment 2",
		start: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
		end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
		admin_id: 2,
		color: "#50b500",
	},
	{
		event_id: 3,
		title: "Appointment 3",
		start: new Date(new Date(new Date().setHours(11)).setMinutes(0)),
		end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
		admin_id: 1,
		editable: false,
		deletable: false,
	},
	{
		event_id: 4,
		title: "Appointment 4",
		start: new Date(
			new Date(new Date(new Date().setHours(9)).setMinutes(30)).setDate(
				new Date().getDate() - 2
			)
		),
		end: new Date(
			new Date(new Date(new Date().setHours(11)).setMinutes(0)).setDate(
				new Date().getDate() - 2
			)
		),
		admin_id: 2,
		color: "#900000",
	},
	{
		event_id: 5,
		title: "Appointment 5",
		start: new Date(
			new Date(new Date(new Date().setHours(10)).setMinutes(30)).setDate(
				new Date().getDate() - 2
			)
		),
		end: new Date(
			new Date(new Date(new Date().setHours(14)).setMinutes(0)).setDate(
				new Date().getDate() - 2
			)
		),
		admin_id: 2,
		editable: true,
	},
	// {
	// 	event_id: 6,
	// 	title: "Event 6",
	// 	start: new Date(
	// 		new Date(new Date(new Date().setHours(10)).setMinutes(30)).setDate(
	// 			new Date().getDate() - 4
	// 		)
	// 	),
	// 	end: new Date(new Date(new Date().setHours(14)).setMinutes(0)),
	// 	admin_id: 2,
	// },
];
