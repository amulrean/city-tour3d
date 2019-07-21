// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  tileSets: [
    {
      country: 'USA',
      city: 'Washington DC',
      url: 'https://s3.amazonaws.com/amulrean-vricon/usa/washington_dc/tileset.json'
    },
    {
      country: 'Brazil',
      city: 'Rio De Janeiro',
      url: 'https://s3.amazonaws.com/amulrean-vricon/brazil/rio_de_janeiro/tileset.json'
    },
    {
      country: 'Sweden',
      city: 'Stockholm',
      url: 'https://s3.amazonaws.com/amulrean-vricon/sweden/stockholm/tileset.json'
    },
    {
      country: 'North Korea',
      city: 'Pyongyang',
      url: 'https://s3.amazonaws.com/amulrean-vricon/north_korea/pyongyang/tileset.json'
    },
    {
      country: 'Afghanistan',
      city: 'Mazar E Sharif',
      url: 'https://s3.amazonaws.com/amulrean-vricon/afghanistan/mazar_e_sharif/tileset.json'
    },
    {
      country: 'Libya',
      city: 'Tripoli',
      url: 'https://s3.amazonaws.com/amulrean-vricon/libya/tripoli/tileset.json'
    },
    {
      country: 'Saudi Arabia',
      city: 'Taif',
      url: 'https://s3.amazonaws.com/amulrean-vricon/saudi_arabia/taif/tileset.json'
    }
  ]
};
