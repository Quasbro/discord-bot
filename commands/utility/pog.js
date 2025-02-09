const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 2,
    data: new SlashCommandBuilder()
     .setName('pog')
        .setDescription('Responds with "Totally Poggers Bro"'),
    async execute(interaction) {
        await interaction.reply('Totally Poggers Bro!')
    }
};