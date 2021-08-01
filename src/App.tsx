import { Fragment, useState, useContext } from "react";
import "./App.css";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/styles/makeStyles";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from "@material-ui/icons/Close";
import { Selection, EventCard } from "./components";
import { useFetch } from "./utils/useFetch";
import { AppContext } from "./utils/globalState/store";

const App = () => {
	const useStyles = makeStyles(() => ({
		main: {
			minHeight: "100vh",
			width: "100vw",
			background: "#f7f7f7",
			display: "flex",
		},
		innerBox: {
			minHeight: "50%",
			width: "30%",
			border: "1px solid black",
			margin: "auto",
		},
		icon: {
			cursor: "pointer",
		},
		drawerBox: {
			width: "35vh",
		},
	}));

	const classes = useStyles();

	const [open, setOpen] = useState<boolean>(false);

	const toggleDrawer = (): void => {
		setOpen(!open);
	};

	useFetch();

	//context
	const { state } = useContext(AppContext);

	const { data, selections } = state;

	console.log("state", state);

	return (
		<Fragment>
			<Box className={classes.main}>
				<Box className={classes.innerBox}>
					<Box border={1} display="flex" justifyContent="flex-end" padding={1}>
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
			</Box>
			<Drawer anchor={"right"} open={open} onClose={toggleDrawer}>
				<Box p={4} className={classes.drawerBox}>
					<Box display="flex" justifyContent="flex-end">
						<CloseIcon
							onClick={toggleDrawer}
							fontSize="large"
							className={classes.icon}
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
