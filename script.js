// List of Nigerian Newspapers & Broadcasters
const mediaList = [
    { name: "The Punch", url: "https://punchng.com" },
    { name: "The Guardian", url: "https://guardian.ng" },
    { name: "Vanguard", url: "https://www.vanguardngr.com" },
    { name: "Daily Trust", url: "https://dailytrust.com" },
    { name: "Nigerian Tribune", url: "https://tribuneonlineng.com" },
    { name: "Premium Times", url: "https://www.premiumtimesng.com" },
    { name: "Channels TV", url: "https://www.channelstv.com" },
    { name: "The Sun", url: "https://www.sunnewsonline.com" },
    { name: "ThisDay", url: "https://www.thisdaylive.com" },
    { name: "Leadership", url: "https://leadership.ng" },
    { name: "The Nation", url: "https://thenationonlineng.net" },
    { name: "AIT", url: "https://ait.live" },
    { name: "NTA", url: "https://www.nta.ng" },
    { name: "TVC News", url: "https://www.tvcnews.tv" },
    { name: "Business Day", url: "https://businessday.ng" },
    { name: "Naija News", url: "https://www.naijanews.com" },
    { name: "Daily Independent", url: "https://independent.ng" },
    { name: "Sahara Reporters", url: "https://saharareporters.com" },
    { name: "BBC Hausa", url: "https://www.bbc.com/hausa" },
    { name: "The Cable", url: "https://www.thecable.ng" }
];

// Function to render the list
function renderMediaLinks() {
    const newsList = document.getElementById('newsList');
    mediaList.forEach(media => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${media.url}" target="_blank">${media.name}</a>`;
        newsList.appendChild(li);
    });
}

// Load the media links on page load
window.onload = renderMediaLinks;
