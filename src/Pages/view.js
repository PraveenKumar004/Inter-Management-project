import React from "react";
import NavBar from "./NavBar";
import "../styles/view.css";
import imgpath from "../images/viewprofile.jpg";

const ViewEmp = () => {
  return (
    <div className="bodys">
      <NavBar />
      <div className="main_adds">
        <h className="view_hs">View Page</h>
        <div className="add_dels">
          <button className="button_eds">DELETE</button>
          <button className="button_eds">EDIT</button>
        </div>
      </div>
      <div className="profile_heads">
        <div className="view_imgs">
          {
            <img
              src={imgpath}
              alt="view employee profile"
              className="v_profile_imgs"
            />
          }
        </div>
        <div className="personal_infos">
          <div className="first_subs">
            <div className="alignments">
              <label className="v_lables"> Full Name </label>
              <p className="view_ps">Praveen Kumar V</p>
            </div>
            <div className="alignments">
              <label className="v_lables"> Email ID </label>
              <p className="view_ps">praveenkumarv989@gmail.com</p>
            </div>
            <div className="alignments">
              <label className="v_lables"> Resume/CV </label>
              <p className="view_bs">
                <button className="download_buttons">Download Resume</button>
              </p>
            </div>
            <div className="alignments">
              <label className="v_lables"> Cover Letter </label>
              <p className="view_bs">
                <button className="download_buttons">Download Letter</button>
              </p>
            </div>
          </div>
          <div className="first_subs">
            <div className="alignments">
              <label className="v_lables">Date of Birth </label>
              <p className="view_ps">08-11-2004</p>
            </div>
            <div className="alignments">
              <label className="v_lables">Phone Number </label>
              <p className="view_ps">9363335266</p>
            </div>
            <div className="alignments">
              <label className="v_lables">Intern Domain </label>
              <p className="view_ps">content writing and creation</p>
            </div>
            <div className="alignments">
              <label className="v_lables">Date of Join </label>
              <p className="view_ps">08-11-2004</p>
            </div>
            <div className="alignments">
              <label className="v_lables">Date of End </label>
              <p className="view_ps">08-11-2004</p>
            </div>
          </div>
        </div>
      </div>
      <div className="profile_heads">
        <div className="personal_infos">
          <div className="second_subs">
            <div className="alignments">
              <label className="v_lables">Address </label>
              <p className="view_seconds">
                K.S.R Nagar, Csbs street, tiruuytgliunlk;kjokwej heflwajkflsjhfkjncd jhuisafhdjkSBcliasgdkaBpur, tamil nadu -641602, india
              </p>
            </div>
            <div className="alignments">
              <label className="v_lables">District </label>
              <p className="view_seconds">9363335266</p>
            </div>
            <div className="alignments">
              <label className="v_lables">Pin Code </label>
              <p className="view_seconds">641602</p>
            </div>
          </div>
        </div>
        <div className="personal_infos">
          <div className="second_subs">
            <div className="alignments">
              <label className="v_lables">College Name </label>
              <p className="view_ps">k.s.rangasamy college of technology</p>
            </div>
            <div className="alignments">
              <label className="v_lables">Year of Study </label>
              <p className="view_ps">2023</p>
            </div>
            <div className="alignments">
              <label className="v_lables">Department </label>
              <p className="view_ps">computer science and business system</p>
            </div>
            <div className="alignments">
              <label className="v_lables">Graduation Year </label>
              <p className="view_ps">2024</p>
            </div>
          </div>
        </div>
        <div className="personal_infos">
          <div className="second_subs">
            <div className="alignments">
              <label className="v_lables">Dept/Team </label>
              <p className="view_ps">ui/ux & front end</p>
            </div>
            <div className="alignments">
              <label className="v_lables">Task </label>
              <p className="view_ps">Create A employee Management website</p>
            </div>
            <div className="alignments">
              <label className="v_lables">Manager </label>
              <p className="view_ps">Praveen Kumar</p>
            </div>
            <div className="alignments">
              <label className="v_lables">Attendance </label>
              <p className="view_ps">10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmp;
