import Layout from "../components/layouts/Layout";
import TopNavBar from "../components/common/TopNavBar";
import BannerPlaces from "../components/common/BannerPlaces";
import TripCreateForm from "../components/pages/create/TripCreateForm"

const createPage = (props) => {
  
  const handleCreate = async (data) => {
    fetch('/api/trips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  return (
    <>
      <TopNavBar></TopNavBar>
      <BannerPlaces></BannerPlaces>
      <TripCreateForm onCreate={handleCreate}></TripCreateForm>
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