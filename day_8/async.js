async function randomAsyncStuff() {
  console.log("Step 1: Starting...");

  setTimeout(() => {
    console.log("Step 2: Fetched user data");
  }, 1000);

  setTimeout(() => {
    console.log("Step 3: Processed payment");
  }, 2000);

  setTimeout(() => {
    console.log("Step 4: Sent email notification");
  }, 3000);

  console.log("Step 5: Function ended (but timers still running)");
}

randomAsyncStuff();
