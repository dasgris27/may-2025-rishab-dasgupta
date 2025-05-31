export default function TailwindStylingTestPage() {
  return (
    <>
      <div className="border-2 border-black text-black">
        <p className="bg-yellow-500 p-2 border-b border-b-black mx-8">F</p>
        <p className="bg-amber-500 p-2 border-b border-b-black mx-6">I</p>
        <p className="bg-orange-500 p-2 border-b border-b-black mx-4">R</p>
        <p className="bg-red-500 p-2 mx-2">E</p>
      </div>
      <div className="flex p-2 justify-between border-black border-2">
        <div className="m-1 border-red-800 border-2">
          {/* child1 */}
          first div element
        </div>
        <div className="m-8 w-96 border-blue-800 border-2">
          {/* child2 */}
          <p>content</p>
          <p>link</p>
          <p>image</p>
        </div>
        <div className="m-1 border-green-800 border-2">
          {/* child3 */}
          <h1>third div element</h1>
        </div>
      </div>
    </>
  );
}
