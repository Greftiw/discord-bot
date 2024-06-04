const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('2ou1')
		.setDescription('Faz que o jogador possa escolher entre os números dois ou um.'),
	async execute(interaction) {

		const dois = new ButtonBuilder()
			.setCustomId('dois')
			.setLabel('2')
			.setStyle(ButtonStyle.Success);

        const um = new ButtonBuilder()
			.setCustomId('um')
			.setLabel('1')
			.setStyle(ButtonStyle.Success);

		const cancel = new ButtonBuilder()
			.setCustomId('cancel')
			.setLabel('Cancelar')
			.setStyle(ButtonStyle.Secondary);

		const row = new ActionRowBuilder()
			.addComponents(cancel, um, dois);

		const response = await interaction.reply({
			content: `Escolha sua jogada para o dois ou um.`,
			components: [row],
        });
        const collectorFilter = i => i.user.id === interaction.user.id;

    try {
	    const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 60_000 });
        if (confirmation.customId === 'um') {
            ///
            await confirmation.update({ content: `Sua escolha foi registrada.`, components: [] });
        } else if (confirmation.customId === 'dois') {
            ///
                        await confirmation.update({ content: `Sua escolha foi registrada.`, components: [] });
        } else if (confirmation.customId === 'cancel') {
            await confirmation.update({ content: 'Operação cancelada.', components: [] });
        }
    } catch (e) {
	    await interaction.editReply({ content: 'Tempo excedido, cancelando operação...', components: [] });
    }
},
};