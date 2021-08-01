import Box from "@material-ui/core/Box";
import BounceLoader from "react-spinners/BounceLoader";
import { useState } from "react";
import { css } from "@emotion/react";

const override = css`
	display: block;
	margin: auto;
	border-color: red;
`;

const Loader = (): JSX.Element => {
	const [loading] = useState(true);

	return (
		<>
			<Box
				width="inherit"
				height="inherit"
				display="flex"
				justifyContent="center"
				alignContent="center"
			>
				<BounceLoader
					// color={color}
					loading={loading}
					css={override}
					size={150}
				/>
			</Box>
		</>
	);
};
export default Loader;
