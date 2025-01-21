import { config } from '../config'

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
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Allison&family=Titillium+Web:wght@300;400&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Allison&family=Titillium+Web:wght@300;400&display=swap"
        rel="stylesheet"
      />
      <title>{config.title}</title>
    </>
  )
}
