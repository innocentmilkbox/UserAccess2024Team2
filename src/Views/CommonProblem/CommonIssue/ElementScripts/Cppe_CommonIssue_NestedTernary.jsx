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
const NestedTernary = () => {
   const [bolIssue1, SetIssue1] = useState(false);
   const ShowIssue1 = () => SetIssue1(true);
   const HideIssue1 = () => SetIssue1(false);

   const [bolIssue2, SetIssue2] = useState(false);
   const ShowIssue2 = () => SetIssue2(true);
   const HideIssue2 = () => SetIssue2(false);

   const [bolIssue3, SetIssue3] = useState(false);
   const ShowIssue3 = () => SetIssue3(true);
   const HideIssue3 = () => SetIssue3(false);

   const [bolIssue4, SetIssue4] = useState(false);
   const ShowIssue4 = () => SetIssue4(true);
   const HideIssue4 = () => SetIssue4(false);

   const [bolIssue5, SetIssue5] = useState(false);
   const ShowIssue5 = () => SetIssue5(true);
   const HideIssue5 = () => SetIssue5(false);

   const [bolIssue6, SetIssue6] = useState(false);
   const ShowIssue6 = () => SetIssue6(true);
   const HideIssue6 = () => SetIssue6(false);

   return (
      <div className="d-flex justify-content-center">
         <div className="w-50 d-flex flex-column gap-3">
            <Button variant="warning" className="icon-sa-preview" onClick={ShowIssue1}>Directly Modifying State</Button>
            <Button variant="warning" className="icon-sa-preview" onClick={ShowIssue2}>Not Handling Side Effect Properly</Button>
            <Button variant="warning" className="icon-sa-preview" onClick={ShowIssue3}>Not Handling Side Effect Properly2</Button>
            <Button variant="warning" className="icon-sa-preview" onClick={ShowIssue4}>Incorrectly Update State</Button>
            <Button variant="warning" className="icon-sa-preview" onClick={ShowIssue5}>Expensive Render</Button>
            <Button variant="warning" className="icon-sa-preview" onClick={ShowIssue6}>Not Cleaning Side Effect</Button>
         </div>
         {
            bolIssue1 ? <DirectlyModifyingStateModal HideModal={HideIssue1} /> :
               bolIssue2 ? <NotHandlingSideEffectsProperlyModal HideModal={HideIssue2} /> :
                  bolIssue3 ? <NotHandlingSideEffectsProperly2Modal HideModal={HideIssue3} /> :
                     bolIssue4 ? <IncorrectlyUpdateState HideModal={HideIssue4} /> :
                        bolIssue5 ? <ExpensiveRender HideModal={HideIssue5} /> :
                           bolIssue6 ? <NotCleaningSideEffect HideModal={HideIssue6} /> :
                              <></>
         }
      </div>
   );
};



export default NestedTernary;