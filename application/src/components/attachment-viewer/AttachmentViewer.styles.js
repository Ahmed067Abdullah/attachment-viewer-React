import { makeStyles } from '@material-ui/styles';

const styles = {
  'attachment-name': {
    '& > span': {
      'margin': 0,
      'overflow': 'hidden',
      'textOverflow': 'ellipsis',
      'whiteSpace': 'nowrap'
    },
    'alignItems': 'center',
    'display': 'flex',
    'fontWeight': 500,
    'margin': 0
  },
  'attachment-preview-container': {
    'alignItems': 'center',
    'display': 'flex',
    'height': 'calc(100% - 70px)',
    'justifyContent': 'center'
  },
  'container': {
    'background': 'rgba(0,0,0,0.9)',
    'height': '100vh',
    'left': 0,
    'position': 'fixed',
    'top': 0,
    'width': '100vw',
    'zIndex': '5'
  },
  'creation-details': {
    '& > span': {
      'fontWeight': 400
    },
    'fontSize': 12,
    'fontWeight': 500,
    'margin': 0,
    'marginTop': '3px',
    'textAlign': 'left'
  },
  'header': {
    'display': 'flex',
    'margin': '15px 20px'
  },
  'icon': {
    'cursor': 'pointer'
  },
  'image-container': {
    '& > div': {
      'left': '50%',
      'position': 'absolute',
      'top': '50%'
    },
    '& img': {
      'width': '100%'
    },
    'maxHeight': 'calc(100% - 20px)',
    'maxWidth': '90%',
    'position': 'relative'
  },
  'left-side': {
    '& img': {
      'borderRadius': '50%',
      'height': '40px',
      'width': '40px'
    },
    'alignItems': 'center',
    'color': '#fff',
    'display': 'flex',
    'width': 'calc(100% - 150px)'
  },
  'no-preview': {
    '& > span': {
      'cursor': 'pointer',
      'textDecoration': 'underline',
      'userSelect': 'none'
    },
    'color': '#fff',
    'fontSize': 18,
    'margin': '0 0 8px 0',
    'textAlign': 'center'
  },
  'office-file-container': {
    '& > iframe': {
      '@media(max-width:1250px)': {
        'width': '100%'
      },
      'height': '100%',
      'width': '1200px'
    },
    '@media(max-width:1250px)': {
      'width': '90%'
    },
    'height': '100%'
  },
  'pdf-container': {
    '& >embed': {
      'height': '100%',
      'width': '100%'
    },
    'height': '100%',
    'width': '100%'
  },
  'right-side': {
    'alignItems': 'center',
    'display': 'flex',
    'marginLeft': 'auto'
  },
  'separater': {
    'background': '#fff',
    'height': '30px',
    'marginRight': '10px',
    'width': '1px'
  },
  'video-container': {
    '& video': {
      '@media(max-width:1100px)': {
        'height': '480px',
        'width': '768px'
      },
      '@media(max-width:768px)': {
        'height': '60vw',
        'width': '80vw'
      },
      'background': '#000',
      'height': '640px',
      'width': '1024px'
    }
  }
};

export default makeStyles(styles);
