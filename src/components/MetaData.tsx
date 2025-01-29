import { config } from '@/config'

export const MetaData: React.FC = () => {
  return (
    <>
      <meta
        name="viewport"
        content={`width=${config.viewport.width}, initial-scale=${
          config.viewport.initialScale
        }, minimum-scale=${config.viewport.minimumScale}, viewport-fit=${
          config.viewport.viewportFit
        }, user-scalable=${config.viewport.userScalable ? 'no' : 'yes'}`}
      />
      <title>{config.title}</title>
      <meta name="description" content={config.description} />
      <meta name="keywords" content={config.keywords.join(', ')} />
      <meta name="author" content={config.author} />
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:image" content="/og-image.jpg" />
      <meta property="og:url" content={config.siteUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={config.title} />
      <meta name="twitter:description" content={config.description} />
      <meta name="twitter:image" content="/twitter-image.jpg" />
      <meta name="theme-color" content="#010101" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="mask-icon" href="/mask-icon.svg" color="#010101" />
    </>
  )
}
