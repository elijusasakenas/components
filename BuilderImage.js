import Image from 'next/image'

const builderLoader = ({ src, width, quality}) => {
  const url = new URL(`${src}`)
  url.searchParams.set('format', 'webp')
  url.searchParams.set('width', width.toString())
  url.searchParams.set('quality', (quality || 75).toString())
  return url.href
}

const BuilderImage = (props) => {
  return <Image loader={builderLoader} alt="media" {...props} />
}

export default BuilderImage