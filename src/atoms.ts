import { atom } from "@kdeveloper/kvark/family";

export const rootAtom = atom({
  debugLabel: 'Root',
  async get() {
    return 'Root atom';
  },
});

export const demoAtom = atom({
  dependencies: { root: rootAtom },
  debugLabel: 'Demo',
  async get(ctx) {
    const rootValue = await ctx.get("root");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return `Hello, world! ${rootValue}`;
  },
  onMount(set) {
    const id = setInterval(() => {
      set(new Date().toISOString());
    }, 1000);
    return () => clearInterval(id);
  },
});
