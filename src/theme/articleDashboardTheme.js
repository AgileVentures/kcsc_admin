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
    width: '150px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateCell: { minWidth: '100px' },
  titleCell: { minWidth: '500px' },
  linkCell: { minWidth: '300px' },
  switchLabel: { fontSize: '0.8rem' },
}))

export default articleDashboard
