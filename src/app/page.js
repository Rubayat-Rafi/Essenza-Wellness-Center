
import ContactPage from "./components/LandingPage/ContactPage/ContactPage";
import CoreServices from "./components/LandingPage/CoreServices/CoreServices";
import Hero from "./components/LandingPage/Hero/Hero";
import PatientExperience from "./components/LandingPage/PatientExperience/PatientExperience";
import TrustSignals from "./components/LandingPage/TrustSignals/TrustSignals";
import WhatMakesUsDifferent from "./components/LandingPage/WhatMakesUsDifferent/WhatMakesUsDifferent";
import WhoWeHelp from "./components/LandingPage/WhoWeHelp/WhoWeHelp";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhatMakesUsDifferent />
      <CoreServices />
      <WhoWeHelp />
      <TrustSignals />
      <PatientExperience/>
      <ContactPage/>
    </div>
  );
}
