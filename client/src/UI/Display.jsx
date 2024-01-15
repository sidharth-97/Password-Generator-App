import React from 'react'
import BasicButtons from './Button'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const Display = () => {
  return (
<div className='border border-spacing-2 rounded-md p-4 flex flex-row items-center shadow-md'>
    <div className='w-5/6 text-lg'>
        dsfdfsdfsfd
    </div> 
      <div className='flex items-center space-x-3'>
        <AutorenewIcon/>
        <ContentCopyIcon />
        <BasicButtons />
    </div>
</div>


  )
}

export default Display