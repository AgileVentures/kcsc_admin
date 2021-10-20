import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Switch } from '@material-ui/core'
import Articles from '../../modules/Articles'

const StyledSwitch = withStyles({
  switchBase: {
    color: '#ddd',
    '&$checked': {
      color: '#0BDA51',
    },
    '&$checked + $track': {
      backgroundColor: '#00FF00',
    },
  },
  checked: {},
  track: {},
})(Switch)

const CaseStudySwitch = ({ case_study, articleId, rerender }) => {
  const [checked, setChecked] = useState(case_study)
  
  const handleChange = async () => {
    let caseStudyState = !checked    
    let result = await Articles.update_attribute(articleId, 'case_study', caseStudyState)
    if (result !== 'error') {
      setChecked(caseStudyState)
    }
    rerender()
  }

  return (
    <>
      <StyledSwitch
        size='small'
        checked={checked}
        onChange={handleChange}
        data-cy={`case-study-switch-${articleId}`}
        name={`case-study-switch-${articleId}`}
      />
    </>
  )
}

export default CaseStudySwitch
