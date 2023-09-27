import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import About from "../component/section/about";
import InstructorThree from "../component/section/instructor-3";
import BannerTwo from "../component/section/banner-2";
import Blog from "../component/section/blog";
import CategoryThree from "../component/section/category-3";
import CourseFour from "../component/section/course-4";
import Instructor from "../component/section/instructor";
import AboutTwo from "../component/section/about-2";
import Register from "../component/section/register";
import Student from "../component/section/student";
import AppSection from "../component/section/appsection";
import InstructorTwo from "../component/section/instructor-2";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <BannerTwo />
      <AboutTwo />
      <CourseFour />
      <Register />
      <About />
      <Instructor />
      <Student />
      <Blog />
      <InstructorThree />
      <InstructorTwo />
      <AppSection />
      <Footer />
    </Fragment>
  );
};

export default Home;
