import {
  createMulticastReplayLastSource,
  ICreateReplayLastSourceInitialValue,
  IMulticastReplayLastSource,
} from '@lirx/core';
import { getNavigatorLanguages } from './get-navigator-languages';
import { ILocales } from './locales.type';

export function createLocalesSource(
  ...initialValue: ICreateReplayLastSourceInitialValue<ILocales>
): IMulticastReplayLastSource<ILocales> {
  const _initialValue: ICreateReplayLastSourceInitialValue<ILocales> = (initialValue.length === 0)
    ? [getNavigatorLanguages()]
    : initialValue;

  return createMulticastReplayLastSource<ILocales>(..._initialValue);
}
