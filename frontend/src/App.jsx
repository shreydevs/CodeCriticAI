import { useState,useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import Markdown from 'react-markdown'
import prism from 'prismjs'
import reHypeHighlight from 'rehype-highlight'
import "highlight.js/styles/github-dark.css"
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [code, setCode] = useState('')
  const [review, setReview] = useState('')
  



  useEffect(() => {
    // Highlight code blocks
    prism.highlightAll();
  },[]);

async function reviewCode(){
  const response=await axios.post('https://code-critic-ai.onrender.com/ai/review', { code })

  setReview(response.data);
}

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
              <Editor
                value={code}
                onValueChange={code => setCode(code)}
                highlight={code => prism.highlight(code, prism.languages.js, 'js')}
                padding={10}
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: 16,
                  height: '100%',
                  width: '100%',
                  color: 'white',
                }}
              />
          </div>
          <div onClick={reviewCode}
           className="review">Review

          </div>
        </div>
        
        <div className="right">
                
                <Markdown rehypePlugins={[reHypeHighlight]}> 

                {review.response}
                </Markdown>
        </div>
      </main>
    </>
  )
}



export default App
