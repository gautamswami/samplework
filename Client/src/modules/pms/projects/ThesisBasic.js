import React from 'react';
import Modal from '@mui/material/Modal';
import "./projectmodel.css";
import ThesisDocument from './ThesisDocument';




export default function ThesisBasic() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleCloseAll = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className="content_pms_add">
                <button class="button_card" onClick={() => { handleOpen() }}>
                    <div className="project_add"><img src="/icons/project_add.svg" alt="image Detail" /></div>
                    <div className="add_new_project">Add New File</div>
                </button>
            </div>
            <Modal
                open={open}
                onClose={handleCloseAll}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <div className='container_thesis_basic'>
                    <div className='container_add_content_top'>
                        <div className='row  addproject_heading'>
                            <div className='col-lg-8 padding-left-right-zero add-project-title'>Add Thesis & Dissertations</div>
                            <div className='col-lg-4'>
                                <img onClick={handleCloseAll} className="card_add float-right pt-2" src="/icons/cross_add.svg" alt="cross_add" />
                            </div>
                        </div>
                    </div>
                    <div className='top-line'></div>
                    <div className='container_addportfolio_content_middle'>
                        <div className='row'>
                            <div className='addproject_navigation'>
                                <p className='number-box'><span className='circle-around-number circle-around-number_one_padding'>1</span><span className="circle-name">Basic Details</span></p>
                                <p className='number-box'><span className='circle-around-number circle-around-number_three_padding'>3</span><span className="circle-name">Documents</span></p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col  addproject_form_area padding-left-right-zero'>
                                <div className="form-row">
                                    <div class="form-group col-lg-6">
                                        <label className='addproject-label-name'>Title</label>
                                        <input type="text" class="form-control addproject-field-height" placeholder="Final Year Thesis" />
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label className='addproject-label-name'>Author Name</label>
                                        <input type="text" class="form-control addproject-field-height" placeholder="Final Year Thesis" />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div class="form-group col-lg-6">
                                        <label className='addproject-label-name'>College</label>
                                        <input type="text" class="form-control addproject-field-height" placeholder="Ex. Portfolio" />
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label className='addproject-label-name'>Degree Level</label>
                                        <select id="inputState" class="form-control addproject-field-height">
                                            <option selected>Residential</option>
                                            <option>custom</option>
                                        </select>
                                    </div>
                                </div>


                                <div className="form-row">
                                    <div class="form-group col-lg-12">
                                    <label className='addproject-label-name'>Source Type</label>
                                        <select id="inputState" class="form-control addproject-field-height">
                                            <option selected>Thesis</option>
                                            <option>custom</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div class="form-group col-lg-12 addproject-label-name-margin-top">
                                        <label className='add-label-name'>Brief Description<span className='optional_label'>Optional</span></label>
                                        <textarea class="form-control form-control brief-discription-thesis-field-height" placeholder="" rows="25"></textarea>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='bottom-line'></div>
                    <div className='container_add_content_bottom'>
                        <div className='row'>
                            <div class="col-12 pr-0">
                                {<ThesisDocument handleCloseAll={handleCloseAll}/>}
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

