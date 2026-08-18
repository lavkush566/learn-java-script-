function setCookie(name, value, days) {
  const expires = new Date();

  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);

  document.cookie =
    `${encodeURIComponent(name)}=${encodeURIComponent(value)}; ` +
    `expires=${expires.toUTCString()}; path=/`;
}

function getCookie(name) {
  const target = encodeURIComponent(name) + "=";

  for (const cookie of document.cookie.split("; ")) {
    if (cookie.startsWith(target)) {
      return decodeURIComponent(cookie.slice(target.length));
    }
  }

  return null;
}

function deleteCookie(name) {
  document.cookie =
    `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

// Usage
setCookie("username", "Lavkush", 7);

console.log(getCookie("username"));

deleteCookie("username");