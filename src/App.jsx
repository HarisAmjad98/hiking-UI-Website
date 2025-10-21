import Header from './Header.jsx';
import Slider from './Slider.jsx';
import Socials from './Socials.jsx';
import Content from './Content.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';
import ActiveSection from './ActiveSection.jsx';

function App() {

  const sections = [
    { id: "start", label: "Start" },
    { id: "sec-01", label: "01" },
    { id: "sec-02", label: "02" },
    { id: "sec-03", label: "03" },
  ];
  const { active, setActive } = ActiveSection(sections.map(s => s.id));

  return (
    <>
        <div id='background-Image1'>
          <div id='background-Image2'>
            <div id='background-Image3'>
              <div id='fade'>
                <Header />
                <div className="flex justify-between items-start w-full">
                  <div className="flex-shrink-0 px-8">
                    <Socials />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <Content />
                  </div>
                  <div className="flex-shrink-0 mr">
                    <Slider sections={sections}
                      active={active}
                      onSelect={(i) => setActive(i)} />
                  </div>
                </div>
                <Body />
                <Footer />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
