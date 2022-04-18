import { IObservable, IObservablePipe } from '@lirx/core';
import { ILocales } from '../locales/locales.type';
import { dateTimeFormatObservable } from './date-time-format-observable';
import { IDateTimeFormatOptions, IDateTimeFormatValue } from './date-time-format.type';

export function dateTimeFormatObservablePipe(
  locales: IObservable<ILocales>,
  options: IObservable<IDateTimeFormatOptions>,
): IObservablePipe<IDateTimeFormatValue, string> {
  return (subscribe: IObservable<IDateTimeFormatValue>): IObservable<string> => {
    return dateTimeFormatObservable(subscribe, locales, options);
  };
}

// export function dateTimeFormatObservablePipe(
//   locales: IObservable<ILocales>,
//   options: IObservable<IDateTimeFormatOptions>,
// ): IObservablePipe<IDateTimeFormatValue, string> {
//   const format: IObservable<DateTimeFormat> = reactiveFunction(
//     [locales, options],
//     (locales: ILocales, options: IDateTimeFormatOptions): DateTimeFormat => {
//       return new Intl.DateTimeFormat(locales as any, options as DateTimeFormatOptions);
//     },
//   );
//   return (subscribe: IObservable<IDateTimeFormatValue>): IObservable<string> => {
//     return reactiveFunction(
//       [subscribe, format],
//       (value: IDateTimeFormatValue, format: DateTimeFormat): string => {
//         return format.format(value);
//       },
//     );
//   };
// }






