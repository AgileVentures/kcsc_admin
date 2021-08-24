import React, { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import SettingsIcon from '@material-ui/icons/Settings';
import SidebarIcon from './SidebarIcon'
import MenuIcon from '@material-ui/icons/Menu'
import logoWhite from '../assets/LogoCHWLSymbolWhite.png'
import AssessmentIcon from '@material-ui/icons/Assessment'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Authentication from '../modules/Authentication'
import { Grid, makeStyles } from '@material-ui/core'
import ArticleIcon from '@material-ui/icons/Subject'

const useStyles = makeStyles((theme) => ({
  menuBar: {
    height: '3.5rem',
    backgroundColor: theme.palette.primary.main,
  },
  mobileLogo: {
    height: '80%',
    margin: '0 12px 0 auto',
  },
}))

const PhoneSidebar = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  return (
    <>
      <Grid container alignItems='center' className={classes.menuBar}>
        <IconButton
          data-cy='hamburger-menu'
          className='menu-button'
          onClick={() => setOpen(!open)}>
          <MenuIcon fontSize='large' style={{ color: 'white' }} />
        </IconButton>
        <img src={logoWhite} alt='logo' className={classes.mobileLogo} />
      </Grid>
      <Drawer
        className='drawer'
        anchor='left'
        open={open}
        onClick={() => setOpen(false)}>
        <img src={logoWhite} alt='logo' />
        <List>
          <SidebarIcon text='General' to='/'>
            <SettingsIcon />
          </SidebarIcon>
          <SidebarIcon
            dataCy='articles-dashboard'
            text='Articles'
            to='/articles'>
            <ArticleIcon />
          </SidebarIcon>
          <SidebarIcon dataCy='menu-analytics' text='Analytics' to='/analytics'>
            <AssessmentIcon />
          </SidebarIcon>
        </List>
        <Divider />
        <List>
          <SidebarIcon
            dataCy='logout-button'
            text='Log out'
            onClick={() => Authentication.signOut()}>
            <ExitToAppIcon />
          </SidebarIcon>
        </List>
      </Drawer>
    </>
  )
}

export default PhoneSidebar