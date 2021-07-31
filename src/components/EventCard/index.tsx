import { FC, useState } from "react";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/styles/makeStyles";

const Event: FC = () => {
	const useStyles = makeStyles(() => ({
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
		btnSelected: {
			borderRadius: "4px",
			border: "1px solid black",
			textAlign: "center",
			padding: "6px 0",
			width: "130px",
			background: "green",
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
	}));

	const classes = useStyles();

	const [selected, setSelected] = useState({
		club: "",
		point: 0.0,
		selected: false,
	});

	const handleSelect = (club: string, point: number) => {
		setSelected({ club: club, point: point, selected: true });
	};

	console.log(selected);

	const data = [
		{
			club: "Man United",
			point: 2.1,
		},
		{
			club: "Chelsea",
			point: 1.2,
		},
	];

	return (
		<>
			<Box className={classes.event}>
				<Box className={classes.match}>Man United vs Chelsea</Box>
				<Box padding={2}>
					<p className={classes.win}>To WIN</p>
					<Box display="flex" justifyContent="space-between">
						{data.map((item) => (
							<Box
								className={
									selected.club === item.club
										? classes.btnSelected
										: classes.button
								}
								onClick={() => handleSelect(item.club, item.point)}
							>
								<p className={classes.paragraph}>{item.club}</p>
								<p className={classes.paragraph}>{item.point}</p>
							</Box>
						))}

						{/* <Box
							className={classes.button}
							onClick={() => handleSelect("Chel", 2.1)}
						>
							<p className={classes.paragraph}>Chelsea</p>
							<p className={classes.paragraph}>2.2</p>
						</Box> */}
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
		</>
	);
};
export default Event;
