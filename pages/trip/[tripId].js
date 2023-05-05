import React, { useState } from 'react';
import { useRouter } from 'next/router';
import connectDB from '../../utils/db';
import { getTripById } from '../../services/tripService';
import Layout from "../../components/layouts/Layout";
import TopNavBar from "../../components/common/TopNavBar";
import BannerPlaces from "../../components/common/BannerPlaces";
import TripDetail from '../../components/pages/index/TripDetail';

const tripPage = (props) => {
  const router = useRouter();
  const { tripId } = router.query
  const trip = props.trip
  return(
    <>
      <TopNavBar></TopNavBar>
      <BannerPlaces></BannerPlaces>
      <TripDetail trip={trip}></TripDetail>
    </>
  );
}

export default tripPage;

tripPage.getLayout = function getLayout(page, props) {
  return (
    <Layout headerData={props.headerData}>{page}</Layout>
  );
};

export async function getStaticProps({ params }) {
  await connectDB();
  const trip = await getTripById(params.tripId);
  return {
    props: {
      headerData:{title: "Travel Community", content: "Better Trips in group"},
      trip: JSON.parse(JSON.stringify(trip)),
    }
  };
}

export async function getStaticPaths(props) {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
  }
}