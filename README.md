<h1 align="center">💰 TChain app</h1>
<h3 align="center">Understand and optimize your crypto investments</h3>

## About

Created at the [hubraum](https://www.hubraum.com) [T Phone Hackathon](https://www.meetup.com/t-developers-in-berlin/events/290281723), which took place in Berlin from 21.01.2023 to 22.01.2023.

The [NMF.earth](https://github.com/NMF-earth/nmf-app) app was used as the starting point for a crypto investing app.

<br />

<p align="center">
  <a href="https://apps.apple.com/us/app/TChain">
    <img alt="app-store" src="https://github.com/ilovehackathons/tchain/blob/main/app-store.png" />
  </a>
  <a href="https://play.google.com/store/apps/details?id=TChain">
    <img alt="google-play" src="https://github.com/ilovehackathons/tchain/blob/main/play-store.png" />
  </a>
</p>

<br />

<p align="center">
  <a href="https://www.figma.com/community/file">
    <img alt="figma" src="https://github.com/ilovehackathons/tchain/blob/main/figma.png" />
  </a>
</p>

<br />

![screenshots](https://github.com/ilovehackathons/tchain/blob/main/app-preview.png)

![](https://github.com/ilovehackathons/tchain/workflows/Test%20CI/badge.svg)
[![Depfu](https://badges.depfu.com/badges/f3b06c819202baf2a14b3241cbf249c9/overview.svg)](https://depfu.com/repos/github/ilovehackathons/tchain?project_id=10243)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)
[![Build Status](https://img.shields.io/static/v1.svg?label=CSL&message=software%20against%20climate%20change&color=green?style=flat&logo=github)](https://github.com/climate-strike/license)
[![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-000.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.io/)

Repository for the [TChain](https://github.com/ilovehackathons/tchain/) React Native application, built with Expo, Redux Toolkit and Typescript.
Design can be found on [Figma](https://www.figma.com/community/file/967052407514062912).

<br />

### 📊 Data source

Token prices come from [Binance](https://binance.com) while NFT data comes from [OpenSea](https://opensea.io/).

<br />

### 📦 Getting started

Installing Dependencies:

```bash
$ yarn
```

Running the app:

```bash
$ yarn start
```

For starting the app on a specific OS:

```bash
$ yarn ios | yarn android
```

Copy the 2 files that contain secrets and replace them with yours

```bash
$ cp app.example.json app.json
$ cp secret.example.ts secret.ts
```

<br />

### 👩🏾‍💻 Development

- Eslint is used in the project to enforce code style and should be configured in your [editor](https://eslint.org/docs/user-guide/integrations).

- Prettier is also used and apply automatically by eslint

- Typescript is used in the project for type-checking and should be configured in your [editor](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support).

You can check this manually by running:

```bash
$ yarn lint
```

or

```bash
$ yarn typescript
```

You can ask eslint to fix issues by running:

```bash
$ yarn lint:fix
```

<br />

### 🛠 Testing

Use the following command to run unit tests with coverage:

```bash
$ yarn test
```

Use the following to update unit tests

```bash
$ yarn test -u
```

Use the following to run unit tests in watch mode while developing:

```bash
$ yarn test --watch
```

<br />

### 🎨 Storybook

Stories (\*.story.tsx) can be automatically added to `storyLoader.js` with :

```bash
$ yarn prestorybook
```

<br />

### 📗 Investment guide

To place new `.md` files inside `guides` folder or modify existing guide and then run `node scripts/generate-guides.js` to generate a new investment guide. Images can be used in the `.md` as follow: `![Token](token.png)` and should be place in `assets/images/guide`.

<br />

For methodology screen, just run `node scripts/generate-methodology.js` to update `methodology.json` from `methodology.md`.

<br />

For token info screen, just run `node scripts/generate-token-info.js` to update `token-info.json` from `assets/token-info/markdown/*.md`.

<br />

## 🗣 Translations

You can help us with translate the app with our online tool [POEditor](https://poeditor.com/join/project/0MbginCsWp). Any help is appreciate and no coding skills are needed 🤗

The app supports fully or partially the following languages : English, French, German, Swedish, Danish, Russian, Portuguese, Spanish, Polish, Chinese and Malaysian.

<br />

### Generate

Run `node scripts/generate-translation-files.js` in order to create the files needed for the new language you want to add to the app.

### Manage Files

Run `node scripts/poeditor/group-translation-files.js` to generate 1 JSON file per language, with all the translation vars in it. From there, you can easily make any edit you want. When you're done, you can run `node scripts/poeditor/spread-translation-files.js` to merge your edits and spread them into all the translation files across the repo.

<br />

### 🚀 Deployment

Any tag starting with `v` will runs expo publish. During this step `app.example.json` is used to generate an `app.json` file for expo's deployment, this is done with the following script `scripts/generate-app-json.js`.

<br />

### 🏗 Build

First you need to configure `SENTRY_AUTH_TOKEN` and `SENTRY_DSN` secrets on [expo.dev](https://expo.dev/accounts/%5Baccount%5D/settings/secrets) and then define `projectId` in `app.config.js`. Then run `npm install dotenv` and place your secrets inside `.env` file that you need to create with `SENTRY_AUTH_TOKEN` and `SENTRY_DSN`, like in `.env.example`.

Run `eas build -p ios` to build for the [App Store Connect](https://appstoreconnect.apple.com) and `eas build -p android` for the [Google Play Console](https://play.google.com/console/developers).

<br />

### 👨‍💻 Contribute ❤️

More than 30 developers have contribute to the app, thanks a lot to [them](https://github.com/ilovehackathons/tchain/graphs/contributors)!

Have a look to [contributing.md](https://github.com/ilovehackathons/tchain/blob/main/contributing.md) if you want to contribute!

<br />

### 🏆 Backers

A big thank you to [hubraum](https://hubraum.com) for hosting the hackathon.

<br />

### ©️ Open source - licence

Repository and contributions are under [GNU General Public License v3.0](https://github.com/ilovehackathons/tchain/blob/main/LICENSE)
