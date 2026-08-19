/* =========================
   MATRIX EFFECT
========================= */

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters =
  "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%@";

const fontSize = 14;

let columns =
  Math.floor(canvas.width / fontSize);

let drops =
  new Array(columns).fill(1);

function drawMatrix() {

  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  ctx.fillStyle = "#00ff66";
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {

    const char =
      characters[
        Math.floor(
          Math.random() *
          characters.length
        )
      ];

    ctx.fillText(
      char,
      i * fontSize,
      drops[i] * fontSize
    );

    if (
      drops[i] * fontSize >
      canvas.height &&
      Math.random() > 0.975
    ) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 40);


/* =========================
   TERMINAL
========================= */

const command =
  document.getElementById("command");

const output =
  document.getElementById("output");

function print(text, type = "") {

  const line =
    document.createElement("div");

  line.className =
    `output-line ${type}`;

  line.textContent = text;

  output.appendChild(line);

  output.scrollTop =
    output.scrollHeight;
}


/* =========================
   COMMANDS
========================= */

const commands = {

  help() {

    print("Available commands:");

    print("help     - show commands");
    print("clear    - clear terminal");
    print("status   - system status");
    print("about    - information");
    print("time     - current time");
    print("matrix   - matrix mode");

  },

  status() {

    print("> SYSTEM STATUS", "success");

    print("> Connection: SECURE");
    print("> Firewall: ACTIVE");
    print("> Encryption: ENABLED");
    print("> Network: ONLINE");

  },

  about() {

    print(
      "> Hacker Terminal UI — visual simulation"
    );

    print(
      "> No real systems are accessed."
    );

  },

  time() {

    print(
      `> ${new Date().toLocaleTimeString()}`
    );

  },

  clear() {

    output.innerHTML = "";

  },

  matrix() {

    print("> Matrix background is already active.");

  }

};


/* =========================
   INPUT
========================= */

command.addEventListener(
  "keydown",
  event => {

    if (event.key !== "Enter") {
      return;
    }

    const value =
      command.value
        .trim()
        .toLowerCase();

    if (!value) {
      return;
    }

    print(
      `root@system:~$ ${value}`
    );

    if (commands[value]) {

      commands[value]();

    } else {

      print(
        `Command not found: ${value}`,
        "error"
      );

      print(
        "Type 'help' to see available commands.",
        "warning"
      );

    }

    command.value = "";

  }
);


/* =========================
   FAKE SYSTEM STATS
========================= */

function updateStats() {

  const cpu =
    Math.floor(
      Math.random() * 40 + 30
    );

  const memory =
    Math.floor(
      Math.random() * 30 + 50
    );

  document.getElementById(
    "cpu"
  ).textContent = `${cpu}%`;

  document.getElementById(
    "memory"
  ).textContent = `${memory}%`;

}

setInterval(updateStats, 1500);


/* =========================
   RESIZE MATRIX
========================= */

window.addEventListener(
  "resize",
  () => {

    canvas.width =
      window.innerWidth;

    canvas.height =
      window.innerHeight;

    columns =
      Math.floor(
        canvas.width / fontSize
      );

    drops =
      new Array(columns).fill(1);

  }
);