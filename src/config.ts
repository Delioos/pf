// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Site, SocialMediaObjects } from "./types";

export const SITE: Site = {
    siteUrl: "https:/delioos.xyz/", // Always put "/" at the end of the URL
    author: "Delioos",
    desc: "Drop an eye at a passionate (web3 in the making) developer's work",
    title: "Delioos' portfolio",
    ogImage: "images/astro-lane.png",
    keywords:
        "Personal portfolio, web3 developer, fullstack developer, Delios, Delioos",
    postPerPage: 3
};

// The site uses iconify - you can find icons on https://iconify.design/.

export const SOCIALS: SocialMediaObjects = [
    {
        name: "Github",
        href: "https://github.com/Delioos/",
        icon: "ph:github-logo-duotone",
        title: `Follow ${SITE.author} on Github`,
        active: true
    },
    {
        name: "Mail",
        href: "mailto:contact@delioos.xyz",
        title: `Send an email to ${SITE.title}`,
        icon: "ph:at-duotone",
        active: true
    },
    {
        name: "Telegram",
        href: "https://t.me/delios/",
        icon: "ph:telegram-logo-duotone",
        title: `Follow ${SITE.author} on Telegram`,
        active: true
    },
    {
        name: "Twitter",
        href: "https://x.com/deliossssss/",
        icon: "ph:twitter-logo-duotone",
        title: `Follow ${SITE.author} on Twitter`,
        active: true
    },
    {
        name: "Discord",
        href: "https://discord.gg/WHsUkdAWnu/",
        icon: "ph:discord-logo-duotone",
        title: `${SITE.author} on Discord`,
        active: true
    }
];
