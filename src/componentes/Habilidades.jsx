import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export function Habilidades() {
  const settings = {
    dots: false,
    arrows: false,
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
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div id="habilidades" className="flex flex-col items-center justify-center bg-gray-600">
        <div className="container mx-auto p-8">
            <h2 className="text-4xl lg:text-3xl xl:text-4xl text-white text-center font-bold">MIS HABILIDADES</h2>
            <div className="mt-12">
                <Slider {...settings} className="mx-auto max-w-screen-xl">
                    <SkillCard image={"/HTML5.png"} title="HTML" />
                    <SkillCard image={"/CSS3.png"} title="CSS" />
                    <SkillCard image={"/JavaScript.png"} title="JavaScript" />
                    <SkillCard image={"/C++.png"} title="C++" />
                    <SkillCard image={"/PHP.png"} title="PHP" />
                    <SkillCard image={"/Java.png"} title="Java" />
                    <SkillCard image={"/Bootstrap.png"} title="Bootstrap" />
                    <SkillCard image={"/Tailwind.png"} title="Tailwind" />
                    <SkillCard image={"/Wordpress.png"} title="Wordpress" />
                    <SkillCard image={"/mysql.png"} title="MYSQL" />
                    <SkillCard image={"/postgresql.png"} title="PostgreSQL" />
                    <SkillCard image={"/supabase.png"} title="Supabase" />
                    <SkillCard image={"/React.webp"} title="React" />
                    <SkillCard image={"/Node.png"} title="NodeJS" />
                    <SkillCard image={"/api.png"} title="API Rest" />
                </Slider>
            </div>
        </div>
    </div>

    );
}

function SkillCard({ image, title }) {
  return (
    <div className="p-4 flex flex-col items-center justify-center bg-gray-900 bg-opacity-50 m-4 rounded-lg">
      <img src={image} alt={title} className="h-20 mb-4 p-4" />
      <h4 className="text-lg font-semibold text-white">{title}</h4>
    </div>
  );
}
