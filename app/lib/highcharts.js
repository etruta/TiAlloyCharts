var Highcharts = {

  line : function(_options) {
    return {
      chart : {
        renderTo : 'container',
        backgroundColor : null,
        plotBackgroundColor : null,
        type : 'line'
      },
      exporting : {
        enabled : false
      },
      credits : {
        enabled : false
      },
      title : {
        text : null,
      },
      xAxis : {
        categories : _options.categories
      },
      yAxis : {
        title : {
          text : ''
        },
        plotLines : [{
          value : 0,
          width : 1,
          color : '#808080'
        }]
      },
      tooltip : {
        valueSuffix : ''
      },
      legend : {
        enabled : false,
        layout : 'horizontal',
        align : 'center',
        verticalAlign : 'top',
        borderWidth : 0,
        y : 20
      },
      series : _options.series,
      width : 800
    };
  }
};

module.exports = Highcharts; 