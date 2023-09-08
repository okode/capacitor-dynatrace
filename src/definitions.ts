export interface DynatracePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
