import {
	ChevronLeft,
	ExitToApp,
	ExpandLessRounded,
	ExpandMoreRounded,
} from "@mui/icons-material";
import {
	Box,
	Button,
	Collapse,
	IconButton,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Tooltip,
	Typography,
} from "@mui/material";
import { ICONS, LOGO } from "assets";
import { useMenuItems } from "hooks";
// import useAuth from "hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { CustomDrawer, CustomDrawerHeader } from "./custom";
// import { MAIN_LOGO } from 'assets/home'

type DrawerType = {
	onToggle?: () => void;
	open?: boolean;
	role: "ADMIN" | "MANAGER";
};

const Drawer = ({ open, onToggle, role }: DrawerType) => {
	const router = useRouter();
	// const { logOut } = useAuth();
	const [selectedSubMenu, setSelectedSubMenu] = useState("");
	const MenuItems = useMenuItems();

	return (
		<section className="dashboard-main-2">
			<CustomDrawer variant="permanent" open={open}>
				<CustomDrawerHeader>
					<div className="flex h-16 w-full items-center justify-between">
						<Link href="/">
							<img
								src={LOGO.src}
								alt=""
								className={`${open ? "h-16 w-full object-contain" : "hidden"}`}
							/>
						</Link>
						<IconButton onClick={onToggle}>
							{open ? <ChevronLeft /> : <ICONS.Menu className="" />}
						</IconButton>
					</div>
				</CustomDrawerHeader>
				{/* <Divider /> */}
				{/* Render Menu Items */}

				<List sx={{ mt: "1px" }} className="super-bold-drawer-font">
					{MenuItems?.map((item) => (
						<Fragment key={item.key}>
							<Tooltip
								title={item.title}
								followCursor
								arrow
								placement="top-end"
							>
								<ListItemButton
									onClick={() => {
										if (item?.route) return router?.push(item?.route);
										item?.submenus &&
											setSelectedSubMenu((prev) =>
												prev === item.key ? "" : item.key
											);
									}}
									className={
										router.asPath === item.route
											? "!rounded-r-[25px] !bg-[#0E89E2] !text-white !font-bold "
											: "!text-black !font-bold"
									}
									selected={
										item?.submenus
											? selectedSubMenu === item?.key
											: router?.asPath === item.route
									}
								>
									<ListItemIcon
										className={
											router.asPath === item.route ? " !text-white" : ""
										}
										sx={{
											minWidth: "32px",
											background: "transparent",
										}}
									>
										{item.icon}
									</ListItemIcon>
									{open && (
										<ListItemText>
											<Typography
												variant="body1"
												fontFamily={'Montserrat", sans-serif'}
												fontWeight={600}
												className="!font-semibold"
											>
												{item.title}
											</Typography>
										</ListItemText>
									)}
									{item?.submenus &&
										(selectedSubMenu === item?.key ? (
											<ExpandLessRounded />
										) : (
											<ExpandMoreRounded />
										))}
								</ListItemButton>
							</Tooltip>
							{item?.submenus && (
								<Collapse
									in={selectedSubMenu === item?.key}
									timeout="auto"
									unmountOnExit
								>
									<List component="div" disablePadding>
										{item?.submenus?.map((submenu: any) => (
											<ListItemButton
												onClick={() => router.push(submenu.route)}
												sx={{ pl: 4 }}
												selected={router.pathname === submenu.route}
												key={submenu?.key}
												className={
													router.asPath === submenu.route
														? "!bg-theme !text-white"
														: ""
												}
											>
												<ListItemIcon
													sx={{
														minWidth: "42px",
														background: "transparent",
													}}
													className={
														router.asPath === submenu.route
															? "  !text-white"
															: ""
													}
												>
													{submenu?.icon}
												</ListItemIcon>

												{open && (
													<ListItemText
														// primary={submenu?.title}
														sx={{
															whiteSpace: "break-spaces",
														}}
													>
														<Typography
															variant="body2"
															fontFamily={'Montserrat", sans-serif'}
															className="!font-semibold"
														>
															{submenu?.title}
														</Typography>
													</ListItemText>
												)}
											</ListItemButton>
										))}
									</List>
								</Collapse>
							)}
						</Fragment>
					))}

					<Box hidden={open}>
						<Tooltip
							title={"Click Here To Logout"}
							followCursor
							arrow
							placement="top-end"
						>
							<ListItemButton>
								<ListItemIcon>
									<ExitToApp />
								</ListItemIcon>
								<ListItemText primary={"Logout"} />
							</ListItemButton>
						</Tooltip>
					</Box>
				</List>
				<Box
					sx={{ textAlign: "center" }}
					className={`${
						open ? "flex" : "hidden"
					} flex-col items-center gap-2 pt-5`}
				>
					<div className="py-5">
						<Button
							// onClick={() => logOut()}
							variant="contained"
							startIcon={<ExitToApp />}
							color="error"
							className="!bg-[#ab3571]"
						>
							Logout
						</Button>
					</div>
				</Box>
			</CustomDrawer>
		</section>
	);
};

export default Drawer;
