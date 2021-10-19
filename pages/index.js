import { useState } from 'react';
import { usePopper } from 'react-popper';
import Head from 'next/head';

export default function Home() {
  const [showWidget, setShowWidget] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(
    referenceElement,
    popperElement,
    {
      modifiers: [{ name: 'offset', options: { offset: [10, 10] } }],
    },
  );
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>React Feedback Widget Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button
        onClick={() => setShowWidget(!showWidget)}
        ref={setReferenceElement}
        className="absolute bottom-4 right-4 p-2 rounded-l-lg rounded-t-lg bg-blue-700 hover:bg-blue-600 shadow-md hover:shadow-lg text-white"
        type="button"
      >
        Feedback?
      </button>
      {showWidget && (
        <div
          className="bg-white p-2 rounded-md shadow-lg"
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <form>
            <label htmlfor="feedback">How can we improve?</label>
            <div className="flex flex-col space-y-2">
              <textarea
                id="feedback"
                className="p-2 h-24 w-64 border border-gray-400 rounded-md"
                type="textarea"
              ></textarea>
              <button
                className="p-2 ml-auto rounded-lg bg-blue-700 hover:bg-blue-600 shadow-md hover:shadow-lg text-white"
                type="submit"
              >
                Send Feedback
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
