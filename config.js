module.exports = {
  Admins: ["549030948528979981"],
  ExpressServer: true,
  DefaultPrefix: process.env.Prefix || ">",
  Port: 30039,
  SupportServer: "https://discord.gg/YHS6nYEPB4",
  Token: process.env.Token || "ODUyMjk1MjEwMDk1NDc2NzU2.YMEvxA.2Y_DS3I5BwPEHN7pLbVrPcCLKDU",
  ClientID: process.env.Discord_ClientID || "852295210095476756",
  ClientSecret: process.env.Discord_ClientSecret || "5P6rbNmWlI3BloYa_GyiVCmz5MwzMgwO",
  Scopes: ["identify", "guilds"],
  CallbackURL: "/api/callback",
  "24/7": false,
  CookieSecret: "DerpiNotGay",
  IconURL:
    "https://cdn.discordapp.com/avatars/950526663391842405/b25091afd5bcebfb52495e5862710823.png?size=4096",
  Permissions: 37047296,
  Website: process.env.Website || "https://bot.vellerius.tk:fi2.plutonodes.net:30039",

   Lavalink: {
    id: "Main",
    host: "lv.vellerius.tk",
    port: 8027,
    pass: "derpilava", 
  },
  
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "ab6c727303764e11a260cc3d7beb3a33",
    ClientSecret: process.env.Spotify_ClientSecret || "f0a4e522940248f89a60bdba1e9fb77d",
  },
};
