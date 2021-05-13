const config = {
  type: "line",
  data: {
    labels: ["Jan 31", "Feb 7", "Feb 14", "Feb 21", "Fev 28"],
    datasets: [
      {
        label: "Likes",
        borderColor: "#FF834C",
        data: [0, 7, 1, 14, 1],
        backgroundColor: "transparent",
        spanGaps: false,
      },
    ],
  },
  options: {
    responsive: true,
    legend: {
      display: false,
    },
    elements: {
      line: {
        tension: 0,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "#b7b2de",
            fontSize: 10,
            maxTicksLimit: 10,
          },
          gridLines: { display: false},
        },
      ],
      xAxes: [
        {
          ticks: {
            fontColor: "#b7b2de",
            fontSize: 10,
          },
          gridLines: { display: false},
        },
      ],
    },
  },
};

var myChart = new Chart(document.getElementById("myChart"), config);
