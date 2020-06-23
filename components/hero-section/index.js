import Link from 'next/link';
import { HeroSectionWrap } from './style';
import { Mark } from "components/mark";

const HeroSection = () => (
  <HeroSectionWrap>
    <div className="container">
      <h2>
        RemoteIndian community is an encouragement network for more than <Mark>1000</Mark> folks who are
        working remotely in India 🇮🇳
      </h2>
      <p>
        Your success should not depend upon your pincode in the Internet age 🌐
      </p>
    </div>
  </HeroSectionWrap>
);

export default HeroSection;
