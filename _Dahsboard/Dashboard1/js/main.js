var options = {
  chart: {
    type: "area",
    height: 250,
    foreColor: "#999",
    stacked: true,
    dropShadow: {
      enabled: true,
      enabledSeries: [0],
      top: -2,
      left: 2,
      blur: 5,
      opacity: 0.06,
    },
  },
  colors: ["#00E396", "#0090FF"],
  stroke: {
    curve: "smooth",
    width: 3,
  },
  dataLabels: {
    enabled: false,
  },
  series: [
    {
      name: "Total Views",
      data: generateDayWiseTimeSeries(0, 18),
    },
    {
      name: "Unique Views",
      data: generateDayWiseTimeSeries(1, 18),
    },
  ],
  markers: {
    size: 0,
    strokeColor: "#fff",
    strokeWidth: 3,
    strokeOpacity: 1,
    fillOpacity: 1,
    hover: {
      size: 6,
    },
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      offsetX: 14,
      offsetY: -5,
    },
    tooltip: {
      enabled: true,
    },
  },
  grid: {
    padding: {
      left: -5,
      right: 5,
    },
  },
  tooltip: {
    x: {
      format: "dd MMM yyyy",
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
  },
  fill: {
    type: "solid",
    fillOpacity: 0.7,
  },
};

var chart = new ApexCharts(document.querySelector("#timeline-chart"), options);

chart.render();

function generateDayWiseTimeSeries(s, count) {
  var values = [
    [4, 3, 10, 9, 29, 19, 25, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    [2, 3, 8, 7, 22, 16, 23, 7, 11, 5, 12, 5, 10, 4, 15, 2, 6, 2],
  ];
  var i = 0;
  var series = [];
  var x = new Date("11 Dec 2022").getTime();
  while (i < count) {
    series.push([x, values[s][i]]);
    x += 86400000;
    i++;
  }
  return series;
}

var options2 = {
  chart: {
    type: "line",
  },
  series: [
    {
      name: "sales",
      data: [30, 40, 35, 50, 49, 60, 40, 91, 125],
    },
  ],
  xaxis: {
    categories: [2016, 2017, 2018, 2017, 2018, 2019, 2020, 2021, 2022],
  },
};

var chart2 = new ApexCharts(document.querySelector("#simple-chart"), options2);

chart2.render();
