import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Box, Typography } from '@material-ui/core'
import Articles from '../modules/Articles'
import ArticleCreationForm from '../components/ArticleCreationForm'
import SuccessSnackbar from '../components/popups/SuccessSnackbar'
import useCommonStyles from '../theme/useCommonStyles'

const ArticleCreation = () => {
  const commonClasses = useCommonStyles()
  const [redirect, setRedirect] = useState(false)
  const [article, setArticle] = useState({
    title: '',
    body: '',
  })

  const handleChange = (event) => {
    setArticle({
      ...article,
      [event.target.name]: event.target.value || event.target.checked,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    Articles.create(article)
    setRedirect(true)
  }

  return (
    <Box className={commonClasses.viewContainer}>
      <SuccessSnackbar />
      <Box className={commonClasses.dashboardHeader}>
        <Typography
          data-cy='dashboard-header'
          variant='h5'
          style={{ fontWeight: 600 }}>
          Create a new article
        </Typography>
      </Box>
      {redirect && <Redirect to='/articles' />}
      <ArticleCreationForm
        article={article}
        setArticle={setArticle}
        handleSubmit={handleSubmit}
        handleChange={(event) => handleChange(event)}
      />
    </Box>
  )
}

export default ArticleCreation
