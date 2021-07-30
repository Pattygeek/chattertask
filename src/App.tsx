import { Fragment, useState } from "react";
import "./App.css";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/styles/makeStyles";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from "@material-ui/icons/Close";

function App() {
	const useStyles = makeStyles(() => ({
		main: {
			height: "100vh",
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
		event: {
			border: "1px solid black",
			marginBottom: "20px",
			"&:last-child": {
				marginBottom: 0,
			},
		},
		button: {
			borderRadius: "4px",
			border: "1px solid black",
			textAlign: "center",
			padding: "6px 0",
			width: "130px",
		},
		scorerBtn: {
			borderRadius: "4px",
			border: "1px solid black",
			textAlign: "center",
			padding: "6px 0",
			width: "100px",
		},
		match: {
			textAlign: "center",
			border: "1px solid black",
			padding: "16px 0",
			fontWeight: "bold",
		},
		paragraph: {
			marginTop: 0,
			marginBottom: 0,
		},
		win: {
			marginTop: 0,
			marginBottom: 12,
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
						<Box className={classes.event}>
							<Box className={classes.match}>Man United vs Chelsea</Box>
							<Box padding={2}>
								<p className={classes.win}>To WIN</p>
								<Box display="flex" justifyContent="space-between">
									<Box className={classes.button}>
										<p className={classes.paragraph}>Man United</p>
										<p className={classes.paragraph}>1.2</p>
									</Box>
									<Box className={classes.button}>
										<p className={classes.paragraph}>Chelsea</p>
										<p className={classes.paragraph}>2.2</p>
									</Box>
								</Box>
							</Box>
						</Box>
						<Box className={classes.event}>
							<Box className={classes.match}>Man United vs Chelsea</Box>
							<Box padding={2}>
								<p className={classes.win}>To WIN</p>
								<Box display="flex" justifyContent="space-between">
									<Box className={classes.button}>
										<p className={classes.paragraph}>Man United</p>
										<p className={classes.paragraph}>1.2</p>
									</Box>
									<Box className={classes.button}>
										<p className={classes.paragraph}>Chelsea</p>
										<p className={classes.paragraph}>2.2</p>
									</Box>
								</Box>
							</Box>
							<Box padding={2} borderTop={1}>
								<p className={classes.win}>To Score First</p>
								<Box display="flex" justifyContent="space-between">
									<Box className={classes.scorerBtn}>
										<p className={classes.paragraph}>Alexis</p>
										<p className={classes.paragraph}>3.1</p>
									</Box>
									<Box className={classes.scorerBtn}>
										<p className={classes.paragraph}>Girond</p>
										<p className={classes.paragraph}>2.2</p>
									</Box>
									<Box className={classes.scorerBtn}>
										<p className={classes.paragraph}>Lacazette</p>
										<p className={classes.paragraph}>2.2</p>
									</Box>
								</Box>
							</Box>
						</Box>
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
				</Box>
			</Drawer>
		</Fragment>
	);
}

export default App;
