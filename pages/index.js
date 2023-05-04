import React, { useState } from 'react';
import connectDB from '../utils/db';
import { listTrips } from '../services/tripService';
import Layout from "../components/layouts/Layout";
import TopNavBar from "../components/common/TopNavBar";
import BannerPlaces from "../components/common/BannerPlaces";
import TripsFilterForm from "../components/pages/index/TripsFilterForm";
import TripCardList from "../components/pages/index/TripCardList";

const indexPage = (props) => {
  const [filteredTrips, setFilteredTrips] = useState(props.trips);
  const filtersToShow = filteredTrips || props.trips
  
  const handleFilter = async (filters) => {
    const queryUrl = '?name=' + filters.name.value
    const res = await fetch('/api/trips' + queryUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const tripsData = await res.json();
    console.log(tripsData)
    setFilteredTrips(tripsData);
  }

  return (
    <>
      <TopNavBar></TopNavBar>
      <BannerPlaces></BannerPlaces>
      <div className="container-fluid border my-2">
        <div className="row">
          <TripsFilterForm onFilter={handleFilter}></TripsFilterForm>
          <TripCardList trips={filtersToShow}></TripCardList>
        </div>
      </div>
    </>
  )
}

export default indexPage;

indexPage.getLayout = function getLayout(page, props) {
  return (
    <Layout headerData={props.headerData}>{page}</Layout>
  );
};

export async function getStaticProps() {
  await connectDB();
  const trips = await listTrips(1);
  return {
    props: {
      headerData:{title: "Travel Community", content: "Better Trips in group"},
      trips: JSON.parse(JSON.stringify(trips)),
    }
  };
}