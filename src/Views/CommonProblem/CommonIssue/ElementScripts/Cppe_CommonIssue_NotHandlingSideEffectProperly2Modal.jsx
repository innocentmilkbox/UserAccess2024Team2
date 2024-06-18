import { useEffect, useState } from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";
import { fetchTodo } from "UtilityScripts/Cppu_Common";


//This file has 2 issue
//1.Improper Handling of Effect
//2.Not using keys in List 
export const NotHandlingSideEffectsProperly2Modal = ({ HideModal }) => {
   const [arrData, SetData] = useState([]);
   useEffect(() => {
      fetchTodo(SetData);
   });
   return (
      <Modal show={true} onHide={HideModal} centered>
         <Modal.Header closeButton>
            <Modal.Title>Not Handling Side Effect Properly2</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <ListGroup>
               {arrData.map((item) => (
                  <ListGroup.Item>
                     <b>{item.email}</b>
                     <div>{item.body}</div>
                  </ListGroup.Item>
               ))}
            </ListGroup>
         </Modal.Body>
         <Modal.Footer>
            <Button variant="secondary" onClick={HideModal}>
               Close
            </Button>
         </Modal.Footer>
      </Modal>
   )
}