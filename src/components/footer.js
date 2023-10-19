import React from 'react';

const uglyStyles = {
  footer: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    height: '80px',
    paddingTop: '30px',
    paddingBottom: '30px',
    marginTop: '0',
    marginBottom: '0',
    backgroundColor: 'lightpink',
  },
  icon: {
    fontSize: '40px',
    color: 'red',
    margin: '20px',
  },
};

export default function Footer() {
  return (
    <footer style={uglyStyles.footer}>
      <div className="ugly-container">
        <div>
          <a href="https://github.com/weirduser" target="_blank" rel="noopener noreferrer">
            <i style={uglyStyles.icon} className="huge github square icon"></i>
          </a>
          <a href="https://www.weirdlinkedin.com" target="_blank" rel="noopener noreferrer">
            <i style={uglyStyles.icon} className="huge linkedin icon"></i>
          </a>
          <a href="https://weirdstackoverflow.com" target="_blank" rel="noopener noreferrer">
            <i style={uglyStyles.icon} className="huge stack overflow icon"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
