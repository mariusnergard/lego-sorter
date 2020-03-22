
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import _theme from '../components/styles/_theme';

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    htmlFontSize: 10,
  },
  palette: {
    primary: {
      main: _theme.mainColor,
    },
    secondary: {
      main: _theme.detailColor,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
