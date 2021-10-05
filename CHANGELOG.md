# [1.1.0](https://github.com/dyte-in/discord-bot/compare/v1.0.1...v1.1.0) (2021-10-05)


### Bug Fixes

* **dyte.ts:** remove unused await ([7888be0](https://github.com/dyte-in/discord-bot/commit/7888be0cfd9313948c46d60b43b6e2b561620cc9))
* **env:** removed unused variables from .env ([b7a3c7c](https://github.com/dyte-in/discord-bot/commit/b7a3c7c4e8ffc8317ddbab597bbcd4f71fc348fc))
* **send command:** if content does not exist, do not crash the bot, send appropriate message ([6689101](https://github.com/dyte-in/discord-bot/commit/66891016ce389389aad45eb65fad925b4d60d2e3))


### Features

* **announce:** added basic $announce command functionality, to be changed to accept args ([8e59c51](https://github.com/dyte-in/discord-bot/commit/8e59c51b1efeceece5d37dfa9393d9f8ec7b49ce))
* **commands:** added command $send to send messages as the bot to any channel ([da2f120](https://github.com/dyte-in/discord-bot/commit/da2f120335d1a8b6892187e27471a31a8680ef08))
* **roles:** commands can now filter by roles ([8c85fd4](https://github.com/dyte-in/discord-bot/commit/8c85fd4826bb95b49e0248d5081e6fb95ec36105))

## [1.0.1](https://github.com/dyte-in/discord-bot/compare/v1.0.0...v1.0.1) (2021-10-03)


### Bug Fixes

* **messagecreate:** rename meetingCreate to messageCreate ([40f5e88](https://github.com/dyte-in/discord-bot/commit/40f5e88904fe1ab8fe37ee6afdb1195c3427d89b))
* **utils:** export utils from single index.ts file ([e753d0e](https://github.com/dyte-in/discord-bot/commit/e753d0ea27dae196afc9be4109fb5d93f6ab1b4e))

# 1.0.0 (2021-10-03)


### Bug Fixes

* **release:** change npmPublish to false in .releaserc.json ([fbbb7a7](https://github.com/dyte-in/discord-bot/commit/fbbb7a719491d46ff351f73de80f3046eaec3cfe))
* **release:** changed semantic-release versions and removed NPM token from action ([5654118](https://github.com/dyte-in/discord-bot/commit/56541189df0733e7d8423fb21cc5750c81203d7e))
* updated fields in embed ([91bfd48](https://github.com/dyte-in/discord-bot/commit/91bfd4826c87cd301a85ad1aeadcf8042c111acf))


### Features

* Add Bot Acitivity message ([66536a9](https://github.com/dyte-in/discord-bot/commit/66536a9b125de177818cc50cc537a3fab64642f1))
* Add command to create a dyte meeting (/dyte) ([4ecb819](https://github.com/dyte-in/discord-bot/commit/4ecb81938358e4b5903451200c4278ca300c8f24))
* Add feature to configure if a command is registered as a slash command or not ([b96e539](https://github.com/dyte-in/discord-bot/commit/b96e5398bad19121ddf8ab4f89abe2c2f826f445))
* Base bot code to support slash commands + message commands with args ([dc31177](https://github.com/dyte-in/discord-bot/commit/dc31177ccc7cd109043cf6f8471624bd19477251))
* Register both global commands as well as guild commands ([537a463](https://github.com/dyte-in/discord-bot/commit/537a4630585023883e3aed14e79a7cf92507935d))
