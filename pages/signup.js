import Layout from "../components/layouts/Layout";
import TopNavBar from "../components/common/TopNavBar";
import BannerPlaces from "../components/common/BannerPlaces";
import SignUpForm from "../components/pages/sign/SignUpForm"

const signUp = (props) => {
  return (
    <>
      <TopNavBar></TopNavBar>
      <BannerPlaces></BannerPlaces>
      <SignUpForm></SignUpForm>
    </>
  )
}

export default signUp;

signUp.getLayout = function getLayout(page, props) {
  return (
    <Layout headerData={props.headerData}>{page}</Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      headerData:{title: "Travel Community -  Sign Up", content: "Sign Up"},
    }
  };
}