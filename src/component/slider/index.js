import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../image/image1.jpg"
import image2 from "../../image/image2.jpg"
import image3 from "../../image/image3.jpg"
import image4 from "../../image/image4.jpg"
import image5 from "../../image/image5.jpg"
import image6 from "../../image/image6.jpg"
import image7 from "../../image/image7.jpg"
import image8 from "../../image/image8.jpg"

function SampleNextArrow(props) {
    const { onClick, index } = props;
    console.log(index)
    return (
        <div>
            <button onClick={onClick}
            className="custom-arrow"
            >
            {index === 1 ? 'Lanjut' : 'Selesai'}
            </button>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick, index } = props;
    return (
        <div className="d-desktop">
            <button onClick={onClick}
            className="custom-arrow"
            >
            {index === 1 ? 'Lanjut' : 'Selesai'}
            </button>
        </div>
    );
}

export default class SliderCourosel extends Component {
    state = { index: 0 };
    next = () => {
        this.slider.slickNext();
    };
    previous = () => {
        this.slider.slickPrev();
    };
    beforeChange = (prev, next) => {
        this.setState({ index: next });
    };
    textButton = (index) => {
        let text = 'mulai'
        switch (index) {
            case 0:
                text = "Mulai";
                break;
            case 1:
                text = "Lanjut";
                break;
            case 2:
                text = "Lanjut";
                break;
            case 3:
                text = "Lanjut";
                break;
            case 4:
                text = "Lanjut";
                break;
            case 5:
                text = "Lanjut";
                break;
            case 6:
                text = "Lanjut";
                break;
            case 7:
                text = "Go to location";
                break;
            default:
                text = "";
        }
        return text
    }
    
    render() {
      const settings = {
        className: "center",
        infinite: false,
        slidesToShow: 1,
        speed: 500,
        lazyLoad: true,
        arrows: false,
        beforeChange: this.beforeChange
      };
      const index = this.state.index;
      return (
        <div>
          <Slider {...settings} ref={c => (this.slider = c)}>
            <div>
                <div className="card-slider relative">
                    <img src={image1} alt="image1" />
                    <div className="absolute z-10 card-story">
                        <p className="text-white">
                            Kita jatuh cinta pada pandangan kedua belas, kalau tidak salah.
                            Kita waktu itu, sama sama penasaran satu sama dengan yang lain.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="card-slider relative">
                    <img src={image2} alt="image2" />
                    <div className="absolute z-10 card-story">
                        <p className="text-white">
                            Lalu mulai lah cerita antara kita berdua.
                            Kita sengaja atau tidak sengaja saling, membantu satu sama lain.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="card-slider relative">
                    <img src={image3} alt="image3" />
                    <div className="absolute z-10 card-story">
                        <p className="text-white">
                            Tidak terasa sudah 8 tahun kita lewati.
                            Keraguan yang dulu sering muncul, sekarang berubah menjadi kepercayaan.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="card-slider relative">
                    <img src={image4} alt="image4" />
                    <div className="absolute z-10 card-story">
                        <p className="text-white">
                            Kepercayaan antara kita berdua, untuk lanjut ke jenjang yang lebih serius.
                            8 tahun ini terasa sangat singkat. dan kita sama-sama sadar akan hal itu.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="card-slider relative">
                    <img src={image5} alt="image5" />
                    <div className="absolute z-10 card-story">
                        <p className="text-white">
                            Kita berdua tau, kalau kita ingin hidup bersama.
                            bersama menjalani hidup yang tidak biasa. 
                            yang selalu pasti ada suka dan duka.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="card-slider relative">
                    <img src={image6} alt="image6" />
                    <div className="absolute z-10 card-story">
                        <p className="text-white">
                            Kita berdua tau, kalau kita hanya bisa melewatinya jika hidup bersama.
                            hidup bersama-sama adalah jawaban dari akhir cerita kita.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="card-slider relative">
                    <img src={image7} alt="image7" />
                    <div className="absolute z-10 card-story">
                        <p className="text-white">
                            Dan dari itu semua, aku, dengan kepercayaan penuh ingin menikahimu.
                            Ingin menjalani sisa hidupku denganmu. hanya itu, dan cuma itu.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="card-slider relative">
                    <img src={image8} alt="image8" />
                    <div className="absolute z-10 card-story">
                        <p className="text-white">
                            Dan sekarang aku bertanya. 
                            Maukah kamu menikah dengan ku, Widya hari saputri?
                        </p>
                    </div>
                </div>
            </div>
          </Slider>
            {index === 7 ? (
                <div>
                    <a href="https://www.google.com/maps/dir//-6.3798508,106.8033052/@-6.379851,106.803305,18z?hl=en">
                        <button className="custom-arrow shadow-lg">
                            Go to location next
                        </button>
                    </a>
                </div>
            ) : (
                <div>
                    <button onClick={this.next} className="custom-arrow shadow-lg">
                        {this.textButton(index)}
                    </button>
                </div>
            )}
        </div>
      );
    }
  }