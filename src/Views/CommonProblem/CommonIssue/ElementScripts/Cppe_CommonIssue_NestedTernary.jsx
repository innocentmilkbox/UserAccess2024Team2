import { NotHandlingSideEffectsProperlyModal } from "./Cppe_CommonIssue_NotHandlingSideEffectProperlyModal";
import { DirectlyModifyingStateModal } from "./Cppe_CommonIssue_DirectlyModifyingStateModal";
import { IncorrectlyUpdateState } from "./Cppe_CommonIssue_IncorrectlyUpdateStateModal";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { NotHandlingSideEffectsProperly2Modal } from "./Cppe_CommonIssue_NotHandlingSideEffectProperly2Modal";
import { ExpensiveRender } from "./Cppe_CommonIssue_ExpensiveRenderModal";
import { NotCleaningSideEffect } from "./Cppe_CommonIssue_NotCleaningSideEffectModal";

//2 Issue
//Improper use of ternary operator
//Not using Custom Hook
const CustomHook = () => {
  const [intIssueId, setIntIssueId] = useState(null);

  const selectIssue = (id) => {
    setIntIssueId(id);
  };

  const closeIssue = () => {
    setIntIssueId(null);
  };

  return {
    intIssueId,
    selectIssue,
    closeIssue,
  };
};
const NestedTernary = () => {
  const { intIssueId, selectIssue, closeIssue } = CustomHook();
  const arrIssueInfo = [
    {
      name: "Directly Modifying State",
      modal: (
        <DirectlyModifyingStateModal
          HideModal={() => closeIssue(0)}
        ></DirectlyModifyingStateModal>
      ),
    },
    {
      name: "Not Handling Side Effect Properly",
      modal: (
        <NotHandlingSideEffectsProperlyModal
          HideModal={() => closeIssue(1)}
        ></NotHandlingSideEffectsProperlyModal>
      ),
    },
    {
      name: "Not Handling Side Effect Properly2",
      modal: (
        <NotHandlingSideEffectsProperly2Modal
          HideModal={() => closeIssue(2)}
        ></NotHandlingSideEffectsProperly2Modal>
      ),
    },
    {
      name: "Incorrectly Update State",
      modal: (
        <IncorrectlyUpdateState
          HideModal={() => closeIssue(3)}
        ></IncorrectlyUpdateState>
      ),
    },
    {
      name: "Expensive Render",
      modal: (
        <ExpensiveRender HideModal={() => closeIssue(4)}></ExpensiveRender>
      ),
    },
    {
      name: "Not Cleaning Side Effect",
      modal: (
        <NotCleaningSideEffect
          HideModal={() => closeIssue(5)}
        ></NotCleaningSideEffect>
      ),
    },
  ];

  return (
    <div className="d-flex justify-content-center">
      <div className="w-50 d-flex flex-column gap-3">
        {arrIssueInfo.map((issue, i) => (
          <Button
            variant="warning"
            className="icon-sa-preview"
            key={i}
            onClick={() => selectIssue(i)}
          >
            {issue.name}
          </Button>
        ))}
      </div>
      {intIssueId != null ? arrIssueInfo[intIssueId].modal : <></>}
    </div>
  );
};

export default NestedTernary;
