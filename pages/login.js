import React, { useState } from 'react';
//import connectDB from '../utils/db';
import Layout from "../components/layouts/Layout";
import TopNavBar from "../components/common/TopNavBar";
import BannerPlaces from "../components/common/BannerPlaces";
import LogIn from "../components/pages/login/LogIn"

const loginPage = (props) => {
  //JS functions
  
  return(
    <>
     <TopNavBar></TopNavBar>
     <BannerPlaces></BannerPlaces>
     <LogIn></LogIn>


    </>
  )
}

export default loginPage;

loginPage.getLayout = function getLayout(page, props) {
    return (
      <Layout headerData={props.headerData}>{page}</Layout>
    );
  };
  
  export async function getStaticProps() {
    return {
      props: {
        headerData:{title: "Travel Community -  Create a Trip", content: "You can create a Trip"},
      }
    };
  }