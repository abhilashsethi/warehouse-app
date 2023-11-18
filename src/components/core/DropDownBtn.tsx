import { AccountCircle, EventNote, Logout } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/router";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import * as React from "react";

export default function DropDownBtn() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const router = useRouter();

	return (
		<React.Fragment>
			<Box
			// sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
			>
				{/* <Typography sx={{ minWidth: 100 }}></Typography>
				<Typography sx={{ minWidth: 100 }}></Typography> */}
				<Tooltip title="">
					<IconButton
						onClick={handleClick}
						size="small"
						// sx={{ ml: 2 }}
						aria-controls={open ? "account-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}
					>
						<Avatar
							variant="circular"
							className="!mr-0.5 !cursor-pointer !bg-[#014488] !p-0 !ml-0.5"
							sx={{
								mr: ".1vw",
								padding: "0px !important",
								backgroundColor: "Highlight",
								cursor: "pointer",
								color: "",
								width: 32,
								height: 32,
							}}
							// sx={{ width: 32, height: 32 }}
						>
							<AccountCircle fontSize="large" />
						</Avatar>
					</IconButton>
				</Tooltip>
			</Box>
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: "visible",
						filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
						mt: 1.5,
						"& .MuiAvatar-root": {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						"&:before": {
							content: '""',
							display: "block",
							position: "absolute",
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: "background.paper",
							transform: "translateY(-50%) rotate(45deg)",
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
			>
				<MenuItem onClick={() => router.push(`/user/my-appointments`)}>
					<Avatar
						variant="rounded"
						className="!mr-2 !cursor-pointer !bg-[#014488] !p-0 !ml-0.5"
						sx={{
							mr: ".1vw",
							padding: "0px !important",
							backgroundColor: "Highlight",
							cursor: "pointer",
							color: "",
						}}
					>
						<EventNote />
					</Avatar>
					My Appointments
				</MenuItem>
				<MenuItem>
					<Avatar
						variant="rounded"
						className="!mr-2 !cursor-pointer !bg-theme !p-0 !ml-0.5"
						sx={{
							mr: ".1vw",
							padding: "0px !important",
							backgroundColor: "Highlight",
							cursor: "pointer",
							color: "",
						}}
					>
						<Logout />
					</Avatar>
					Log Out
				</MenuItem>
			</Menu>
		</React.Fragment>
	);
}
