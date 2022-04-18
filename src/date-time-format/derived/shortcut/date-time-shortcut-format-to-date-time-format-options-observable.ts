import { IObservable, mapObservable } from '@lirx/core';
import { IDateTimeFormatOptions } from '../../date-time-format.type';
import {
  dateTimeShortcutFormatToDateTimeFormatOptions,
  IDateTimeShortcutFormat,
} from './date-time-shortcut-format-to-date-time-format-options';

export function dateTimeShortcutFormatToDateTimeFormatOptionsObservable(
  subscribe: IObservable<IDateTimeShortcutFormat>,
): IObservable<IDateTimeFormatOptions> {
  return mapObservable<IDateTimeShortcutFormat, IDateTimeFormatOptions>(subscribe, dateTimeShortcutFormatToDateTimeFormatOptions);
}
