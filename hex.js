// get our canvas space
// const canvas = d3.select(".canva");

//add data object


// const svg = canvas.append("svg")
//     .attr("width", 600)
//     .attr("height", 600)
    // .style("background", "lightBlue");

var svgHeight = 800
var svgWidth = 800
var floatycircleRadius = 30
var textColor = "#FFFFFF"

var svg = d3.select("body").append("svg")
    .attr("width", svgHeight)
    .attr("height", svgWidth)

    // put background image behind chart/canvas - local see css bee_8
    // for link
    // svg.style("background","url('https://www.google.nl/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png') no-repeat");    
   
// div for tooltip
var div = d3.select("body").append("div")
                .attr("class", "tooltip")
                .style("opacity", 0);

var header = d3.select("body").append("div")

var floatycontainer = svg.append("g");

var floatygroup = floatycontainer.append("g");

var rectangle = floatygroup.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 800)
    .attr("height", 800)
    .attr("fill", "white")
    .attr("opacity", "0.6")


// legend
// const colorScale = scaleOrdinal()
//     .domain(['Habitat Loss', 'Pesticides', 'Agriculture Intensification', 'Climate Change', 'Lack of Conservation', 'Insufficient Research', 'Pests & Parasites', 'Pollution', 'Invasive Species','Other'])
//     .range(['#53486e', '#D93', '#499149', '#adcc7b', '#977c52', '#70658b', '#445744', '#53486e', '#c0a175', '#8f8d89']);
 
// shapes    
// 1. Habitat Loss
var Hex1 = floatygroup.append("path")
    .attr("d", "m 581.25	581.25	139.5	0	58.125	116.25	-58.125	116.25	-139.5	0	-58.125	-116.25	58.125	-116.25")
    .attr("transform", "translate(-120, -350)")
    //.transform("r90")  
    .style("fill", "#a58fdd")
    .on("mouseover", function() {  
        d3.select()
        .transition()
        .duration(100) 
        div.transition()
        .duration(200)
        .style("opacity", 0.9);
    
        div.html("<p>" +  "Habitat Loss: 31%" + "</p>")
            .style("left", "20px")
            .style("top", "95px")
            .attr("text", "#53486e");
                   
        Hex1.style("opacity", 0.7);
    })
    .on("mouseout", function() {  
        d3.select()
        .transition()
        .duration(100) 
        div.transition()
        .duration(500)
        .style('opacity', 0);
    Hex1.style("opacity", 1)        
    })
    
// 2. Pesticides 
var Hex2 = floatygroup.append("path")
    .attr("d", "m 488.75	488.75	117.3	0	48.875	97.75	-48.875	97.75	-117.3	0	-48.875	-97.75	48.875	-97.75")
    .attr("transform", "translate(90, -60)") 
    .style("fill", "#D93")
    .on("mouseover", function() {  
        d3.select()
        .transition()
        .duration(100) 
        div.transition()
        .duration(200)
        .style("opacity", 0.9);
    
        div.html("<p>" +  "Pesticides: 23%" + "</p>")
            .style("left", "20px")
            .style("top", "95px")
            .attr("text", "#53486e");
                   
        Hex2.style("opacity", 0.7);
    })
    .on("mouseout", function() {  
        d3.select()
        .transition()
        .duration(100) 
        div.transition()
        .duration(500)
        .style('opacity', 0);
    Hex2.style("opacity", 1)        
    })

// 3. Agriculture Intensification
var Hex3 = floatygroup.append("path")
    .attr("d", "m 332.5	332.5	79.8	0	33.25	66.5	-33.25	66.5	-79.8	0	-33.25	-66.5	33.25	-66.5")
    .attr("transform", "translate(130, -240)")
    .style("fill", "#499149") 
    .on("mouseover", function() {  
        d3.select()
        .transition()
        .duration(100) 
        div.transition()
        .duration(200)
        .style("opacity", 0.9);
    
        div.html("<p>" +  "Agriculture Intensification: 14%" + "</p>")
            .style("left", "20px")
            .style("top", "95px")
            .attr("text", "#53486e");
                   
        Hex3.style("opacity", 0.7);
    })
    .on("mouseout", function() {  
        d3.select()
        .transition()
        .duration(100) 
        div.transition()
        .duration(500)
        .style('opacity', 0);
    Hex3.style("opacity", 1)        
    })

//4. Climate Change  yellow green
var Hex4 = floatygroup.append("path")
    .attr("d", "m 332.5	332.5	79.8	0	33.25	66.5	-33.25	66.5	-79.8	0	-33.25	-66.5	33.25	-66.5")
    .attr("transform", "translate(10, -170)")
    .style("fill", "#adcc7b") 
    .on("mouseover", function() {  
        d3.select()
        .transition()
        .duration(100) 
        div.transition()
        .duration(200)
        .style("opacity", 0.9);
    
        div.html("<p>" +  "Climate Change: 14%" + "</p>")
            .style("left", "20px")
            .style("top", "95px")
            .attr("text", "#53486e");
                   
        Hex4.style("opacity", 0.7);
    })
    .on("mouseout", function() {  
        d3.select()
        .transition()
        .duration(100) 
        div.transition()
        .duration(500)
        .style('opacity', 0);
    Hex4.style("opacity", 1)        
    })

