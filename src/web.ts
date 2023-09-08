import { WebPlugin } from '@capacitor/core';

import type { DynatracePlugin } from './definitions';

export class DynatraceWeb extends WebPlugin implements DynatracePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
