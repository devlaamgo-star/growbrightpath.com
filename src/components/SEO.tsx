import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'profile';
  article?: {
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    section?: string;
    tags?: string[];
  };
  noIndex?: boolean;
  canonicalUrl?: string;
}

const SEO = ({
  title,
  description,
  keywords,
  image = 'https://growbrightpath.com/og-image.jpg',
  url,
  type = 'website',
  article,
  noIndex = false,
  canonicalUrl,
}: SEOProps) => {
  const baseUrl = 'https://growbrightpath.com';
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const fullTitle = title.includes('BrightPath Digital') ? title : `${title} | BrightPath Digital`;
  const canonical = canonicalUrl || fullUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="BrightPath Digital" />
      <link rel="canonical" href={canonical} />

      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      )}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="BrightPath Digital" />
      <meta property="og:locale" content="en_GB" />

      {/* Article specific tags */}
      {article && type === 'article' && (
        <>
          {article.author && <meta property="article:author" content={article.author} />}
          {article.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
          {article.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
          {article.section && <meta property="article:section" content={article.section} />}
          {article.tags && article.tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@brightpath_digital" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />

      {/* Geographic targeting */}
      <meta name="geo.region" content="GB" />
      <meta name="geo.country" content="UK" />
      <meta name="language" content="English" />
    </Helmet>
  );
};

export default SEO;