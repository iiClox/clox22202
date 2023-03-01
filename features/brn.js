module.exports = (client, instance, ) => {
client.on("interactionCreate", async interaction => {
const simplydjs = require("simply-djs");
let { Database } = require('quickmongo')
const db = new Database("mongodb+srv://martin:MARTIN123martin@clox.yhwuy.mongodb.net/cloxbot?retryWrites=true&w=majority");

await db.connect();
simplydjs.clickBtn(interaction);

simplydjs.suggestBtn(interaction, db)


  

})
}