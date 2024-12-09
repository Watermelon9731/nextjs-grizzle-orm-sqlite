import ResponseItem from "../components/response-item";
import { db } from "../db";
import { response } from "../db/schema";

export default async function ResponsePage() {
  const data = await getResponses();
  return (
    <div className="flex flex-col justify-center items-center border-2 gap-5 rounded-md p-6">
      <h2 className="text-2xl font-bold text-center">Responses</h2>
      {data.length > 0 ? (
        <ul className="space-y-4">
          {data.map((response) => (
            <ResponseItem response={response} key={response.id} />
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 py-4">No responses yet.</p>
      )}
    </div>
  );
}

async function getResponses() {
  return await db.select().from(response);
}
