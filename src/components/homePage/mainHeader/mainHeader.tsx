import styles from "./mainHeader.module.scss";
import superman_header from "../../../assets/img/superman_header.jpg";
import batman_header from "../../../assets/img/batman_header.jpg";
import batma_header1 from "../../../assets/img/batman_headerCopy.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function MainHeader() {

    // const [currentIndex, setCurrentIndex] = useState(0);
    // const [transition, setTransition] = useState('');

    // const transit = (direction: string) => {
    //     setTransition('styles.transition' + direction);
    //     setTimeout(() => {
    //         setTransition('');
    //     }, 500);
    // };

    // const prevSlide = () => {
    //     const isFirstSlide = currentIndex === 0;
    //     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    //     setCurrentIndex(newIndex);
    // }

    // const nextSlide = () => {
    //     const isLastSlide = currentIndex === slides.length - 1;
    //     const newIndex = isLastSlide ? 0 : currentIndex + 1;
    //     setCurrentIndex(newIndex);
    // }
    const slides = [
        {
            img: superman_header,
            name: "Superman",
            year: "2006"
        },
        {
            img: batma_header1,
            name: "Batman I",
            year: "2003"
        },
        {
            img: batman_header,
            name: "Batman II",
            year: "2001"
        }];
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        pauseOnHover:true,
        autoplaySpeed: 4000
    };


    return (
        <div className={styles.roundaboutContainer}>
            {/* <div className={styles.imageContainer}>
                <img src={slides[currentIndex].img} alt="" />
            </div>
            <div className={styles.filmInfoContainer}>
                <div className={styles.filmYearContainer}>
                    <p> {slides[currentIndex].year}</p>
                </div>
                <div className={styles.filmNameContainer}>
                    <p> {slides[currentIndex].name}</p>
                </div>
            </div>
            <div className={styles.arrowContainerL} >
                <div>
                <div className={styles.prevArrow} onClick={() => { prevSlide(); transit('left'); }}>
                    <PrevArrow width={120} height={120} />
                </div>

                <div className={styles.nextArrow} onClick={() => { nextSlide(); transit('right') }} >
                    <NextArrow width={120} height={120} />
                </div>
                </div>
                <div className={styles.bigMainText}><p>Explore movies and series</p></div> */}

            <Slider {...settings}>
                {slides.map(e => {
                    return (<div>
                        <div className={styles.imageContainer}>
                            <img src={e.img} alt="" />
                        </div>
                        <div className={styles.filmInfoContainer}>
                            <div className={styles.filmYearContainer}>
                                <p> {e.year}</p>
                            </div>
                            <div className={styles.filmNameContainer}>
                                <p> {e.name}</p>
                            </div>
                        </div>
                    </div>)
                })}
            </Slider>
            <div className={styles.bigMainText}><p>Explore movies and series</p></div>

        </div>
    )
}
export default MainHeader