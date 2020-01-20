import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


function NewEmail() {
    const [messageTo, setMessageTo] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log(messageTo, subject, message)
    }
    return (
        <>
            <main>
                <aside>
                    <div className="form-group">
                        <label htmlFor="to">Para:</label>
                        <input id="to" onChange={event => setMessageTo(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Assunto:</label>
                        <input id="subject" onChange={event => setSubject(event.target.value)} />
                    </div>
                </aside>
                <Editor
                    initialValue=""
                    init={{
                        height: 500,
                        menubar: true,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                    }}
                    onChange={(event) => { setMessage(event.target.getContent()) }}
                />
                <button className="btns" onClick={handleSubmit}> Enviar </button>
            </main>
        </>
    );
}
export default NewEmail;