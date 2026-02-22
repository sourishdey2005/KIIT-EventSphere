/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import DashboardPreview from './components/DashboardPreview';
import Stats from './components/Stats';
import AISmartFeatures from './components/AISmartFeatures';
import Security from './components/Security';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        <DashboardPreview />
        <Stats />
        <AISmartFeatures />
        <Security />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
