// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  tileSets: [
    {
      name: 'Washington DC',
      url: 'https://s3.amazonaws.com/amulrean-vricon/usa/washington_dc/tileset.json'
    },
    {
      name: 'North Korea',
      url: 'https://s3.amazonaws.com/amulrean-vricon/north_korea/pyongyang/tileset.json'
    },
    {
      name: 'Brazil',
      url: 'https://s3.amazonaws.com/amulrean-vricon/brazil/rio_de_janeiro/tileset.json'
    }
  ]
};
