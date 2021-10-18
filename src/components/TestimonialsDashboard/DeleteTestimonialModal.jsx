import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import { Button, Typography, Modal, Paper, Box } from '@material-ui/core'
import AppData from '../../modules/AppData'
import deleteTestimonialTheme from '../../theme/deleteTestimonialTheme'
import CircularProgress from '@material-ui/core/CircularProgress'

const DeleteTestimonialModal = ({ testimonial }) => {
  const classes = deleteTestimonialTheme()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleDelete = async () => {
    setLoading(true)
    await AppData.delete(testimonial)
    setLoading(false)
    setOpen(false)
  }

  return (
    <>
      <Button
        data-cy='delete-testimonial-btn'
        variant='contained'
        color='primary'
        onClick={() => setOpen(true)}>
        <DeleteIcon />
      </Button>
      {open && (
        <Modal open={open} onClose={() => setOpen(false)}>
          <Paper className={classes.modal}>
            <Typography component='h3' variant='h5'>
              Are you sure you want to delete this testimonial?
            </Typography>
            <Box className={classes.buttonGroup}>
              <Button color='primary' onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button
                data-cy='confirm-delete-btn'
                color='primary'
                variant='contained'
                onClick={() => handleDelete()}>
                {loading ? <CircularProgress color='secondary' /> : 'Delete'}
              </Button>
            </Box>
          </Paper>
        </Modal>
      )}
    </>
  )
}

export default DeleteTestimonialModal
