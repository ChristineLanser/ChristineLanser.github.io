// get our canvas space
const canvas = d3.select(".canva");

var valueData = [
    
5500000,
5700000,
5000000,
5000000,
4500000,
4100000,
4000000,
4000000,
4300000,
3220000,
2650000,
2610000,
2410000,
2700000,
2650000,
      
];



var years = [
    1945,
    1950,
    1955,
    1960,
    1965,
    1970,
    1975,
    1980,
    1985,
    1990,
    1995,
    2000,
    2005,
    2010,
    2015,    

];

//for specific format see github d3.time parse
// formatDay = d3.timeFormat("%a %d"),
// formatWeek = d3.timeFormat("%b %d"),
// formatMonth = d3.timeFormat("%B"),
// formatYear = d3.timeFormat("%Y");
var parseYears = d3.timeParse("%Y");
console.log(d3.extent(years, (d)=>parseYears(d)));
//add an svg element
const svg = canvas.append("svg")
    .attr("width", 850)
    .attr("height", 700)
    .style("background", "rgb(156, 154, 154)")
    
    svg.append("text")
    .attr("x", 160)             
    .attr("y", 80)
    .attr("text-anchor", "center")  
    .style("font-size", "40px") 
    .style("font-style", "Arial")
    .text("National Bee Colony Collapse")
    .attr("fill", "lightgrey");
    //add shapes

    // svg.append("circle")
    //     .attr("cx", "445")  
    //     .attr("cy", "415")
    //     .attr("r", "30")
    //     .attr("fill", "black")
    //     // .attr("fill", "rgb(156, 154, 154)")
    //    // .attr("opacity", ".3")


    svg.append("rect")
    .attr("width", "170")
    .attr("height", "40")
    .attr("rx", "23")
    .attr("ry", "23")
    .attr("x", "345")  //450 is center so 450 - width/2
    .attr("y", "155")
    .attr("fill", "yellow")
    .attr("opacity", ".2")
    // .attr("stroke", "rgb(156, 154, 154)")
    // .attr("stroke-width", "5")
   
    svg.append("rect")
    .attr("width", "260")
    .attr("height", "50")
    .attr("rx", "25")
    .attr("ry", "25")
    .attr("x", "300")  //450 is center so 450 - width/2
    .attr("y", "200")
    .attr("fill", "yellow")
    .attr("opacity", ".2")

    svg.append("rect")
    .attr("width", "320")
    .attr("height", "60")
    .attr("rx", "30")
    .attr("ry", "30")
    .attr("x", "270")  //450 is center so 450 - width/2
    .attr("y", "255")
    .attr("fill", "yellow")
    .attr("opacity", ".2")

        svg.append("rect")
        .attr("width", "390")
        .attr("height", "60")
        .attr("rx", "30")
        .attr("ry", "30")
        .attr("x", "235")  //450 is center so 450 - width/2
        .attr("y", "320")
        .attr("fill", "yellow")
        .attr("opacity", ".2")

        svg.append("rect")
        .attr("width", "320")
        .attr("height", "60")
        .attr("rx", "30")
        .attr("ry", "30")
        .attr("x", "270")  //450 is center so 450 - width/2
        .attr("y", "385")
        .attr("fill", "yellow")
        .attr("opacity", ".2")
   
    svg.append("rect")
        .attr("width", "260")
        .attr("height", "50")
        .attr("rx", "25")
        .attr("ry", "25")
        .attr("x", "300")  //450 is center so 450 - width/2
        .attr("y", "450")
        .attr("fill", "yellow")
        .attr("opacity", ".2")
   
    svg.append("rect")
        .attr("width", "170")
        .attr("height", "40")
        .attr("rx", "20")
        .attr("ry", "20")
        .attr("x", "345")  //450 is center so 450 - width/2
        .attr("y", "505")
        .attr("fill", "yellow")
        .attr("opacity", ".2")
        
    
    
    
//dom box
const margin = {top:200, right:20, bottom: 70, left: 70};    
//hold width our our bar chart (need margin around bars)
const graphWidth = 800 - margin.left - margin.right;
const graphHeight = 500 - margin.top - margin.bottom;
// creating a group that we can put things into insted of whole page
const mainCanvas = svg.append("g")
    .attr("width", graphWidth)
    .attr("height", graphHeight)
    .attr("transform", `translate(${margin.left}, ${400})`);
    

// set the domain and ranges
// code is for original data by month which was in string format 
// year put in string to keep code for months in case we change data to month
// also good for year as string because it will not have decimal

