"use client"
import React, { useEffect, useState } from "react";
import ControlledFlow  from "@/components/controlled-flow/ControlledFlow";

interface IChildProps {
    next?: (data: Record<string, string | number>) => void;
}

const StepOne: React.FC<IChildProps> = ({ next }) => {
  return (
    <>
      <h1>Step #1: Enter your name</h1>
      <button onClick={() => next && next({ name: "TestName" })}>Next</button>
    </>
  );
};

const StepTwo: React.FC<IChildProps> = ({ next }) => {
  return (
    <>
      <h1>Step #2: Enter your age</h1>
      <button onClick={() =>next && next({ age: 30 })}>Next</button>
    </>
  );
};

const StepThree: React.FC<IChildProps> = ({ next }) => {
  return (
    <>
      <h1>Step #3: You qualify!</h1>
      <button onClick={() =>next && next({})}>Next</button>
    </>
  );
};

const StepFour: React.FC<IChildProps> = ({ next }) => {
  return (
    <>
      <h1>Step #4: Enter your country</h1>
      <button onClick={() =>next && next({ country: "Poland" })}>Next</button>
    </>
  );
};

interface IData {
    name?: string;
    age?: number;
    country?: string;
    [key: string]: string | number | undefined;
}

const ParentControlledFlow: React.FC = () => {
  const [data, setData] = useState<IData>({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const next = (dataFromStep: Record<string, string | number>) => {
    setData(prevData => ({ ...prevData, ...dataFromStep }));
    setCurrentStepIndex(prevIndex => prevIndex + 1);
  };

  return (
    <>
      <ControlledFlow currentStepIndex={currentStepIndex} onNext={next}>
        <StepOne />
        <StepTwo />
        {data.age && data.age > 25 && <StepThree />}
        <StepFour />
      </ControlledFlow>
    </>
  );
}

export default ParentControlledFlow;