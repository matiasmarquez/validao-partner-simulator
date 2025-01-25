export {};

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
  title?: string;
  onStake?: (opts: OnStakeOpts) => void;
  onError?: (error: string, opts: OnErrorOpts) => void;
}

declare global {
  interface Window {
    validao: {
      openStakeModal: (config: StakeModalConfig) => void;
      openDummyStakeModal: (config: StakeModalConfig) => void;
    };
  }
}
