import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import AuthContext from '../../../contexts/authContext';
import * as itemsService from '../../../services/itemsService';

import Path from '../../../utils/paths';

export default function DeleteModal({
    show,
    handleClose,
    collectionName,
    itemId,
}) {
    const navigate = useNavigate();
    const { accessToken } = useContext(AuthContext);

    const deleteItemHandler = async () => {
        try {
            await itemsService.deleteItem(collectionName, itemId, accessToken);

            handleClose();

            navigate(`/${collectionName}`);

        } catch (error) {
            navigate(Path.NotFound);

            throw error;
        }
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={deleteItemHandler}>DELETE</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}