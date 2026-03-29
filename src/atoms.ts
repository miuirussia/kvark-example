import { atom } from "@kdeveloper/kvark/family";

export const demoAtom = atom({
  debugLabel: 'Demo',
  async get() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return 'Hello, world!';
  },
  onMount(set) {
    console.log('onMount');
    const l = setTimeout(() => {
      set('Mounted');
    }, 1000);
    return () => {
      console.log('onUnmount');
      clearTimeout(l);
    };
  },
});
