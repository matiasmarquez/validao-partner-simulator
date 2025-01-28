import "./style.css";

const button = document.getElementById("trigger") as HTMLButtonElement;

button.addEventListener("click", () => {
  window.validao.openStakeModal({
    chain: "hyperliquid",
    referralCode: "123456",
    onStake: ({ closeModal, showSuccessMessage }) => {
      closeModal();
      showSuccessMessage("Stake successful!");
    },
    onUnstake: ({ closeModal, showSuccessMessage }) => {
      closeModal();
      showSuccessMessage("Unstake successful!");
    },
    onError: (error, { closeModal, showErrorMessage }) => {
      closeModal();
      showErrorMessage(error);
    },
    customization: {
      theme: "light",
      rounded: "md",
      font: "outfit",
      color: "teal",
    },
  });
});
