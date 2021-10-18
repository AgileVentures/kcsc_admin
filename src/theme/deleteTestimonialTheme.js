import { makeStyles } from '@material-ui/core'

const deleteTestimonialTheme = makeStyles((theme) => ({
  modal: {
    [theme.breakpoints.up('xs')]: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      maxWidth: '600px',
      padding: '30px',
    },
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '2rem'
  }
}))

export default deleteTestimonialTheme
