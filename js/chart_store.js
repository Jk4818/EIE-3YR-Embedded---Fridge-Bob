
var ctx = document.getElementById('temp-graph').getContext('2d');
var LineChart0 = new Chart(ctx, {
type: 'line',
data: {
    labels: [],
    datasets: [{
    label: 'Temperature level',
    data: [],
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1
    }]
},
options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
    yAxes: [{
        ticks: {
        beginAtZero: true
        }
    }]
    }
}

});

var ctx = document.getElementById('hum-graph').getContext('2d');
var LineChart1 = new Chart(ctx, {
type: 'line',
data: {
    labels: [],
    datasets: [{
    label: 'Humidity level',
    data: [],
    backgroundColor: 'rgba(255, 206, 86, 0.2)',
    borderColor: 'rgba(255, 206, 86, 1)',
    borderWidth: 1
    }]
},
options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
    yAxes: [{
        ticks: {
        beginAtZero: true
        }
    }]
    }
}

});

var ctx = document.getElementById('co2-graph').getContext('2d');
var LineChart2 = new Chart(ctx, {
type: 'line',
data: {
    labels: [],
    datasets: [{
    label: 'CO2 level',
    data: [],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
    }]
},
options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
    yAxes: [{
        ticks: {
        beginAtZero: true
        }
    }]
    }
}

});

var ctx = document.getElementById('tvoc-graph').getContext('2d');
var LineChart3 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'TVOC level',
      data: [],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }

});


