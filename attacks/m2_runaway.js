// =====================================================================
// MISSION 2 ATTACK: The Runaway Button
// =====================================================================
// Write your attack here, then COPY the whole file and PASTE it into the
// DevTools Console of http://localhost:3000.
//
// Everything is wrapped in (() => { ... })(); on purpose. It is an
// immediately invoked function: it lets you paste the script again after
// a page reload without "Identifier has already been declared" errors.
//
// Author:
// =====================================================================

(() => {
  const zone = document.getElementById("danger-zone");
  const original = document.getElementById("purge-btn");

  // TODO R1: remove the portal's legitimate click listener.

  const button = original.cloneNode(true);
  original.replaceWith(button);

  // TODO R2: stop keyboard users from reaching the button.

  button.tabIndex = -1;

  // TODO R4: create a NEW element that shows the dodge counter.

  let dodges = 0;

  const counter = document.createElement("p");
  counter.textContent = "Dodges: 0";
  zone.appendChild(counter);

  // TODO R5: your creative twist.

  const taunts = ["Loser!", "Try again!", "Too slow!", "Awww, poor baby!"];

  // TODO R3: make the button jump inside zone on every approach, no overlap.

  button.addEventListener("pointerenter", () => {
    const oldLeft = button.offsetLeft;
    const oldTop = button.offsetTop;

    const maxLeft = zone.clientWidth - button.offsetWidth;
    const maxTop = zone.clientHeight - button.offsetHeight;

    let newLeft;
    let newTop;

    do {
      newLeft = Math.random() * maxLeft;
      newTop = Math.random() * maxTop;
    } while (
      newLeft < oldLeft + button.offsetWidth &&
      newLeft + button.offsetWidth > oldLeft &&
      newTop < oldTop + button.offsetHeight &&
      newTop + button.offsetHeight > oldTop
    );

    button.style.position = "absolute";
    button.style.left = newLeft + "px";
    button.style.top = newTop + "px";

    dodges = dodges + 1;
    counter.textContent = "Dodges: " + dodges;
    button.textContent = taunts[Math.floor(Math.random() * taunts.length)];
  });

  console.log("[attack] runaway button installed");
})();