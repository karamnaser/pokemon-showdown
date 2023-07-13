export const Formats: FormatList = [
	// Digimon Metas
	{
		section: "Digimon Metas",
		column: 2,
	},
	{
		name: "[genDigimon] OU",
		mod: "gendigimon",
		ruleset: ['Cancel Mod', 'Dynamax Clause', 'HP Percentage Mod', 'Team Preview', 'Terastal Clause'],
	},
	{
		name: "[Digimon] Digimon Showdown Singles",
		desc: "Battle and play with your friends with this Digimon & LGPE hyrbid.",

		mod: "gendigimon",
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'Dynamax Clause', 'HP Percentage Mod', 'Team Preview', 'Terastal Clause'],
		onBegin() {
		},
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onAfterMega(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onUpdate(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
	},
];


