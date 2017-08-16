import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // ------ GRID ------
  'col-xsm-1': {
    width: [{ unit: '%H', value: 0.0833333 }],
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'red' }]
  },
  'col-xsm-2': {
    width: [{ unit: '%H', value: 0.1666667 }],
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'red' }]
  },
  'col-xsm-3': {
    width: [{ unit: '%H', value: 0.25 }],
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'red' }]
  },
  'col-xsm-4': {
    width: [{ unit: '%H', value: 0.33333329999999994 }],
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'red' }]
  },
  'col-xsm-5': {
    width: [{ unit: '%H', value: 0.41666670000000006 }],
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'red' }]
  },
  'col-xsm-6': {
    width: [{ unit: '%H', value: 0.5 }],
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'red' }]
  },
  'col-xsm-7': {
    width: [{ unit: '%H', value: 0.5833332999999999 }],
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'red' }]
  },
  'col-xsm-8': {
    width: [{ unit: '%H', value: 0.6666667 }],
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'red' }]
  },
  'col-xsm-9': {
    width: [{ unit: '%H', value: 0.75 }],
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'red' }]
  },
  'col-xsm-10': {
    width: [{ unit: '%H', value: 0.8333333 }],
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'red' }]
  },
  'col-xsm-11': {
    width: [{ unit: '%H', value: 0.9166667 }],
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'red' }]
  },
  'col-xsm-12': {
    width: [{ unit: '%H', value: 1 }],
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'red' }]
  },
  'row:before': {
    content: '''',
    clear: 'both',
    display: 'table'
  },
  'row:after': {
    content: '''',
    clear: 'both',
    display: 'table'
  },
  '[class*='col-']': {
    float: 'left',
    minHeight: [{ unit: 'px', value: 1 }]
  },
  collapsed: {
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  '*': {
    boxSizing: 'border-box',
    margin: [{ unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }, { unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }]
  },
  body: {
    fontFamily: ''Open Sans', serif',
    fontSize: [{ unit: 'px', value: 16 }],
    backgroundColor: '#f1efed'
  },
  container: {
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }]
  },
  headerBox: {
    marginTop: [{ unit: 'px', value: 52 }],
    fontSize: [{ unit: 'px', value: 24.19 }],
    paddingLeft: [{ unit: 'px', value: 19 }]
  },
  floatLeft: {
    float: 'left'
  },
  floatRight: {
    float: 'right'
  },
  h1: {
    fontSize: [{ unit: 'px', value: 62.48 }],
    color: '#035159',
    marginBottom: [{ unit: 'px', value: 45 }]
  },
  headerTitle: {
    fontWeight: '200',
    color: '#035159',
    fontSize: [{ unit: 'px', value: 42.33 }]
  },
  circleBox: {
    marginTop: [{ unit: 'px', value: 72 }]
  },
  circle: {
    width: [{ unit: 'px', value: 213 }],
    height: [{ unit: 'px', value: 213 }],
    backgroundColor: '#bebcbb',
    borderRadius: '50%'
  },
  adressBox: {
    textAlign: 'right',
    marginTop: [{ unit: 'px', value: 78 }]
  },
  'adressBox p': {
    marginBottom: [{ unit: 'px', value: 10 }],
    color: '#a5a4a3'
  },
  iconBox: {
    marginTop: [{ unit: 'px', value: 82 }],
    textAlign: 'right'
  },
  'iconBox img': {
    marginBottom: [{ unit: 'px', value: 20 }],
    display: 'block',
    height: [{ unit: 'px', value: 23 }]
  },
  hr: {
    display: 'block',
    width: [{ unit: '%H', value: 0.91 }, { unit: 'string', value: '!important' }],
    marginLeft: [{ unit: 'px', value: 40 }],
    marginTop: [{ unit: 'px', value: 14 }],
    marginBottom: [{ unit: 'px', value: 59 }]
  },
  h2: {
    display: 'inline',
    fontSize: [{ unit: 'px', value: 44.34 }],
    color: '#035159'
  },
  formTop: {
    marginTop: [{ unit: 'px', value: 48 }]
  },
  textTop: {
    display: 'inline',
    float: 'left',
    paddingLeft: [{ unit: 'px', value: 25 }]
  },
  'textTop p': {
    textAlign: 'center',
    padding: [{ unit: '%V', value: 0.01 }, { unit: '%H', value: 0.01 }, { unit: '%V', value: 0.01 }, { unit: '%H', value: 0.01 }],
    color: '#48acac'
  },
  'textTop greenBox': {
    color: 'white',
    backgroundColor: '#48acac',
    borderRadius: '10px'
  },
  borderLine: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    borderTop: [{ unit: 'px', value: 7 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#035159' }],
    marginTop: [{ unit: 'px', value: 22 }],
    marginLeft: [{ unit: '%H', value: 0.035 }],
    marginBottom: [{ unit: 'px', value: 8 }],
    width: [{ unit: '%H', value: 0.86 }]
  },
  'borderLine p': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    width: [{ unit: 'px', value: 23 }],
    height: [{ unit: 'px', value: 23 }],
    backgroundColor: 'white',
    border: [{ unit: 'px', value: 4 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#035159' }],
    borderRadius: '50%',
    marginTop: [{ unit: '%V', value: -0.06 }],
    marginLeft: [{ unit: '%H', value: -0.01 }]
  },
  'borderLine pointTwo': {
    marginLeft: [{ unit: '%H', value: 0.35 }]
  },
  'borderLine pointThree': {
    marginLeft: [{ unit: '%H', value: 0.52 }]
  },
  'borderLine pointFour': {
    float: 'right',
    marginRight: [{ unit: '%H', value: -0.03 }]
  },
  formMiddle: {
    marginTop: [{ unit: 'px', value: 0 }]
  },
  'formMiddle textPadding': {
    paddingLeft: [{ unit: 'px', value: 15 }]
  },
  textBottom: {
    paddingLeft: [{ unit: 'px', value: 0 }, { unit: 'string', value: '!important' }]
  },
  bottomPadding: {
    paddingLeft: [{ unit: 'px', value: 20 }]
  },
  bottomPaddingP: {
    paddingLeft: [{ unit: 'px', value: 27 }]
  },
  experienceBox: {
    marginTop: [{ unit: '%V', value: 0.08 }]
  },
  stageBox: {
    borderRadius: '10px',
    backgroundColor: 'white',
    padding: [{ unit: '%V', value: 0.02 }, { unit: '%H', value: 0.02 }, { unit: '%V', value: 0.02 }, { unit: '%H', value: 0.02 }],
    paddingRight: [{ unit: 'px', value: 0 }],
    paddingTop: [{ unit: 'px', value: 28 }],
    paddingBottom: [{ unit: 'px', value: 18 }],
    boxShadow: [{ unit: 'px', value: 1 }, { unit: 'px', value: 1 }, { unit: 'px', value: 2 }, { unit: 'string', value: 'silver' }],
    marginTop: [{ unit: 'px', value: 56 }],
    marginBottom: [{ unit: 'px', value: 79 }]
  },
  'stageBox h4': {
    fontSize: [{ unit: 'px', value: 24.19 }],
    fontWeight: '200'
  },
  'stageBox p': {
    fontSize: [{ unit: 'px', value: 19 }],
    fontWeight: '200',
    color: '#999794'
  },
  'stageBox span:first-child': {
    fontSize: [{ unit: 'px', value: 20.16 }],
    fontWeight: '200',
    color: '#bababa'
  },
  'stageBox span:last-child': {
    fontSize: [{ unit: 'px', value: 52.41 }],
    fontWeight: '200',
    color: '#035159'
  },
  stageBorder: {
    borderRight: [{ unit: 'px', value: 3 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#bababa' }]
  },
  yearBox: {
    paddingLeft: [{ unit: 'px', value: 20 }]
  },
  yearText: {
    paddingTop: [{ unit: '%V', value: 0.1 }],
    textAlign: 'center'
  },
  yearBoxEx: {
    paddingRight: [{ unit: 'px', value: 20 }]
  },
  stageBoxMargin: {
    marginTop: [{ unit: '%V', value: 0.25 }]
  },
  borderRight: {
    borderRight: [{ unit: 'px', value: 6 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#084141' }]
  },
  triangle: {
    width: [{ unit: 'px', value: 0 }],
    height: [{ unit: 'px', value: 0 }],
    borderTop: [{ unit: 'px', value: 20 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'transparent' }],
    borderBottom: [{ unit: 'px', value: 20 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'transparent' }],
    borderLeft: [{ unit: 'px', value: 35 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'white' }],
    margin: [{ unit: '%V', value: 0.21 }, { unit: 'string', value: 'auto' }, { unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }]
  },
  triangleRight: {
    width: [{ unit: 'px', value: 0 }],
    height: [{ unit: 'px', value: 0 }],
    borderTop: [{ unit: 'px', value: 20 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'transparent' }],
    borderBottom: [{ unit: 'px', value: 20 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'transparent' }],
    borderRight: [{ unit: 'px', value: 35 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'white' }],
    margin: [{ unit: '%V', value: 0.46 }, { unit: 'string', value: 'auto' }, { unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }]
  },
  competencesBox: {
    marginTop: [{ unit: 'px', value: 80 }]
  },
  competencesList: {
    marginTop: [{ unit: '%V', value: 0.09 }],
    fontSize: [{ unit: 'px', value: 24.16 }]
  },
  'competencesList p': {
    paddingBottom: [{ unit: '%V', value: 0.07 }]
  },
  marginTop: {
    marginTop: [{ unit: '%V', value: 0.105 }]
  },
  prog: {
    height: [{ unit: 'px', value: 13 }],
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ccc' }],
    background: '#eee',
    borderRadius: '5px',
    marginBottom: [{ unit: '%V', value: 0.08 }]
  },
  one: {
    background: '#027070'
  },
  two: {
    background: '#046060'
  },
  three: {
    background: '#074c4c'
  },
  four: {
    background: '#009898'
  },
  five: {
    background: '#02b4b5'
  },
  six: {
    background: '#008384'
  },
  progBar: {
    borderRadius: '3px',
    height: [{ unit: 'px', value: 11 }],
    marginLeft: [{ unit: 'px', value: 0 }]
  },
  circlesBox: {
    display: 'flex'
  },
  sport: {
    width: [{ unit: 'px', value: 148 }],
    height: [{ unit: 'px', value: 148 }],
    backgroundColor: '#26acac',
    borderRadius: '50%',
    opacity: '0.8',
    marginTop: [{ unit: 'px', value: 62 }],
    marginLeft: [{ unit: '%H', value: 0.07 }],
    zIndex: '3',
    position: 'absolute',
    color: 'white',
    fontSize: [{ unit: 'px', value: 32.21 }],
    lineHeight: [{ unit: 'px', value: 148 }]
  },
  musique: {
    width: [{ unit: 'px', value: 170 }],
    height: [{ unit: 'px', value: 170 }],
    backgroundColor: '#2bc4c4',
    borderRadius: '50%',
    zIndex: '1',
    position: 'absolute',
    marginTop: [{ unit: 'px', value: 174 }],
    marginLeft: [{ unit: '%H', value: 0.03 }],
    color: 'white',
    fontSize: [{ unit: 'px', value: 27.61 }],
    lineHeight: [{ unit: 'px', value: 170 }]
  },
  webdesign: {
    width: [{ unit: 'px', value: 236 }],
    height: [{ unit: 'px', value: 236 }],
    backgroundColor: '#268e8e',
    borderRadius: '50%',
    position: 'absolute',
    zIndex: '2',
    opacity: '0.8',
    marginTop: [{ unit: 'px', value: 97 }],
    marginLeft: [{ unit: '%H', value: 0.15 }],
    color: 'white',
    fontSize: [{ unit: 'px', value: 36.81 }],
    lineHeight: [{ unit: 'px', value: 236 }]
  },
  cinema: {
    width: [{ unit: 'px', value: 144 }],
    height: [{ unit: 'px', value: 144 }],
    backgroundColor: '#2b5d5d',
    borderRadius: '50%',
    position: 'absolute',
    zIndex: '4',
    opacity: '0.8',
    marginTop: [{ unit: 'px', value: 241 }],
    marginLeft: [{ unit: '%H', value: 0.3 }],
    color: 'white',
    fontSize: [{ unit: 'px', value: 29.13 }],
    lineHeight: [{ unit: 'px', value: 144 }]
  },
  center: {
    textAlign: 'center'
  }
});
