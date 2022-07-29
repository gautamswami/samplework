import React from 'react'
import Modal from '@mui/material/Modal';
import "./projectmodel.css"
import PortfolioVideoUploader from './uploaders/VideoUploader';
import PortfolioDocument from './PortfolioDocument';


export default function PortfolioImage(props) {

    const { handleCloseAll } = props
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button onClick={() => { handleOpen() }} class="btn btn-dark text-white addproject-field-height-button float-right ">NEXT</button>
            {/* <img  className="card_cross_image" src="/icons/cross.svg" alt="delete_project" /> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <div className='container_addthesis'>
                    <div className='container_add_content_top'>
                        <div className='row  addproject_heading'>
                            <div className='col-lg-8 padding-left-right-zero add-project-title'>Add Portfolio</div>
                            <div className='col-lg-4 padding-left-right-zero'>
                                <img onClick={handleCloseAll} className="card_add float-right padding-left-right-zero" src="/icons/cross_add.svg" alt="cross_add" />
                            </div>
                        </div>
                    </div>
                    <div className='top-line'></div>
                    <div className='container_add_content_middle'>
                        <div className='row'>
                            <div className='addproject_navigation'>
                                <p className='number-box'><span className='circle-around-number circle-around-number_one_padding circle-active'>1</span><span className="circle-name circle-active">Basic Details</span></p>
                                <p className='number-box'><span className='circle-around-number circle-around-number_two_padding'>2</span><span className="circle-name">Introduction Video</span></p>
                                <p className='number-box'><span className='circle-around-number circle-around-number_three_padding'>3</span><span className="circle-name">Document</span></p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 addproject-upload-image-area padding-left-right-zero'>
                                <div className='thumbnail'>Add Your Introduction Video</div>
                                <PortfolioVideoUploader />
                                <div className='idealSize'>Ideal Size: 120 x 654</div>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-line'></div>
                    <div className='container_add_content_bottom'>
                        <div className='row'>
                            <div class="col-12 pr-0">
                                {<PortfolioDocument handleCloseAll={handleCloseAll} />}
                                <button onClick={() => { handleClose() }} class="btn btn-outline-dark addproject-field-height-button-back float-right">BACK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

