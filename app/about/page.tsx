import Team from '@/components/Team';
import MaureenBio from '@/components/MaureenBio';
import JoannaBio from '@/components/JoannaBio';
import OurApproach from '@/components/OurApproach';

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24">
      <MaureenBio />
      <JoannaBio />
      <Team />
      <OurApproach />
    </div>
  );
} 