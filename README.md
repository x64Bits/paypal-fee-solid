# PayPal Online Transactions Calculator

Personal project due to the need to calculate the percentage necessary to send each of my transactions via PayPal

![Showcase (1)](https://user-images.githubusercontent.com/25030238/111574281-92017780-8782-11eb-8cba-29049e53e192.png)

## Requirements to build the application locally

- Node.js version >= 12
- yarn || npm
- MacOS, Windows, Linux

## Steps to build locally

Steps below are using **yarn**, in case you use npm run the commands with npm directly.

- Clone this repository:

```bash
git clone https://github.com/x64Bits/paypal-fee-solid
```

- Install dependencies using **yarn** inside the newly cloned folder:

```bash
yarn install
```

- Run the app locally:

```bash
yarn dev
```

- Generate static export:

```bash
yarn build
```

The above command generates a file **extension.zip** in the root of the project which can be loaded into firefox to use as a plugin or generate an extension file for chrome in the `dist` folder

- This command will build the bundle again and add the extension files.
- During execution it will ask for which browser you want to generate the extension.

```bash
yarn generate
```

options:

- `firefox`
- `chrome`
- `opera`

## Get it like browser extension:

[![Chrome](https://user-images.githubusercontent.com/25030238/126597106-3063db05-3f19-42bd-aa5f-ee1cb1292281.png)](https://user-images.githubusercontent.com/25030238/126597106-3063db05-3f19-42bd-aa5f-ee1cb1292281.png)

[![Opera](https://user-images.githubusercontent.com/25030238/115462259-6f86d200-a1f8-11eb-8e28-2cdc8ff4ee35.png)](https://addons.opera.com/es/extensions/details/paypal-fee-calculator/)

[![Firefox](https://user-images.githubusercontent.com/25030238/115462258-6eee3b80-a1f8-11eb-9c77-fe65b3ea18c0.png)](https://addons.mozilla.org/es/firefox/addon/paypal-fee-calculator/)
