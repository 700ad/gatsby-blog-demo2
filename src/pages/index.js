import React from "react";
import Layout from "../components/layout";
// import { HelmetDatoCms } from "gatsby-source-datocms";
//   <HelmetDatoCms seo={blog.seo} favicon={site.favicon} />

import { graphql } from "gatsby";

export default function Index({ data: { hero, secondSection, thirdSection, fourthSection, fifthSection, sixthSection } }) {
  return (
    <Layout className="bg-black">
      <div className="absolute z-30 top-0 pt-4 w-screen flex items-center justify-center">
        <nav className="container mx-auto h-20 flex items-center justify-center">
          <div className="w-1/3 text-white cursor-pointer flex items-start justify-start">
            <div className="flex flex-col">
              <div className="border-b border-orange-600 w-10 h-2"></div>
              <div className="border-b border-orange-600 w-10 h-2"></div>
            </div>
            <span className="ml-2 uppercase">Menu</span>
          </div>
          <div className="w-1/3 flex items-center justify-center">
            <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" width="575.154" height="452.934" viewBox="0 0 575.154 452.934">
              <defs>
                <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="0.791" gradientUnits="objectBoundingBox">
                  <stop offset="0" stop-color="#279af1" />
                  <stop offset="1" stop-color="#ff6722" />
                </linearGradient>
              </defs>
              <path
                id="Path_2"
                data-name="Path 2"
                d="M739.552,645.172s-4.978-7.622,37.63-5.963c59.15,2.3,178.153,13.115,236.622,3.288,45.435-7.636,52.943-39.678,57.972-50.961.722-1.621,1.7-8.107,1.234-10.9-2.2-13.631-25.41-33.324-62.465-45.275-63.065-20.343-163.883-27.858-200.7-30.7-9.166-.708-6.643-2.3-6.643-2.3s257.589-17.834,359.654,14.726c39.194,12.5,63.484,31.637,68.79,52.024,8.132,31.213-20.185,63.492-20.185,63.492s37.855-9.433,56.334-3.451,17.579,27.379,17.579,27.379,16.038.055,23.292,8.143,5.723,24.209,5.723,24.209-20.574-13.514-43.938-10.483-49.517,22.608-49.517,22.608,51.412,48.028-13.824,110.379c-47.557,45.454-158.694,104.79-215.055,130.431-20.3,9.233-32.065,8.593-32.065,8.593s-6.279-1.165,4.559-12.5c41.8-43.732,159.27-165.627,118.475-208.155-31.309-32.64-151.525-10.659-237.053,2.365-28.409,4.325-52.142,11.163-68.683,11.459-13.225.237-18.6-2.453-18.6-2.453s-12.965-2.928,27.362-16.663c26.334-8.968,73.377-18.522,104.033-27.239,15.443-4.391,21.709-6.7,21.709-6.7s26.431-7.992-18.014-17.408c-21.155-4.482-65.942-5.234-98.248-10.939-20.208-3.568-39.3-4.9-49.432-8.826A9.851,9.851,0,0,1,739.552,645.172Z"
                transform="translate(-739.373 -497.489)"
                fill="url(#linear-gradient)"
              />
            </svg>
          </div>
          <div className="phone text-white w-1/3 flex items-center justify-end">
            <span className="hover:text-orange-700 duration-200 cursor-default"> +92 324 413 7373 </span>
          </div>
        </nav>
      </div>
      <div className="bg-black w-screen" id="loco">
        <header className="relative">
          <div className="absolute w-screen h-screen top-0 left-0 bottom-0 z-10 right-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
          <div className="a-fixed_wrapper" data-scroll data-scroll-call="dynamicBackground" data-scroll-repeat>
            <div className="a-fixed_target" id="fixed-target"></div>
            <div className="a-fixed" data-scroll data-scroll-sticky data-scroll-target="#fixed-target" style={{ backgroundImage: `url(${hero.heroimg.url})` }}></div>
          </div>
          <div data-scroll="" className="absolute z-20 top-0 w-screen h-screen flex flex-col items-center justify-center">
            <div data-scroll data-scroll-speed="1" className="container flex items-center justify-center mx-auto text-center">
              <h1 className="text-8xl cyr w-7/12 leading-none text-white">{hero.herotext}</h1>
            </div>
            <svg data-scroll data-scroll-direction="horizontal" data-scroll-speed="5" className="w-10 absolute bottom-10 h-10" xmlns="http://www.w3.org/2000/svg" width="575.154" height="452.934" viewBox="0 0 575.154 452.934">
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
      <section className="w-screen pt-40 pb-40 bg-orange-50">
        <div className="container flex items-center justify-center mx-auto">
          <p className="text-5xl leading-snug font-light pop text-center w-7/12">{secondSection.sectionParagraph}</p>
        </div>
      </section>
      <section className="bg-black text-white w-screen py-40">
        <div className="container mx-auto grid grid-cols-2 gap-16">
          <div className="flex flex-col items-start justify-start">
            <div className="flex items-center justify-start">
              <div className="mr-4 bar w-20 bg-orange-600"></div>
              <p className="nord font-thin text-xl">{thirdSection.subscript}</p>
            </div>
            <h2 className="text-8xl leading-none mt-8 cyr text-orange-600">{thirdSection.sectionHeading}</h2>
            <p className="text-xl pop font-light text-orange-600 w-3/4 text-justify mt-8">{thirdSection.sectionBody}</p>
          </div>
          <div data-scroll className="col-span-1 relative flex">
            <div data-scroll data-scroll-speed="2" className="rounded-md h-full overflow-hidden relative z-20 w-2/4 object-cover">
              <img data-scroll data-scroll-speed="-2" alt={thirdSection.upperPhoto.alt} src={thirdSection.upperPhoto.url} className="object-cover w-full h-full" alt="" />
            </div>
            <div data-scroll data-scroll-speed="-1" className="h-96 absolute top-56 right-32 w-2/3 overflow-hidden object-cover bg-black">
              <img data-scroll data-scroll-speed="-2" alt={thirdSection.upperPhoto.alt} src={thirdSection.lowerPhoto.url} className="object-cover w-full h-full" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black text-white w-screen py-40">
        <div className="container mx-auto grid grid-cols-2 gap-16">
          <div className="flex flex-col items-start justify-start">
            <div className="flex items-center justify-start">
              <div className="mr-4 bar w-20 bg-orange-600"></div>
              <p className="nord font-thin text-xl">{fourthSection.subscript}</p>
            </div>
            <h2 className="text-8xl mt-8 cyr text-orange-600">{fourthSection.sectionHeading}</h2>
            <p className="text-xl pop font-light text-orange-600 w-3/4 text-justify mt-8">{fourthSection.sectionBody}</p>
          </div>
        </div>
        <div data-scroll="" className="w-screen flex items-center overflow-x-hidden justify-between">
          <div data-scroll data-scroll-speed="2" data-scroll-direction="horizontal" className="sq bg-green-50 mt-24 ml-40"></div>
          <div data-scroll data-scroll-speed="2" data-scroll-direction="horizontal" className="sq bg-green-50 mt-24 ml-20"></div>
          <div data-scroll data-scroll-speed="2" data-scroll-direction="horizontal" className="sq bg-green-50 mt-24 ml-20"></div>
          <div data-scroll data-scroll-speed="2" data-scroll-direction="horizontal" className="sq bg-green-50 mt-24 ml-20"></div>
        </div>
      </section>
    </Layout>
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
    secondSection: datoCmsSecondSection {
      sectionParagraph
    }
    thirdSection: datoCmsThirdSection {
      subscript
      sectionHeading
      sectionBody
      upperPhoto {
        url
        alt
        title
      }
      lowerPhoto {
        url
        alt
        title
      }
    }
    fourthSection: datoCmsFourthSection {
      subcript
      sectionHeading
      sectionBody
      # photo1 {
      #   url
      #   alt
      #   title
      # }
      # photo2 {
      #   url
      #   alt
      #   title
      # }
      # photo3 {
      #   url
      #   alt
      #   title
      # }
      # photo4 {
      #   url
      #   alt
      #   title
      # }
    }
    # fifthSection: datoCmsFifthSection {
    #   subcript
    #   sectionHeading
    #   sectionBody
    #   photo {
    #     url
    #     alt
    #     title
    #   }
    # }
    # sixthSection: datoCmsSixthSection {
    #   subcript
    #   sectionHeading
    #   sectionBody
    #   photo1 {
    #     url
    #     alt
    #     title
    #   }
    #   photo2 {
    #     url
    #     alt
    #     title
    #   }
    #   photo3 {
    #     url
    #     alt
    #     title
    #   }
  }
`;
