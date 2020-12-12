import React from "react";
import { IonRow, IonButton, IonCol, IonIcon } from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";
const BmiControls: React.FC<{
  onCalculate: () => void;
  onReset: () => void;
}> = props => {
  return (
    <IonRow>
      <IonCol className="ion-text-left">
        <IonButton onClick={props.onCalculate}>
          <IonIcon slot="start" icon={calculatorOutline} />
          calculator
        </IonButton>
      </IonCol>
      <IonCol className="ion-text-right">
        <IonButton onClick={props.onReset}>
          <IonIcon slot="start" icon={refreshOutline} />
          reset
        </IonButton>
      </IonCol>
    </IonRow>
  );
};
export default BmiControls;
