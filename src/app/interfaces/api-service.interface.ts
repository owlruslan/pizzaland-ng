/**
 * Unifying interfaces for API services by adding common host property.
 */
export interface APIService {

  /**
   * Common host for API calls.
   * Example: 'https://dev.mouseapp.io'
   *
   * @usage
   * ```
   * // In service class
   * readonly host = environment.host;
   * ```
   */
  readonly host: string;
}
