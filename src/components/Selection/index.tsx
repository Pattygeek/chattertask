import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/styles/makeStyles";
import Button from "@material-ui/core/Button";

const Selection = () => {
	const useStyles = makeStyles(() => ({
		point: {
			fontWeight: "bold",
			fontSize: "20px",
			textAlign: "center",
		},
	}));

	const classes = useStyles();
	return (
		<>
			<Box textAlign="center">
				<p>Man United to Win</p>
				<p className={classes.point}>1.2</p>
				<Button disableElevation variant="contained">
					Delete
				</Button>
			</Box>
		</>
	);
};
export default Selection;
