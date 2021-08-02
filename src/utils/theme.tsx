import { createTheme } from "@material-ui/core/styles";

//Create a theme instance
const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 490,
			md: 760,
			lg: 1200,
			xl: 1920,
		},
	},
});
export default theme;
