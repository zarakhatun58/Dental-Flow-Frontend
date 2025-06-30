import { Box } from '@mui/material';
import React, { useRef, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoaderComponent from '../LoaderComponent'; 
import dent1 from "../../assets/images/dent-1.jpg";
import dent2 from "../../assets/images/dent-2.jpg";
import dent3 from "../../assets/images/dent-3.jpg";
import dent4 from "../../assets/images/dent-5.jpg";


// interface Posts {
//   title: any;
//   description: string;
//   coverPicture: string;
//   publishDate:string;
// }

const Post = [
    {
        id: 1,
        title: "Kinley Smile Gallery ",
        coverPicture:dent1,
        description: "High-tech tools",
        publishDate: "2025-06-29"
    },
    {
        id: 2,
        title: "Clinic Room ",
         coverPicture:dent2,
        description: "High-tech tools",
        publishDate: "2025-06-20"
    },
    {
        id: 3,
        title: "Smile World ",
         coverPicture:dent3,
        description: "High-tech tools",
        publishDate: "2025-06-29"
    },
    {
        id: 4,
        title: "Smile Life ",
         coverPicture:dent4,
        description: "High-tech tools",
        publishDate: "2025-06-29"
    }
]


const Hero = () => {
const sliderRef = useRef<Slider | null>(null);
    const [openPreview, setOpenPreview] = useState(false);
    const [isLoading, setIsLoading] = useState()
    const truncatedTitleLength = 250;
    if (isLoading) {
        return <LoaderComponent />;
    }
    const settings = {
        dots: false,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,

        customPaging: function () {
            return (
                <div
                    style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "#ccc",
                        marginLeft: "30px"
                    }}
                ></div>
            );
        },
        appendDots: (dots: string | any[]) => (
            <div>
                <ul> {dots.slice(0, 3)} </ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
                <Box >
                    <Slider {...settings}>
                        {Post.map((img: any) => (
                            <div key={img._id} className="px-2" style={{backgroundColor:"#18b1aa"}}>
                                <img src={img.coverPicture} alt={img.title || 'Dental'} style={{width:"100%"}} />
                                {img.title && <p className="text-center mt-2 text-sm">{img.title}</p>}
                            </div>
                        ))}
                    </Slider>
                </Box>
    );
};

export default Hero;


// Custom Arrow Components
const SampleNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: "10px" }}
            onClick={onClick}
        />
    );
};

const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
            onClick={onClick}
        />
    );
};