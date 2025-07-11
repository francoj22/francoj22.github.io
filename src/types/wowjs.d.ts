

declare module 'wowjs' {
  export class WOW {
    constructor(options?: {
      boxClass?: string;
      animateClass?: string;
      offset?: number;
      mobile?: boolean;
      live?: boolean;
    });
    init(): void;
    sync(): void;
  }
}

declare global {
  interface Window {
    init: () => void; // or use `any` if you're unsure of the type
  }
}
