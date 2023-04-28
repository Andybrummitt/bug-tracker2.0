import CreateTicketForm from "@/components/CreateTicketForm";
import { selectName } from "@/redux/store";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../../../components/Layout";

export default function Home() {
  const projectName = useSelector(selectName);
  const [ticketModal, toggleTicketModal] = useState(false);

  return (
    <Layout>
      <div className="mt-8">
        <h1 className="text-2xl xl:text-3xl py-1">{projectName}</h1>
        <button
          onClick={() => toggleTicketModal(true)}
          className="mt-6 bg-blue-500 hover:bg-blue-700 text-white py-2 leading-tight px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
        >
          <span className="mr-2">Create a Ticket</span>
          <Plus />
        </button>
        {ticketModal ? (
          <CreateTicketForm
            project={projectName}
            toggleTicketModal={toggleTicketModal}
          />
        ) : null}
      </div>
    </Layout>
  );
}
