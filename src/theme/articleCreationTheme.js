import { makeStyles } from '@material-ui/core'

const articleCreationTheme = makeStyles((theme) => ({
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '100px',
    width: '70%',
    margin: 'auto'
  },
  form: {
    margin: '0.5rem',
  },
  checkbox: {
    marginRight: 'auto'
  },
  btnBox: {
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      paddingTop: '13px',
      margin: '0px 20% 5% 0px',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '20px',
    },
  },
}))

export default articleCreationTheme
