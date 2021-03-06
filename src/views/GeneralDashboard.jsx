import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Typography, Divider, Box } from '@material-ui/core'
import useCommonStyles from '../theme/useCommonStyles'
import FooterForm from '../components/GeneralDashboard/FooterForm'
import TaglineForm from '../components/GeneralDashboard/TaglineForm'
import AppData from '../modules/AppData'

const GeneralDashboard = () => {
  const commonClasses = useCommonStyles()
  const app_data = useSelector((state) => state.app_data)

  useEffect(() => {
    AppData.index()
  }, [])

  return (
    <Box className={commonClasses.viewContainer}>
      <Box className={commonClasses.dashboardHeader}>
        <Typography
          data-cy='dashboard-header'
          variant='h5'
          style={{ fontWeight: 600 }}>
          Edit General App Info
        </Typography>
      </Box>
      <Divider />
      {app_data.about ? (
        <>
          <TaglineForm tagline={app_data.tagline} />
          <FooterForm
            about={app_data.about}
            disclaimers={app_data.disclaimers}
          />
        </>
      ) : (
        <Typography
          data-cy='form-loading-error-message'
          variant='h6'
          style={{ padding: '1rem 2rem' }}>
          There is a problem loading a form. Please check your connection or try
          again later. If the problem persist contact the development team.
        </Typography>
      )}
    </Box>
  )
}

export default GeneralDashboard
