/** @type {(FormatsData | {section: string, column?: number})[]} */
export const Formats: FormatList = [
	// Digimon Metas
	{
		section: "Digimon Metas",
		column: 2,
	},
	{
		name: "[digimon] Random Battle",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		mod: 'digimon',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
];

