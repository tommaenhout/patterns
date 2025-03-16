"use client"
import React, { ReactNode } from "react";

interface IControlledFlowProps {
  children: ReactNode;
  currentStepIndex: number;
  onNext: (data: Record<string, string | number>) => void;
}

interface IChildProps {
  next : (dataFromStep: Record<string, string | number>) => void;
}

const ControlledFlow: React.FC<IControlledFlowProps> = ({
  children,
  currentStepIndex,
  onNext,
}) => {
  const next = (data: Record<string, string | number>) => {
    onNext(data);
  };

  const currentChild = React.Children.toArray(children)[currentStepIndex];

  if (React.isValidElement<IChildProps>(currentChild)) {
    return React.cloneElement<IChildProps>(currentChild, { next });
  }

  return currentChild;
};

export default ControlledFlow;
