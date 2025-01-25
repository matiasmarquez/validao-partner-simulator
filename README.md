![image](https://github.com/user-attachments/assets/dd797f6c-cd48-4e9f-a7c5-41d6410e23f2)

# ValiDAO - Partner Simulator
This repository demonstrates how to simulate and test the usage of the SDK in a real-world application.

## How to Run the Application
1. Clone the repository
2. Install the dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```

## How to Use the SDK
1. Add the following script tag to your application:
```html
<script src="https://app.validao.xyz/validao-sdk-1.0.js"></script>
```
2. Open the modal by calling the function in a .js or .ts file:
```typescript
// Refer to the "Configuration API" section for available parameters.  

window.validao.openDummyStakeModal(config);
```

3. Once the function is called, a modal will appear in the center of the screen:
![image](https://github.com/user-attachments/assets/78468865-4a90-4a64-b601-99ed9eded199)
- `Simulate Stake Successful`: simulates the completion of a staking action without errors.
- `Simulate Stake Error`: simulates an error occurring during the staking action.

> [!NOTE]
> This "dummy" modal is a placeholder and will be replaced with the real modal once the integration and development process is complete.
 
## Configuration API
The following properties can be passed in the config object to the validao.openDummyStakeModal() function:

| Property  | Type     | Default            | Description                                                                                                                                                                                                  |
|-----------|----------|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `chain`   | string   | -                  | Options: `hyperliquid`, `celestia`, `axelar`, `stargaze`, `seda`                                                                                                                                                      |
| `title`   | string   | "Stake with ValiDAO" | Title of the modal                                                                                                                                                                                            |
| `onStake` | (opts) => void | -                  | Triggered when the stake is completed successfully. <br> The opts object contains: <br> `closeModal`: function to close the modal. `showSuccessMessage`: function to display a success message. |
| `onError` | (error, opts) => void | -                  | Triggered when an error occurs during staking. <br> The `error` parameter is a string. The `opts` object contains: <br> `closeModal`: function to close the modal. <br> `showErrorMessage`: function to display an error message.          |

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


