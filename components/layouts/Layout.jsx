import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props){
  return <>
      <Header headerData={props.headerData}></Header>
      <main>
      {props.children}
      <Footer></Footer>
      </main>
  </>
}