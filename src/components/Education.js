import React from 'react'

/*

*/
export default function Education(props) {
  return (
    <section className={`Education`}>
      {makeHeader(props.education)}
      {makeList(props.education)}
    </section>
  )
}

/*
  function which generates bulleted list
*/
function makeList(education) {
  var courseList = education.Courses;
  var courseListJSX = [];
  // generate list
  for(var index = 0; index < courseList.length; index++) {
    courseListJSX.push(
      <div className={`ListItemContainer TextNormal`} key={courseList[index]}>
        <div className={`ListItem`}>
          <span>
            ⭓ {courseList[index]}
          </span>
        </div>
      </div>
    );
  }
  return courseListJSX;
}


/*
  function which takes education JSOn and creates a header
*/
function makeHeader(education) {
  var major = education.Major;
  var school = education.School;
  var gpa = education.GPA;

  return (
    <div className={`EducationHeader`}>
      <p className={`TextHeader`}>
      Education
      </p>
      <p className={`TextBold`}>
        {major}
      </p>
      <p className={`TextNormal`}>
        {school}
      </p>
      <p className={`TextItalic`}>
        GPA {gpa}
      </p>
    </div>
    
  )
}
