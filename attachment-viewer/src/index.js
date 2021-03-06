import React, { useState } from 'react';
import { ReactComponent as ClearIcon } from './assets/cancel.svg';
import { ReactComponent as DeleteIcon } from './assets/bin.svg';
import { ReactComponent as OpenInNewIcon } from './assets/external-link.svg';
import Tooltip from './components/tooltip/Tooltip';
import Loader from './components/loader/Loader';
import classes from './AttachmentViewer.module.css';

const PWAttachmentViewer = ({ attachment, onClose, onDelete }) => {
  const [maxHeightReached, setMaxHeightReached] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const { uploader: { username, userImage }, name, link, createdAt, mimetype } = attachment;

  const downloadFile = () => {
    window.open(link);
  };

  const getFormattedName = name => {
    const indexOfExtensionStarting = name.lastIndexOf('.');
    const extension = name.slice(indexOfExtensionStarting);
    const fileName = name.slice(0, indexOfExtensionStarting);
    return <p className={classes['attachment-name']}>
      <span>
        {fileName}
      </span>
      {extension}
    </p>;
  };

  let attachmentJSX = null;
  if (mimetype.startsWith('image/')) {
    let imageStyles = {};
    if (maxHeightReached) {
      imageStyles = {
        'maxHeight': document.documentElement.clientHeight - 90,
        'width': 'unset'
      };
    }
    imageStyles.opacity = imageLoaded
      ? 1
      : 0;
    attachmentJSX = <div className={classes['image-container']}>
      <img
        alt="Attachment"
        id="image"
        onLoad={() => {
          const image = document.getElementById('image');
          if (image && image.clientHeight > document.documentElement.clientHeight - 70) {
            setMaxHeightReached(true);
          }
          setImageLoaded(true);
        }}
        src={link}
        style={imageStyles}
      />
      {imageLoaded
        ? null
        : <Loader />}
    </div>;
  } else if (mimetype.startsWith('video/')) {
    attachmentJSX = <div className={classes['video-container']}>
      <video controls>
        <source
          src={link}
          type={mimetype}
        />
        {'Your browser does not support the video tag.'}
      </video>
    </div>;
  } else if (mimetype.startsWith('application/pdf')) {
    attachmentJSX = <div className={classes['pdf-container']}>
      <embed src={link} />
    </div>;
  } else if (name.endsWith('doc') || name.endsWith('docx') || name.endsWith('ppt') || name.endsWith('pptx') || name.endsWith('xls') || name.endsWith('xlsx')) {
    attachmentJSX = <div className={classes['office-file-container']}>
      <iframe
        src={`https://view.officeapps.live.com/op/embed.aspx?src=${link}`}
        title="Attachment">
        {'This is an embedded '}
        <a
          href="http://office.com"
          rel="noopener noreferrer"
          target="_blank">
          {'Microsoft Office'}
        </a>
        {' document, powered by '}
        <a
          href="http://office.com/webapps"
          rel="noopener noreferrer"
          target="_blank">
          {'Office Online'}
        </a>
      </iframe>
    </div>;
  } else {
    attachmentJSX = <div>
      <p className={classes['no-preview']}>
        {'No preview available, '}
        <span onClick={downloadFile}>
          {'Download'}
        </span>
      </p>
    </div>;
  }

  const createdAtJSX = new Date(createdAt).toString();

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes['left-side']}>
          <img
            alt={username}
            src={userImage}
          />
          <div style={{
            'marginLeft': 10,
            'width': 'calc(100% - 50px)'
          }}>
            {getFormattedName(name)}
            <p className={classes['creation-details']}>
              {username}
              <span>
                {` | ${createdAtJSX.slice(0, createdAtJSX.length - 34)}`}
              </span>
            </p>
          </div>
        </div>
        <div className={classes['right-side']}>
          <Tooltip title="Open in new tab">
            <OpenInNewIcon onClick={downloadFile} />
          </Tooltip>
          <div className={classes.space} />
          {onDelete
            ? <>
              <Tooltip title="Delete">
                <DeleteIcon onClick={onDelete} />
              </Tooltip>
              <div className={classes.space} />
            </>
            : null}
          <div className={classes.separater} />
          <Tooltip title="Close">
            <ClearIcon onClick={onClose} />
          </Tooltip>
        </div>
      </div>
      <div className={classes['attachment-preview-container']}>
        {attachmentJSX}
      </div>
    </div >
  );
};

export default PWAttachmentViewer;