//5. Lack of Conservation   yellow/brown
var Hex5 = floatygroup.append("path")
    .attr("d", "m 225	225	54	0	22.5	45	-22.5	45	-54	0	-22.5	-45	22.5	-45")
    .attr("transform", "translate(410, -45)")
    .style("fill", "#977c52") 
    .on("mouseover", function() {  
        d3.select()
        .transition()
        .duration(100) 
        div.transition()
        .duration(200)
        .style("opacity", 0.9);
    
        div.html("<p>" +  "Lack of Conservation: 9%" + "</p>")
            .style("left", "20px")
            .style("top", "95px")
            .attr("text", "#53486e");
                   
        Hex5.style("opacity", 0.7);
    })
    .on("mouseout", function() {  
        d3.select()
        .transition()
        .duration(100) 
        div.transition()
        .duration(500)
        .style('opacity', 0);
    Hex5.style("opacity", 1)        
    })

//6. Insufficient Research  purple/grey
var Hex6 = floatygroup.append("path")
    .attr("d", "m 112.5	112.5	27	0	11.25	22.5	-11.25	22.5	-27	0	-11.25	-22.5	11.25	-22.5")
    .attr("transform", "translate(360, 430)")
    .style("fill", "#70658b") 
    .on("mouseover", function() {  
        d3.select()
        .transition()
        .duration(100) 
        div.transition()
        .duration(200)
        .style("opacity", 0.9);
    
        div.html("<p>" +  "Insufficient Research: 2%" + "</p>")
            .style("left", "20px")
            .style("top", "95px")
            .attr("text", "#53486e");
                   
        Hex6.style("opacity", 0.7);
    })
    .on("mouseout", function() {  
        d3.select()
        .transition()
        .duration(100) 
        div.transition()
        .duration(500)
        .style('opacity', 0);
    Hex6.style("opacity", 1)        
    })
   
//7. Pests & Parasites   dark green
var Hex7 = floatygroup.append("path")
    .attr("d", "m 112.5	112.5	27	0	11.25	22.5	-11.25	22.5	-27	0	-11.25	-22.5	11.25	-22.5")
    .attr("transform", "translate(318, 405)")
    .style("fill", "#445744") 
    .on("mouseover", function() {  
        d3.select()
        .transition()
        .duration(100) 
        div.transition()
        .duration(200)
        .style("opacity", 0.9);
    
        div.html("<p>" +  "Pests & Parasites: 2%" + "</p>")
            .style("left", "20px")
            .style("top", "95px")
            .attr("text", "#53486e");
                   
        Hex7.style("opacity", 0.7);
    })
    .on("mouseout", function() {  
        d3.select()
        .transition()
        .duration(100) 
        div.transition()
        .duration(500)
        .style('opacity', 0);
    Hex7.style("opacity", 1)        
    })

//8. Pollution dark purple
var Hex8 = floatygroup.append("path")
    .attr("d", "m 150	150	36	0	15	30	-15	30	-36	0	-15	-30	15	-30")
    .attr("transform", "translate(530, 110)")
    .style("fill", "#53486e") 
    .on("mouseover", function() {  
        d3.select()
        .transition()
        .duration(100) 
        div.transition()
        .duration(200)
        .style("opacity", 0.9);
    
        div.html("<p>" +  "Pollution: 3%" + "</p>")
            .style("left", "20px")
            .style("top", "95px")
            .attr("text", "#53486e");
                   
        Hex8.style("opacity", 0.7);
    })
    .on("mouseout", function() {  
        d3.select()
        .transition()
        .duration(100) 
        div.transition()
        .duration(500)
        .style('opacity', 0);
    Hex8.style("opacity", 1)        
    })

//9. Invasives  light brown/yellow
var Hex9 = floatygroup.append("path")
    .attr("d", "m 112.5	112.5	27	0	11.25	22.5	-11.25	22.5	-27	0	-11.25	-22.5	11.25	-22.5")
    .attr("transform", "translate(360, 380)")
    .style("fill", "#c0a175") 
    .on("mouseover", function() {  
        d3.select()
        .transition()
        .duration(100) 
        div.transition()
        .duration(200)
        .style("opacity", 0.9);
    
        div.html("<p>" +  "Invasive Species: 2%" + "</p>")
            .style("left", "20px")
            .style("top", "95px")
            .attr("text", "#53486e");
                   
        Hex9.style("opacity", 0.7);
    })
    .on("mouseout", function() {  
        d3.select()
        .transition()
        .duration(100) 
        div.transition()
        .duration(500)
        .style('opacity', 0);
    Hex9.style("opacity", 1)        
    })

//10. Other
var Hex10 = floatygroup.append("path")
    .attr("d", "m 75	75	18	0	7.5	15	-7.5	15	-18	0	-7.5	-15	7.5	-15")
    .attr("transform", "translate(610, 80)")
    .style("fill", "#8f8d89") 
    .on("mouseover", function() {  
        d3.select()
        .transition()
        .duration(100) 
        div.transition()
        .duration(200)
        .style("opacity", 0.9);
    
        div.html("<p>" +  "Other: 1%" + "</p>")
            .style("left", "20px")
            .style("top", "95px")
            .attr("text", "#53486e");
                   
        Hex10.style("opacity", 0.7);
    })
    .on("mouseout", function() {  
        d3.select()
        .transition()
        .duration(100) 
        div.transition()
        .duration(500)
        .style('opacity', 0);
    Hex10.style("opacity", 1)        
    })
    


         