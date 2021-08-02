import { Fragment, useState, useContext } from "react";
import "./App.css";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from "@material-ui/icons/Close";
import { Selection, EventCard, Loader, Error } from "./components";
import { useFetch } from "./utils/useFetch";
import { AppContext } from "./utils/globalState/store";

const App = () => {
	const useStyles = makeStyles((theme) => ({
		main: {
			minHeight: "100vh",
			width: "100vw",
			background: "#f7f7f7",
			display: "flex",
			[theme.breakpoints.down("sm")]: {
				minHeight: "auto",
			},
		},
		innerBox: {
			minHeight: "50%",
			width: "30%",
			margin: "auto",
			[theme.breakpoints.down("sm")]: {
				height: "100vh",
				width: "100%",
			},
		},
		icon: {
			cursor: "pointer",
			color: "whitesmoke",
		},
		closeIcon: {
			cursor: "pointer",
		},
		drawerBox: {
			width: "35vh",
		},
		header: {
			borderTopLeftRadius: "4px",
			borderTopRightRadius: "4px",
		},
	}));

	const classes = useStyles();

	const [open, setOpen] = useState<boolean>(false);

	const toggleDrawer = (): void => {
		setOpen(!open);
	};

	//hook to fetch data from external api
	useFetch();

	//context
	const { state } = useContext(AppContext);

	const { data, selections, status } = state;

	return (
		<Fragment>
			<Box className={classes.main}>
				{status === "fetching" && <Loader />}
				{status === "error" && <Error />}
				{data.length !== 0 && (
					<Box className={classes.innerBox} bgcolor="white" borderRadius={4}>
						<Box
							display="flex"
							justifyContent="flex-end"
							padding={1}
							bgcolor="#2E8B57"
							className={classes.header}
						>
							<MenuIcon
								fontSize="large"
								className={classes.icon}
								onClick={toggleDrawer}
							/>
						</Box>
						<Box padding={3}>
							{data.map((item) => (
								<EventCard
									key={item.id}
									name={item.name}
									teamSelections={item?.markets?.[0]?.selections}
									playerSelections={item?.markets?.[1]?.selections}
									markets={item.markets}
									teamMarketID={item?.markets?.[0]?.id}
									playerMarketID={item?.markets?.[1]?.id}
								/>
							))}
						</Box>
					</Box>
				)}
			</Box>
			<Drawer anchor={"right"} open={open} onClose={toggleDrawer}>
				<Box p={4} className={classes.drawerBox}>
					<Box display="flex" justifyContent="flex-end">
						<CloseIcon
							onClick={toggleDrawer}
							fontSize="large"
							className={classes.closeIcon}
						/>
					</Box>
					{selections.map((selection) => (
						<Selection {...selection} key={selection.id} />
					))}
				</Box>
			</Drawer>
		</Fragment>
	);
};

export default App;
