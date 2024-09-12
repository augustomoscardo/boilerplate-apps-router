// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import GlobalStyles from '../src/styles/global'

export const decoratos = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]

// import type { Preview } from '@storybook/react'

// const preview: Preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i
//       }
//     }
//   }
// }

// export default preview
