import React from 'react'
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CopyToClipboardButton from './CopyToClipboard';
import SavePassword from '../components/SavePassword';

const Display = ({password}) => {
  return (
<div className='border border-spacing-2 rounded-md p-4 flex flex-row items-center shadow-md'>
    <div className='w-5/6 text-lg'>
        {password}
    </div> 
      <div className='flex items-center space-x-3'>
        <AutorenewIcon/>
        <CopyToClipboardButton textToCopy={password}/>
        <SavePassword password={password} />
    </div>
</div>


  )
}

export default Display