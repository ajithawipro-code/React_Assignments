import { useReducer } from "react";

const initialState = {
  step: 1,
  form: {
    name: "",
    email: "",
    username: "",
    password: "",
  },
  isSubmitted: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        form: {
          ...state.form,
          [action.field]: action.value,
        },
      };

    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1,
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        step: state.step - 1,
      };

    case "SUBMIT_FORM":
      return {
        ...state,
        isSubmitted: true,
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

export default function MultiUserForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Multi Step Form</h2>

      {/* STEP 1 */}
      {state.step === 1 && (
        <div>
          <h3>Step 1: Personal Details</h3>

          <input
            type="text"
            placeholder="Name"
            value={state.form.name}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "name",
                value: e.target.value,
              })
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={state.form.email}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "email",
                value: e.target.value,
              })
            }
          />

          <button onClick={() => dispatch({ type: "NEXT_STEP" })}>Next</button>
        </div>
      )}

      {/* STEP 2 */}
      {state.step === 2 && (
        <div>
          <h3>Step 2: Account Details</h3>

          <input
            type="text"
            placeholder="Username"
            value={state.form.username}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "username",
                value: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={state.form.password}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "password",
                value: e.target.value,
              })
            }
          />

          <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
            Previous
          </button>

          <button onClick={() => dispatch({ type: "NEXT_STEP" })}>Next</button>
        </div>
      )}

      {/* STEP 3 */}
      {state.step === 3 && (
        <div>
          <h3>Step 3: Review & Submit</h3>

          <p>
            <b>Name:</b> {state.form.name}
          </p>
          <p>
            <b>Email:</b> {state.form.email}
          </p>
          <p>
            <b>Username:</b> {state.form.username}
          </p>
          <p>
            <b>Password:</b> {state.form.password}
          </p>

          <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
            Previous
          </button>

          <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
            Submit
          </button>
        </div>
      )}

      {/* SUCCESS MESSAGE */}
      {state.isSubmitted && (
        <div>
          <h3>Form Submitted Successfully</h3>

          <button onClick={() => dispatch({ type: "RESET_FORM" })}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
