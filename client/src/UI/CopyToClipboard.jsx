import React from 'react';
import { toast } from 'react-toastify'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


const CopyToClipboardButton = ({ textToCopy }) => {

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      toast.success('Copied to clipboard!');
    } catch (err) {
      console.error('Unable to copy to clipboard.', err);
      toast.error('Failed to copy.');
    }
  };

  return (
    <div>
      <button onClick={copyToClipboard}> <ContentCopyIcon /></button>
    </div>
  );
};

export default CopyToClipboardButton;
