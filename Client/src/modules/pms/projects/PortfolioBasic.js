import React from 'react';
import Modal from '@mui/material/Modal';
import "./projectmodel.css";
import PortfolioVideo from './PortfolioVideo';
import BasicUploader from './uploaders/BasicUploader';



export default function PortfolioBasic() {
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
                <button className="button_card" onClick={() => { handleOpen() }}>
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
                <div className='container_projectbasic'>
                    <div className='container_add_content_top'>
                        <div className='row addproject_heading'>
                            <div className='col-md-8  padding-left-right-zero add-project-title'>Add Portfolio</div>
                            <div className='col-md-4 padding-left-right-zero'>
                                <img onClick={handleCloseAll} className="card_add float-right padding-left-right-zero" src="/icons/cross_add.svg" alt="cross_add" />
                            </div>
                        </div>
                    </div>
                    <div className='top-line'></div>
                    <div className='container_add_content_middle'>
                        <div className='row'>
                            <div className='addproject_navigation'>
                                <p className='number-box'><span className='circle-around-number circle-around-number_one_padding'>1</span><span className="circle-name">Basic Details</span></p>
                                <p className='number-box'><span className='circle-around-number circle-around-number_two_padding'>2</span><span className="circle-name">Introduction Video</span></p>
                                <p className='number-box'><span className='circle-around-number circle-around-number_three_padding'>3</span><span className="circle-name">Document</span></p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-5 padding-left-right-zero'>
                                <div className='thumbnail'>Portfolio Thumbnail</div>
                                <BasicUploader />
                                <div className='idealSize'>Ideal Size: 120 x 654</div>
                            </div>
                            <div className='col-lg-7 padding-left-right-zero'>
                                
                                <div className="form-row">
                                    <div className="form-group col-lg-12">
                                        <label className='addproject-label-name'>Created By</label>
                                        <input type="text" className="form-control addproject-field-height" placeholder="John Smith" />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-lg-12">
                                        <label className='addproject-label-name'>Portfolio Heading</label>
                                        <input type="text" className="form-control addproject-field-height" placeholder="Interior Design Portfolio" />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div class="form-group col-lg-12 addproject-label-name-margin-top">
                                        <label className='addproject-label-name'>Brief Description<span className='optional_label'> Optional</span></label>
                                        <textarea class="form-control form-control brief-discription-portfolio-field-height" placeholder="" rows="25"></textarea>
                                    </div>
                                </div>
								
                            </div>
                        </div>
                    </div>
                    <div className='bottom-line'></div>
                    <div className='container_add_content_bottom'>
                        <div className='row'>
                            <div className="col-12 pr-0">
                                {<PortfolioVideo handleCloseAll={handleCloseAll} />}
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
