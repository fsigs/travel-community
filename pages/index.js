import connectDB from '../utils/db';
import { listTrips } from '../services/tripService';
import Layout from "../components/layouts/Layout";
import TopNavBar from "../components/common/TopNavBar";
import BannerPlaces from "../components/common/BannerPlaces";
import FilterPanel from "../components/pages/index/FilterPanel";
import TripCard from "../components/pages/index/TripCard";
import TripsPager from "../components/pages/index/TripsPager";

const indexPage = (props) => {
  return (
    <>
    <TopNavBar></TopNavBar>
    <BannerPlaces></BannerPlaces>
    <div className="container-fluid border my-2">
      <div className="row">
        <FilterPanel></FilterPanel>
        <div className="col-10">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {props.trips.data.map((trip) => (
            <TripCard trip={trip}></TripCard>
            ))}
          </div>
          <TripsPager limit={props.trips.limit} page={props.trips.page} totalCount={props.trips.totalCount}></TripsPager>
        </div>
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
  const trips = await listTrips(1,6);
  return {
    props: {
      headerData:{title: "Travel Community", content: "Better Trips in group"},
      trips: JSON.parse(JSON.stringify(trips)),
    }
  };
}