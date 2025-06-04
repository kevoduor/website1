
import { useEffect } from 'react';
import { metaTags, MetaTagKey } from '@/config/metaTags';

export const useMetaTags = (pageKey: MetaTagKey) => {
  useEffect(() => {
    const meta = metaTags[pageKey];
    
    // Update document title
    document.title = meta.title;
    
    // Update meta description
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', meta.description);
    }
    
    // Update Open Graph title
    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute('content', meta.title);
    }
    
    // Update Open Graph description
    const ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
    if (ogDescriptionMeta) {
      ogDescriptionMeta.setAttribute('content', meta.description);
    }
    
    // Update Twitter card title (if needed)
    const twitterTitleMeta = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitleMeta) {
      twitterTitleMeta.setAttribute('content', meta.title);
    }
    
    // Update Twitter card description (if needed)
    const twitterDescriptionMeta = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescriptionMeta) {
      twitterDescriptionMeta.setAttribute('content', meta.description);
    }
  }, [pageKey]);
};
