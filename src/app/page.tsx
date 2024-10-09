'use client';
import { useState } from 'react';
import data from '../data/data.json';
export default function Home() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const { questions } = data;

  const getRandQuestion = () => {
    const randIndex = Math.floor(Math.random() * questions.length);
    setQuestionIndex(randIndex);
  };

  const changeQuestion = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setQuestionIndex(Number.parseInt(e.target.value));
  };

  return (
    <div className="">
      <main className="pb-10">
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row gap-2 p-6">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded basis-1/2"
              onClick={getRandQuestion}>
              Random Question
            </button>
            <select
              onChange={changeQuestion}
              className="basis-1/2 md:max-w-[50%] overflow-hidden bg-blue-200 px-4 py-2 rounded">
              {questions.map((question, index) => (
                <option key={index} value={index}>
                  {question.question}
                </option>
              ))}
            </select>
          </div>
          <h2 className="text-center text-2xl mb-2 px-6">
            {questionIndex + 1}. {questions[questionIndex].question}
          </h2>
          <div
            className="px-6"
            dangerouslySetInnerHTML={{
              __html: questions[questionIndex].answer,
            }}
          />
        </div>
      </main>
    </div>
  );
}
