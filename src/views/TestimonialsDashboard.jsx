import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from '@material-ui/core'
import AppData from '../modules/AppData'
import EditTestimonialModal from '../components/TestimonialsDashboard/EditTestimonialModal.jsx'
import DeleteTestimonialModal from '../components/TestimonialsDashboard/DeleteTestimonialModal.jsx'
import articleDashboard from '../theme/articleDashboardTheme'
import useCommonStyles from '../theme/useCommonStyles'
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    fontSize: '1.2rem',
    fontWeight: 800,
  },
  body: {
    fontSize: '1rem',
  },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow)

const TestimonialsDashboard = () => {
  const classes = articleDashboard()
  const commonClasses = useCommonStyles()
  const testimonials = useSelector((state) => state.app_data?.testimonials)

  // Put fixture here to see articles on localhost
  //const [articles, setArticles] = useState([])

  useEffect(() => {
    AppData.index()
  }, [])

  const tableHeader = (
    <StyledTableRow color='secondary'>
      <StyledTableCell align='left'>id</StyledTableCell>
      <StyledTableCell align='left'>Name</StyledTableCell>
      <StyledTableCell align='left'>Link</StyledTableCell>
      <StyledTableCell align='left' className={classes.actionCell}>Action</StyledTableCell>
    </StyledTableRow>
  )

  const tableRows =
    testimonials &&
    testimonials.map((testimonial) => {
      const { id, name, link } = testimonial
      return (
        <StyledTableRow data-cy='testimonial' key={`testimonial-${id}`}>
          <StyledTableCell data-cy='status' align='center'>
            {id}
          </StyledTableCell>
          <StyledTableCell data-cy='title' className={classes.titleCell}>
            {name}
          </StyledTableCell>
          <StyledTableCell data-cy='date' className={classes.linkCell}>
            {link}
          </StyledTableCell>
          <StyledTableCell data-cy='action' className={classes.actionCell}>
            <EditTestimonialModal testimonial={testimonial} />
            <DeleteTestimonialModal testimonial={testimonial} />
          </StyledTableCell>
        </StyledTableRow>
      )
    })

  const noArticlesMessage = (
    <StyledTableCell>
      <Typography variant='h6' style={{ padding: '12px' }}>
        No articles to display
      </Typography>
    </StyledTableCell>
  )

  return (
    <>
      <TableContainer
        data-cy='testimonials-table'
        component={Paper}
        className={commonClasses.viewContainer}>
        <Table>
          <TableHead>{tableHeader}</TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell className={classes.actionCell}>
                <Button
                  data-cy='create-testimonial'
                  variant='contained'
                  color='primary'
                  component={Link}
                  to='/testimonials/create'>
                  <AddIcon />
                </Button>
              </StyledTableCell>
            </StyledTableRow>
            {testimonials ? tableRows : noArticlesMessage}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default TestimonialsDashboard
