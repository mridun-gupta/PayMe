/* console.log Markings */
console.log("#     #                                          #####\n##   ##  #####   #  #####   #    #  #    #      #     #  #    #  #####   #####    ##\n# # # #  #    #  #  #    #  #    #  ##   #      #        #    #  #    #    #     #  #\n#  #  #  #    #  #  #    #  #    #  # #  #      #  ####  #    #  #    #    #    #    #\n#     #  #####   #  #    #  #    #  #  # #      #     #  #    #  #####     #    ######\n#     #  #   #   #  #    #  #    #  #   ##      #     #  #    #  #         #    #    #\n#     #  #    #  #  #####    ####   #    #       #####    ####   #         #    #    #");

/* Fetch specialEvents */
document.addEventListener("DOMContentLoaded", function () {
    const eventsDisplay = document.getElementById("special-events");
    const eventsList = [
        "on the smooth landing of LVM3-M4/Chandrayaan-3",
        "on the smooth positioning of PSLV-C57/Aditya L1",
        "for the fastest 5G rollout globally",
        "on the inauguration of the world's largest meditation center - 'Swarved Mahamandir'",
        "on the inauguration of the world's longest river cruise - 'MG Ganga Vilas'",
        "for being the world's fastest-growing major economy",
        "for being at the top in digital payments globally",
        "on the inauguration of the world's largest office building - 'Surat Diamond Bourse'"
    ];

    let eventIndex = 0;

    function updateEvent() {
        eventsDisplay.textContent = eventsList[eventIndex];
        eventIndex = (eventIndex + 1) % eventsList.length;
    }

    updateEvent();

    setInterval(updateEvent, 25000);
});

/* redirectWeb Logic */
function redirectWeb() {
    var currentDomain = window.location.hostname;

    if (currentDomain === "tip.mridungupta.tech") {
        window.location.href = "https://www.mridungupta.tech";
    } else if (currentDomain === "tip.mridungupta.me") {
        window.location.href = "https://www.mridungupta.me";
    } else if (currentDomain === "tip.mridungupta.eu.org") {
        window.location.href = "https://www.mridungupta.eu.org";
    } else if (currentDomain === "tip.mridungupta.live") {
        window.location.href = "https://www.mridungupta.live";
    } else if (currentDomain === "tip.mridungupta.co") {
        window.location.href = "https://www.mridungupta.co";
    } else {
        console.log("Sorry! This isn't the real website run by 'Mridun Gupta'. Double check the official website for authenticity.");
    }
};