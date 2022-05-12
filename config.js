module.exports = {
  Admins: [""],
  ExpressServer: true,
  DefaultPrefix: process.env.Prefix || ">",
  Port: port_here,
  SupportServer: "",
  Token: process.env.Token || "",
  ClientID: process.env.Discord_ClientID || "",
  ClientSecret: process.env.Discord_ClientSecret || "",
  Scopes: ["identify", "guilds"],
  CallbackURL: "/api/callback",
  "24/7": false,
  CookieSecret: "",
  IconURL:
    "",
  Permissions: 37047296,
  Website: process.env.Website || "",

   Lavalink: {
    id: "Main",
    host: "lv.vellerius.tk",
    port: 8027,
    pass: "derpilava", 
  },
  
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "",
    ClientSecret: process.env.Spotify_ClientSecret || "",
  },
};
