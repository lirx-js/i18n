import {
  IObservable,
  IReactiveStringParameters,
  mergeAllSingleObservable,
  optimizedReactiveFunction,
  single,
} from '@lirx/core';
import { reactiveTranslation } from './reactive-translation';
import { ITranslations } from './translations.type';

export function translateObservable(
  translations: IObservable<ITranslations>,
  key: IObservable<string>,
  options: IObservable<IReactiveStringParameters> = single({}),
): IObservable<string> {
  return mergeAllSingleObservable(
    optimizedReactiveFunction(
      [translations, key, options],
      reactiveTranslation,
    ),
  );
}

