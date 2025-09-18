import { Helmet } from 'react-helmet-async';

interface OrganizationData {
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: {
    telephone: string;
    contactType: string;
    email: string;
  };
  sameAs: string[];
}

interface ArticleData {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image: string;
  url: string;
  wordCount?: number;
  articleBody: string;
}

interface ProductData {
  name: string;
  description: string;
  brand: string;
  offers: {
    price: string;
    currency: string;
    availability: string;
  };
  aggregateRating?: {
    ratingValue: string;
    reviewCount: string;
  };
}

interface FAQData {
  question: string;
  answer: string;
}

interface StructuredDataProps {
  type: 'organization' | 'article' | 'product' | 'faq' | 'website';
  data: OrganizationData | ArticleData | ProductData | FAQData[] | any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const generateSchema = () => {
    const baseContext = "https://schema.org";

    switch (type) {
      case 'organization':
        const orgData = data as OrganizationData;
        return {
          "@context": baseContext,
          "@type": "Organization",
          "name": orgData.name,
          "url": orgData.url,
          "logo": orgData.logo,
          "description": orgData.description,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": orgData.address.streetAddress,
            "addressLocality": orgData.address.addressLocality,
            "postalCode": orgData.address.postalCode,
            "addressCountry": orgData.address.addressCountry
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": orgData.contactPoint.telephone,
            "contactType": orgData.contactPoint.contactType,
            "email": orgData.contactPoint.email
          },
          "sameAs": orgData.sameAs
        };

      case 'article':
        const articleData = data as ArticleData;
        return {
          "@context": baseContext,
          "@type": "Article",
          "headline": articleData.headline,
          "description": articleData.description,
          "author": {
            "@type": "Person",
            "name": articleData.author
          },
          "publisher": {
            "@type": "Organization",
            "name": "BrightPath Digital",
            "logo": {
              "@type": "ImageObject",
              "url": "https://growbrightpath.com/logo.png"
            }
          },
          "datePublished": articleData.datePublished,
          "dateModified": articleData.dateModified || articleData.datePublished,
          "image": articleData.image,
          "url": articleData.url,
          "wordCount": articleData.wordCount,
          "articleBody": articleData.articleBody,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": articleData.url
          }
        };

      case 'product':
        const productData = data as ProductData;
        return {
          "@context": baseContext,
          "@type": "Product",
          "name": productData.name,
          "description": productData.description,
          "brand": {
            "@type": "Brand",
            "name": productData.brand
          },
          "offers": {
            "@type": "Offer",
            "price": productData.offers.price,
            "priceCurrency": productData.offers.currency,
            "availability": `https://schema.org/${productData.offers.availability}`
          },
          ...(productData.aggregateRating && {
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": productData.aggregateRating.ratingValue,
              "reviewCount": productData.aggregateRating.reviewCount
            }
          })
        };

      case 'faq':
        const faqData = data as FAQData[];
        return {
          "@context": baseContext,
          "@type": "FAQPage",
          "mainEntity": faqData.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        };

      case 'website':
        return {
          "@context": baseContext,
          "@type": "WebSite",
          "name": "BrightPath Digital",
          "url": "https://growbrightpath.com",
          "description": "Transform learning experiences with BrightPath Digital. Connecting educators, students, and families through innovative digital learning solutions.",
          "publisher": {
            "@type": "Organization",
            "name": "BrightPath Digital"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://growbrightpath.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };

      default:
        return {};
    }
  };

  const schema = generateSchema();

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;