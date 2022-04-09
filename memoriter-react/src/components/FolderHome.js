import React from 'react';
import Backdropfs from './backdropfs';
import Backdrop from './backdrop';
import { useState } from 'react';
import { Link } from 'react-router-dom';

//NICHT ERSCHRECKEN: ICH MUSSTE, DAMIT ALLES FUNKTIONIERT, ALLES IN DIESEM COMPONENT ZUSAMMENFÜGEN!

const FolderHome = ({ folder, onDeleteFolder, onEditFolder, onPosFolder }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function settingsHandler() {
        setModalIsOpen(true);
    }
    function backdropClick() {
        setModalIsOpen(false);
    }

    const [modalIsOpenD, setModalIsOpenD] = useState(false);

    function deleteFolderReq() {
      setModalIsOpenD(true);
    }
    function backdropClickD() {
      setModalIsOpenD(false);
    }

    const [modalIsOpenE, setModalIsOpenE] = useState(false);

    function editFolderReq() {
        setModalIsOpenE(true);
    }
    function backdropClickE () {
        setModalIsOpenE(false);
    }

    const [ name, setName ] = useState(folder.name)

    return (
        <div className='Folder_Body'>
            <Link to='/topic'>
                <button className='Button_Homepage'></button>
                {folder.name !== '' ? (
                    <button className='Button_Homepage_Text'>{folder.name}</button>
                ) : (
                    <button className='Button_Homepage_Text'>New Folder</button>
                )}
            </Link>
            <div className='Folder_Pos_Body_Up'>
                <div className='Folder_Pos_Arrow_Up' />
            </div>
            <div className='Folder_Pos_Body_Down'>
                <div className='Folder_Pos_Arrow_Down' />
            </div>
            <div className='Button_Homepage_Settings' onClick={settingsHandler}>
                <span className='dot'></span>
                <span className='dot'></span>
                <span className='dot'></span>
            </div>

            <div>
                {modalIsOpen && <div className='folder-settings-overlay'>
                    <div className='folder-settings-sub'>
                        <p onClick={editFolderReq}>Edit</p>
                        <p onClick={deleteFolderReq}>Delete</p>
            </div>

            <div>
                {modalIsOpenE && <form className='Add_Folder_Form_Body'>
                    <div>
                        <h2 className='Add_Folder_Form_Header'>Edit Folder</h2>
                        <div className='Add_Folder_Form_Text'>Rename Folder: </div>
                        <p style={{fontSize: '5px'}} />
                        <input className='Add_Folder_Form_Input' type='text' maxLength='100' placeholder='New Folder'
                            defaultValue={name} onChange={(changeName) => setName(changeName.target.value)} />
                    </div>
                        <p style={{fontSize: '25px'}} />
                        <input className='Add_Folder_Form_Submit' type='button' value='Done' onClick={
                            () => { onEditFolder(folder.id, name); setModalIsOpenE(false); setModalIsOpen(false); }} />
                </form>}
            </div>

            <div>
                {modalIsOpenD && <form className='Delete_Folder_Confirm'>
                    <h2 className='Add_folder_Form_Header'>Do you really want to delete this folder?</h2>
                    <input className='Delete_Folder_Confirm_Yes 'type='submit' value='Yes' onClick={() => onDeleteFolder(folder.id)} />
                    <input className='Delete_Folder_Confirm_No' type='submit' value='No' onClick={backdropClickD} />
                 </form>}
            </div>

            <div  onClick={backdropClickE}>
                {modalIsOpenE && <Backdrop/>}
            </div>
            <div  onClick={backdropClickD}>
                {modalIsOpenD && <Backdrop/>}
            </div>
            </div>}
                {modalIsOpen && <Backdropfs/>}
            </div>
            <div  onClick={backdropClick}>
                {modalIsOpen && <Backdropfs/>}
            </div>
        </div>
    );
}

export default FolderHome;