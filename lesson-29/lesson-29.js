const game1_keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
let game1_currentKeyIndex = 0;

const game1_keyElement = document.getElementById('game1-key');
const game1_newGameBtn = document.getElementById('game1-newGame');

function game1_setNewKey() {
  game1_currentKeyIndex = Math.floor(Math.random() * game1_keys.length);
  game1_keyElement.textContent = game1_keys[game1_currentKeyIndex];
}

game1_setNewKey();
PNotify.success({
  text: 'Гра почалася! Натисни правильну клавішу.'
});

document.addEventListener('keydown', function(event) {
  if (event.key.toLowerCase() === game1_keys[game1_currentKeyIndex]) {
    PNotify.success({ text: 'Правильно!' });
    game1_setNewKey();
  } else {
    PNotify.error({ text: 'Неправильна клавіша! Спробуй ще.' });
  }
});

document.addEventListener('keypress', function(event) {
  event.preventDefault();
});

game1_newGameBtn.addEventListener('click', function() {
  game1_setNewKey();
  PNotify.info({ text: 'Нова гра розпочата!' });
});





const ctx = document.getElementById("sales-chart").getContext("2d");

const chartData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: "rgba(33, 150, 243, 0.2)",
      borderColor: "#2196f3",
      borderWidth: 2,
      fill: true, 
      tension: 0.3 
    },
  ],
};

const config = {
  type: 'line',
  data: chartData,
  options: {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'День місяця',
        }
      },
      y: {
        title: {
          display: true,
          text: 'Кількість продажів',
        },
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        enabled: true,
      }
    }
  }
};

const salesChart = new Chart(ctx, config);
