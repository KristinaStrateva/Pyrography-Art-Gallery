import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function StaticExample() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Delete Item</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure you want to delete this item?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">DELETE</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}