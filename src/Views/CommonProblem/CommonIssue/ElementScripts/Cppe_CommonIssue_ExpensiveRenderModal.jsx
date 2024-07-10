import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

//This file has 1 issue
//1.Expensive Render
const ExpensiveCalculation = (intRange) => {
  let sum = 0;
  for (let i = 0; i < intRange; i++) {
    sum += i;
  }
  return sum;
};
const ExpensiveCalculation_Simplify = (initRange) => {
  return ((1 + initRange) * initRange) / 2;
};
export const ExpensiveRender = ({ HideModal }) => {
  const [intCount, SetCount] = useState(0);
  const [intRange, SetRange] = useState(1000000000);

  const intTotal = ExpensiveCalculation_Simplify(intRange);

  return (
    <Modal show={true} onHide={HideModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Expensive Render</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          type="number"
          value={intRange}
          onChange={(event) => SetRange(Number(event.target.value ?? 0))}
        />
        <label>
          The sum of number from 0 to {intRange} = {intTotal}
        </label>
        <div className="mt-3">
          <Button variant="primary" onClick={() => SetCount(intCount + 1)}>
            Increment {intCount}
          </Button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={HideModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
