import Typography from 'typography'
import { TYPE } from '../themes/Typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.45,
  headerFontFamily: [TYPE.roboto, TYPE.workSans],
  bodyFontFamily: [TYPE.roboto, TYPE.workSans]
})

export default typography