// var x = d3.scaleLinear()
//                 .range([0, graphWidth])
//                 .dommain(d3.max(years, (d) => d))
// //max number in our data
// ;
var y = d3.scaleLinear()
            .domain([0, 6000000]) 
            
           // .domain([0, d3.max(valueData, (d) => d)]) 
            .range([graphHeight, 0])
           // .domain([0, d3.max(valueData, (d) => d)]) 
           //to soften lines but dont think its working
           .nice();
            
            // .domain([0, d3.max(data, d=>d.height)])
            // .range([graphHeight, 0]);

var x = d3.scaleLinear()
            .range([0, graphWidth])
            .domain([d3.min(years, (d) => d), d3.max(years, (d) => d)]) 
            .nice();

var areaChart = d3.area()
    .x(function(d,i) {
        return x(years[i]) })
    .y0(graphHeight)
    .y1((d,i) =>  y(d));
    //.y1((d,i) => graphHeight - y(d));
    //(d,i) => graphHeight - y(d.height)

//create grapheline for area
var valueLine = d3.line()
    .x(function (d,i) {return x(years[i])})  //tutorial said to use parseYears but it wasn't working
    .y(function (d,i) {return y(d)})

       

var selectCircle = svg.selectAll(".circle")
.data(valueData)

// div for tooltip
var div = d3.select("body").append("div")
.attr("class", "tooltip")
.style("opacity", 0);

mainCanvas.append("path")    //add value line
    .data([valueData])  
    .attr("fill", "none") 
    // .attr("stroke", "lightGray")  moved to css - more dynamic in css
    .attr("class", "line")       
    .attr("d", valueLine)

mainCanvas.append("path")
    .attr("fill", "orange") 
    .attr("class", "area")        
    .attr("d", areaChart(valueData));

//create points (small circles) for each data point
var circles = mainCanvas.selectAll("circles")
    .data(valueData)
    .enter()
    .append("circle")
    .attr("class", "points")
    .attr("cx", (d,i)=> x(years[i]))
    .attr("cy", (d,i)=> y(d))
    .attr("r", 3)

    .on("mouseover", function(d, i, n) {  
        d3.select(n[i])
        .transition()
        .duration(100)  
        .style("opacity", 1)
        .attr("r", 8);
        
             //lightens when mouse is over a bar
      
             div.transition()
            .duration(200)
            .style("opacity", 0.9);

        div.html("<p>" +  formatValue1(d) + "</p>")
        //if you want a box to the right of the graph
            // .style("left", "620px")
            // .style("top", "40px");
            // //to make it more dynameic d3 event object
            //position of tooltip on hover
           // hovers next to bar selected (not in one place)
            .style("left", (d3.event.pageX) + 1+ "px")
            .style("top", (d3.event.pageY) -1 + "px") 
    })
    .on("mouseout", function(d, i, n) {  
        // Add interactivity
        // Use D3 to select element, change color and size
        //updated mouseover script: http://bl.ocks.org/WilliamQLiu/76ae20060e19bf42d774
        d3.select(n[i])
        .transition()
        .duration(100)  
        .style("opacity", 1)
        .attr("r", 3)

        div.transition()
            .duration(500)
            .style('opacity', 0)
    })
    .attr("fill", (d,i) => d.fill);



// add axis  //remember to call it below
//for decimals
//.tickFormat(d3.format('.0f')); //  .0f means: I want a precision of 0 places after the decimal, and I want values to be fixed, i.e. not rounded but truncated.
//.tickFormat(d3.format('%b')) // %b for abreviated months format
var xAxis = d3.axisBottom(x)
           // .scale(bar_xpos)
            //.orient("bottom")
            .tickFormat(d3.format("d"))
            .ticks(5); 

    // formatValue declared to adjust large number and then get m
formatValue = d3.format(".1s");
formatValue1 = d3.format(".2s");

var yAxis = d3.axisLeft(y)
    //.tickFormat('d','M')
           .ticks(4)
           .tickFormat(function(d) { return formatValue(d)})
           .tickPadding(5) //little space away from graph
           //.tickSize(12) changes size of tick dash line
          // .tickFormat(d3.format(".0f"))
          //If you want to add text next to number
          //.tickFormat(function(d) { return formatValue(d).replace('M', ' million'); });

    mainCanvas.append("g")
        .attr("transform", "translate(0, "+ graphHeight+")")
        .call(xAxis)
        .attr("class", "axisColor")

        mainCanvas.append("g")
        .call(yAxis)
        .attr("class", "axisColor")


