import React, { useState } from 'react'
import {
  Grid,
  makeStyles,
  Drawer,
  List,
  Divider,
  IconButton,
} from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import AssessmentIcon from '@material-ui/icons/Assessment'
import ArticleIcon from '@material-ui/icons/Subject'
import CreateIcon from '@material-ui/icons/Create'

import SidebarIcon from './SidebarIcon'
import logoWhite from '../../assets/LogoCHWLSymbolWhite.png'
import Authentication from '../../modules/Authentication'

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
          <SidebarIcon text='Dashboard' to='/'>
            <MailIcon />
          </SidebarIcon>
          <SidebarIcon
            dataCy='articles-dashboard'
            text='Articles'
            to='/articles'>
            <ArticleIcon />
          </SidebarIcon>
          <SidebarIcon
            dataCy='article-creation'
            text='Create Article'
            to='/articles/create'>
            <CreateIcon />
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