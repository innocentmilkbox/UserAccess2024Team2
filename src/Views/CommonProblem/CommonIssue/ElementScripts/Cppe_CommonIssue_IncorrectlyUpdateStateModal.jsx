import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const IncorrectlyUpdateState = ({ HideModal }) => {
   const [objData, SetData] = useState({ desc: "We are counting sheep", counter: 20 });

   const increaseSheep = () => {
      SetData({counter: objData.counter + 1});
   }

   return (
      <Modal show={true} onHide={HideModal} centered>
         <Modal.Header closeButton>
            <Modal.Title>Incorrectly Update State</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <div>
               <Button variant="success" onClick={increaseSheep}>{objData.desc} {objData.counter}</Button>
            </div>
         </Modal.Body>
         <Modal.Footer>
            <Button variant="secondary" onClick={HideModal}>
               Close
            </Button>
         </Modal.Footer>
      </Modal>
   )
}