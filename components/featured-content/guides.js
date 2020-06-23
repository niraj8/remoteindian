import Link from 'next/link';
import { FeaturedContentWrap } from './style';
import FeaturedGuide from 'components/featured-guide';
import { getFeaturedGuides } from 'lib/guide';

const FeaturedGuides = () => (
  <FeaturedContentWrap className="featured-content-wrap">
    <div className="container">
      <p className="d-none d-md-block d-xl-block border-through featured-separator">
        <span>
          Guides most visited by the community&nbsp;
          <a
            href="/guides"
            className="dark-link d-none d-sm-none d-md-inline d-xl-inline"
          >
            View all Guides &rarr;
          </a>
        </span>
      </p>
      <p className="d-block d-md-none d-xl-none featured-separator">
          Guides most visited by the community&nbsp;
          <a href="/guides" className="dark-link d-inline-block mt-2">
            View all Guides &rarr;
          </a>
      </p>
      <div className="swim-lane row">
        {getFeaturedGuides().map((guide) => (
          <FeaturedGuide guide={guide} key={guide.url} />
        ))}
      </div>
    </div>
  </FeaturedContentWrap>
);

export default FeaturedGuides;
