import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const DirectlyModifyingStateModal = ({ HideModal }) => {
   const [intCounter, SetCounter] = useState(10);
   const [objData, SetData] = useState({ counter: 20 });

   const incrementCounter = () => {
      intCounter += 1;
      console.log(intCounter);
   };

   const incrementObjectCounter = () => {
      objData.counter += 1;
      console.log(objData.counter);
   }

   return (
      <Modal show={true} onHide={HideModal} centered>
         <Modal.Header closeButton>
            <Modal.Title>Directly Modifying State</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <div className="mb-3">
               <Button variant="primary" onClick={incrementCounter}>Increment {intCounter}</Button>
            </div>
            <div>
               <Button variant="success" onClick={incrementObjectCounter}>Increment Object Counter {objData.counter}</Button>
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