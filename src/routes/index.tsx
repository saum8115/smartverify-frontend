import { createFileRoute } from "@tanstack/react-router";
import { SmartVerify } from '@/components/smartverify';
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: 'SmartVerify website' },
      { name: 'description', content: 'Verify employment and income with SmartVerify’s UAN, EPFO and TDS verification APIs for faster hiring and onboarding.' },
      { property: 'og:title', content: 'Employee & Income Verification APIs — SmartVerify' },
      { property: 'og:description', content: 'Trusted employment records and income verification for hiring, lending and onboarding.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ]
  }),
  component: SmartVerify,
});
