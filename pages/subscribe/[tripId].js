import React, { useState } from 'react';
import { useRouter } from 'next/router';
import connectDB from '../../utils/db';
import { subscribeToTrip } from '../../services/subscriptionService';
import Layout from "../../components/layouts/Layout";
import TopNavBar from "../../components/common/TopNavBar";
import BannerPlaces from "../../components/common/BannerPlaces";
import SubscribeTrip from "../../components/pages/subscription/SubscribeTrip";

const subscribePage = (props) => {
  return(
    <>
      <TopNavBar></TopNavBar>
      <BannerPlaces></BannerPlaces>
      <SubscribeTrip subscription={props.subscription}></SubscribeTrip>
    </>
  )
}

export default subscribePage;

subscribePage.getLayout = function getLayout(page, props) {
  return (
    <Layout headerData={props.headerData}>{page}</Layout>
  );
};

export async function getStaticProps(context) {
  await connectDB();
  const { params, query } = context;
  const { tripId } = params;
  const userIdParche = '64545fa6da9e469a5f8733de'
  //const { userId } = query;
  //console.log('userId: ' + userId)
  const subscription = await subscribeToTrip(userIdParche, tripId)
  return {
    props: {
      headerData:{title: "Travel Community Subscription Page", content: "Better Trips in group"},
      subscription: JSON.parse(JSON.stringify(subscription)),
    }
  };
}

export async function getStaticPaths(props) {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
  }
}
