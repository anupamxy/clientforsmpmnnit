import React from "react";
import "./About.css";
export const About = () => {
  const driveLink1 =
    "https://drive.google.com/drive/folders/1juZnVJi4YbhH29NFRjdA_fy0V2gGr6YD?usp=share_link";
  const openDriveLink1 = () => {
    window.open(driveLink1);
  };

  const driveLink2 =
    "https://drive.google.com/drive/folders/1oBn9nK-JLA_UrfDHWUqsOSY7jfkaS7X_?usp=share_link";
  const openDriveLink2 = () => {
    window.open(driveLink2);
  };
  const driveLink3 =
    "https://drive.google.com/drive/folders/13yClxhwntNABiotqMePExtX-I9s6mW2A?usp=share_link";
  const openDriveLink3 = () => {
    window.open(driveLink3);
  };
  const driveLink4 =
    "https://drive.google.com/drive/folders/1aTmD6bPh18JehUN9yeMHx7GdcYlEpk01?usp=share_link";
  const openDriveLink4 = () => {
    window.open(driveLink4);
  };
  const driveLink5 =
    "https://drive.google.com/drive/folders/1qKo44HKM6U1YqH2vyRv1_UzbFQ7fzeBp?usp=share_link";
  const openDriveLink5 = () => {
    window.open(driveLink5);
  };
  const driveLink6 =
    "https://drive.google.com/drive/folders/1a8mXvXeXxffQupKEzoKIkvB6GEONhnyi?usp=share_link";
  const openDriveLink6 = () => {
    window.open(driveLink6);
  };
  const driveLink7 =
    "https://drive.google.com/drive/folders/1M7rlIk7cBi11y2kPVS_w4NP6d1aCMpUh?usp=share_link";
  const openDriveLink7 = () => {
    window.open(driveLink7);
  };
  const driveLink8 =
    "https://drive.google.com/drive/folders/1Pw2fJy1XJgnO8Z9xxIwnXphcBoygrQgi?usp=share_link";
  const openDriveLink8 = () => {
    window.open(driveLink8);
  };
  const driveLink9 =
    "https://drive.google.com/drive/folders/1qEcg6J2YrjkpknqVoFOZxBEIHClnStEz?usp=share_link";
  const openDriveLink9 = () => {
    window.open(driveLink9);
  };

  return (
    <>
      <div className="main">
        <h1 className="smp">SMP LOVE TO HELP YOU</h1>

        <ul className="cards">
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img
                  src="https://jobs.newscientist.com/getasset/eb64d6e0-e203-4fe5-9aeb-e4e603c8a452/"
                  alt="noimage"
                />
              </div>
              <div className="card_content">
                <h2 className="card_title">FIRST YEAR</h2>
                <p className="card_text">
                Embrace the learning process: Engineering is a challenging field, and you will encounter complex concepts and problems. Embrace the process of learning and don't be discouraged by initial difficulties. With persistence and practice, you'll improve and grow.
                </p>
                <button className="btn card_btn" onClick={openDriveLink1}>
                  GET NOTES
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img
                  src="https://media.istockphoto.com/id/1213441993/photo/engineering-students-working-in-the-lab.jpg?s=612x612&w=0&k=20&c=TJb5DdReaCzw_wj4fkhDWe-2vsBHJFI6EEdMHNBuLek="
                  alt="noimage"
                />
              </div>
              <div className="card_content">
                <h2 className="card_title">MECANICAL ENGINEERING&PIE </h2>
                <p className="card_text">
                Mechanical engineering encompasses a wide range of disciplines, so focus on building a strong foundation in subjects like mathematics, physics, and materials science. Understanding core principles will be crucial in tackling more advanced topics.
                </p>
                <button className="btn card_btn" onClick={openDriveLink2}>
                  GET NOTES
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img
                  src="https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct/What-is-Electrical-Engineering.jpg"
                  alt="noimage"
                />
              </div>
              <div className="card_content">
                <h2 className="card_title">ELECTRICAL ENGINEERING</h2>
                <p className="card_text">
                Electrical engineering is built upon fundamental principles of circuits, electromagnetism, and electronics. Invest time in grasping these foundational concepts as they form the basis for more advanced topics.
                </p>
                <button className="btn card_btn" onClick={openDriveLink3}>
                  GET NOTES
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img
                  src="https://media.istockphoto.com/id/1397047849/photo/abstract-circuit-board-with-a-lot-of-micro-chips.jpg?b=1&s=170667a&w=0&k=20&c=RJ1PWMo5fcGl1XaTeIQSOA3NdtgRDKO6QJfV9XMa8XQ="
                  alt="noimage"
                />
              </div>
              <div className="card_content">
                <h2 className="card_title">
                  ELECTRONICS AND COMUNICATION ENGINEERING
                </h2>
                <p className="card_text">
                Electronics engineering relies heavily on fundamental concepts such as circuit analysis, semiconductor physics, and digital logic. Invest time in understanding these foundational principles as they form the basis for more advanced electronics topics.
                </p>
                <button className="btn card_btn" onClick={openDriveLink4}>
                  GET NOTES
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img
                  src="https://cdn.wallpapersafari.com/96/84/01y4VZ.jpg"
                  alt="noimage"
                />
              </div>
              <div className="card_content">
                <h2 className="card_title">CSED</h2>
                <p className="card_text">
                Gain a good understanding of computer architecture and how hardware and software interact. Learn about CPUs, memory, storage, and input/output systems. Understanding the underlying hardware will help you optimize software performance and design efficient algorithms.
                </p>
                <button className="btn card_btn" onClick={openDriveLink5}>
                  GET NOTES
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img
                  src="https://thumbs.dreamstime.com/b/innovative-architecture-civil-engineering-plan-building-construction-project-creative-graphic-design-showing-concept-174256682.jpg"
                  alt="noimage"
                />
              </div>
              <div className="card_content">
                <h2 className="card_title">CIVIL ENGINEERING</h2>
                <p className="card_text">
                Civil engineering relies heavily on mathematical and physical principles. Focus on mastering concepts such as calculus, linear algebra, mechanics, and thermodynamics. These subjects form the basis for understanding structural analysis, fluid mechanics, and other civil engineering disciplines.
                </p>
                <button className="btn card_btn" onClick={openDriveLink6}>
                  GET NOTES
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img
                  src="https://i0.wp.com/blog.frontiersin.org/wp-content/uploads/2019/09/chemical-engineer-chemistry-industry-zeolite-ionic-polymer-e1567409711514.jpg?fit=1000%2C562&ssl=1"
                  alt="noimage"
                />
              </div>
              <div className="card_content">
                <h2 className="card_title">CHEMICAL ENGINEERING</h2>
                <p className="card_text">
                Focus on building a strong foundation in chemistry, physics, and mathematics. Understand key concepts such as stoichiometry, thermodynamics, fluid mechanics, and reaction kinetics. These fundamentals will form the basis for advanced chemical engineering topics.
                </p>
                <button className="btn card_btn" onClick={openDriveLink7}>
                  GET NOTES
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img
                  src="https://avanti.in/wp-content/uploads/2017/06/Biotechnology.jpeg"
                  alt="noimage"
                />
              </div>
              <div className="card_content">
                <h2 className="card_title">BIOTECHNOLOGY</h2>
                <p className="card_text">
                Biotechnology is a multidisciplinary field that combines principles from biology, chemistry, and engineering. Focus on understanding fundamental concepts in genetics, molecular biology, biochemistry, and organic chemistry. These foundational subjects will provide the basis for advanced biotechnology studies.
                </p>
                <button className="btn card_btn" onClick={openDriveLink8}>
                  GET NOTES
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfM0XXZdh0_uBOfZEf_wdELSWsDZnzwbQ8-A&usqp=CAU"
                  alt="noimage"
                />
              </div>
              <div className="card_content">
                <h2 className="card_title">EXTRA RESOURSES</h2>
                <p className="card_text">
                Engineering programs can be demanding, requiring dedication, discipline, and hard work. Develop a strong work ethic and maintain a consistent study schedule. Be proactive in your learning and take responsibility for your academic progress.
                </p>
                <button className="btn card_btn" onClick={openDriveLink9}>
                  GET NOTES
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <h3 className="made_by">Made with ♡</h3>
    </>
  );
};

export default About;
