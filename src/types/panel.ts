import { EditorOptions } from './editor';

/**
 * Options
 */
export interface TextOptions {
  /**
   * Content
   *
   * @type {string}
   */
  content: string;

  /**
   * Default Content
   *
   * @type {string}
   */
  defaultContent: string;

  /**
   * Every Row
   *
   * @type {boolean}
   */
  everyRow: boolean;

  /**
   * Editor
   *
   * @type {EditorOptions}
   */
  editor: EditorOptions;
}
