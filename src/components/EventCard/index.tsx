import { FC, useState, useContext } from "react";
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
			background: "#f7f7f7",
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
		},
		scorerBtn: {
			borderRadius: "4px",
			textAlign: "center",
			padding: "6px 0",
			width: "100px",
			background: "#f7f7f7",
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
	const { dispatch } = useContext(AppContext);

	const [selectedTeam, setSelectedTeam] = useState({
		name: "",
		price: 0.0,
		selected: false,
	});

	const [selectedPlayer, setSelectedPlayer] = useState({
		name: "",
		price: 0.0,
		selected: false,
	});

	const handleSelectedTeam = (
		id: string,
		name: string,
		price: number,
		marketID: string
	) => {
		setSelectedTeam({ name, price, selected: true });
		dispatch({
			type: ActionType.SELECTIONS,
			payload: { id, name, price, marketID, type: "Win" },
		});
	};

	const handleSelectedPlayer = (
		id: string,
		name: string,
		price: number,
		playerID: string
	) => {
		setSelectedPlayer({ name, price, selected: true });
		dispatch({
			type: ActionType.SELECTIONS,
			payload: { id, name, price, marketID: playerID, type: "Score First" },
		});
	};

	// console.log(selected);

	return (
		<>
			{markets?.length !== 0 && (
				<Box
					className={classes.event}
					border={1}
					borderRadius={4}
					borderColor="#dedede"
				>
					<Box className={classes.match}>{name}</Box>
					<Box padding={2}>
						<p className={classes.win}>To WIN</p>
						<Box display="flex" justifyContent="space-between">
							{teamSelections?.map((team: SelectionType) => (
								<Box
									key={team.id}
									boxShadow={1}
									className={
										selectedTeam.name === team.name
											? classes.btnSelected
											: classes.button
									}
									onClick={() =>
										handleSelectedTeam(
											team.id,
											team.name,
											team.price,
											teamMarketID
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
											selectedPlayer.name === player.name
												? classes.scorerBtnSelected
												: classes.scorerBtn
										}
										boxShadow={1}
										key={player.id}
										onClick={() =>
											handleSelectedPlayer(
												player.id,
												player.name,
												player.price,
												playerMarketID
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
