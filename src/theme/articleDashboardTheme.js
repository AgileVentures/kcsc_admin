import { makeStyles } from '@material-ui/core'

const articleDashboard = makeStyles((theme) => ({
  tableContainer: {
    marginLeft: '200px',
    maxWidth: '1280px',
    [theme.breakpoints.down('md')]: {
      marginLeft: '0px',
      width: '100%',
    },
  },
  actionCell: {
    [theme.breakpoints.up('xs')]: {
      width: '150px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
      minWidth: '150px',
    },
  },
  dateCell: { minWidth: '100px' },
  titleCell: { minWidth: '500px' },
  linkCell: { minWidth: '300px' },
  switchLabel: { fontSize: '0.8rem' },
}))

export default articleDashboard
