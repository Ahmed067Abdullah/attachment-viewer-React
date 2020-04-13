import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AttachmentViewer from './components/attachment-viewer/AttachmentViewer';
import sampleAttachments from './utils/sampleAttachments';
import './App.css';

const App = () => {
  const [attachmentToView, setAttachmentToView] = useState(null);

  const handleDeleteAttachment = () => {
    // Write code here
  };

  return (
    <div className="App">
      <p className="Heading">Welcome to Demo of Attachment Viewer</p>
      <div className="Container">
        {attachmentToView
          ? <AttachmentViewer
            attachment={attachmentToView}
            onClose={() => setAttachmentToView(null)} />
          : null}
        {sampleAttachments.map(attachment => (
          <Button
            color="primary"
            variant="contained"
            onClick={() => setAttachmentToView(attachment)}
            onDelete={handleDeleteAttachment}>
            {attachment.name.slice(0, attachment.name.lastIndexOf('.'))}
          </Button>))}
      </div>
    </div>
  );
};

export default App;
