import Layout from "../components/layouts/Layout";
import TopNavBar from "../components/common/TopNavBar";
import BannerPlaces from "../components/common/BannerPlaces";
import TripCreateForm from "../components/pages/create/TripCreateForm"

const createPage = (props) => {
  return (
    <>
      <TopNavBar></TopNavBar>
      <BannerPlaces></BannerPlaces>
      <TripCreateForm></TripCreateForm>
    </>
  )
}

export default createPage;

createPage.getLayout = function getLayout(page, props) {
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