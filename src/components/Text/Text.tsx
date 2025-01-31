import React from 'react';
import { css } from '@emotion/css';
import { DataFrame } from '@grafana/data';
import { Alert, useTheme } from '@grafana/ui';
import { generateHtml } from '../../helpers';
import { TextOptions } from '../../types';
import { getStyles } from './Text.styles';

/**
 * Properties
 */
export interface Props {
  /**
   * Options
   *
   * @type {TextOptions}
   */
  options: TextOptions;

  /**
   * Frame
   *
   * @type {DataFrame}
   */
  frame?: DataFrame;
}

/**
 * Text
 */
export const Text: React.FC<Props> = ({ options, frame }) => {
  /**
   * Theme
   */
  const theme = useTheme();
  const styles = getStyles(theme);

  try {
    let renderedContent;

    /**
     * Frame returned
     */
    if (frame?.length) {
      const data = frame.fields.reduce((out, { config, name, values }) => {
        values.toArray().forEach((v, i) => {
          out[i] = { ...out[i], [config.displayName || name]: v };
        });
        return out;
      }, [] as Array<Record<string, any>>);

      /**
       * Content
       */
      renderedContent = options.everyRow ? (
        data.map((row, key) => {
          return (
            <div
              key={key}
              className={styles.frame}
              dangerouslySetInnerHTML={{ __html: generateHtml(row, options.content) }}
            />
          );
        })
      ) : (
        <div className={styles.frame} dangerouslySetInnerHTML={{ __html: generateHtml({ data }, options.content) }} />
      );
    } else {
      /**
       * Default Content
       */
      renderedContent = (
        <div className={styles.frame} dangerouslySetInnerHTML={{ __html: generateHtml({}, options.defaultContent) }} />
      );
    }

    return <div style={{ flexGrow: 1, overflow: 'auto' }}>{renderedContent}</div>;
  } catch (e: any) {
    /**
     * Error
     */
    return (
      <div
        className={css`
          padding: ${theme.spacing.sm};
        `}
      >
        <Alert title="Couldn't build text from template" severity="error">
          Please make sure the Content is a valid template.
        </Alert>

        {<pre>{e instanceof Error ? e.message : e}</pre>}
      </div>
    );
  }
};
