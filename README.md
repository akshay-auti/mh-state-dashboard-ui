# State gov dashboard (# state-dashbaord-ui)

Dashboard to track covid-19 in various states

## Change to be made before deployment

1. Update the /src/store/covid/actions.js with the correct baseUrl for the backend deployment

2. In the /src/store/covid/state.js, update the geoJSON entry to show the corresponding map

## Install the dependencies

```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
npm run lint
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
