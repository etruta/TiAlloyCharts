function loadChart(_chartOptions, _scalesPageToFit, _containerWidth) {
  $.chartWebView.scalesPageToFit = _scalesPageToFit;
  $.chartWebView.enableZoomControls = false; // for android
  $.chartWebView.url = WPATH('/html/chart.html');
  $.chartWebView.addEventListener('load', function() {
    Ti.API.info('chartWebView ready');
    $.chartWebView.evalJS('plotChart(' + JSON.stringify(_chartOptions) + ', ' + _containerWidth + ')');
  });
}

exports.loadChart = loadChart; 