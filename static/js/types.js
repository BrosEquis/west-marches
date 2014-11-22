window.REGION_TYPES = [
	{
		name: 'grasslands',
		associations: {
			primary: true,
			secondary: 2,
			tertiary: 1,
			wilds: [3,4,5]
		}
	},
	{
		name: 'hills',
		associations: {
			primary: true,
			secondary: 6,
			tertiary: 0,
			wilds: [2,3,4]
		}
	},
	{
		name: 'forests',
		associations: {
			primary: true,
			secondary: [0,1],
			tertiary: 3,
			wilds: 4
		}
	},
	{
		name: 'swamps',
		associations: {
			primary: true,
			secondary: 0,
			tertiary: 2,
			wilds: 4
		}
	},
	{
		name: 'water',
		associations: {
			primary: true,
			secondary: [2,0],
			tertiary: 6,
			wilds: [1,3,5]
		}
	},
	{
		name: 'desert',
		associations: {
			primary: true,
			secondary: 1,
			tertiary: false,
			wilds: [0,4,6]
		}
	},
	{
		name: 'mountains',
		associations: {
			primary: true,
			secondary: 1,
			tertiary: 2,
			wilds: [5]
		}
	},
];