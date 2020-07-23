import React from 'react'


/*
  Generates proficiency bars proficiency ranges from 0-10
  bars stored in x number of divs
  every 'props.breakAt' programming languages, new div created
*/
export default function Proficiency(props) {
  
  var breakAt = props.breakAt;
  return (
    <section className={`Proficiency`}>
      <p>Language Proficiencies</p>
      {generateBars(props.proficiency, breakAt)}
    </section>
  )
}

function generateBars(barObject, breakAt) {
  var bars = Object.values(barObject);
  var barTitles = Object.keys(barObject);
  var barColumns = [];
  const NUM_COLS = Math.ceil(bars.length / breakAt);
  var barIndex = 0;
  for(var colIndex = 0; colIndex <= NUM_COLS; colIndex++) {
    var barList = [];
    for(
      var internalBarIndex = breakAt; 
      internalBarIndex >= 0; 
      internalBarIndex--
    ) {
      // bar contents go here
      barList.push(
        <div className={`BarContainer`}>
          <div className={`BarTitles`}>
            {barTitles[barIndex]}
          </div>
          <div className={`Bars`}>
            {getBarVis(bars[barIndex])}
          </div>
        </div>
      );
      barIndex++;
    }
    console.log(barList);
    barColumns.push(
      <div className={`barColumn`}>
        {barList}
      </div>
    );
  }
  return (
    <div className={`BarColumnContainers`}>
      {barColumns}
    </div>
  )
}

function getBarVis(proficiency) {
  var list = [];
  for(var index = 0; index < proficiency; index++) {
    list.push (
      <i class="fas fa-book" />
    );
  }
  return list;
}