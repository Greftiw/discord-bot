const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pari')
		.setDescription('O pari é verme'),
	async execute(interaction) {
		await interaction.reply('parisotto verme');
	},
};