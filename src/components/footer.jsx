import React from "react";
import { GithubOne, Home, Mail } from "@icon-park/react";
import CustomLink from "@/components/customLink";
import Package from "../../package.json";

const Footer = () => {
  // 加载配置
  const githubName = import.meta.env.VITE_GITHUB_NAME;
  const homeUrl = import.meta.env.VITE_HOME_URL;
  const emailUrl = import.meta.env.VITE_EMAIL_URL;
  const siteIcp = import.meta.env.VITE_SITE_ICP;

  return (
    <footer id="footer">
      <div className="social">
        <CustomLink iconDom={<Home />} to={homeUrl} />
      </div>
      <div className="text">
        <p>
          Powered by&nbsp;
          <CustomLink
              text={Package.alia}
              to="https://github.com/imsyy/site-status"
          />
          &nbsp;Version&nbsp;{Package.version}
        </p>
        <p>
          Build with Cloudflare Pages
        </p>
      </div>
    </footer>
  );
};

export default Footer;
