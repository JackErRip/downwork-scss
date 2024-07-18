import React from 'react';

function YouTubeEmbeded({ ytLink, classname }) {
  return (
    <div className={classname}>
      <div>
        <iframe
          
          src={ytLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default YouTubeEmbeded;
