export const getGlobalData = () => {
  var currentDate = new Date();
  // Get the full year from the Date object
  var currentYear = currentDate.getFullYear();
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Hayyan Studio';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Game Development is my passion';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.'+ currentYear;

  return {
    name,
    blogTitle,
    footerText,
  };
};
