const bookTicket = () => {
    console.log("Welcome");

    setTimeout(() => {
        console.log("Login Successful");

        setTimeout(() => {
            console.log("Seats have been selected successfully");

            setTimeout(() => {
                console.log("Payment Successful");

                setTimeout(() => {
                    console.log("Tickets confirmed");

                    setTimeout(() => {
                        console.log("Thank you for visiting");
                    }, 1000);

                }, 1000);

            }, 2000);

        }, 2000);

    }, 2000);
};

bookTicket();
