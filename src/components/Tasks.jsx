import NewTask from "./NewTask";

export default function Tasks({task}) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">
                Tasks
            </h2>
            <NewTask />
            <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>
           <ul>
            <li className=" px-2 py-6 rounded-md bg-stone-200"> Learn the React</li>
           </ul>
        </section>
    )
}1