import React from 'react'
import { useState, useEffect } from 'react';
import InputBox from '../HelperComponents/InputBox';
import ResponseModal from '../HelperComponents/ResponseModal';

const Generator = () => {
  const [showModal, setShowModal] = useState(false);
  // const [data, setData] = useState([]);
  const [response, setResponse] = useState('Data before API fetched');
  const [inputValue, setInputValue] = useState('');



console.log(">>>>",response);
  
    


  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch('https://catfact.ninja/fact');
  //     const json = await response.json();
  //     setData(json);
  //   }

  //   fetchData();
  // }, []);


  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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'
        },
        body: JSON.stringify({
          'model': 'text-davinci-001',
          'prompt': inputValue,
          'temperature': 0.4,
          'max_tokens': 64,
          'top_p': 1,
          'frequency_penalty': 0,
          'presence_penalty': 0
        })
      });
      const json = await response.json();
      // setData(json);
      setResponse(json.choices[0].text);
    }

    fetchData();
  }, []);

  



  return (
    <div>
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Generator</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="isolate bg-white -mt-4 py-24 px-6 sm:py-32 lg:px-8">
              <div className="justify-center mx-auto -mt-24 max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Enter your query</h2>
              </div>
              <div className="mx-auto mt-8 max-w-4xl ">
                <InputBox inputValue ={inputValue} handleInputChange = {(event)=>setInputValue(event.target.value)}/>
                <div className="flex flex-row mt-8">
                    <div className = "basis-1/4 md:basis-1/4 mx-auto px-0.5" >
                        <button type="button" onClick={() => setShowModal(true)} className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Skill Matrix Generator
                        </button>
                    </div>
                    <div className = "basis-1/4 md:basis-1/4 mx-auto px-0.5" >
                        <button type="button" onClick={() => setShowModal(true)} className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Call Script Generator
                        </button>
                    </div>
                    <div className = "basis-1/4 md:basis-1/4 mx-auto px-0.5" >
                        <button type="button" onClick={() => setShowModal(true)} className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Attractive Template Creator
                        </button>
                    </div>
                    <div className = "basis-1/4 md:basis-1/4 mx-auto px-0.5" >
                        <button type="button" onClick={() => setShowModal(true)} className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Interview preparation script Generator
                        </button>
                    </div>
                  {showModal ? ( <ResponseModal response={response} setShowModalFalse ={() => setShowModal(false)}/>) : null}
                </div>
              </div>
            </div>
          </div>
        </main>
    </div>
  )
}

export default Generator