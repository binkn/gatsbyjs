import Typography from 'typography'
import TYPE  from '../themes/Typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.45,
  bodyFontFamily: [TYPE.roboto, TYPE.openSans]
})

export default typography
