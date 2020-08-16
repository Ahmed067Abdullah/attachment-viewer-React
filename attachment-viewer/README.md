## Table of Content

* [Installation](#installation)
* [Usage](#usage)
* [Example](#example)
* [Demo](#demo)

## Installation

To install, you can use **npm** or **yarn**
```
$ npm install attachment-viewer
$ yarn add attachment-viewer
```

## Usage
After installation, import the component in your file
```
import AttachmentViewer from 'attachment-viewer';
```

Conditionally render the AttachmentViewer component with the proper attachment object, like
```
const attachmentObject = {
    uploader: {
      username: USER_NAME,
      userImage: USER_IMAGE_URL
    },
    name: ATTACHMENT_NAME,
    link: ATTACHMENT_URL,
    createdAt: ATTACHMENT_CREATED_TIME,
    mimetype: ATTACHMENT_MIME_TYPE
};
```
You should also pass the onClose prop to handle hiding the attachment viewer

## Example
```
import React, { useState } from 'react';
import AttachmentViewer from 'attachment-viewer';

function App() {
  const [showAttachment, setShowAttachment] = useState(false)

  const attachmentObject = {
    uploader: {
      username: 'John Doe',
      userImage: USER_IMAGE_URL
    },
    name: 'Image 1.jpeg',
    link: ATTACHMENT_URL,
    createdAt: Date.now(),
    mimetype: 'image/jpeg'
  };

  return (
    <div >
      {showAttachment
        ? <AttachmentViewer
          attachment={attachmentObject}
          onClose={() => setShowAttachment(false)}
          onDelete={() => { /* Do something (OPTIONAL) */ }} />
        : null}
      <button onClick={() => setShowAttachment(true)}>Show attachment</button>
    </div>
  );
}

export default App;
```
## Demo

Click [here](https://ahmed067abdullah.github.io/attachment-viewer-React/)