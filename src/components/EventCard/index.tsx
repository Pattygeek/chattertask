import { FC, useContext } from "react";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/styles/makeStyles";
import { SelectionType } from "../../utils/types";
import { AppContext } from "../../utils/globalState/store";
import { ActionType, IEvent } from "../../utils/types";

const Event: FC<IEvent> = ({
	name,
	teamSelections,
	playerSelections,
	markets,
	playerMarketID,
	teamMarketID,
}) => {
	const useStyles = makeStyles(() => ({
		event: {
			marginBottom: "20px",
			"&:last-child": {
				marginBottom: 0,
			},
		},
		button: {
			borderRadius: "4px",
			textAlign: "center",
			padding: "6px 0",
			width: "130px",
			border: "1px solid #eaf3ee",
			background: "#eaf3ee",
			cursor: "pointer",
			"&:hover": {
				background: "#2E8B57",
				color: "whitesmoke",
			},
		},
		btnSelected: {
			borderRadius: "4px",
			textAlign: "center",
			padding: "6px 0",
			width: "130px",
			background: "#2E8B57",
			color: "whitesmoke",
			cursor: "pointer",
			border: "1px solid #2E8B57",
		},
		scorerBtn: {
			borderRadius: "4px",
			textAlign: "center",
			padding: "6px 0",
			width: "100px",
			background: "#eaf3ee",
			border: "1px solid #eaf3ee",
			cursor: "pointer",
			"&:hover": {
				background: "#2E8B57",
				color: "whitesmoke",
			},
		},
		scorerBtnSelected: {
			borderRadius: "4px",
			textAlign: "center",
			padding: "6px 0",
			width: "100px",
			background: "#2E8B57",
			cursor: "pointer",
			border: "1px solid #2E8B57",
			color: "whitesmoke",
		},
		match: {
			textAlign: "center",
			padding: "16px 0",
			fontWeight: "bold",
			background: "#d5e8dd",
			borderTopRightRadius: "4px",
			borderTopLeftRadius: "4px",
			color: "#2E8B57",
		},
		paragraph: {
			marginTop: 0,
			marginBottom: 0,
		},
		win: {
			marginTop: 0,
			marginBottom: 12,
		},
	}));

	const classes = useStyles();

	//context
	const { state, dispatch } = useContext(AppContext);

	const { selections } = state;

	//function to handle selections
	const handleSelections = (
		id: string,
		name: string,
		price: number,
		marketID: string,
		type: string
	) => {
		dispatch({
			type: ActionType.SELECTIONS,
			payload: { id, name, price, marketID, type },
		});
	};

	//function to handle classname for active state
	const selectedClassName = (name: string) => {
		let selected: boolean | undefined = undefined;

		for (let i = 0; i < selections.length; i++) {
			if (selections[i].name === name) {
				selected = true;
			}
		}
		return selected;
	};

	return (
		<>
			{markets?.length !== 0 && (
				<Box
					className={classes.event}
					border={1}
					borderRadius={4}
					borderColor="#dedede"
					data-testid="event-card"
				>
					<Box className={classes.match}>{name}</Box>
					<Box padding={2}>
						<p className={classes.win}>To WIN</p>
						<Box display="flex" justifyContent="space-between">
							{teamSelections?.map((team: SelectionType) => (
								<Box
									key={team.id}
									className={
										selectedClassName(team.name)
											? classes.btnSelected
											: classes.button
									}
									data-testid="select-btn"
									onClick={() =>
										handleSelections(
											team.id,
											team.name,
											team.price,
											teamMarketID,
											"Win"
										)
									}
								>
									<p className={classes.paragraph}>{team.name}</p>
									<p className={classes.paragraph}>{team.price}</p>
								</Box>
							))}
						</Box>
					</Box>

					{playerSelections !== undefined && (
						<Box padding={2} borderTop={1} borderColor="#dedede">
							<p className={classes.win}>To Score First</p>
							<Box display="flex" justifyContent="space-between">
								{playerSelections?.map((player: SelectionType) => (
									<Box
										className={
											selectedClassName(player.name)
												? classes.scorerBtnSelected
												: classes.scorerBtn
										}
										key={player.id}
										onClick={() =>
											handleSelections(
												player.id,
												player.name,
												player.price,
												playerMarketID,
												"Score First"
											)
										}
									>
										<p className={classes.paragraph}>{player.name}</p>
										<p className={classes.paragraph}>{player.price}</p>
									</Box>
								))}
							</Box>
						</Box>
					)}
				</Box>
			)}
		</>
	);
};
export default Event;
