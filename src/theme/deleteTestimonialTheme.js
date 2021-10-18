import { makeStyles } from '@material-ui/core'

const deleteTestimonialTheme = makeStyles((theme) => ({
  modal: {
    [theme.breakpoints.up('xs')]: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      padding: '30px',
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '600px',
    },
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '2rem',
  },
}))

export default deleteTestimonialTheme
