import React, { useState } from 'react';
import AttachmentViewer from './components/attachment-viewer/AttachmentViewer';
import './App.css';

const App = () => {
  const [attachmentToView, setAttachmentToView] = useState(null);

  const exampleAttachments = [{
    uploader: {
      username: 'John Doe',
      userImage: 'https://themes.themewaves.com/nuzi/wp-content/uploads/sites/4/2013/05/Team-Member-3.jpg'
    },
    name: 'Image 1.jpeg',
    link: 'https://themes.themewaves.com/nuzi/wp-content/uploads/sites/4/2013/05/Team-Member-3.jpg',
    createdAt: Date.now(),
    mimetype: 'image/jpeg'
  }]
  return (
    <div className="App">
      {attachmentToView
        ? <AttachmentViewer
          attachment={attachmentToView}
          onClose={() => setAttachmentToView(null)} />
        : null}
      {exampleAttachments.map(attachment => <button onClick={() => setAttachmentToView(attachment)}>
        Image 1
      </button>)}
    </div>
  );
};

export default App;
