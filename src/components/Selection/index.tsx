import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/styles/makeStyles";
import Button from "@material-ui/core/Button";
import { FC, useContext } from "react";
import { AppContext } from "../../utils/globalState/store";
import { SelectedType } from "../../utils/types";
import { ActionType } from "../../utils/types";

const Selection: FC<SelectedType> = ({ name, price, type, id, marketID }) => {
	const useStyles = makeStyles(() => ({
		point: {
			fontWeight: "bold",
			fontSize: "20px",
			textAlign: "center",
		},
		btn: {
			background: "#2E8B57",
			color: "white",
			textTransform: "capitalize",
		},
		box: {
			borderBottom: "1px solid #c4c4c4",
			"&:last-child": {
				borderBottom: "none",
			},
		},
	}));

	const classes = useStyles();

	//context
	const { dispatch } = useContext(AppContext);

	const removeSelection = (): void => {
		dispatch({
			type: ActionType.DELETE_SELECTION,
			payload: { id, name, price, marketID, type },
		});
	};

	return (
		<>
			<Box textAlign="center" className={classes.box}>
				<p>{`${name} to ${type}`}</p>
				<p className={classes.point}>{price}</p>
				<Button
					disableElevation
					variant="contained"
					onClick={removeSelection}
					className={classes.btn}
				>
					Delete
				</Button>
			</Box>
		</>
	);
};
export default Selection;
