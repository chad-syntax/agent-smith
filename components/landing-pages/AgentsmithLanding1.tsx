'use client';

import { LandingHero } from './LandingHero';
import { LandingFeatures } from './LandingFeatures';
import { BrevoEmailSubscribe } from '../BrevoEmailSubscribe/BrevoEmailSubscribe';
import { NotPubliclyAvailable } from './NotPubliclyAvailable';

export const AgentsmithLanding1 = () => {
  return (
    <div className="max-w-[1400px] w-full mx-auto p-16">
      <LandingHero />
      <LandingFeatures />
      <NotPubliclyAvailable />
      <BrevoEmailSubscribe form="agentsmithInitialLanding" />
    </div>
  );
};
