import { CustomGlobalState } from '@types';
import 'little-state-machine';

declare module 'little-state-machine' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface GlobalState extends CustomGlobalState {}
}
