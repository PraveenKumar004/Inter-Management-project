import React from 'react'
import NavBar from './NavBar';
import "../styles/view.css";
import imgpath from '../images/viewprofile.jpg'

const ViewEmp = () => {


    return (
        <div className='body'>
            <NavBar />
            <div className='main_add'>
                <h className="view_h">View Page</h>
                <div className='add_del'>
                    <button className='button_ed'>DELETE</button>
                    <button className='button_ed'>EDIT</button>
                </div>
            </div>
            <div className='profile_head'>
                <div className='view_img'>
                    <img src={imgpath} alt='view employee profile' className='v_profile_img' />
                </div>
                <div className='personal_info'>
                    <div className='first_sub'>
                        <div className='alignment'><label className='v_lable'> Full Name  </label><p className='view_p'>Praveen Kumar V</p></div>
                        <div className='alignment'><label className='v_lable'> Email ID </label><p className='view_p'>praveenkumarv989@gmail.com</p></div>
                        <div className='alignment'><label className='v_lable'> Resume/CV </label><p className='view_b'><button className='download_button'>Download Resume</button></p></div>
                        <div className='alignment'><label className='v_lable'> Cover Letter </label><p className='view_b'><button className='download_button'>Download Letter</button></p></div>
                    </div>
                    <div className='first_sub'>
                        <div className='alignment'><label className='v_lable'>Date of Birth  </label><p className='view_p'>08-11-2004</p></div>
                        <div className='alignment'><label className='v_lable'>Phone Number  </label><p className='view_p'>9363335266</p></div>
                        <div className='alignment'><label className='v_lable'>Intern Domain  </label><p className='view_p'>content writing and creation</p></div>
                        <div className='alignment'><label className='v_lable'>Date of Join </label><p className='view_p'>08-11-2004</p></div>
                        <div className='alignment'><label className='v_lable'>Date of End </label><p className='view_p'>08-11-2004</p></div>
                    </div>
                </div>
            </div>
            <div className='profile_head'>
                <div className='personal_info'>
                    <div className='second_sub'>
                        <div className='alignment'><label className='v_lable'>Address  </label><p className='view_second'>K.S.R Nagar, Csbs street, tirupur, tamil nadu -641602, india</p></div>
                        <div className='alignment'><label className='v_lable'>District  </label><p className='view_second'>9363335266</p></div>
                        <div className='alignment'><label className='v_lable'>Pin Code  </label><p className='view_second'>641602</p></div>

                    </div>
                </div>
                <div className='personal_info'>
                    <div className='second_sub'>
                        <div className='alignment'><label className='v_lable'>College Name </label><p className='view_p'>k.s.rangasamy college of technology</p></div>
                        <div className='alignment'><label className='v_lable'>Year of Study </label><p className='view_p'>2023</p></div>
                        <div className='alignment'><label className='v_lable'>Department  </label><p className='view_p'>computer science and business system</p></div>
                        <div className='alignment'><label className='v_lable'>Graduation Year </label><p className='view_p'>2024</p></div>
                    </div>
                </div>
                <div className='personal_info'>
                    <div className='second_sub'>
                        <div className='alignment'><label className='v_lable'>Dept/Team </label><p className='view_p'>ui/ux & front end</p></div>
                        <div className='alignment'><label className='v_lable'>Task  </label><p className='view_p'>Create A employee Management website</p></div>
                        <div className='alignment'><label className='v_lable'>Manager </label><p className='view_p'>Praveen Kumar</p></div>
                        <div className='alignment'><label className='v_lable'>Attendance </label><p className='view_p'>10</p></div>
                    </div>
                </div>
                </div>
            </div>
    );
};

export default ViewEmp;