const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
require("dotenv").config();

const bchAddress = "qr64nrjy93d867h20jw0yygp00k8gylf05hp0vuhlx";

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "The Bitcoin Cash Podcast",
  tagline:
    "Following Bitcoin Cash (BCH) on its rise to global reserve currency.",
  url: "https://www.bitcoincashpodcast.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/bch.ico",
  organizationName: "The Bitcoin Cash Podcast", // Usually your GitHub org/user name.
  projectName: "bitcoincashpodcast-v2", // Usually your repo name.
  themeConfig: {
    announcementBar: {
      id: 'social_media_announcement',
      content: ' ',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: false,
    },
    navbar: {
      title: "The Bitcoin Cash Podcast",
      logo: {
        alt: "BCH logo",
        src: "img/bch.png",
      },
      items: [
        // { to: "https://fundme.cash/campaign/7", label: "FundMe!", position: "left" },
        { to: "/start", label: "Start Here!", position: "left" },
        { to: "/about", label: "About", position: "left" },
        { to: "/faqs", label: "FAQs", position: "left" },
        { to: "/recommended", label: "Recommended", position: "left" },
        { to: "/code", label: "Code", position: "left" },
        {
          type: "doc",
          docId: "welcome",
          position: "left",
          label: "Episodes",
        },
        { to: "/music", label: "Music", position: "left" },
        { to: "/more", label: "More", position: "left" },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Pages",
          items: [
            {
              label: "Start Here!",
              to: "/start",
            },
            {
              label: "About",
              to: "/about",
            },
            {
              label: "Episodes",
              to: "/episodes/welcome",
            },
            {
              label: "More",
              to: "/more",
            },
            {
              label: "FAQs",
              to: "/faqs",
            },
            {
              label: "Stats",
              to: "/stats",
            },
            {
              label: "Code",
              to: "/code",
            },
            {
              label: "Recommended",
              to: "/recommended",
            },
          ],
        },
        {
          title: "Listen",
          items: [
            {
              label: "Odysee",
              href: "https://odysee.com/@BitcoinCashPodcast:2",
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/channel/UCsrDsJnHFnkMnJhEslofyPQ",
            },
            {
              label: "Apple Podcasts",
              href: "https://podcasts.apple.com/gb/podcast/the-bitcoin-cash-podcast/id1555355070",
            },
            {
              label: "Google Podcasts",
              href: "https://podcasts.google.com/feed/aHR0cHM6Ly9tZWRpYS5yc3MuY29tL2JpdGNvaW5jYXNocG9kY2FzdC9mZWVkLnhtbA",
            },
            {
              label: "Spotify (Podcast)",
              href: "https://open.spotify.com/show/01N17Oi7sRZM4vYGiTO6uk",
            },
            {
              label: "Spotify (Music)",
              href: "https://open.spotify.com/artist/4wyXjYROLQdNvL6qwgCerH",
            },
            {
              label: "RSS",
              href: "https://media.rss.com/bitcoincashpodcast/feed.xml",
            },
            {
              label: "TuneIn (Alexa & Tesla)",
              href: "https://tunein.com/podcasts/Entrepreneurship/The-Bitcoin-Cash-Podcast-p1977472/",
            },
            {
              label: "BitChute",
              href: "https://www.bitchute.com/channel/u4kmVqYxmyU2/",
            },
            {
              label: "Rumble",
              href: "https://rumble.com/user/BitcoinCashPodcast",
            },
            {
              label: "Stitcher",
              href: "https://www.stitcher.com/show/the-bitcoin-cash-podcast",
            },
            {
              label: "Deezer",
              href: "https://deezer.com/show/5274917",
            },
          ],
        },
        {
          title: "Follow",
          items: [
            {
              label: "CashRain",
              href: "https://cashrain.com/bitcoincashpodcast",
            },
            {
              label: "Youtube (Clips Channel)",
              href: "https://www.youtube.com/channel/UC22kOwMuIzJCOtAPjoIjkFA",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/TheBCHPodcast",
            },
            {
              label: "Noise.app",
              href: "https://noise.app/TheBitcoinCashPodcast",
            },
            {
              label: "Telegram (Announcements)",
              href: "https://t.me/thebitcoincashpodcast",
            },
            {
              label: "Telegram (Discussion)",
              href: "https://t.me/thebitcoincashpodcast_discussion",
            },
            {
              label: "Reddit",
              href: "https://www.reddit.com/r/BitcoinCashPodcast/",
            },

            {
              label: "Patreon",
              href: "https://www.patreon.com/bitcoincashpodcast",
            },
            {
              label: "Cointree",
              href: "https://cointr.ee/bitcoincashpodcast",
            },
            {
              label: "Instagram (podcast)",
              href: "https://www.instagram.com/thebchpodcast/",
            },
            {
              label: "Instagram (personal)",
              href: "https://www.instagram.com/thebitcoincashpodcast/",
            },
            {
              label: "TikTok",
              href: "https://www.tiktok.com/@thebchpodcast",
            },
            {
              label: "Twitch.tv",
              href: "https://www.twitch.tv/thebitcoincashpodcast",
            },
          ],
        },
      ],
      logo: {
        alt: `bitcoincash:${bchAddress}`,
        src: "img/donationsQR.png",
        href: `https://blockchair.com/bitcoin-cash/address/${bchAddress}`,
      },
      copyright: `Donations - bitcoincash:${bchAddress}`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    //   algolia: {
    //     // If Algolia did not provide you any appId, use 'BH4D9OD16A'
    //     appId: process.env.ALGOLIA_APP_ID,

    //     // Public API key: it is safe to commit it
    //     apiKey: process.env.ALGOLIA_FRONTEND_API_KEY,

    //     indexName: process.env.ALGOLIA_INDEX,

    //     // Optional: see doc section below
    //     contextualSearch: true,
    //   },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "episodes",
          routeBasePath: "episodes",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/JeremyEllingham/bitcoincashpodcast-v2",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/JeremyEllingham/bitcoincashpodcast-v2",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          // You can also use your "G-" Measurement ID here.
          // trackingID: "x", // For local dev purposes
          trackingID: process.env.GOOGLE_ANALYTICS_ID,
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
        googleAnalytics: {
          // trackingID: "x", // For local dev purposes
          trackingID: process.env.GOOGLE_ANALYTICS_ID,
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "faqs",
        path: "faqs",
        routeBasePath: "faqs",
        sidebarPath: require.resolve("./sidebars.js"), //sidebarsFaqs.js
      },
    ],
    [
      "docusaurus-plugin-dotenv",
      {
        path: "./.env",
        systemvars: true,
      },
    ],
  ],
};
