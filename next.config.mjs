import nextra from 'nextra'

const withNextra = nextra({
  latex: true,
  defaultShowCopyCode: true,
})

export default withNextra({
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
})
