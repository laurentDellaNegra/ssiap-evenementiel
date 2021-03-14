# ssiap-evenementiel.com

## Stack
- Tailwind CSS
- webpack 5
- PostCSS
- jQuery

## Component libraries
- kwesform: contact form

## Start
### Get project
```
git clone https://github.com/laurentDellaNegra/ssiap-evenementiel.com.git
```
### Install dependencies
```
yarn install
```
### Start local server for development
```
yarn dev
```
### Build production bundle
```
yarn build
```
### Deploy on gh-pages (update production website)
```
yarn deploy
```

## Github actions
Everytime a modification is pushed on the main branch, it's trigger a deploy on gh-pages and utpdate the website.
