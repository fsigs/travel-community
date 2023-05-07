import React, { useState } from 'react';
//import connectDB from '../utils/db';
import Layout from "../components/layouts/Layout";
import TopNavBar from "../components/common/TopNavBar";
import BannerPlaces from "../components/common/BannerPlaces";
import SignUpForm from "../components/pages/sign/SignUpForm"

const signUpPage = (props) => {
  //JS functions

  return(
    <>
     <TopNavBar></TopNavBar>
     <BannerPlaces></BannerPlaces>
     <SignUpForm></SignUpForm>


    </>
  )
}

export default signUpPage;

signUpPage.getLayout = function getLayout(page, props) {
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



