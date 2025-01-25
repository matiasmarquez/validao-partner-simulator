![image](https://github.com/user-attachments/assets/dd797f6c-cd48-4e9f-a7c5-41d6410e23f2)

# ValiDAO - Partner Simulator
This repository purpose is to simulate and test the usage of the SDK in a real application.

## How to run the app
1. Clone the repository
2. Install the dependencies
```bash
npm install
```
3. Run the application
```bash
npm dev
```

## How to use the SDK
1. Add the following script tag on your application
```html
<script src="https://app.validao.xyz/validao-sdk-1.0.js"></script>
```
2. Open the modal by calling the following function in a `.js` or `.ts` file:
```typescript
// Check the "Configuration API" heading to know the available parameters.

window.validao.openDummyStakeModal(config);
```

## Configuration API
All the following API refers to the config object passed to `validao.openDummyStakeModal()`

| Property  | Type     | Default            | Description                                                                                                                                                                                                  |
|-----------|----------|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `chain`   | string   | -                  | `hyperliquid`, `celestia`, `axelar`, `stargaze`, `seda`                                                                                                                                                      |
| `title`   | string   | Stake with ValiDAO | The modal's title                                                                                                                                                                                            |
| `onStake` | (opts) => void | -                  | Event when the stake is finished succesfully. <br/> The `opts` object contains: <br/>   `closeModal`: function to close the modal. <br/> `showSuccessMessage`: function to show a success message |
| `onError` | (error, opts) => void | -                  | Event when the stake throws an error. <br/> The `error` is a string and the `opts` object contains: <br/> `closeModal`: function to close the modal. <br/> `showErrorMessage`: function to show an error message          |

Example:

```typescript
window.validao.openDummyStakeModal({
  chain: "hyperliquid",
  onStake: ({ closeModal, showSuccessMessage }) => {
    closeModal();
    showSuccessMessage("Stake successful!");
  },
  onError: (error, { closeModal, showErrorMessage }) => {
    closeModal();
    showErrorMessage(error);
  },
});
```


