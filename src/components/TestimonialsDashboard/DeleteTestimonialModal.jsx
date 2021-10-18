import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import { Button, Typography, Modal, Paper } from '@material-ui/core'
import AppData from '../../modules/AppData'

const DeleteTestimonialModal = ({ testimonial }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        data-cy='delete-testimonial'
        variant='contained'
        color='primary'
        onClick={() => setOpen(true)}>
        <DeleteIcon />
      </Button>
      {open && (
        <Modal open={open} style={{ overflow: 'scroll' }}>
          <Paper>
            <Typography component='h3' variant='h3'>
              Are you sure you want to delete this testimonial?
            </Typography>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => AppData.delete(testimonial)}>Delete</Button>
          </Paper>
        </Modal>
      )}
    </>
  )
}

export default DeleteTestimonialModal
