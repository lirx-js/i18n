import { IObservable, optimizedReactiveFunction } from '@lirx/core';
import { ILocales } from '../locales/locales.type';
import { IDateTimeFormatOptions, IDateTimeFormatValue } from './date-time-format.type';

export function dateTimeFormatObservable(
  value: IObservable<IDateTimeFormatValue>,
  locales: IObservable<ILocales>,
  options: IObservable<IDateTimeFormatOptions>,
): IObservable<string> {
  return optimizedReactiveFunction(
    [
      value,
      locales,
      options,
    ],
    (
      value: IDateTimeFormatValue,
      locales: ILocales,
      options: IDateTimeFormatOptions,
    ): string => {
      return new Intl.DateTimeFormat(locales as any, options).format(value);
    },
  );
}
