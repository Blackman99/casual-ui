import { getContext, hasContext } from 'svelte'

/**
 * @param size {import('casual-types').CSize | undefined}
 */
export default size =>
  size ? size : hasContext('c-size') ? getContext('c-size') : 'md'
