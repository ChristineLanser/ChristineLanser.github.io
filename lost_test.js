
var data, map;

  var colorScale = {
    'Protestant': '#6D98BA',
    'Catholic': '#6dba8f',
    'Other': '#ba8f6d',
    'Unknown': '#A9A9A9'
  };

//////////Tool Tip////////////////
// const tip = d3.tip()
//  .attr('class', 'tip card')
//  .html(d => {
//      return `<p>Hello</p>`
//  })              //apply htmp inside tooltip

//  graph.call(tip);

// created div with class name canvas and can now create svg elements here in JS
// two ways to get the canvas that we created
// 1. old selection using JavaScript
//const a = document.querySelector(".canvas");

// 2. using D3 - this wraps the variable within the D3 library
//    can name/ref it now as a const
//const canvas = d3.select(".canva");

//add an svg element like circle
//appends svg to our canvas const - injects an <svg></svg> into our div
// like we did manually in html

// const svg = canvas.append("svg");
// svg
//     .attr('width', "800")
//     .attr('height', '10')

// can rewrite as:

// const svg = canvas.append("svg")
//     .attr('width', "800")
//     .attr('height', '500');

// svg.append('circle')
//     .attr('cx', '25')
//     .attr('cy', '12')
//     .attr('r', '7')
//     .attr('fill', '#6D98BA');

// svg.append('text')
//     .text('Protestant')
//     .attr('fill', 'white')
//     .attr('font-size', '14')
//     .attr('x', '40')
//     .attr('y', '18');
    

// //add square with rounded edges    
// svg.append('rect')
//     .attr('width', '100')
//     .attr('height', '100')
//     .attr('x', '0')
//     .attr('y', '120')
//     .attr('fill', 'green')
//     .attr('rx', '15')
//     .attr('ry', '15');


// svg.append('text') 
//     .attr('x', '40')   
//     .attr('y', '18')
//     .attr('text', 'Protestant')


//legend setup
// var ordinal = d3.scaleOrdinal()
//   .domain(["a", "b", "c", "d", "e"])
//   .range([ "rgb(153, 107, 195)", "rgb(56, 106, 197)", "rgb(93, 199, 76)", "rgb(223, 199, 31)", "rgb(234, 118, 47)"]);

// var svg = d3.select("svg");

// map.attr("data-legend",function(d) { return d.Religion})

// legend = svg.append("g")
//   .attr("class","legend")
//   .attr("transform","translate(50,30)")
//   .style("font-size","12px")
//   .call(d3.legend)
 
// const color = d3.scaleOrdinal(d3['schemeSet3']);

// var svg = d3.select("svg");

// const legendGroup = svg.append('g')
//     .attr("transform", "translate(20,20)")

// const legend = d3.legendColor()
//   .shape('circle')
//   .scale(color);

//   svg.select(legendGroup)
//   .call(legend);
//   //legendGroup.call(legend)
 

///////////////////////////////////////////////////////////////////////////////////////////////

 
function initMap() {
  map = L.map('map');

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  map.setView([54.6, -7], 8.3);
  
}

//connect data with map points
function getData() {
    d3.csv('lost_test.csv')
  .then(function(csv) {
  data = csv;
  addMarkers();

  });  
  
}


// create markers based on lat, long and religion type
function addMarkers() {
  data.forEach(function(d) {
    var marker = L.circleMarker([+d.latitude, +d.longitude]);
    var color = colorScale[d.Religion] || '#aaa';
    

//set point style
    marker.setStyle({
        radius: 6,
        fillOpacity: 1,
        fillColor: color,
        color: '#ddd',
        weight: 0.25,
        pointerevents: "visible"
      });
      
        
    marker.addTo(map);
    
  })
}


//initialize both functions
initMap();
getData();

// map.selectAll('markers')
//     .on('mouseover', handleMouseOver);


    //event handlers


