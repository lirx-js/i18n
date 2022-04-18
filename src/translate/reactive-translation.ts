import { IObservable, IReactiveStringParameters, reactiveString, single } from '@lirx/core';
import { ITranslations } from './translations.type';

export function reactiveTranslation(
  translations: ITranslations,
  key: string,
  options?: IReactiveStringParameters,
): IObservable<string> {
  if (translations.has(key)) {
    return reactiveString(translations.get(key) as any, options);
  } else {
    return single(key);
  }
}
