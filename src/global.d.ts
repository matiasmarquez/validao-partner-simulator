export {};

type SDKTheme = "light" | "dark";
type SDKRounded = "none" | "md" | "lg";
type SDKFont = "inconsolata" | "outfit";
type SDKColor = "red" | "sky" | "teal";

type SDKCustomization = {
  theme?: SDKTheme;
  rounded?: SDKRounded;
  font?: SDKFont;
  color?: SDKColor;
};

type ShowMessageFn = (message: string) => void;

type SDKOnStakeOpts = {
  closeModal: () => void;
  showSuccessMessage: ShowMessageFn;
};

type SDKOnUnstakeOpts = {
  closeModal: () => void;
  showSuccessMessage: ShowMessageFn;
};

type SDKOnErrorOpts = {
  closeModal: () => void;
  showErrorMessage: ShowMessageFn;
};

type OnStakeOpts = {
  closeModal: () => void;
  showSuccessMessage: (message: string) => void;
};

type OnErrorOpts = {
  closeModal: () => void;
  showErrorMessage: (message: string) => void;
};

export interface StakeModalConfig {
  chain: string;
  onStake?: (opts: SDKOnStakeOpts) => void;
  onUnstake?: (opts: SDKOnUnstakeOpts) => void;
  onError?: (error: string, opts: SDKOnErrorOpts) => void;
  customization?: SDKCustomization;
}

declare global {
  interface Window {
    validao: {
      openStakeModal: (config: StakeModalConfig) => void;
    };
  }
}
