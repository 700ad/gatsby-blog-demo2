import React from "react";

// import { HelmetDatoCms } from "gatsby-source-datocms";
//   <HelmetDatoCms seo={blog.seo} favicon={site.favicon} />

import { graphql } from "gatsby";

export default function Index({ data: { hero } }) {
  return (
    <div className="bg-black w-screen" id="loco">
      <header className="relative">
        <div className="absolute w-screen h-screen top-0 left-0 bottom-0 z-10 right-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        <div className="w-screen h-screen">
          <img src={hero.heroimg.url} className="w-screen h-screen" />
        </div>
        <div data-scroll="" className="absolute z-20 top-0 w-screen h-screen flex flex-col items-center justify-center">
          <div data-scroll data-scroll-speed="1" className="container flex items-center justify-center mx-auto text-center">
            <h1 className="text-8xl cyr w-10/12 leading-tight text-white">{hero.herotext}</h1>
          </div>
          <svg
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="5"
            className="w-10 absolute bottom-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            width="575.154"
            height="452.934"
            viewBox="0 0 575.154 452.934"
          >
            <path
              id="Path_44"
              data-name="Path 44"
              d="M739.552,645.172s-4.978-7.622,37.63-5.963c59.15,2.3,178.153,13.115,236.622,3.288,45.435-7.636,52.943-39.678,57.972-50.961.722-1.621,1.7-8.107,1.234-10.9-2.2-13.631-25.41-33.324-62.465-45.275-63.065-20.343-163.883-27.858-200.7-30.7-9.166-.708-6.643-2.3-6.643-2.3s257.589-17.834,359.654,14.726c39.194,12.5,63.484,31.637,68.79,52.024,8.132,31.213-20.185,63.492-20.185,63.492s37.855-9.433,56.334-3.451,17.579,27.379,17.579,27.379,16.038.055,23.292,8.143,5.723,24.209,5.723,24.209-20.574-13.514-43.938-10.483-49.517,22.608-49.517,22.608,51.412,48.028-13.824,110.379c-47.557,45.454-158.694,104.79-215.055,130.431-20.3,9.233-32.065,8.593-32.065,8.593s-6.279-1.165,4.559-12.5c41.8-43.732,159.27-165.627,118.475-208.155-31.309-32.64-151.525-10.659-237.053,2.365-28.409,4.325-52.142,11.163-68.683,11.459-13.225.237-18.6-2.453-18.6-2.453s-12.965-2.928,27.362-16.663c26.334-8.968,73.377-18.522,104.033-27.239,15.443-4.391,21.709-6.7,21.709-6.7s26.431-7.992-18.014-17.408c-21.155-4.482-65.942-5.234-98.248-10.939-20.208-3.568-39.3-4.9-49.432-8.826A9.851,9.851,0,0,1,739.552,645.172Z"
              transform="translate(-739.373 -497.489)"
              fill="#fff"
            />
          </svg>
        </div>
      </header>
    </div>
  );
}

export const query = graphql`
  {
    hero: datoCmsHero {
      herotext
      heroimg {
        url
      }
    }
    # site: datoCmsSite {
    #   favicon: faviconMetaTags {
    #     ...GatsbyDatoCmsFaviconMetaTags
    #   }
    # }
    # blog: datoCmsBlog {
    #   seo: seoMetaTags {
    #     ...GatsbyDatoCmsSeoMetaTags
    #   }
    # }
    # allPosts: allDatoCmsPost(sort: { fields: date, order: DESC }, limit: 20) {
    #   nodes {
    #     title
    #     slug
    #     excerpt
    #     date
    #     coverImage {
    #       large: gatsbyImageData(width: 1500)
    #       small: gatsbyImageData(width: 760)
    #     }
    #     author {
    #       name
    #       picture {
    #         gatsbyImageData(
    #           layout: FIXED
    #           width: 48
    #           height: 48
    #           imgixParams: { sat: -100 }
    #         )
    #       }
    #     }
    #   }
    # }
  }
`;
