import React, { useRef, useState } from 'react';
import NavBar from "./NavBar";
import "../styles/add.css";
import imgpath from "../images/addimg.png";

const ViewEmp = () => {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState('');

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setSelectedFileName(selectedFile.name);
    }
  };
  return (
    <div className="add_bodys">
      <NavBar />
      <div className="add_main_adds">
        <h className="add_view_hs">Add Page</h>
      </div>
      <div className="add_profile_heads">
        <div className="add_view_imgs">
          <img
            src={imgpath}
            alt="view employee profile"
            className="add_profile_imgs"
          />
          <button className="add_upload" type="file" onClick={handleButtonClick}>Upload</button>
          {/* {selectedFileName ? selectedFileName : 'Upload'} */}
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />

        </div>
        <div className="add_personal_infos">
          <div className="add_first_subs">
            <div className="add_alignments">
              <label className="add_lables"> Full Name </label>
              <input className="add_view_ps" type="text" />
            </div>
            <div className="add_alignments">
              <label className="add_lables"> Date of Birth </label>
              <input className="add_view_ps" type="date" />
            </div>
            <div className="add_alignments">
              <label className="add_lables"> Phone No </label>
              <input className="add_view_ps" type="text" />
            </div>
            <div className="add_alignments">
              <label className="add_lables"> Email ID </label>
              <input className="add_view_ps" type="text" />
            </div>
            <div className="add_alignments">
              <label className="add_lables"> Intern Domain </label>
              <select className="add_view_ps" >
                <option>Select Domain</option>
                <option value="web development">Web Development</option>
                <option value="graphic designer">Graphic Designer</option>
                <option value="business analyst">Business Analyst</option>
                <option value="content creation">Content Creation</option>
              </select>
            </div>
          </div>
          <div className="add_first_subs">
            <div className="add_alignments">
              <label className="add_lables">Address Line 1 </label>
              <input className="add_view_ps" type="text" />
            </div>
            <div className="add_alignments">
              <label className="add_lables">Address Line 2 </label>
              <input className="add_view_ps" type="text" />
            </div>
            <div className="add_alignments">
              <label className="add_lables">District </label>
              <input className="add_view_ps" type="text" />
            </div>
            <div className="add_alignments">
              <label className="add_lables">Pin Code </label>
              <input className="add_view_ps" type="text" />
            </div>
          </div>
        </div>
      </div>
      <div className="add_profile_heads">
        <div className="add_personal_infos">
          <div className="add_second_subs">
            <div className="add_alignments"><label className="add_lables">College Name </label></div>
            <div className="add_alignments"><input className="add_view_ps_bot" type="text" /></div>
            <div className="add_alignments"><label className="add_lables">Department</label></div>
            <div className="add_alignments"><input className="add_view_ps_bot" type="text" /></div>
            <div className="add_alignments">
              <label className="add_lables">Year of Study </label>
              <select className="add_view_ps" >
                <option >Select Year</option>
                <option value="1">Firsrt</option>
                <option value="2">Second</option>
                <option value="3">Third</option>
                <option value="4">Fouth</option>
              </select>
            </div>
            <div className="add_alignments">
              <label className="add_lables">GraduatYear </label>
              <input className="add_view_ps" type="text" />
            </div>
          </div>
        </div>
        <div className="add_personal_infos">
          <div className="add_second_subs">
            <div className="add_alignments">
              <label className="add_lables">Start Date </label>
              <input className="add_view_ps" type="date" />
            </div>
            <div className="add_alignments">
              <label className="add_lables">End Date </label>
              <input className="add_view_ps" type="date" />
            </div>
            <div className="add_alignments"><label className="add_lables">Department/Team Assignment </label></div>
            <div className="add_alignments"><input className="add_view_ps_bot" type="text" /></div>
            <div className="add_alignments"><label className="add_lables">Supervisor/Manager</label></div>
            <div className="add_alignments"><input className="add_view_ps_bot" type="text" /></div>
          </div>
        </div>
        <div className="add_personal_infos">
          <div className="add_second_subs">
            <div className="add_alignments">
              <label className="add_lables">Resume/CV </label>
              <button className='add_upload_button' type="file" onClick={handleButtonClick}>Upload Resume</button>
              <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
            </div>
            <div className="add_alignments">
              <label className="add_lables">Cover Letter </label>
              <button className='add_upload_button' type="file" onClick={handleButtonClick}>Upload Letter</button>
              <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
            </div>
            <div className="add_alignments"><label className="add_lables">Task/ Project</label></div>
            <div className="add_alignments"><input className="add_view_ps_bot" type="text" /></div>
          </div>
        </div>
      </div>
      <div className="add_profile_foot">
        <button className="add_cancel_btn">Cancel</button>
        <button className="add_save_btn">Save</button>
      </div>
    </div>
  );
};

export default ViewEmp;