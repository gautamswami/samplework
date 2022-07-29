import React, { useState } from 'react'
import {
    Box,
    Button,
    DialogActions,
    DialogContent,
    Slider,
    Typography,
} from '@mui/material';
import Cropper from "react-easy-crop";
import { Modal } from '@mui/material';



const BasicUploader = () => {


    const [image, setImage] = React.useState(null);
    const [crop, setCrop] = React.useState({ x: 0, y: 0 });
    const [zoom, setZoom] = React.useState(1);
    const [rotation, setRotation] = useState(0);
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
        setOpen(false);
    };
    

    const zoomPercent = (value) => {
        return `${Math.round(value * 100)}%`;
    };

    const onSelectFile = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.addEventListener("load", () => {
                setImage(reader.result);
            });
        }
    };

   





    return (
        <div>
            <div className='project-upload-file'>
                <input type="file" onChange={onSelectFile} accept="image/*" />
                <div className='upload-icon-container'>
                    <img src="/icons/backup.png" alt="upload" />
                    <div className='upload_discription'>Drop file or <span>Choose a File</span></div>
                </div>
            </div>
            {image ? (
                <> <Modal
                    open={open}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    <div className='container_crop'>
                    <div className='cropper_heading'>Thumbnail Crop</div>
                        <DialogContent
                            dividers
                            sx={{
                                background: '#333',
                                borderRadius: '5px',
                                position: 'relative',
                                height: '326px',
                                width: 'auto',
                                minWidth: { sm: '330px' },
                            }}
                        >
                            <Cropper
                                image={image}
                                crop={crop}
                                zoom={zoom}
                                aspect={1}
                                rotation={rotation}
                                onCropChange={setCrop}
                                onZoomChange={setZoom}
                                // cropImage={cropImage}
                            // onCropComplete={onCropComplete}
                            />
                        </DialogContent>
                        <DialogActions sx={{ flexDirection: 'column', mx: 0, my: 4 }}>
                            <Box sx={{ width: '100%', mb: 1, px: 0, }}>
                                <Box>
                                    <Typography>Zoom: {zoomPercent(zoom)}</Typography>
                                    <Slider
                                        valueLabelDisplay="auto"
                                        valueLabelFormat={zoomPercent}
                                        min={1}
                                        max={3}
                                        step={0.1}
                                        value={zoom}
                                        onChange={(e, zoom) => setZoom(zoom)}
                                    />
                                </Box>
                                <Box>
                                    <Typography>Rotation: {rotation + '°'}</Typography>
                                    <Slider
                                        valueLabelDisplay="auto"
                                        min={0}
                                        max={360}
                                        value={rotation}
                                        onChange={(e, rotation) => setRotation(rotation)}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: 2,
                                        flexWrap: 'wrap',
                                    }}
                                >
                                    <Button
                                        color="primary"
                                        variant="outlined"
                                        onClick={handleClose}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        sx={{
                                            border: 'none'
                                        }}
                                        color="primary"
                                        variant="contained"
                                        // onClick={cropImage}
                                    >
                                        Crop
                                    </Button>
                                </Box>
                            </Box>
                        </DialogActions>
                    </div>
                </Modal>
                </>
            ) : null}
        </div>

    )
}

export default BasicUploader

