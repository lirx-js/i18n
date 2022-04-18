import { IObservable, optimizedReactiveFunction, single } from '@lirx/core';
import { ILocales } from '../locales/locales.type';
import { relativeTimeFormat } from './relative-time-format';
import { IRelativeTimeFormatOptions, IRelativeTimeFormatUnit, IRelativeTimeFormatValue } from './relative-time-format.type';

export function relativeTimeFormatObservable(
  value: IObservable<IRelativeTimeFormatValue>,
  unit: IObservable<IRelativeTimeFormatUnit>,
  locales: IObservable<ILocales>,
  options: IObservable<IRelativeTimeFormatOptions> = single({}),
): IObservable<string> {
  return optimizedReactiveFunction(
    [
      value,
      unit,
      locales,
      options,
    ],
    relativeTimeFormat,
  );
}


