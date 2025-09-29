const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const bookTicket = async () => {
      console.log("Welcome");

      await wait(2000);
      console.log("Login Successful");

      await wait(2000);
      console.log("Seats have been selected successfully");

      await wait(1000);
      console.log("Payment Successful");

      await wait(1000);
      console.log("Tickets confirmed");

      await wait(1000);
      console.log("Thank you for visiting");
    };