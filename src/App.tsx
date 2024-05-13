import "./App.css";
import {
  AvoidDuplicationInStateBad,
  AvoidDuplicationInStateGood,
} from "./AvoidDuplicationInState";
import {
  AvoidDuplicationInState2Bad,
  AvoidDuplicationInState2Good,
} from "./AvoidDuplicationInState2";
import {
  AvoidDuplicationInState3Bad,
  AvoidDuplicationInState3Good,
  AvoidDuplicationInState3SomeOtherComponent,
} from "./AvoidDuplicationInState3";
import {
  AvoidRedundantStateBad,
  AvoidRedundantStateGood,
} from "./AvoidRedundantState";
import {
  GroupRelatedStateBetter,
  GroupRelatedStateMeh,
} from "./GroupRelatedState";

function App() {
  return (
    <>
      <Hi />
      {/* <GroupRelatedStateMeh /> */}
      {/* <GroupRelatedStateBetter /> */}
      {/* <AvoidRedundantStateBad /> */}
      {/* <AvoidRedundantStateGood /> */}
      {/* <AvoidDuplicationInStateBad /> */}
      {/* <AvoidDuplicationInStateGood /> */}
      {/* <AvoidDuplicationInState2Bad /> */}
      {/* <AvoidDuplicationInState2Good /> */}
      {/* <>
        <AvoidDuplicationInState3Bad />
        <AvoidDuplicationInState3SomeOtherComponent />
      </> */}
      {/* <>
        <AvoidDuplicationInState3Good />
        <AvoidDuplicationInState3SomeOtherComponent />
      </> */}
      {/* <Bye /> */}
    </>
  );
}

export default App;

function Hi() {
  return (
    <div style={{ fontSize: "10rem", textAlign: "center", margin: "1em" }}>
      👋
    </div>
  );
}

function Bye() {
  return (
    <div style={{ fontSize: "10rem", textAlign: "center", margin: "1em" }}>
      🫡
    </div>
  );
}

// do not complain about unused imports
void GroupRelatedStateMeh,
  GroupRelatedStateBetter,
  AvoidRedundantStateBad,
  AvoidRedundantStateGood,
  AvoidDuplicationInStateBad,
  AvoidDuplicationInStateGood,
  AvoidDuplicationInState2Bad,
  AvoidDuplicationInState2Good,
  AvoidDuplicationInState3Bad,
  AvoidDuplicationInState3Good,
  AvoidDuplicationInState3SomeOtherComponent,
  Hi,
  Bye;
