import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // ------ GRID ------
  'col-xsm-1': {
    width: [{ unit: '%H', value: 0.0833333 }],
    fontSize: [{ unit: 'px', value: 9 }]
  },
  'col-xsm-2': {
    width: [{ unit: '%H', value: 0.1666667 }],
    fontSize: [{ unit: 'px', value: 9 }]
  },
  'col-xsm-3': {
    width: [{ unit: '%H', value: 0.25 }],
    fontSize: [{ unit: 'px', value: 9 }]
  },
  'col-xsm-4': {
    width: [{ unit: '%H', value: 0.33333329999999994 }],
    fontSize: [{ unit: 'px', value: 9 }]
  },
  'col-xsm-5': {
    width: [{ unit: '%H', value: 0.41666670000000006 }],
    fontSize: [{ unit: 'px', value: 9 }]
  },
  'col-xsm-6': {
    width: [{ unit: '%H', value: 0.5 }],
    fontSize: [{ unit: 'px', value: 9 }]
  },
  'col-xsm-7': {
    width: [{ unit: '%H', value: 0.5833332999999999 }],
    fontSize: [{ unit: 'px', value: 9 }]
  },
  'col-xsm-8': {
    width: [{ unit: '%H', value: 0.6666667 }],
    fontSize: [{ unit: 'px', value: 9 }]
  },
  'col-xsm-9': {
    width: [{ unit: '%H', value: 0.75 }],
    fontSize: [{ unit: 'px', value: 9 }]
  },
  'col-xsm-10': {
    width: [{ unit: '%H', value: 0.8333333 }],
    fontSize: [{ unit: 'px', value: 9 }]
  },
  'col-xsm-11': {
    width: [{ unit: '%H', value: 0.9166667 }],
    fontSize: [{ unit: 'px', value: 9 }]
  },
  'col-xsm-12': {
    width: [{ unit: '%H', value: 1 }],
    fontSize: [{ unit: 'px', value: 9 }]
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
    fontSize: [{ unit: 'px', value: 7 }],
    backgroundColor: '#f1efed'
  },
  container: {
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }],
    width: [{ unit: '%H', value: 1 }],
    maxWidth: [{ unit: 'px', value: 1098 }]
  },
  headerBox: {
    marginTop: [{ unit: 'em', value: 3.25 }],
    fontSize: [{ unit: 'em', value: 1.5 }],
    paddingLeft: [{ unit: 'em', value: 1.188 }]
  },
  floatLeft: {
    float: 'left'
  },
  floatRight: {
    float: 'right'
  },
  name: {
    fontSize: [{ unit: 'em', value: 3.905 }],
    color: '#035159',
    marginBottom: [{ unit: 'em', value: 0.5 }],
    fontWeight: 'bold'
  },
  headerTitle: {
    fontSize: [{ unit: 'em', value: 2.2 }],
    color: '#035159',
    fontWeight: 'lighter'
  },
  circleBox: {
    marginTop: [{ unit: 'em', value: 4.5 }]
  },
  circle: {
    width: [{ unit: 'em', value: 13.3 }],
    height: [{ unit: 'em', value: 13.3 }],
    backgroundColor: '#bebcbb',
    borderRadius: '50%'
  },
  adressBox: {
    textAlign: 'right',
    marginTop: [{ unit: 'em', value: 4.875 }]
  },
  'adressBox p': {
    marginBottom: [{ unit: 'em', value: 0.625 }],
    color: '#a5a4a3',
    fontSize: [{ unit: 'em', value: 1.5 }]
  },
  iconBox: {
    marginTop: [{ unit: 'em', value: 5.1 }],
    textAlign: 'right'
  },
  'iconBox img': {
    marginBottom: [{ unit: 'em', value: 1.6 }],
    display: 'block',
    height: [{ unit: 'em', value: 1.4375 }]
  },
  hr: {
    display: 'block',
    width: [{ unit: '%H', value: 0.91 }, { unit: 'string', value: '!important' }],
    marginLeft: [{ unit: 'em', value: 2.5 }],
    marginTop: [{ unit: 'em', value: 0.875 }],
    marginBottom: [{ unit: 'em', value: 3.688 }]
  },
  img: {
    width: [{ unit: 'em', value: 1.8 }],
    height: [{ unit: 'em', value: 2 }]
  },
  heart: {
    animation: 'heartAnim 2s linear infinite'
  },
  h2: {
    display: 'inline',
    fontSize: [{ unit: 'em', value: 2.77125 }],
    color: '#035159'
  },
  formTop: {
    marginTop: [{ unit: 'em', value: 3 }]
  },
  textTop: {
    display: 'inline',
    float: 'left',
    paddingLeft: [{ unit: 'em', value: 1.5625 }]
  },
  'textTop p': {
    textAlign: 'center',
    padding: [{ unit: '%V', value: 0.01 }, { unit: '%H', value: 0.01 }, { unit: '%V', value: 0.01 }, { unit: '%H', value: 0.01 }],
    color: '#48acac'
  },
  'textTop greenBox': {
    color: 'white',
    backgroundColor: '#48acac',
    borderRadius: '0.625em'
  },
  textLeft: {
    textAlign: 'left !important'
  },
  borderLine: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    borderTop: [{ unit: 'em', value: 0.4375 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#035159' }],
    marginTop: [{ unit: 'em', value: 1.375 }],
    marginLeft: [{ unit: '%H', value: 0.035 }],
    marginBottom: [{ unit: 'em', value: 0.5 }],
    width: [{ unit: '%H', value: 0.86 }]
  },
  'borderLine p': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    width: [{ unit: 'em', value: 1.4375 }],
    height: [{ unit: 'em', value: 1.4375 }],
    backgroundColor: 'white',
    border: [{ unit: 'em', value: 0.25 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#035159' }],
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
    paddingLeft: [{ unit: 'em', value: 0.9375 }]
  },
  textBottom: {
    paddingLeft: [{ unit: 'px', value: 0 }, { unit: 'string', value: '!important' }]
  },
  bottomPadding: {
    paddingLeft: [{ unit: 'em', value: 1.25 }]
  },
  bottomPaddingP: {
    paddingLeft: [{ unit: 'em', value: 1.6875 }]
  },
  experienceBox: {
    marginTop: [{ unit: '%V', value: 0.08 }]
  },
  stageBox: {
    borderRadius: '0.625em',
    backgroundColor: 'white',
    padding: [{ unit: '%V', value: 0.02 }, { unit: '%H', value: 0.02 }, { unit: '%V', value: 0.02 }, { unit: '%H', value: 0.02 }],
    paddingRight: [{ unit: 'px', value: 0 }],
    paddingTop: [{ unit: 'em', value: 1.75 }],
    paddingBottom: [{ unit: 'em', value: 1.125 }],
    boxShadow: [{ unit: 'em', value: 0.0625 }, { unit: 'em', value: 0.0625 }, { unit: 'em', value: 0.125 }, { unit: 'string', value: 'silver' }],
    marginTop: [{ unit: 'em', value: 3.5 }],
    marginBottom: [{ unit: 'em', value: 4.9375 }]
  },
  'stageBox h4': {
    fontSize: [{ unit: 'em', value: 1.511875 }],
    fontWeight: '200'
  },
  'stageBox p': {
    fontSize: [{ unit: 'em', value: 1.1875 }],
    fontWeight: '200',
    color: '#999794',
    paddingRight: [{ unit: '%H', value: 0.02 }]
  },
  'stageBox span:first-child': {
    fontSize: [{ unit: 'em', value: 1.26 }],
    fontWeight: '200',
    color: '#bababa'
  },
  'stageBox span:last-child': {
    fontSize: [{ unit: 'em', value: 3.275625 }],
    fontWeight: '200',
    color: '#035159'
  },
  stageBorder: {
    borderRight: [{ unit: 'em', value: 0.1875 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#bababa' }]
  },
  yearText: {
    paddingTop: [{ unit: '%V', value: 0.1 }],
    textAlign: 'center'
  },
  yearBoxEx: {
    paddingRight: [{ unit: 'em', value: 1.25 }]
  },
  stageBoxMargin: {
    marginTop: [{ unit: 'em', value: 9 }]
  },
  borderRight: {
    borderRight: [{ unit: 'em', value: 0.375 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#084141' }]
  },
  borderLeft: {
    borderLeft: [{ unit: 'em', value: 0.375 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#084141' }]
  },
  triangle: {
    width: [{ unit: 'px', value: 0 }],
    height: [{ unit: 'px', value: 0 }],
    borderTop: [{ unit: 'em', value: 1.25 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'transparent' }],
    borderBottom: [{ unit: 'em', value: 1.25 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'transparent' }],
    borderLeft: [{ unit: 'em', value: 2.1875 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'white' }],
    margin: [{ unit: 'em', value: 7 }, { unit: 'string', value: 'auto' }, { unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }]
  },
  triangleRight: {
    width: [{ unit: 'px', value: 0 }],
    height: [{ unit: 'px', value: 0 }],
    borderTop: [{ unit: 'em', value: 1.25 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'transparent' }],
    borderBottom: [{ unit: 'em', value: 1.25 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'transparent' }],
    borderRight: [{ unit: 'em', value: 2.1875 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'white' }],
    margin: [{ unit: 'em', value: 16.5 }, { unit: 'string', value: 'auto' }, { unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }]
  },
  competencesBox: {
    marginTop: [{ unit: 'em', value: 5 }]
  },
  competencesList: {
    marginTop: [{ unit: '%V', value: 0.09 }],
    fontSize: [{ unit: 'em', value: 1.31 }]
  },
  'competencesList p': {
    paddingBottom: [{ unit: '%V', value: 0.07 }]
  },
  marginTop: {
    marginTop: [{ unit: '%V', value: 0.105 }]
  },
  prog: {
    height: [{ unit: 'em', value: 0.8125 }],
    border: [{ unit: 'em', value: 0.0625 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ccc' }],
    background: '#eee',
    borderRadius: '0.3125em',
    marginBottom: [{ unit: 'em', value: 1.5 }]
  },
  one: {
    animationName: 'widthCompetList',
    animationDuration: '5s',
    WebkitAnimationName: 'widthCompetList',
    WebkitAnimationDuration: '5s'
  },
  two: {
    animationName: 'widthCompetList',
    animationDuration: '5s',
    WebkitAnimationName: 'widthCompetList',
    WebkitAnimationDuration: '5s'
  },
  three: {
    animationName: 'widthCompetList',
    animationDuration: '5s',
    WebkitAnimationName: 'widthCompetList',
    WebkitAnimationDuration: '5s'
  },
  four: {
    animationName: 'widthCompetList',
    animationDuration: '5s',
    WebkitAnimationName: 'widthCompetList',
    WebkitAnimationDuration: '5s'
  },
  five: {
    animationName: 'widthCompetList',
    animationDuration: '5s',
    WebkitAnimationName: 'widthCompetList',
    WebkitAnimationDuration: '5s'
  },
  six: {
    animationName: 'widthCompetList',
    animationDuration: '5s',
    WebkitAnimationName: 'widthCompetList',
    WebkitAnimationDuration: '5s'
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
    borderRadius: '0.1875em',
    height: [{ unit: 'em', value: 0.6875 }],
    marginLeft: [{ unit: 'px', value: 0 }]
  },
  circlesBox: {
    display: 'flex',
    marginBottom: [{ unit: 'em', value: 2 }],
    marginTop: [{ unit: 'em', value: 3 }]
  },
  'circlesBox p': {
    float: 'left'
  },
  sport: {
    width: [{ unit: 'em', value: 4.7 }],
    height: [{ unit: 'em', value: 4.7 }],
    backgroundColor: '#26acac',
    borderRadius: '50%',
    opacity: '0.8',
    marginLeft: [{ unit: 'em', value: 2.4 }],
    zIndex: '3',
    color: 'white',
    fontSize: [{ unit: 'em', value: 2.013125 }],
    lineHeight: [{ unit: 'em', value: 4.7 }],
    WebkitAnimationDuration: '4s',
    animationDuration: '4s',
    WebkitAnimationFillMode: 'both',
    animationFillMode: 'both'
  },
  bounceIn: {
    WebkitAnimationName: 'bounceIn',
    animationName: 'bounceIn'
  },
  musique: {
    width: [{ unit: 'em', value: 6.3 }],
    height: [{ unit: 'em', value: 6.3 }],
    backgroundColor: '#2bc4c4',
    borderRadius: '50%',
    zIndex: '1',
    marginTop: [{ unit: 'em', value: 3.9 }],
    marginLeft: [{ unit: 'em', value: -7.3 }],
    color: 'white',
    fontSize: [{ unit: 'em', value: 1.725625 }],
    lineHeight: [{ unit: 'em', value: 6.3 }],
    WebkitAnimationDuration: '3s',
    animationDuration: '3s',
    WebkitAnimationFillMode: 'both',
    animationFillMode: 'both'
  },
  webdesign: {
    width: [{ unit: 'em', value: 6.4 }],
    height: [{ unit: 'em', value: 6.4 }],
    backgroundColor: '#268e8e',
    borderRadius: '50%',
    zIndex: '2',
    opacity: '0.8',
    marginTop: [{ unit: 'em', value: 1 }],
    marginLeft: [{ unit: 'em', value: -1.5 }],
    color: 'white',
    fontSize: [{ unit: 'em', value: 2.300625 }],
    lineHeight: [{ unit: 'em', value: 6.4 }],
    WebkitAnimationDuration: '1s',
    animationDuration: '1s',
    WebkitAnimationFillMode: 'both',
    animationFillMode: 'both'
  },
  cinema: {
    width: [{ unit: 'em', value: 5 }],
    height: [{ unit: 'em', value: 5 }],
    backgroundColor: '#2b5d5d',
    borderRadius: '50%',
    zIndex: '4',
    opacity: '0.8',
    marginTop: [{ unit: 'em', value: 6 }],
    marginLeft: [{ unit: 'em', value: -2.5 }],
    color: 'white',
    fontSize: [{ unit: 'em', value: 1.7 }],
    lineHeight: [{ unit: 'em', value: 5 }],
    WebkitAnimationDuration: '2s',
    animationDuration: '2s',
    WebkitAnimationFillMode: 'both',
    animationFillMode: 'both'
  },
  center: {
    textAlign: 'center'
  }
});
