const { QuickDB } = require("quick.db");
const db = new QuickDB();
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('vei')
		.setDescription('Conta a quantidade de vezes que o caetano falou vei.'),
    
	async execute(interaction, args) {
        db.add('times.ping', 1); 
        const timesUsed = await db.get('times.ping'); 
		await interaction.reply('O caetano já falou vei '+ timesUsed + ' vezes.');
	},
};