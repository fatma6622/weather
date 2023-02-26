let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


async function search(a) {
    let t = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${a}&days=3`);
    if (t.ok && t.status != 400) {
        let a = await t.json();
        display(a.location, a.current,a.forecast.forecastday);
    }
}
document.getElementById("search").addEventListener("keyup", function(e){
    search(e.target.value)
}
);
function display(a, t , d) {
        let e = new Date(t.last_updated.replace(" ", "T"));
        let n=`
        <div class="col-lg-4">
                        <div class="mainCard1 text-white">
                        <div class="headCard1 pt-1 pb-1 pe-3 ps-3 d-flex justify-content-between" id="today">
                            <p>${days[e.getDay()]}</p>
                            <p>${e.getDate() + monthNames[e.getMonth()]}</p>
                        </div>
                        <div class="cardBody1 pt-1 pb-1 pe-3 ps-3 d-flex justify-content-between flex-column align-items-start" id="current">
                            <p>${a.name}</p>
                            <div class="d-flex justify-content-center">
                                <h1 class="me-5">${t.temp_c}<sup>o</sup>C</h1>
                                <img src="https:${t.condition.icon}" alt="cloud">
                            </div>
                            <p class="text-info mt-3">${t.condition.text}</p>
                            <div class="d-flex">
                                <p class="pe-4">20</p>
                                <p class="pe-4">18</p>
                                <p class="pe-4">east</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                    <div class="mainCard2 text-white">
                    <div class="headCard2 pt-1 pb-1 pe-3 ps-3 d-flex justify-content-center">
                        <p>${days[new Date(d[1].date.replace(" ", "T")).getDay()]}</p>
                    </div>
                    <div class="cardBody2 pt-1 pb-1 pe-3 ps-3 d-flex justify-content-center flex-column align-items-center">
                        <img src="https:${d[1].day.condition.icon}" alt="sun">
                        <h3>${d[1].day.maxtemp_c}<sup>o</sup>C</h3>
                        <p>${d[1].day.mintemp_c}<sup>o</sup></p>
                        <p class="text-info">${d[1].day.condition.text}</p>
                    </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="mainCard3 text-white">
                    <div class="headCard3 pt-1 pb-1 pe-3 ps-3 d-flex justify-content-center">
                        <p>${days[new Date(d[2].date.replace(" ", "T")).getDay()]}</p>
                    </div>
                    <div class="cardBody3 pt-1 pb-1 pe-3 ps-3 d-flex justify-content-center flex-column align-items-center">
                        <img src="https:${d[2].day.condition.icon}" alt="sun">
                        <h3>${d[2].day.maxtemp_c}<sup>o</sup>C</h3>
                        <p>${d[2].day.mintemp_c}<sup>o</sup></p>
                        <p class="text-info">${d[2].day.condition.text}</p>
                    </div>
                    </div>
                </div>
        `
        document.getElementById("forecast").innerHTML = n
}
search("cairo");
