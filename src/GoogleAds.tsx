import React, { useEffect } from 'react';

declare global {
    interface Window {
        adsbygoogle: any[];
    }
}

export enum DataAdLayout {
    IN_ARTICLE = 'in-article',
    IN_FEED = 'in-feed'
}

export enum AdSenseFormat {
    AUTO = 'auto',
    RECTANGLE = 'rectangle',
    HORIZONTAL = 'horizontal',
    VERTICAL = 'vertical',
    LEADERBOARD = 'leaderboard',
    SKYSCRAPER = 'skyscraper',
    LARGE_RECTANGLE = 'large_rectangle',
    RESPONSIVE = 'responsive',
    FLUID = 'fluid',
    LINK_UNIT = 'link_unit',
    AUTO_RELAXED = 'auto_relaxed',
}

interface AdSenseProps {
    client: string; // AdSense client ID
    slot: string; // AdSense slot ID
    dataAdLayout?: DataAdLayout;
    format: AdSenseFormat; // AdSense ad format
    dataFullWidthResponsive: boolean; // AdSense ad format
}

const GoogleAds: React.FC<AdSenseProps> = ({ client, slot, format, dataFullWidthResponsive, dataAdLayout }) => {
    useEffect(() => {
        // Load AdSense script only once
        const script = document.createElement('script');
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Remove the script when the component unmounts
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, [client]);

    useEffect(() => {
        // Only push if this element doesn't already have an ad
        const thisElement = document.querySelector(`[data-ad-slot="${slot}"]`);
        
        if (thisElement && !thisElement.getAttribute('data-adsbygoogle-status')) {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          } catch (e) {
            console.error('AdSense error:', e);
          }
        }
      }, [slot]);

    return (
        <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client={client}
            data-ad-layout={dataAdLayout}
            data-ad-slot={slot}
            data-ad-format={format}
            data-full-width-responsive={dataFullWidthResponsive}
        />
    );
};

export default GoogleAds;
