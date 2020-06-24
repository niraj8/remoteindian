import Link from 'next/link';
import siteConfig from "content/site";
import { FooterWrap } from './style.js'

const PageFooter = () => (
  <FooterWrap className="border-top">
    <div className="container">
      <div className="foot-cols-wrap row">
        <div className="site-meta-wrap col-xs-12 col-md-6">
          <div className="site-meta">
            <div className="brand-detail">
              <a href="/" className="brand">
                <img src="/brand.png" alt="" /> RemoteIndian
              </a>
              <span className="preposition">by</span>
              <a
                href="https://twitter.com/abhishekbose87"
                target="_blank"
                className="follow-author"
              >
                @abhishekbose87
              </a>
            </div>
            <div className="brand-explanation">
              <p>
                Join a community for remote workers, work from home
                professionals, freelancers and indie hackers in India
                &#x1f1ee;&#x1f1f3;
              </p>
            </div>
            <p className="meta-links">
              &copy; RemoteIndian
              {/* &middot; */}
              {/* &nbsp; <a href="/about">FAQ</a> &middot;
              &nbsp; <a href="/terms">Terms</a> &middot;
              &nbsp; <a href="/privacy">Privacy</a> */}
            </p>
          </div>
        </div>
        <div className="site-contribute foot-col col-xs-12 col-md-6">
          <ul>
            <li className="foot-header">Credits</li>
            <li>
              ❤️ This site has been heavily inspired by{" "}
              <a href="https://roadmap.sh" target="_blank">
                Roadmap.sh
              </a>
            </li>
            <li>
              🤗 The information present in the guides is courtesy{" "}
              <a href="https://remoteindian.com/#signup" target="_blank">
                our slack community
              </a>
            </li>
            <li>
              🙌 Last but not the least, Thank you {" "}
              <a href="https://remoteindian.com/thanks" target="_blank">
                patrons!
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="site-contribute foot-col col-12 col-sm-4 col-lg-2">
          <ul>
            <li className='foot-header'>Contribute</li>
            <li><a href={ siteConfig.url.addGuide } target="_blank">Write a Guide</a></li>
            <li><a href={ siteConfig.url.addRoadmap } target="_blank">Submit a Roadmap</a></li>
            <li><a href={ siteConfig.url.addResources } target="_blank">Add resources</a></li>
            <li><a href={ siteConfig.url.repo } target="_blank">Codebase</a></li>
          </ul>
        </div> */}
        {/* <div className="site-learn foot-col col-12 col-sm-4 col-lg-2">
          <ul>
            <li className="foot-header">Learn</li>
            <li><a href="/guides">Read Guides</a></li>
            <li><a href="/roadmaps">View Roadmaps</a></li>
            <li><a href={ siteConfig.url.contribute } target="_blank">Contribute</a></li>
          </ul>
        </div>
        <div className="site-learn foot-col col-12 col-sm-4 col-lg-2">
          <ul>
            <li className="foot-header">Most Visited</li>
            <li><a href="/frontend">Frontend Roadmap</a></li>
            <li><a href="/backend">Backend Roadmap</a></li>
            <li><a href="/devops">DevOps Roadmap</a></li>
            <li><a href="/roadmaps">Upcoming</a></li>
          </ul>
        </div> */}
      </div>
    </div>
  </FooterWrap>
);

export default PageFooter;
