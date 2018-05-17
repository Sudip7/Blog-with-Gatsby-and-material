module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  siteTitle: "Sudip Nayak Blog", // Site title.
  siteTitleAlt: "Sudip Nayak Blog", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://github.com/Sudip7/Blog-with-Gatsby-and-material", // Domain of your website without pathPrefix.
  pathPrefix: "/Blog-with-Gatsby-and-material", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "A place to experiment wth new things", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  siteGATrackingID: "UA-47311644-4", // Tracking code ID for google analytics.
  disqusShortname: "https-vagr9k-github-io-gatsby-material-starter", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Sudip7", // Username to display in the author segment.
  userTwitter: "https://twitter.com/iSudip7", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Chennai, India", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/Sudip7",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/iSudip7",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018." // Copyright string for the footer of the website and RSS feed.
};
