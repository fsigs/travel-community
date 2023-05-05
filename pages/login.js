import React, { useState } from 'react';
import connectDB from '../utils/db';
import Layout from "../components/layouts/Layout";
import TopNavBar from "../components/common/TopNavBar";
import BannerPlaces from "../components/common/BannerPlaces";

const loginPage = (props) => {
  //JS functions
  
  return(
    <>
      <TopNavBar></TopNavBar>
      <BannerPlaces></BannerPlaces>
      <h1>Login form</h1>
    </>
  )
}

export default loginPage;

loginPage.getLayout = function getLayout(page, props) {
  return (
    <Layout headerData={props.headerData}>{page}</Layout>
  );
};