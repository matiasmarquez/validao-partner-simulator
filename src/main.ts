import "./style.css";

const button = document.getElementById("trigger") as HTMLButtonElement;

button.addEventListener("click", () => {
  window.validao.openDummyStakeModal({
    chain: "celestia",
    onStake: ({ closeModal, showSuccessMessage }) => {
      closeModal();
      showSuccessMessage("Stake successful!");
    },
    onError: (error, { closeModal, showErrorMessage }) => {
      closeModal();
      showErrorMessage(error);
    },
  });
});
