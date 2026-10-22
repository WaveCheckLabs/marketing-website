type Placement = 'hero' | 'cta' | 'sticky-bar';

const appStoreUrl = 'https://apps.apple.com/au/app/wavecheck/id6757846707';

/** Google Play link tagged so Play Console attributes the install to the website button that was tapped. */
const playStoreUrl = (placement: Placement) => {
  const url = new URL('https://play.google.com/store/apps/details?id=com.viniciusdias.wavecheck');
  const referrer = new URLSearchParams({ utm_source: 'website', utm_medium: placement });

  url.searchParams.set('referrer', referrer.toString());

  return url.href;
};

export type { Placement };

export { appStoreUrl, playStoreUrl };
