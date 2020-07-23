import React from 'react'

export default function Career(props) {
  var careerList = props.career;
  var list = [];
  for(var index = 0; index < careerList.length; index++)
    list.push(careerItem(careerList[index]));
  return (
    <section className={`Career`}>
      <p className={`TextHeader`}>Work Experience</p>
      {list}
    </section>
  )
}

/*
  returns a JSX career item based on JSON
*/
function careerItem(careerItem) {
  // deconstruct the JSON
  var company = careerItem.Company;
  var role =  careerItem.Role;
  // date range is XXXX - Current by default
  var dateRange = careerItem.EndDate === undefined
    ? (
      careerItem.StartDate + 
      " - Current"
    )
    : (
      careerItem.StartDate + 
      " - " + 
      careerItem.EndDate
    );
      
  var highlights = careerItem.Highlights;
  // generate parts of the careerItem component
  // create careerItem header component
  var header = headerJSX(company, role, dateRange);
  // get highlights as bulleted list JSX
  var highlightJSX = (
    <div 
      className={`TextNormal`} 
      key={company}
    >
      {header}
      <br />
      {highlightList(highlights)}
      <br />
    </div>
  );
  return highlightJSX
}

/*
  returns JSX for careerItem header
*/
function headerJSX(company, role, dateRange) {
  return (
    <div className={`HighlightHeader TextBold`}>
      <div className={`CompanyRole`}>
        <span>
          {role} at {company}
        </span>
      </div>
      <div className={`DateRange`}>
        <span>
          {dateRange}
        </span>
      </div>
    </div>
  );
}

/*
  returns a JSX bulleted list of highlights
*/
function highlightList(highlights) {
  var highlightJSX = [];
  for(var index = 0; index < highlights.length; index++) {
    highlightJSX.push(
      <div className={`ListItemContainer TextNormal`} key={index}>
        <div className={`ListItem`}>
          <span>
            ⭓ {highlights[index]}
          </span>
        </div>
      </div>
    );
  }
  return (
    <div className={`HighlightList`}>
      {highlightJSX}
    </div>
  );
}
