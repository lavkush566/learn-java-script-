const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets" +
  "?vs_currency=usd" +
  "&order=market_cap_desc" +
  "&per_page=10" +
  "&page=1" +
  "&sparkline=false";

const btcPrice = document.getElementById("btcPrice");
const ethPrice = document.getElementById("ethPrice");
const solPrice = document.getElementById("solPrice");

const btcChange = document.getElementById("btcChange");
const ethChange = document.getElementById("ethChange");
const solChange = document.getElementById("solChange");

const marketCap = document.getElementById("marketCap");
const marketTable = document.getElementById("marketTable");

const chartPrice = document.getElementById("chartPrice");
const lastUpdated = document.getElementById("lastUpdated");

const refreshBtn = document.getElementById("refreshBtn");

let chart;
const MAX_POINTS = 30;
let priceHistory = [];
let labelHistory = [];


/*
|--------------------------------------------------------------------------
| Format Currency
|--------------------------------------------------------------------------
*/

function formatCurrency(value) {
  if (value === null || value === undefined) {
    return "--";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2
  }).format(value);
}


/*
|--------------------------------------------------------------------------
| Format Large Numbers
|--------------------------------------------------------------------------
*/

function formatLargeNumber(value) {

  if (value >= 1e12) {
    return "$" + (value / 1e12).toFixed(2) + "T";
  }

  if (value >= 1e9) {
    return "$" + (value / 1e9).toFixed(2) + "B";
  }

  if (value >= 1e6) {
    return "$" + (value / 1e6).toFixed(2) + "M";
  }

  return formatCurrency(value);
}


/*
|--------------------------------------------------------------------------
| Format Percentage
|--------------------------------------------------------------------------
*/

function formatChange(value) {

  if (value === null || value === undefined) {
    return "--";
  }

  const sign = value >= 0 ? "+" : "";

  return `${sign}${value.toFixed(2)}%`;
}


/*
|--------------------------------------------------------------------------
| Change Color
|--------------------------------------------------------------------------
*/

function setChange(element, value) {

  element.textContent = formatChange(value);

  element.classList.remove(
    "positive",
    "negative"
  );

  if (value >= 0) {
    element.classList.add("positive");
  } else {
    element.classList.add("negative");
  }
}


/*
|--------------------------------------------------------------------------
| Fetch Market Data
|--------------------------------------------------------------------------
*/

async function fetchMarketData() {

  try {

    refreshBtn.disabled = true;
    refreshBtn.textContent = "Loading...";

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(
        `API Error: ${response.status}`
      );
    }

    const coins = await response.json();

    updateDashboard(coins);

    updateTable(coins);

    updateChart(coins);

    lastUpdated.textContent =
      "Updated: " +
      new Date().toLocaleTimeString();

  } catch (error) {

    console.error(error);

    marketTable.innerHTML = `
      <tr>
        <td colspan="5">
          Failed to load market data.
        </td>
      </tr>
    `;

  } finally {

    refreshBtn.disabled = false;
    refreshBtn.textContent = "↻ Refresh";

  }

}


/*
|--------------------------------------------------------------------------
| Update Dashboard
|--------------------------------------------------------------------------
*/

function updateDashboard(coins) {

  const btc = coins.find(
    coin => coin.id === "bitcoin"
  );

  const eth = coins.find(
    coin => coin.id === "ethereum"
  );

  const sol = coins.find(
    coin => coin.id === "solana"
  );

  if (btc) {

    btcPrice.textContent =
      formatCurrency(btc.current_price);

    setChange(
      btcChange,
      btc.price_change_percentage_24h
    );

    chartPrice.textContent =
      formatCurrency(btc.current_price);

  }

  if (eth) {

    ethPrice.textContent =
      formatCurrency(eth.current_price);

    setChange(
      ethChange,
      eth.price_change_percentage_24h
    );

  }

  if (sol) {

    solPrice.textContent =
      formatCurrency(sol.current_price);

    setChange(
      solChange,
      sol.price_change_percentage_24h
    );

  }

  const totalMarketCap = coins.reduce(
    (total, coin) =>
      total + (coin.market_cap || 0),
    0
  );

  marketCap.textContent =
    formatLargeNumber(totalMarketCap);

}


/*
|--------------------------------------------------------------------------
| Update Market Table
|--------------------------------------------------------------------------
*/

function updateTable(coins) {

  marketTable.innerHTML = coins
    .map((coin, index) => {

      const change =
        coin.price_change_percentage_24h || 0;

      const changeClass =
        change >= 0
          ? "positive"
          : "negative";

      return `
        <tr>

          <td>${index + 1}</td>

          <td>
            <div class="coin">
              <img
                src="${coin.image}"
                alt="${coin.name}"
              />

              <div>
                <strong>${coin.name}</strong>
                <small>
                  ${coin.symbol.toUpperCase()}
                </small>
              </div>
            </div>
          </td>

          <td>
            ${formatCurrency(coin.current_price)}
          </td>

          <td class="${changeClass}">
            ${formatChange(change)}
          </td>

          <td>
            ${formatLargeNumber(coin.market_cap)}
          </td>

        </tr>
      `;

    })
    .join("");

}


/*
|--------------------------------------------------------------------------
| Chart
|--------------------------------------------------------------------------
*/

function updateChart(coins) {

  const btc = coins.find(
    coin => coin.id === "bitcoin"
  );

  if (!btc) return;
  // Push new point into history and trim to MAX_POINTS
  const now = new Date();
  labelHistory.push(
    now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })
  );

  priceHistory.push(btc.current_price);

  if (priceHistory.length > MAX_POINTS) {
    priceHistory.shift();
    labelHistory.shift();
  }

  const ctx = document.getElementById("marketChart").getContext("2d");

  if (!chart) {
    chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labelHistory.slice(),
        datasets: [
          {
            label: "Bitcoin",
            data: priceHistory.slice(),
            borderWidth: 2,
            tension: 0.35,
            pointRadius: 0,
            fill: true,
            backgroundColor: 'rgba(0,255,136,0.08)',
            borderColor: 'rgba(0,255,136,0.9)'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false }, ticks: { color: "#666" } },
          y: { grid: { color: "#222" }, ticks: { color: "#666" } }
        }
      }
    });
  } else {
    chart.data.labels = labelHistory.slice();
    chart.data.datasets[0].data = priceHistory.slice();
    chart.update();
  }

}


/*
|--------------------------------------------------------------------------
| Manual Refresh
|--------------------------------------------------------------------------
*/

refreshBtn.addEventListener(
  "click",
  fetchMarketData
);


/*
|--------------------------------------------------------------------------
| Initial Load
|--------------------------------------------------------------------------
*/

fetchMarketData();


/*
|--------------------------------------------------------------------------
| Auto Refresh
|--------------------------------------------------------------------------
|
| Every 60 seconds.
|
*/

setInterval(
  fetchMarketData,
  8000
);


//================ notes appp (REMAINING QUESTION OF PRACTICE SET)============
/*let n =localStorage.getItem("note")
alert("your note is"+ n)

let a = prompt("Enter your note")
if (a){
    localStorage.setItem("note", a)
}


let c = confirm("Do you want to clear your note?")
if (c){
    localStorage.removeItem("note")
}*/