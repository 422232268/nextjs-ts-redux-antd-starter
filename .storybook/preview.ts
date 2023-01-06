import 'src/i18n'
import './storybook.css'
import 'antd/dist/reset.css'
import { RouterContext } from 'next/dist/shared/lib/router-context'

// export const decorators = [withNextRouter]

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}
