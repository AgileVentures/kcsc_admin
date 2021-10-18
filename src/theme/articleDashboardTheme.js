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
  actionCell: { minWidth: '100px', display: 'flex', flexDirection: 'row', alignItems: 'center' },
  dateCell: { minWidth: '100px' },
  titleCell: { minWidth: '400px' },
  switchLabel: { fontSize: '0.8rem' },
}))

export default articleDashboard
