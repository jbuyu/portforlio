import Banner  from "../components/Banner";
import { MainHead } from "../components/MainHead";
import Header from "../components/Header";
import  Projects  from "../components/Projects";
import { Footer } from "../components/Footer";
export default function Home() {

  return (
    <div className="container mx-auto">
        <MainHead/>
        <Header/>
        <Banner/>
        <Projects/>
        <Footer/>
    </div>
  );
}