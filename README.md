# lib-config-ts-test

Test and template project of [@vbetsch/lib-config-ts](https://github.com/vbetsch/lib-config-ts).

| Package                                                                              | Config files                                                                   |
|--------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| [`@vbetsch/config-eslint`](https://www.npmjs.com/package/@vbetsch/config-eslint)     | [eslint.config.mjs](./eslint.config.mjs)                                       |
| [`@vbetsch/config-jest`](https://www.npmjs.com/package/@vbetsch/config-jest)         | [jest.config.mjs](./jest.config.mjs)                                           |
| [`@vbetsch/config-prettier`](https://www.npmjs.com/package/@vbetsch/config-prettier) | [.prettierrc.mjs](./.prettierrc.mjs)                                           |
| [`@vbetsch/config-tsconfig`](https://www.npmjs.com/package/@vbetsch/config-tsconfig) | [tsconfig.json](./tsconfig.json)  [tsconfig.build.json](./tsconfig.build.json) |

Templates :

* [.editorconfig](.editorconfig)
* [.gitignore](.gitignore)
* [.npmrc](.npmrc)
* [.prettierignore](.prettierignore)

## Install or update

```bash
npm cache clean --force
npm install -D @vbetsch/config-eslint@latest @vbetsch/config-jest@latest @vbetsch/config-prettier@latest @vbetsch/config-tsconfig@latest --prefer-online
```

## Testing

Run npm commands in this order :

```bash
npm run start:dev
npm run prettier
npm run jest
npm run tsconfig
npm run eslint
npm run tsconfig:build
npm run start:prod
```
