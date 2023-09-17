import React from "react";

const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font ">
        <div className="container px-3 py-10 mx-auto">
          <div className="text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Welcome to Online Quran Academy!
            </h1>
            <p className="\text-gray-500s">
              Quran-Edu, an Online Quran academy, was established in 2011 with
              the mission of propagating Quranic education worldwide.
              Recognizing the absence of accessible Islamic educational
              platforms in the online sphere, we are committed to filling this
              void to ensure that individuals from all corners of the globe have
              the opportunity to learn about Islam and the Quran. Our goal is to
              illuminate the digital realm with the teachings of the Holy Quran.
              Our team of online Quran teachers is characterized by dedication,
              qualifications, diligence, and extensive experience. We prioritize
              addressing the unique needs of each student. Our online Quran
              academy offers flexibility in scheduling, allowing students to
              select the most convenient time slots amidst their busy routines.
              To facilitate learning, we have created instructional videos to
              complement homework assignments. Our online Quran courses are
              designed to be accessible and engaging. At our online Quran
              academy, we firmly believe that every individual, regardless of
              age, gender, or profession, has the right to access the teachings
              of the Holy Quran. This belief is at the core of our mission, and
              we aspire to inspire others to share in this conviction. Join us,
              and become a part of our dedicated community!
            </p>
            <a href="">
              {" "}
              <button className="bg-[grey] px-5 py-2 mt-5 hover:bg-black hovrer:text-white rounded-xl text-white">
                Read More
              </button>
            </a>

            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
