import { IObservable, mapObservable } from '@lirx/core';
import { ILocales } from '../../../locales/locales.type';
import { numberFormatObservable } from '../../number-format-observable';
import { INumberFormatOptions, INumberFormatValue } from '../../number-format.type';
import { ICurrencyFormatOptions } from './currency-format-options.type';

export function currencyFormatObservable(
  value: IObservable<INumberFormatValue>,
  locales: IObservable<ILocales>,
  options: IObservable<ICurrencyFormatOptions>,
): IObservable<string> {
  return numberFormatObservable(
    value,
    locales,
    mapObservable(options, (options: ICurrencyFormatOptions): INumberFormatOptions => {
      return {
        currencyDisplay: 'narrowSymbol',
        ...options,
        style: 'currency',
      };
    }),
  );
}
