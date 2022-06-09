import React from "react";
import me from "../../Images/me.jpg";

const About = () => {
  return (
    <div class="hero min-h-screen bg-base-200 px-12">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={me}
          class="max-w-sm rounded-lg shadow-2xl"
          alt="Ripon Hossain Shuvo"
        />
        <div className="px-10 ">
          <h1 class="text-5xl font-bold">
            I Am A Front-End Developer <br /> Based In Bangladesh.
          </h1>
          <p class="py-6">
            I will use my creative and technical skills with the ultimate goal
            of enhancing the user experience of a site. I can use popular web
            design platforms and work to create and improve the front end of a
            site with HTML, CSS, and JavaScript ,react , tailwindcss ,bootstrap.
            <br /> <br/>I am a Web Developer, and I'm very passionate and dedicated t
            o my work. I have acquired the skills and knowledge necessary to
            make your project a success. I enjoy every step of the work process,
            from ideas
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
