import "./style.css";

const button = document.getElementById("trigger") as HTMLButtonElement;

button.addEventListener("click", () => {
  window.validao.openStakeModal({
    chain: "hyperliquid",
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
      theme: "dark",
      rounded: "md",
      font: "outfit",
      color: "teal",
    },
  });
});
