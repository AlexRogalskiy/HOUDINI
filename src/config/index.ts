import { ITool } from 'types';

const TOOLS: ITool[] = [
    {
        fancy_name: "Apktool",
        name: "apktool",
        official_doc: "https://github.com/iBotPeaches/Apktool",
    },
    {
        fancy_name: "BFAC",
        name: "bfac",
        official_doc: "https://github.com/mazen160/bfac",
    },
    {
        fancy_name: "Dirb",
        name: "dirb",
        official_doc: "http://dirb.sourceforge.net/",
    },
    {
        fancy_name: "dirhunt",
        name: "dirhunt",
        official_doc: "https://github.com/Nekmo/dirhunt",
    },
    {
        fancy_name: "dirsearch",
        name: "dirsearch",
        official_doc: "https://github.com/maurosoria/dirsearch",
    },
    {
        fancy_name: "ffuf",
        name: "ffuf",
        official_doc: "https://github.com/ffuf/ffuf",
    },
    {
        fancy_name: "Findsploit",
        name: "findsploit",
        official_doc: "https://github.com/1N3/Findsploit",
    },
    {
        fancy_name: "Gitrob",
        name: "gitrob",
        official_doc: "https://github.com/michenriksen/gitrob",
    },
    {
        fancy_name: "gobuster",
        name: "gobuster",
        official_doc: "https://github.com/OJ/gobuster",
    },
    {
        fancy_name: "hydra",
        name: "hydra",
        official_doc: "https://github.com/vanhauser-thc/thc-hydra",
    },
    {
        fancy_name: "The JSON Web Token Toolkit",
        name: "jwt_tool",
        official_doc: "https://github.com/ticarpi/jwt_tool",
    },
    {
        fancy_name: "knock",
        name: "knockpy",
        official_doc: "https://github.com/guelfoweb/knock",
    },
    {
        fancy_name: "LFI Suite",
        name: "lfisuite",
        official_doc: "https://github.com/D35m0nd142/LFISuite",
    },
    {
        fancy_name: "MASSCAN",
        name: "masscan",
        official_doc: "https://github.com/robertdavidgraham/masscan",
    },
    {
        fancy_name: "MassDNS",
        name: "massdns",
        official_doc: "https://github.com/blechschmidt/massdns",
    },
    {
        fancy_name: "Race The Web",
        name: "race-the-web",
        official_doc: "https://github.com/TheHackerDev/race-the-web",
    },
    {
        fancy_name: "Retire.js",
        name: "retire",
        official_doc: "https://github.com/RetireJS/retire.js",
    },
    {
        fancy_name: "sqlmap",
        name: "sqlmap",
        official_doc: "https://github.com/sqlmapproject/sqlmap",
    },
    {
        fancy_name: "Sublist3r",
        name: "sublist3r",
        official_doc: "https://github.com/aboul3la/Sublist3r",
    },
    {
        fancy_name: "theHarvester",
        name: "theharvester",
        official_doc: "https://github.com/laramies/theHarvester",
    },
    {
        fancy_name: "RestfulHarvest",
        name: "restfulharvest",
        official_doc: "https://github.com/laramies/theHarvester",
    },
    {
        fancy_name: "waybackpy",
        name: "waybackpy",
        official_doc: "https://github.com/akamhy/waybackpy",
    },
    {
        fancy_name: "WhatWeb",
        name: "whatweb",
        official_doc: "https://github.com/urbanadventurer/WhatWeb",
    },
]

export const CONFIG = {
    ORGANIZATION: "secsi",
    TOOLS: TOOLS,
    DOCKER: {
        BASE_URL: "https://hub.docker.com/v2/repositories/",
        TAGS: "/tags?page=1&page_size=50"
    }
}