import Box from "@material-ui/core/Box";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import makeStyles from "@material-ui/core/styles/makeStyles";

const Error = (): JSX.Element => {
	const useStyles = makeStyles(() => ({
		icon: {
			margin: "0 auto",
			fontSize: "80px",
			color: "red",
		},
		text: {
			textAlign: "center",
		},
	}));

	const classes = useStyles();

	return (
		<>
			<Box
				width="30%"
				height="40%"
				display="flex"
				justifyContent="center"
				alignContent="center"
				margin="auto"
				flexDirection="column"
				p={12}
				bgcolor="white"
				boxShadow={1}
			>
				<ErrorOutlineOutlinedIcon className={classes.icon} />
				<p className={classes.text}>Ooops!!!</p>
				<p className={classes.text}>
					An error occured while fetching data. Please reload page.
				</p>
			</Box>
		</>
	);
};
export default Error;
