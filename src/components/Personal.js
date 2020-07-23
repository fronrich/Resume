import React from 'react'

export default function Personal(props) {
  // define elements
  var entires = props.personal;
  var entryList = createEntries(entires);
  return (
    <section className={`Personal`}>
      <p className={`TextHeader`}>
        Personal Projects
      </p>
      {entryList}
    </section>
  )
}

/*
  Creates list of JSX entries
*/
function createEntries(entries) {
  var list = [];
  for(var index = 0; index < entries.length; index++) {
    list.push(
      <div className={`PersonalEntry TextNormal`} key={entries[index].Title}>
        {headerJSX(entries[index].Title, entries[index].Date)}
        <br />
        {entries[index].Summary}
        <br /><br />
      </div>
    );
  }
  return list;
}

/*
  returns JSX for careerItem header
*/
function headerJSX(project, date) {
  return (
    <div className={`HighlightHeader TextBold`}>
      <div className={`ProjectTitle`}>
        <span>
          {project}
        </span>
      </div>
      <div className={`ProjectDate`}>
        <span>
          {date}
        </span>
      </div>
    </div>
  );
}