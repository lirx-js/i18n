import { IObservable, optimizedReactiveFunction, single } from '@lirx/core';
import { ILocales } from '../locales/locales.type';
import { IPluralRulesOptions, IPluralRulesResult, IPluralRulesValue } from './plural-rules.type';

export function pluralRulesObservable(
  value: IObservable<IPluralRulesValue>,
  locales: IObservable<ILocales>,
  options: IObservable<IPluralRulesOptions> = single({}),
): IObservable<IPluralRulesResult> {
  return optimizedReactiveFunction(
    [
      value,
      locales,
      options,
    ],
    (
      value: IPluralRulesValue,
      locales: ILocales,
      options: IPluralRulesOptions,
    ): IPluralRulesResult => {
      return new Intl.PluralRules(locales as string[], options).select(value);
    },
  );
}
