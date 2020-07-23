import React from 'react'

export default function Social(props) {
  return (
    <section className={`Social`}>
      <p className={`TextHeader`}>Find Me @</p>
      {generateSocial(props.social)}
    </section>
  )
}

/*
  takes a socialJSON of the following format and turns it into social links
  {
    'instagram' : [
      <icon code>, 
      <url>
    ],
    'linkedin' : [
      <icon code>,
      <url>
    ],
  }
*/
function generateSocial(socialJSON) {
  var socialList = [];
  // retrive keys and values from JSON
  var keys = Object.keys(socialJSON);
  var values = Object.values(socialJSON);
  var length = keys.length;
  // parse and render
  for(var index = 0; index < length; index++) {
    var currentTitle = keys[index];
    var currentIcon = values[index][0];
    var currentLink = values[index][1];
    socialList.push(
      <div className={`ListItemContainer TextNormal`} key={currentTitle}>
        <div className={`BulletContainer`}>
          <i className={`Icon ${currentIcon}`} />
        </div>
        <div className={`ListItem`}>
          <a 
            className={`Link TextNormal`} 
            href={currentLink} 
            target={`_blank`}
          >
            {currentLink}
          </a>
        </div>
      </div>
    );
  }
  return socialList;
}

