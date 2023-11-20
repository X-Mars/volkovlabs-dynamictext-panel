import * as Handlebars from 'handlebars';
/**
 * Helper for Date
 */
import date from 'helper-date';

/**
 * To Fixed
 */
const toFixed = (num: unknown, digits: unknown) => {
  if (typeof num !== 'number' || typeof digits !== 'number') {
    return 0;
  }

  return num.toFixed(digits);
};

/**
 * Register Helpers
 */
export const registerHelpers = (handlebars: typeof Handlebars) => {
  /**
   * And
   */
  handlebars.registerHelper('and', (left: boolean, right: boolean): boolean => left && right);

  /**
   * Contains
   */
  handlebars.registerHelper('contains', (arr: string[], value: string): boolean => arr.indexOf(value) !== -1);

  /**
   * startsWith
   */
  handlebars.registerHelper('startsWith', (left: string, right: string): boolean => left.startsWith(right));

  /**
   * endsWith
   */
  handlebars.registerHelper('endsWith', (left: string, right: string): boolean => left.endsWith(right));

  /**
   * match
   */
  handlebars.registerHelper('match', (left: string, right: string): boolean => left.match(right) !== null);

  /**
   * Date
   */
  handlebars.registerHelper('date', date);

  /**
   * Equal
   */
  handlebars.registerHelper('eq', (left: string, right: string): boolean => left === right);

  /**
   * JSON
   */
  handlebars.registerHelper('json', (context: unknown) => JSON.stringify(context, null, 2));

  /**
   * Greater Than
   */
  handlebars.registerHelper('gt', (left: number, right: number): boolean => left > right);

  /**
   * Greater or Equal
   */
  handlebars.registerHelper('gte', (left: number, right: number): boolean => left >= right);

  /**
   * Join
   */
  handlebars.registerHelper('join', (arr: string[], sep: string): string => arr.join(sep));

  /**
   * Less Than
   */
  handlebars.registerHelper('lt', (left: number, right: number): boolean => left < right);

  /**
   * Less or Equal
   */
  handlebars.registerHelper('lte', (left: number, right: number): boolean => left <= right);

  /**
   * Not
   */
  handlebars.registerHelper('not', (left: boolean): boolean => !left);

  /**
   * Or
   */
  handlebars.registerHelper('or', (left: boolean, right: boolean): boolean => left || right);

  /**
   * Split
   */
  handlebars.registerHelper('split', (str: string, sep: string): string[] => str.split(sep));

  /**
   * To Fixed
   */
  handlebars.registerHelper('toFixed', toFixed);

  /**
   * Unless Equal
   */
  handlebars.registerHelper('unlessEq', (left: string, right: string): boolean => left !== right);
};
