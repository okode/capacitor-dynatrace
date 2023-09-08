import { registerPlugin } from '@capacitor/core';

import type { DynatracePlugin } from './definitions';

const Dynatrace = registerPlugin<DynatracePlugin>('Dynatrace', {
  web: () => import('./web').then(m => new m.DynatraceWeb()),
});

export * from './definitions';
export { Dynatrace };
