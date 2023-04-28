import { createTicket } from "@/redux/features/ticket/ticketSlice";
import { X } from "lucide-react";
import { FC, useReducer, useState } from "react";
import { useDispatch } from "react-redux";

//  FORM STATE, ACTIONS AND REDUCER
type FormState = {
  title: string;
  description: string;
  type: "Bug" | "Feature";
  priority: "Low" | "Medium" | "High" | "Urgent";
};

type FormAction =
  | { type: "SET_TITLE"; payload: string }
  | { type: "SET_DESCRIPTION"; payload: string }
  | { type: "SET_TYPE"; payload: "Bug" | "Feature" }
  | { type: "SET_PRIORITY"; payload: "Low" | "Medium" | "High" | "Urgent" };

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_DESCRIPTION":
      return { ...state, description: action.payload };
    case "SET_TYPE":
      return { ...state, type: action.payload };
    case "SET_PRIORITY":
      return { ...state, priority: action.payload };
    default:
      return state;
  }
}

//  COMPONENT
interface CreateTicketFormProps {
  project: string;
  toggleTicketModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateTicketForm: FC<CreateTicketFormProps> = ({
  project,
  toggleTicketModal,
}) => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [state, dispatchForm] = useReducer(formReducer, {
    title: "",
    description: "",
    type: "Bug",
    priority: "Medium",
  });

  //  SELECT BOX HELPER FUNCTIONS
  const setTypeAction = (value: string): FormAction => {
    return { type: "SET_TYPE", payload: value as "Bug" | "Feature" };
  };

  const setPriorityAction = (value: string): FormAction => {
    return {
      type: "SET_PRIORITY",
      payload: value as "Low" | "Medium" | "High" | "Urgent",
    };
  };

  //  CHECK REQUIRED FEATURES AND DISPATCH SLICE
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!state.title || !state.description) {
      return setError("Please include a file name and description.");
    }
    console.log(state);
    dispatch(createTicket({ ...state, project, dateCreated: Date.now() }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-slate-800 shadow-md rounded p-4 mt-4 max-w-3xl"
    >
      <div className="flex justify-between items-center">
        <h2>Create a Ticket</h2>
        <button
          aria-label="close modal"
          onClick={() => toggleTicketModal(false)}
        >
          <X />
        </button>
      </div>
      <div className="my-4">
        <label className="block text-md font-bold my-2" htmlFor="projectName">
          Title:
        </label>
        <input
          onFocus={() => setError("")}
          maxLength={40}
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="My Ticket"
          value={state.title}
          id="projectName"
          onChange={(e) =>
            dispatchForm({ type: "SET_TITLE", payload: e.target.value })
          }
        />
        <label
          className="block text-md font-bold my-2"
          htmlFor="projectDescription"
        >
          Description:
        </label>
        <textarea
          onFocus={() => setError("")}
          value={state.description}
          id="projectDescription"
          onChange={(e) =>
            dispatchForm({ type: "SET_DESCRIPTION", payload: e.target.value })
          }
          maxLength={300}
          className="shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline w-full h-28 resize-none outline-none"
          placeholder="Describe your ticket"
        ></textarea>
        <div className="flex">
          <div className="mr-8">
            <label htmlFor="type" className="block text-md font-bold my-2">
              Type of ticket:
            </label>
            <select
              onChange={(e) => dispatchForm(setTypeAction(e.target.value))}
              defaultValue={"Bug"}
              id="type"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Bug</option>
              <option>Feature</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="priorities"
              className="block text-md font-bold my-2"
            >
              Priority:
            </label>
            <select
              onChange={(e) => dispatchForm(setPriorityAction(e.target.value))}
              defaultValue={"Medium"}
              id="priorities"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Urgent</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 bg-blue-500 hover:bg-blue-700 text-white py-2 leading-tight px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Ticket
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default CreateTicketForm;
