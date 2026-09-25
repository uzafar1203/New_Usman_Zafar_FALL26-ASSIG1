# Mission 2: Console attack, sabotage the purge button

## Evidence

The button dodges (two positions), with my attacker counter visible:

![position 1](img/m2-pos1.png)
![position 2](img/m2-pos2.png)

A legitimate click does nothing after my attack (log still reads "No purge requested"):

![click does nothing](img/m2-click.png)

## My attack script

Paste the full contents of `attacks/m2_runaway.js`, with one sentence per block:

```js
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
```

- **How do you remove the portal's original click handler without reloading?**

  > I cloned the original button with cloneNode(true) and replaced the original button with the clone. The clone only kept the button's HTML but not the event listener, so clicking the new button does not execute the purge behavior.

- **How do you stop a keyboard user from triggering the button?**

  > I set button.tabIndex = -1. This removed the button from the normal Tab order, so a keyboard user cannot Tab to the button and press Enter to activate it

- **How do you keep the button fully inside `#danger-zone` and off its previous position?**

  > I used the size of the danger zone and the size of the button to calculate the maximum left and top positions. I then generated random positions with Math.random() and used a do-while loop to reject a new position if it overlapped the button's previous position.

## Creativity: my twist, R5

> changing the button text to random taunts each time the button dodged

## Think like a defender

The mouse trick is theater. The real problem is that attacker code ran in the operator's page at all. If "Purge All Incidents" were a real, destructive action:

1. Where must the actual protection live?

   > On the server 

2. What should the server check on every purge request? Name at least two things.

   > User authentication to purge. Validate the request instead of trusting information sent by the client

3. Which Unit 1.3 slide or takeaway does this map to?

   > real security must be handled server-side

## Documentation log

| Page I used, with URL | One thing I learned from it |
|---|---|
| Math.random(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random| learned that Math.random() generates a number from 0 up to, but not including, 1, which I used to choose random button positions|
