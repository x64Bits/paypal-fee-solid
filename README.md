# PayPal Online Transactions Calculator

Personal project due to the need to calculate the percentage necessary to send each of my transactions via PayPal

![Showcase (1)](https://user-images.githubusercontent.com/25030238/111574281-92017780-8782-11eb-8cba-29049e53e192.png)

The app in general is developed using Next.js, I have plans migrate to a lighter framework to make the bundle smaller because I don't use the next.js utilities, only next.js is my everyday tool.

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

The above command generates a file **extension.zip** in the root of the project which can be loaded into firefox to use as a plugin

- Generate static extension without compiling the project again.

```bash
yarn generate
```

## Get it like browser extension:

[![Opera](https://user-images.githubusercontent.com/25030238/115462259-6f86d200-a1f8-11eb-8e28-2cdc8ff4ee35.png)](https://addons.opera.com/es/extensions/details/paypal-fee-calculator/)

[![Firefox](https://user-images.githubusercontent.com/25030238/115462258-6eee3b80-a1f8-11eb-9c77-fe65b3ea18c0.png)](https://addons.mozilla.org/es/firefox/addon/paypal-fee-calculator/)
