import getDemoCodeHTMLFromEager from '$theme/utils/getDemoCodeHTMLFromEager'
import type { RequestHandler } from '@sveltejs/kit'
import { resolve } from 'path'
import { parse } from 'sveltedoc-parser'

export const GET: RequestHandler = async function () {
  const componentAPI: any = await parse({
    filename: resolve(process.cwd(), '../ui/src/components/CButton.svelte'),
    version: 3,
  })

  const demosCodeHTML = await getDemoCodeHTMLFromEager(
    import.meta.glob('./_demos/*.svelte', { as: 'raw', eager: true })
  )

  return {
    status: 200,
    body: {
      demosCodeHTML,
      componentAPI,
    },
  }
}
