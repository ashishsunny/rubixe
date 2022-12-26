import './App.css';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Content from './components/content_comp/Content';
import data from './data/data'
import Footer from './components/footer/Footer';
import Form from './components/form/Form';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Content card={data[0].card} para1={data[0].para1} para2={data[0].para2} bgnd={data[0].background} img_loc={data[0].img_loc} head_text={data[0].heading}/>
      <Content card={data[1].card} para1={data[1].para1}  bgnd={data[1].background} img_loc={data[1].img_loc} head_text={data[1].heading}/>
      <Content  card={data[2].card} head_text={data[2].heading} bgnd={data[2].background}/>
      <Form />
      <Footer/>
    </div>
  );
}

export default App;
