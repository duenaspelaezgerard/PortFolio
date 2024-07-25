import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export function Habilidades() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 5000,
    centerPadding: "50px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div id="habilidades" className="flex flex-col items-center justify-center bg-gray-600">
        <div className="container mx-auto p-8 mt-10">
            <h2 className="text-4xl lg:text-3xl xl:text-4xl text-white text-center font-bold">MIS HABILIDADES</h2>
            <div className="mt-12">
                <Slider {...settings} className="mx-auto max-w-screen-xl">
                    <Habilidad image={"/HTML5.png"} title="HTML" />
                    <Habilidad image={"/CSS3.png"} title="CSS" />
                    <Habilidad image={"/JavaScript.png"} title="JavaScript" />
                    <Habilidad image={"/typescript.png"} title="TypeScript" />
                    <Habilidad image={"/visualbasic.png"} title="VisualBasic.Net" />
                    <Habilidad image={"/C++.png"} title="C++" />
                    <Habilidad image={"/PHP.png"} title="PHP" />
                    <Habilidad image={"/RoR.png"} title="Ruby On Rails" />
                    <Habilidad image={"/Java.png"} title="Java" />
                    <Habilidad image={"/Bootstrap.png"} title="Bootstrap" />
                    <Habilidad image={"/Tailwind.png"} title="Tailwind" />
                    <Habilidad image={"/Wordpress.png"} title="Wordpress" />
                    <Habilidad image={"/mysql.png"} title="MYSQL" />
                    <Habilidad image={"/postgresql.png"} title="PostgreSQL" />
                    <Habilidad image={"/supabase.png"} title="Supabase" />
                    <Habilidad image={"/React.webp"} title="React" />
                    <Habilidad image={"/Node.png"} title="NodeJS" />
                    <Habilidad image={"/api.png"} title="API Rest" />
                    <Habilidad image={"/nextjs.webp"} title="NextJS" />
                </Slider>
            </div>
        </div>
    </div>

    );
}

function Habilidad({ image, title }) {
  return (
    <div className="p-4 flex flex-col items-center justify-center bg-gray-900 bg-opacity-50 m-4 rounded-lg">
      <img src={image} alt={title} className="h-20 mb-4 p-4" />
      <h4 className="text-lg font-semibold text-white">{title}</h4>
    </div>
  );
}
