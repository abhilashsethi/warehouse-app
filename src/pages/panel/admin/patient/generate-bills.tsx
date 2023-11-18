import { Card, Container, Typography } from "@mui/material";
import { useWarehouseData } from "hooks";
import AdminLayout from "layouts/admin";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const GenerateBills = () => {
	const [articleValue, setArticleValue] = useState("");
	const router = useRouter();
	const [image, setImage] = useState<any>("");
	const [countryDetails, setCountryDetails] = useState({
		code: "IN",
		label: "India",
		phone: "91",
	});

	const { warehouse, setWareHouse } = useWarehouseData();
	const [newData, setNewData] = useState<any>();
	console.log(router?.query?.id);
	console.log(newData);
	useEffect(() => {
		const data = localStorage.getItem("warehouseData");
		const warehouseData = data ? JSON.parse(data) : null;
		console.log(data);
		setNewData(warehouseData);
	}, []);
	const wData = newData?.find((item: any) => item?.id == router?.query?.id);
	console.log(wData);

	return (
		<AdminLayout title="Add Doctor">
			<Container
				maxWidth="md"
				// style={{
				//   width: '40vw',
				//   marginTop: '5vh',
				// }}
			>
				<Card className="m-auto w-[95%] !p-6 border-t-4 border-t-theme border-b-4 dashboard-card-shadow border-b-theme">
					<Typography
						align="center"
						// color="text.primary"
						variant="h5"
						className="!mt-2 text-theme font-bold"
						sx={{ marginBottom: 3 }}
					>
						Warehouse Details
					</Typography>
					<div>
						<div className="col-span-6 font-semibold">
							Warehouse Name :{" "}
							<span className="font-normal">{wData?.name}</span>
						</div>
						<div className="col-span-6 font-semibold">
							Warehouse code :{" "}
							<span className="font-normal">{wData?.code}</span>
						</div>
						<div className="col-span-6 font-semibold">
							Warehouse city :{" "}
							<span className="font-normal">{wData?.city}</span>
						</div>

						<div className="col-span-6 font-semibold">
							Space_available :{" "}
							<span className="font-normal">{wData?.space_available}</span>
						</div>
						<div className="col-span-6 font-semibold">
							Warehouse Type :{" "}
							<span className="font-normal">{wData?.type}</span>
						</div>
					</div>
				</Card>
			</Container>
		</AdminLayout>
	);
};

export default GenerateBills;
