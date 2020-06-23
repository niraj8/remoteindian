import Link from 'next/link';
import { FeaturedContentWrap } from './style';
import FeaturedGuide from 'components/featured-interview';
import { getFeaturedInterviews } from 'lib/interview';

const FeaturedInterviews = () => (
  <FeaturedContentWrap className="featured-content-wrap">
    <div className="container">
      <p className='border-through featured-separator'>
          <span>
            Interviews most visited by the community&nbsp;
            <a href="/interviews" className="dark-link d-none d-sm-none d-md-inline d-xl-inline">View all Interviews &rarr;</a>
          </span>
      </p>
      <div className="swim-lane row">
        { getFeaturedInterviews()
          .map(guide => (
            <FeaturedGuide guide={ guide } key={ guide.url } />
          )) }
      </div>
    </div>
  </FeaturedContentWrap>
);

export default FeaturedInterviews;
