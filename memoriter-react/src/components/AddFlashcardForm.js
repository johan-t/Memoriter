import { Editor, EditorState, convertToRaw } from 'draft-js';
import { convertToHTML } from 'draft-convert'
import React from 'react';
import { useState } from 'react';
import './draft.css';

const AddFlashcardForm = ({ onAddFlashcard, syncedFolderID }) => {

    const [title, setTitle] = useState('')

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const content = sessionStorage.getItem('flashcard-content');
    const contentObj = sessionStorage.getItem('flashcard-content-obj');

    const [syncedFolder] = useState(syncedFolderID)

    const onSubmitFlashcard = (changeContent) => {
        changeContent.preventDefault()
        onAddFlashcard({ title, content, contentObj, syncedFolder })
    }

    return (
        <form className='Flashcard_Open_Body' onSubmit={onSubmitFlashcard}>
            <div>
                <h2 className='Add_Flashcard_Form_Header'>Create New Flashcard</h2>
                <p style={{fontSize: '30px'}} />
                <textarea rows='2' className='Add_Flashcard_Form_Title' placeholder='Flashcard Title...' maxLength='100'
                    value={title} onChange={(changeContent) => setTitle(changeContent.target.value)} />
                <p style={{fontSize: '20px'}} />
                
                
                {/*<textarea className='Add_Flashcard_Form_Content' placeholder='Flashcard Content...'
                    value={content} onChange={(changeContent) => setContent(changeContent.target.value)} />*/}
                
                <div className='Add_Flashcard_Form_Content'>
                    <Editor
                        placeholder='Flashcard Content...'
                        editorState={editorState}
                        onChange={(editorState) => {
                            const contentState = editorState.getCurrentContent();
                            const saveContent = (contentState) => {
                                sessionStorage.setItem('flashcard-content-obj', JSON.stringify(convertToRaw(contentState)));
                                sessionStorage.setItem('flashcard-content', convertToHTML(contentState));
                            };
                            saveContent(contentState);
                            setEditorState(editorState);
                        }}
                    />
                </div>

            
            </div>
                <input className='Add_Flashcard_Form_Submit' type='submit' value='Done' />
                <div className='Add_Flashcard_Form_Submit'
                    style={{border: 'none', marginTop: '0px', left: '5px'}}/>
        </form>
    );
}
export default AddFlashcardForm;