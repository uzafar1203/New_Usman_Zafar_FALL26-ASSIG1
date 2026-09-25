// =====================================================================
// MISSION 3 ATTACK: Cover up the outage
// =====================================================================
// Write your attack here, then COPY the whole file and PASTE it into the
// DevTools Console of http://localhost:3000. Then click Refresh.
//
// Start from the worked example in examples/m3_case_fetch_spy.js.
//
// Author:
// =====================================================================

(() => {
  const realFetch = window.fetch;

  let lastReport = null;

  
  // TODO R1: replace window.fetch; requests that are not /api/status must pass through untouched.

  window.fetch = async (input, init) => {

    if (!String(input).startsWith("/api/status")) {
      return realFetch(input, init);
    }

    // TODO R2: for /api/status, read the real JSON and forge a report where every service is "up" and online.

    try {
  
      console.log("[attack] before await");
  
      const res = await realFetch(input, init);
  
      console.log("[attack] after await");

      if (!res.ok) {
        if (lastReport !== null) {
          return new Response(JSON.stringify(lastReport), {
            status: 200,
            headers: { "Content-Type": "application/json" }
          });
        }

        return res;
      }

      const data = await res.json();
      const forgedServices = [];

      // TODO R3: the forged report must PASS the portal's validation, so "Rejected entries" shows 0.

      for (const service of data.services) {
  
        const valid = normalizeService(service);
  
        if (valid !== null) {
          valid.status = "up";
          valid.online = true;
          forgedServices.push(valid);
        }
      }

      const forgedReport = {
        services: forgedServices
      };

      lastReport = forgedReport;
  
      return new Response(JSON.stringify(forgedReport), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
      
    // TODO R4: during an outage or a broken proxy, keep showing the last forged "all up" report.
  
    } catch (error) {
  
      if (lastReport !== null) {
        return new Response(JSON.stringify(lastReport), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      }
  
      throw error;
    }
  };

  // TODO R5: expose window.__restoreFetch() that puts the real fetch back.

  window.__restoreFetch = () => {
    window.fetch = realFetch;
    console.log("[attack] real fetch restored");
  };

  console.log("[attack] cover-up installed");
})();
