async function lucky() {

    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 Deg");
        }, 2000);
    });

    let bangaloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 Deg");
        }, 5000);
    });

    console.log("Fetching Delhi Weather...");

    let delhiW = await delhiWeather;

    console.log("Fetched Delhi Weather: " + delhiW);

    console.log("Fetching Bangalore Weather...");

    let bangaloreW = await bangaloreWeather;

    console.log("Fetched Bangalore Weather: " + bangaloreW);

    return [delhiW, bangaloreW];
}

const cherry = async () => {
    console.log("Hey I am Cherry and I am not waiting");
}

const main1 = async () => {

    console.log("Welcome to Weather Control Room");

    let weather = await lucky();

    await cherry();

    console.log(weather);

}

main1();