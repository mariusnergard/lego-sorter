import { createGlobalStyle } from 'styled-components';
import theme from './_theme';

const WithSyles = createGlobalStyle`
  html {
    font-size: 10px;
  }
  body {
    font-size: 1.6rem;
    --width: ${props => props.customStyles.width || theme.width};
    --containerWidthPer: calc((1 * var(--width) / 100));
    --mainColor: ${props => props.customStyles.mainColor || theme.mainColor};
    --mainColorRgbVal: ${props => props.customStyles.mainColorRgbVal || theme.mainColorRgbVal};
    --mainColorRgba: ${props => props.customStyles.mainColorRgba || theme.mainColorRgba};
    --contrastToMain: ${props => props.customStyles.contrastToMain || theme.contrastToMain};
    --detailColor: ${props => props.customStyles.detailColor || theme.detailColor};
    --textBackgroundColor: ${props => props.customStyles.textBackgroundColor || theme.textBackgroundColor};
    --white: ${props => props.customStyles.white || theme.white};
    --red: ${props => props.customStyles.red || theme.red};
    --redRgbVal: ${props => props.customStyles.redRgbVal || theme.redRgbVal};
    --gray: ${props => props.customStyles.grey || theme.grey};
    --grey: ${props => props.customStyles.grey || theme.grey};
    --lightGrey: ${props => props.customStyles.lightGrey || theme.lightGrey};
    --lightGray: ${props => props.customStyles.lightGrey || theme.lightGrey};
    --cyan: ${props => props.customStyles.cyan || theme.cyan};
    --darkCyan: ${props => props.customStyles.darkCyan || theme.darkCyan};
    --lightGreen: ${props => props.customStyles.lightGreen || theme.lightGreen};
    
    --fontSize: calc(var(--containerWidthPer) * ${props => props.customStyles.textFontSize || theme.textFontSize});
    --headerFontSize: calc(var(--containerWidthPer) * ${props => props.customStyles.textHeaderSize || theme.textHeaderSize});
    --largeText: calc(var(--containerWidthPer) * ${props => props.customStyles.textFontSize || theme.textFontSize});
    
    --navButtonColor: ${props => props.customStyles.navButtonColor || theme.navButtonColor};
    --navButtonColorSelected: ${props => props.customStyles.navButtonColorSelected || theme.navButtonColorSelected};
    --navButtonColorHover: ${props => props.customStyles.navButtonColorHover || theme.navButtonColorHover};
  } 
`;

export default WithSyles;
