import {
	Add,
	Close,
	Delete,
	HistoryEdu,
	NoteAdd,
	NoteAlt,
} from "@mui/icons-material";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	IconButton,
	TextField,
	Tooltip,
} from "@mui/material";
import moment from "moment";
import { useState } from "react";
import Swal from "sweetalert2";

interface Props {
	open: boolean;
	handleClose: any;
}
const notes = [
	{
		id: 1,
		content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quibusdam labore. Eius excepturi sunt vero, beatae ab nisi accusantium aspernatur expedita, quidem, doloremque ducimus quibusdam neque a porro veritatis! Labore?`,
	},
	{
		id: 2,
		content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio voluptatum placeat quibusdam tempore ipsa hic, odio sint veniam numquam laborum, minus qui vero beatae laudantium? Similique, impedit. Libero vero aspernatur dolores amet repellat id ea ipsum provident labore, corporis ut.`,
	},
];

// const notes: any[] = [];

const NotesDialogue = () => {
	const [open, setOpen] = useState<boolean>(false);

	const handleNote = () => {
		Swal.fire(`Success`, `Note Added Successfully!`, `success`);
	};
	const removeNote = () => {
		Swal.fire(`Success`, `Note Removed Successfully!`, `success`);
	};
	const [isNote, setIsNote] = useState(false);
	return (
		<>
			<Dialog
				onClose={() => setOpen(false)}
				aria-labelledby="customized-dialog-title"
				open={open}
			>
				<DialogTitle
					id="customized-dialog-title"
					sx={{ p: 2, minWidth: "18rem !important" }}
				>
					<div className="flex justify-center">
						<p className="text-center text-[1.1rem] font-bold text-theme te tracking-wide flex items-center gap-2">
							<HistoryEdu /> NOTES
						</p>
					</div>
					<IconButton
						aria-label="close"
						onClick={() => setOpen(false)}
						sx={{
							top: 10,
							right: 10,
							position: "absolute",
							color: (theme) => theme.palette.grey[500],
						}}
					>
						<Tooltip title="Close">
							<Close />
						</Tooltip>
					</IconButton>
				</DialogTitle>
				<DialogContent className="app-scrollbar" sx={{ p: 2 }}>
					<DialogContent className="app-scrollbar" sx={{ p: 2 }}>
						<div className="my-4 min-w-[25rem]">
							<div className="w-full border-2 border-dashed border-opacity-70 rounded-md border-theme mt-3 p-2 flex flex-col gap-3">
								{notes?.map((item) => (
									<div
										className="p-4 text-sm rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
										key={item?.id}
									>
										<div className="flex justify-between mb-2">
											<div className="h-6 w-6 rounded-full text-white bg-theme flex justify-center items-center shadow-md">
												{item?.id}
											</div>
											<p>{moment(new Date().toString()).format(`LLL`)}</p>
										</div>
										<p className="text-theme">{item?.content}</p>
										<div className="flex justify-end">
											<Tooltip title="Remove Note">
												<IconButton onClick={removeNote}>
													<Delete className="!text-red-600 !cursor-pointer" />
												</IconButton>
											</Tooltip>
										</div>
									</div>
								))}

								{isNote ? (
									<div className="p-4 text-sm rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
										<div className="flex justify-between mb-2">
											<p className="text-base text-theme font-semibold">
												Write a note
											</p>
											<Tooltip title="Close">
												<Close
													onClick={() => setIsNote(false)}
													className="!text-red-600 !text-[1.2rem] !cursor-pointer"
												/>
											</Tooltip>
										</div>
										<TextField
											multiline
											rows={3}
											fullWidth
											placeholder="Write Note here"
										/>
										<div className="flex justify-end mt-3">
											<button
												onClick={() => {
													handleNote();
													setIsNote(false);
												}}
												className="px-4 py-2 bg-whatsapp rounded-md text-white hover:scale-105 ease-in-out transition-all duration-200 shadow-md"
											>
												SUBMIT
											</button>
										</div>
									</div>
								) : null}
								<div className="flex justify-center mt-2">
									<button
										onClick={() => setIsNote((prev) => !prev)}
										className="px-4 py-2 bg-theme text-sm text-white rounded-md flex gap-1 items-center hover:scale-105 transition-all ease-in-out duration-300"
									>
										<Add className="!text-[1.3rem]" /> ADD NOTE
									</button>
								</div>
							</div>
						</div>
					</DialogContent>
				</DialogContent>
			</Dialog>
			<div className="flex justify-center mt-2">
				<button
					onClick={() => setOpen(true)}
					className="px-4 py-2 bg-theme text-sm text-white rounded-md flex gap-1 items-center hover:scale-105 transition-all ease-in-out duration-300"
				>
					<Tooltip title="Add Note">
						<NoteAlt className="!text-[1.5rem]" />
					</Tooltip>
				</button>
			</div>
		</>
	);
};

export default NotesDialogue;
