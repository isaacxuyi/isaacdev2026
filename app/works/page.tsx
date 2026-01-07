import Header from "../Hero Section/Header/page";
import Selectedworks from "../components/Selectedworks/page";
import Footer from "../components/Footer/page";

export default function WorksPage() {
  return (
    <div>
      <Header finishedLoading={true} />
      <Selectedworks />
      <Footer />
    </div>
  );
}