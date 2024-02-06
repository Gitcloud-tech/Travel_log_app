import React, { useState, useRef, useEffect } from 'react'
import '../Styles/AddBlog.css'
import JoditEditor from 'jodit-react';
import axios from 'axios'


const CreateLogs = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    return (
        <>
            <div className="container mt-4">
                <form method="post">

                    <div class="mini-log-parent">
                        <div class="log-child1">
                            <label>Place Name: <input type="text" palceholder="Enter place name" /></label>
                        </div>
                        <div class="log-child2">
                            <label>Start time: <input type="datetime-local" /></label>

                        </div>
                        <div class="log-child3">
                            <label>Exit time: <input type="datetime-local" /></label>

                        </div>
                        <div class="log-child4">
                            <label>Images: <input type="file" /></label>

                        </div>
                        <div class="log-child5">
                            <h3>images selected dropdown</h3>
                        </div>
                        <div class="log-child6">
                            <label>Description:<br></br>
                                <JoditEditor
                                    ref={editor}
                                    value='content'
                                    onChange={newContent => setContent(newContent)}
                                />

                            </label>
                        </div>
                        <div class="log-child7">
                            <button type="submit" className="btn btn-success">Submit Log</button>

                        </div>
                        <div class="log-child8">
                            <label>Pass required:&nbsp;
                                <input type="checkbox" id="checkToggle" /> &nbsp;
                                <input type="text" placeholder="Enter amount of pass" className="passMoney" />
                            </label>
                        </div>
                    </div>

                </form>
            </div>
        </>
    )
}

export default CreateLogs