import './App.css';
import arby from "./image/arby1.png"
import widya from "./image/widya1.png"
import arbypict from "./image/fix2.jpg"
import widypict from "./image/fix1.jpg"
import flower from "./image/flower.png"
import fixflower2 from "./image/fixflower2.png"
import fixflower1 from "./image/fixflower1.png"
import Countdown from "./component/countdown"
import SliderCourosel from "./component/slider"
import logoIg from "./image/ig.png"
import maps from "./image/maps.png"
import calendar from "./image/calendar.png"
import clock from "./image/clock.png"

function App() {
  return (
    <div className="App">
      <div className="background-image relative">
        <div className="content-section">
          <div className="container mx-auto text-center d-desktop">
            <h1 className="text-person text-brandon black text-center">WIDYA & ARBI</h1>
            <h1 className="text-title text-didote black mt-12 text-center mb-12">Invitation Wedding</h1>
            <Countdown />
          </div>
          <div className="container mx-auto text-center d-mobile">
            <h1 className="text-person text-brandon black text-center">WIDYA <br /> & <br /> ARBI</h1>
            <h1 className="text-title text-didote black mt-12 text-center mb-12">Invitation Wedding</h1>
            <Countdown />
          </div>
        </div>
      </div>
      <div className="intro-message container mx-auto text-center py-20">
        <div class="section-intro-message">
          <h4 className="text-didote text-opening mb-10">Bismillah</h4>
          <h1 className="mb-10">وَ مِنۡ اٰیٰتِہٖۤ اَنۡ خَلَقَ لَکُمۡ مِّنۡ اَنۡفُسِکُمۡ اَزۡوَاجًا لِّتَسۡکُنُوۡۤا اِلَیۡہَا وَ جَعَلَ بَیۡنَکُمۡ مَّوَدَّۃً وَّ رَحۡمَۃً ؕ اِنَّ فِیۡ ذٰلِکَ لَاٰیٰتٍ لِّقَوۡمٍ یَّتَفَکَّرُوۡنَ</h1>
          <p className="mb-10">❝ Dan diantara tanda - tanda kekuasaan-Nya ialah diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri 
            supaya kamu mendapat ketenangan hati dan dijadikan-Nya kasih sayang diantara kamu. Sesungguhnya yang demikian 
            itu menjadi tanda - tanda kebesaran-Nya bagi orang - orang yang berfikir. ❞</p>
          <h4>QS. Ar-Rum:21</h4>
        </div>
      </div>
      <div className="background-image2 relative">
        <div className="container mx-auto text-center">
          <div className="section-event">
            <div className="flex justify-between">
              <div className="cardIcon rounded-2xl flex justify-start items-center mb-20 shadow-lg">
                <img src={arby} alt="arby" className="rounded-full cardIcon-img" />
                <div className="ml-auto justify-center items-center">
                  <div className="text-left black">
                    <h2 className="text-didote text-parent">Mempelai Pria</h2>
                    <hr />
                    <h3 className="text-brandon text-name mt-4">Arbi Wirajaya</h3>
                    <span className="text-brandon text-desc">Anak dari</span>
                    <h3 className="text-brandon text-parent">Bpk Suryono SPD</h3>
                    <h3 className="text-brandon text-parent">Ibu Suryono SH</h3>
                    <div className="flex items-center">
                      <img src={logoIg} alt="logo-ig" className="logo-ig mr-2" />
                      <h3>@arbywirajaya</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="cardIcon margin-auto-left flex justify-end rounded-2xl items-center mb-20 shadow-lg">
                <div className="mr-auto justify-center items-center">
                  <div className="text-left black">
                    <h2 className="text-didote text-parent">Mempelai Wanita</h2>
                    <hr />
                    <h3 className="text-brandon text-name mt-4">Widya Hari Sapurti</h3>
                    <span className="text-brandon text-desc">Anak dari</span>
                    <h3 className="text-brandon text-parent">Bpk Suryono SPD</h3>
                    <h3 className="text-brandon text-parent">Ibu Suryono SH</h3>
                    <div className="flex items-center">
                      <img src={logoIg} alt="logo-ig" className="logo-ig mr-2" />
                      <h3>@widyadya</h3>
                    </div>
                  </div>
                </div>
                <img src={widya} alt="widya" className="rounded-full cardIcon-img" />
              </div>
            </div>
          </div>
          <div className="flex card-calender shadow-lg rounded-2xl opacity-70">
            <div class="text-left m-auto">
              <h3 className="text-didote text-name">Our Moments</h3>
              <h3 className="text-brandon text-name">Akad Nikah</h3>
              <div className="flex items-center mt-4 mb-2">
                <img src={calendar} alt="calendar" className="logo-ig mr-2" />
                <h3 className="text-brandon text-name">Sabtu, 5 Juni 2021</h3>
              </div>
              <div className="flex items-center mb-2">
                <img src={clock} alt="clock" className="logo-ig mr-2" />
                <h3 className="text-brandon text-name">10:00 WIB</h3>
              </div>
              <div className="flex items-center">
                <img src={maps} alt="maps" className="logo-ig mr-2" />
                <h3 className="text-brandon text-name">Jl Aselih no 23A RT/RW 011/001 Cipedak Jagakarsa</h3>
              </div>
            </div> 
          </div>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe title="maps" className="gmap_iframe" 
                width="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight="0" 
                marginWidth="0" 
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Jl. Delima II Blok K No &amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              </iframe>
            </div>
          </div>
          <div className="mt-8">
            <a href="https://www.google.com/maps/dir//-6.3798508,106.8033052/@-6.379851,106.803305,18z?hl=en">
              <button className="btn-location shadow-lg">Google Maps</button>
            </a>
          </div>
        </div>
      </div>
      <div className="slide-photo container mx-auto p-6">
        <h3 className="text-center text-didote text-name text-black">Our Story</h3>
        <SliderCourosel />
      </div>
      <div className="intro-invitation">
        <div className="container mx-auto">
          <div className="flex justify-between relative">
            <div className="pl-4 md:pl-40 py-12 text-center relative z-10">
              <img src={arbypict} alt="arby1" className="rounded-2xl image-side m-auto shadow-lg" />
              <div className="absolute card1">
                <div className="card-text px-12 py-8 md:p-16 text-left rounded-2xl relative shadow-lg">
                  <h1 className="text-didote text-description">Hal Terberani yang pernah saya lakukan adalah menikahimu.</h1>
                  <h3 className="text-brandon mt-4">- ARBI WIRAJAYA</h3>
                  <img className="absolute top-3 left-3 icon-flower" src={flower} alt="flower" />
                </div>
              </div>
            </div>
            <div className="absolute img-sect1 z-0 -mr-28">
              <img src={fixflower2} alt="flower2" className="flower2" />
            </div>
          </div>
          <div className="flex justify-end card-section2 relative">
            <div className="absolute img-sect2 z-10">
              <img src={fixflower1} alt="flower1" className="flower1 right-image" />
            </div>
            <div className="pr-4 md:pr-40 py-12 text-center relative">
              <img src={widypict} alt="widya1" className="rounded-2xl right-image image-side m-auto shadow-lg" />
              <div className="absolute card2">
                <div className="card-text px-12 py-8 md:p-16 text-left rounded-2xl relative shadow-lg">
                  <h1 className="text-didote text-description">Hal Terbaik yang pernah saya pilih adalah memilihmu.</h1>
                  <h3 className="text-brandon mt-4">- WIDYA PUTRI WARPASARI</h3>
                  <img className="absolute bottom-3 right-3 icon-flower transform rotate-180" src={flower} alt="flower" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
