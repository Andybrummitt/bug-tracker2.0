import { createProject } from "@/redux/features/project/projectSlice";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../../components/Layout";

export default function Home() {
  const [projectName, setProjectName] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!projectName.length) {
      return setError("Name required.");
    }
    dispatch(createProject(projectName));
    router.push("/dashboard/tickets");
  };

  const handleInputKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <Layout>
      <div className="mt-8">
        <h1 className="text-2xl xl:text-3xl py-1">Create a project</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-slate-800 shadow-md rounded p-4 mt-4 max-w-3xl"
        >
          <label className="block text-md font-bold mb-2" htmlFor="projectName">
            Name your project
          </label>
          <div className="my-4">
            <input
              onFocus={() => setError("")}
              maxLength={30}
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Project Name"
              value={projectName}
              id="projectName"
              onChange={(e) => setProjectName(e.target.value)}
              onKeyDown={handleInputKeyDown}
            />
            <button
              type="submit"
              className="mt-6 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create Project
            </button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </Layout>
  );
}
