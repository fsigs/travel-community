import React, { useState } from 'react';
import Layout from "../components/layouts/Layout";
import TopNavBar from "../components/common/TopNavBar";
import BannerPlaces from "../components/common/BannerPlaces";
import SignUpForm from "../components/pages/sign/SignUpForm"

const signUp = (props) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: ''});

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <TopNavBar></TopNavBar>
      <BannerPlaces></BannerPlaces>
      <SignUpForm onSubmit={handleSubmit} onInputChange={handleInputChange}></SignUpForm>
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


