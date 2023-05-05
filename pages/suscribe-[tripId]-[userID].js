import React, { useState } from 'react';
import connectDB from '../utils/db';
import { subscribeToTrip } from '../services/subscriptionService';
import Layout from "../components/layouts/Layout";
import TopNavBar from "../components/common/TopNavBar";
import BannerPlaces from "../components/common/BannerPlaces";

const subscribePage = (props) => {
  return(
    <>
      <TopNavBar></TopNavBar>
      <BannerPlaces></BannerPlaces>
      <h1>Subscription landing page</h1>
    </>
  )
}

subscribePage.getLayout = function getLayout(page, props) {
  return (
    <Layout headerData={props.headerData}>{page}</Layout>
  );
};

export async function getStaticProps() {
  // userId
  // const subs = subscribeToTrip(userId, tripId)
  // validation
  // const answer
  return {
    props: {
      headerData:{title: "Travel Community Subscription Page", content: "Better Trips in group"},
      result:null
    }
  };
}


