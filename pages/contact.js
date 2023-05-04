import Layout from "../components/layouts/Layout";
import TopNavBar from "../components/common/TopNavBar";
import BannerPlaces from "../components/common/BannerPlaces";
import ContactUs from "../components/pages/contact/ContactUs"

const createPage = (props) => {
  return (
    <>
      <TopNavBar></TopNavBar>
      <BannerPlaces></BannerPlaces>
      <ContactUs></ContactUs>
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
      headerData:{title: "Travel Community - Contact Us", content: "Contact Travel Community Anywhere Anyways"},
    }
  };
}