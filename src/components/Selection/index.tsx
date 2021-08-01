import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/styles/makeStyles";
import Button from "@material-ui/core/Button";
import { FC } from "react";
import { SelectedType } from "../../utils/types";

const Selection: FC<SelectedType> = ({ name, price, type }) => {
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
				<p>{`${name} to ${type}`}</p>
				<p className={classes.point}>{price}</p>
				<Button disableElevation variant="contained">
					Delete
				</Button>
			</Box>
		</>
	);
};
export default Selection;
