const linkedinBarChart = document.getElementById('linkedin-bar-chart').getContext('2d');
Chart.register(ChartDataLabels);
new Chart(linkedinBarChart, {
  type: 'bar',
  data: {
    labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [{
      label: 'Yıllara göre değişim',
      data: [33.5, 33.7, 34.5, 35.3, 35.4, 37.1, 37.5, 36.9, 36.4],
      backgroundColor: '#640062',
      borderWidth: 0
    }]
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: { enabled: false },
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        clip: false,
        font: {
          size: 12
        },
        formatter: (value) => '%' + value.toFixed(1)
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 30,
        max: 40,
        display: false
      }
    }
  },
  plugins: [ChartDataLabels]
});



const ctx1 = document.getElementById('chart1').getContext('2d');
const chart1 = new Chart(ctx1, {
  type: 'pie',
  data: {
    labels: ['Kadın', 'Erkek'],
    datasets: [{
      data: [42, 58],
      backgroundColor: ['#640062', '#1591ea'],
    }]
  },
  options: {
    responsive: true,
    plugins: {
      datalabels: {
        display: true,
        formatter: (value) => `${value}%`,
        color: 'white',
        font: {
          weight: 'bold',
          size: 14
        },
        anchor: 'center',
        align: 'center'
      }
    }
  }
});


const ctx2 = document.getElementById('chart2').getContext('2d');
const chart2 = new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ['Kadın', 'Erkek'],
    datasets: [{
      data: [31.7, 68.3],
      backgroundColor: ['#640062', '#1591ea'],
    }]
  },
  options: {
    responsive: true,
    plugins: {
      datalabels: {
        display: true,
        formatter: (value) => `${value}%`,
        color: 'white',
        font: {
          weight: 'bold',
          size: 14
        },
        anchor: 'center',
        align: 'center'
      }
    }
  }
});

const data = [
  { label: "Eğitim", value: 41 },
  { label: "Finansal Hizmetler", value: 40 },
  { label: "Profesyonel Hizmetler", value: 36 },
  { label: "Üretim", value: 31 },
  { label: "Teknoloji, Bilgi ve Medya", value: 34 }
];


function createDoughnutChart(ctx, label, value) {
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Kadın', 'Erkek'],
      datasets: [{
        data: [value, 100 - value],
        backgroundColor: ['#640062', '#1591ea'],
        borderWidth: 1,
      }]
    },
    options: {
      responsive: true,
      cutout: '50%',
      plugins: {
        datalabels: {
          color: 'white',
          font: {
            weight: 'bold',
            size: 14
          },
          formatter: (value) => value + '%',
        },
        legend: {
          position: 'top',
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              return tooltipItem.raw + '%';
            }
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: 'white'
        }
      },
      y: {
        ticks: {
          color: 'white'
        }
      }
    }
  });
}


window.onload = function () {
  const donut_chart1 = document.getElementById('donut_chart1').getContext('2d');
  const donut_chart2 = document.getElementById('donut_chart2').getContext('2d');
  const donut_chart3 = document.getElementById('donut_chart3').getContext('2d');
  const donut_chart4 = document.getElementById('donut_chart4').getContext('2d');
  const donut_chart5 = document.getElementById('donut_chart5').getContext('2d');

  createDoughnutChart(donut_chart1, data[0].label, data[0].value);
  createDoughnutChart(donut_chart2, data[1].label, data[1].value);
  createDoughnutChart(donut_chart3, data[2].label, data[2].value);
  createDoughnutChart(donut_chart4, data[3].label, data[3].value);
  createDoughnutChart(donut_chart5, data[4].label, data[4].value);
};