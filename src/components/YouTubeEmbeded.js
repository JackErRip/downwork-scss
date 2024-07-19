import React from 'react';
import s2styles from './s2Ye.module.scss'

function YouTubeEmbeded({ ytLink, classname }) {
  console.log(classname);

  return (
    <div className={s2styles[classname]}>
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
