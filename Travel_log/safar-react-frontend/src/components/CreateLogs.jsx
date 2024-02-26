import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../Styles/Form.css';
import { Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'


const CreateLogs = () => {
  const location = useLocation();
  const {blogId} = location.state; 
  console.log("TEST:------>"+blogId);
  const navigate = useNavigate();


  const initialBlogData = {
    placeName: '',
    startTime: '',
    exitTime: '',
    imageUrl: '',
    logDescription: '',
    passAmount: 0,
    location :''
  }
  const [logData, setLogData] = useState(initialBlogData);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      setLogData({ ...logData, [name]: e.target.files[0] });
    } else {

      if(name ==='passAmount' && parseInt(value,10) < 0) {
        toast.warning('cost cannot be negative')
        return;
      }
      setLogData((prevLog) => ({ ...prevLog, [name]: value }));
    }
    if (name === 'startTime' && logData.exitTime) {
      const startTime = new Date(value);
      const exitTime = new Date(logData.exitTime);
  
      if (startTime > exitTime) {
        toast.warning('Start Time cannot be after the exit time');
        return;
      }
    }
  
    // Add validation for end date not preceding start date
    if (name === 'exitTime' && logData.startTime) {
      const startTime = new Date(logData.startTime);
      const exitTime = new Date(value);
  
      if (exitTime < startTime) {
        toast.warning('Exit Time cannot be before the start time');
        return;
      }
    }

  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // const startTime = new Date(logData.startTime);
    // const exitTime = new Date(logData.exitTime);
  
    // if (exitTime < startTime) {
    //   toast.warning(`Time travel isn't possible yet. Put Time after ${startTime}`);
    //   return;
    // }

    try {
      const formDataForUpload = new FormData();

      Object.keys(logData).forEach((key) => {
        if (key !== 'imageUrl') {
          formDataForUpload.append(key, logData[key]);
        }
      });

      formDataForUpload.append('imageUrl', logData.imageUrl);
      formDataForUpload.append('blogId',blogId);

      const result = await axios.post(`http://localhost:8080/add-log`, formDataForUpload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Log added successfully:', result.data);

      toast.success('Log added successfully');
      // navigate('/my-logs');
      navigate('/my-logs', { state: { blogId: blogId } });
    } catch (error) {
      console.error('Error adding log:', error.message);
    }
  };





//----------------Text to speech ---------------
const [showSpeechModal, setShowSpeechModal] = useState(false);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const showModal = true;

  const handleCloseModal = () => {
    setShowSpeechModal(false);
    resetTranscript(); // Reset transcript when modal is closed
  };




  return (
    <>
      <div className="add-blog-container mt-2 border">
      <h1 className="add-blog-title  text-center">Create Logs</h1>
        <p className="text-center">Share your Travel experience</p>
        <form onSubmit={handleSubmit}>
          <div className="log-parent">
            <Form.Group>
              <Form.Label>Place Name: 
                <Form.Control type="text" placeholder="Enter place name" name="placeName" value={logData.placeName}  onChange={handleChange} required/>
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>Start time: 
                <Form.Control type="datetime-local" name="startTime" value={logData.startTime}  onChange={handleChange} />
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>Exit time: 
                <Form.Control type="datetime-local" name="exitTime" value={logData.exitTime} onChange={handleChange} />
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>Images: 
                <Form.Control  type="file" name="imageUrl" onChange={handleChange} required />
              </Form.Label>
              {/* <Button onClick={() => setLogData((prevLog) => ({ ...prevLog, imageUrl: '' }))}>remove Image</Button> */}

            </Form.Group>
            <Form.Group>
              <Form.Label>Description:
                <Form.Control name="logDescription"  as="textarea" value={logData.logDescription} onChange={handleChange} required></Form.Control>
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>Pass Amount:
                <Form.Control
                  type="number"
                  min="0"
                  placeholder="Enter amount of pass"
                  name="passAmount"
                  value={logData.passAmount}
                  onChange={handleChange}
                />
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>Location:
                <Form.Control
                  type="text"
                  placeholder="Enter location "
                  name="location"
                  value={logData.location}
                  onChange={handleChange}
                />
              </Form.Label>
            </Form.Group>
           
              <Button type="submit" className="btn btn-success">
                Submit Log
              </Button>
              <Button onClick={() => setShowSpeechModal(true)}>Text to speech</Button>
            
          </div>
        </form>
      </div>


      <Modal show={showSpeechModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            Text to  Speech
            <h6>Speak and copy the text</h6>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <p>Microphone: {listening ? 'on' : 'off'}</p>
          <p className='text p-4 border'>{transcript}</p>
            
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={SpeechRecognition.startListening}>Start</Button>
          <Button variant="danger" onClick={SpeechRecognition.stopListening}>Stop</Button>
          <Button variant="warning" onClick={resetTranscript}>RESET</Button>
           {/* <Button variant="secondary" onClick={handleCloseModal}>
      Close
    </Button> */}
        </Modal.Footer>
      </Modal>


    </>
  )
}

export default CreateLogs

































// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import '../Styles/Form.css';
// import { Button, Form } from 'react-bootstrap';
// import axios from 'axios';
// import { toast } from 'react-toastify';



// const CreateLogs = () => {
//   const location = useLocation();
//   const {blogId} = location.state; 
//   console.log("TEST:------>"+blogId);
//   const navigate = useNavigate();


//   const initialBlogData = {
//     placeName: '',
//     startTime: '',
//     exitTime: '',
//     imageUrl: '',
//     logDescription: '',
//     passAmount: 0,
//     location :''
//   }
//   const [logData, setLogData] = useState(initialBlogData);

//   const handleChange = (e) => {
//     const { name, value, type } = e.target;

//     if (type === 'file') {
//       setLogData({ ...logData, [name]: e.target.files[0] });
//     } else {

//       if(name ==='passAmount' && parseInt(value,10) < 0) {
//         toast.warning('cost cannot be negative')
//         return;
//       }
//       setLogData((prevLog) => ({ ...prevLog, [name]: value }));
//     }
//     if (name === 'startTime' && logData.exitTime) {
//       const startTime = new Date(value);
//       const exitTime = new Date(logData.exitTime);
  
//       if (startTime > exitTime) {
//         toast.warning('Start Time cannot be after the exit time');
//         return;
//       }
//     }
  
//     // Add validation for end date not preceding start date
//     if (name === 'exitTime' && logData.startTime) {
//       const startTime = new Date(logData.startTime);
//       const exitTime = new Date(value);
  
//       if (exitTime < startTime) {
//         toast.warning('Exit Time cannot be before the start time');
//         return;
//       }
//     }

//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // const startTime = new Date(logData.startTime);
//     // const exitTime = new Date(logData.exitTime);
  
//     // if (exitTime < startTime) {
//     //   toast.warning(`Time travel isn't possible yet. Put Time after ${startTime}`);
//     //   return;
//     // }

//     try {
//       const formDataForUpload = new FormData();

//       Object.keys(logData).forEach((key) => {
//         if (key !== 'imageUrl') {
//           formDataForUpload.append(key, logData[key]);
//         }
//       });

//       formDataForUpload.append('imageUrl', logData.imageUrl);
//       formDataForUpload.append('blogId',blogId);

//       const result = await axios.post(`http://localhost:8080/add-log`, formDataForUpload, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Log added successfully:', result.data);

//       toast.success('Log added successfully');
//       // navigate('/my-logs');
//       navigate('/my-logs', { state: { blogId: blogId } });
//     } catch (error) {
//       console.error('Error adding log:', error.message);
//     }
//   };

//   return (
//     <>
//       <div className="add-blog-container mt-2 border">
//       <h1 className="add-blog-title  text-center">Create Logs</h1>
//         <p className="text-center">Share your Travel experience</p>
//         <form onSubmit={handleSubmit}>
//           <div className="log-parent">
//             <Form.Group>
//               <Form.Label>Place Name: 
//                 <Form.Control type="text" placeholder="Enter place name" name="placeName" value={logData.placeName}  onChange={handleChange} required/>
//               </Form.Label>
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Start time: 
//                 <Form.Control type="datetime-local" name="startTime" value={logData.startTime}  onChange={handleChange} />
//               </Form.Label>
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Exit time: 
//                 <Form.Control type="datetime-local" name="exitTime" value={logData.exitTime} onChange={handleChange} />
//               </Form.Label>
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Images: 
//                 <Form.Control  type="file" name="imageUrl" onChange={handleChange} required />
//               </Form.Label>
//               {/* <Button onClick={() => setLogData((prevLog) => ({ ...prevLog, imageUrl: '' }))}>remove Image</Button> */}

//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Description:
//                 <Form.Control name="logDescription"  as="textarea" value={logData.logDescription} onChange={handleChange} required></Form.Control>
//               </Form.Label>
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Pass Amount:
//                 <Form.Control
//                   type="number"
//                   min="0"
//                   placeholder="Enter amount of pass"
//                   name="passAmount"
//                   value={logData.passAmount}
//                   onChange={handleChange}
//                 />
//               </Form.Label>
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Location:
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter location "
//                   name="location"
//                   value={logData.location}
//                   onChange={handleChange}
//                 />
//               </Form.Label>
//             </Form.Group>
           
//               <Button type="submit" className="btn btn-success">
//                 Submit Log
//               </Button>      
//           </div>
//         </form>
//       </div>
//     </>
//   )
// }

// export default CreateLogs