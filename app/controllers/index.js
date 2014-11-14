var chartOptions = require("highcharts").line({
  series : [{
    color : "#43ee01",
    data : [150, 142, 138, 142, 138, 142, 138, 142, 138, 142, 138, 142, 138, 142, 138]
  }],
  categories : ['6/25/2014', '6/26/2014', '6/27/2014', '6/28/2014', '6/29/2014', '6/30/2014', '6/31/2014', '6/32/2014', '6/33/2014', '6/34/2014', '6/35/2014', '6/36/2014', '6/37/2014', '6/38/2014', '6/39/2014']
});
chartOptions.title.text = "Line chart";

var scalesPageToFit = false;
var containerWidth = 800;

$.chart.loadChart(chartOptions, scalesPageToFit, containerWidth);

$.index.open();