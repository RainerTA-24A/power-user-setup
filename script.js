const powerUserLinks = [
    {
        name: "PowerToys",
        description: "Microsofti utiliitide komplekt. Asendamatu tootlikkuse tõstmiseks.",
        url: "https://learn.microsoft.com/en-us/windows/powertoys/",
        iconPath: "images/powertoys.svg"
    },
    {
        name: "WizTree",
        description: "Välkkiire kõvaketta/SSD ruumianalüsaator.",
        url: "https://diskanalyzer.com/download",
        iconPath: "images/wiztree.svg"  
    },
    {
        name: "7-Zip",
        description: "Asendamatu arhiivihaldur, mis pakub Windowsist paremat tihendust ja krüpteerimist.",
        url: "https://www.7-zip.org/download.html",
        iconPath: "images/7zip.svg"
    },
    {
        name: "Everything",
        description: "Võimaldab koheselt leida faile ja kaustu sinu kohalikes draivides.",
        url: "https://www.voidtools.com/downloads/",
        iconPath: "images/everything.svg"
    },
    {
        name: "AutoHotkey",
        description: "Skriptimiskeel Windowsi automatiseerimiseks ja kohandatud kiirklahvide loomiseks (V2.0).",
        url: "https://www.autohotkey.com/",
        iconPath: "images/autohotkey.svg"
    },
    {
        name: "CrystalDiskInfo",
        description: "Jälgib kõvaketta ja SSD-de tervist (S.M.A.R.T. näitajad).",
        url: "https://crystalmark.info/en/download/",
        iconPath: "images/crystaldiskinfo.svg"
    },
    {
        name: "HWMonitor",
        description: "Riistvara temperatuuride, pingete ja ventilaatori kiiruste reaalajas jälgimine.",
        url: "https://www.cpuid.com/softwares/hwmonitor.html",
        iconPath: "images/hwmonitor.svg"
    },
    {
        name: "Bandiview/Honeyview",
        description: "Väga kiire ja võimekas pildivaatur, mis toetab EXIF/GPS andmeid.",
        url: "https://www.bandisoft.com/bandiview/",
        iconPath: "images/bandiview.svg"
    },
    {
        name: "Bitdefender",
        description: "Parima kaitsega tasuta viirusetõrje (või dokumenteerib Microsoft Defenderi seaded).",
        url: "https://apps.microsoft.com/detail/xp9k931fwbp5v5?hl=en-US&gl=US",
        iconPath: "images/bitdefender.svg"
    },
    
];

const createLinkCard = (link) => {
    return `
        <a href="${link.url}" class="link-card" target="_blank"> <div class="card-icon-area">
                <img src="${link.iconPath}"  class="card-icon">
            </div>

            <div class="card-content">
                <h2>${link.name}</h2>
                <p>${link.description}</p>
            </div>
        </a>
    `;
};

const renderLinks = () => {
    const container = document.getElementById('link-container');
    if (!container) return; 

    const htmlContent = powerUserLinks.map(createLinkCard).join('');
    container.innerHTML = htmlContent;
};

renderLinks();