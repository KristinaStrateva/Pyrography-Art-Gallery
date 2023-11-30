import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import * as itemsService from '../../../services/itemsService';
import { useNavigate } from 'react-router-dom';

export default function DeleteModal({
    show,
    handleClose,
    collectionName,
    itemId,
}) {
    const navigate = useNavigate();

    const deleteItemHandler = async () => {
        await itemsService.deleteItem(collectionName, itemId);

        handleClose();

        navigate(`/${collectionName}`);
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