import React from 'react'
import './app.css'
// import './assets/fonts/iconfont.css'
const Quote_Data = [
  {
    text: 'Fall seven times and stand up eight.',
    author: 'Japanese Proverb'
  },
  {
    text: 'Certain things catch your eye, but pursue only those that capture the heart.',
    author: 'Ancient Indian Proverb'
  },
  {
    text: 'I didn’t fail the test. I just found 100 ways to do it wrong.',
    author: 'Benjamin Franklin'
  },
  {
    text: 'If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.',
    author: 'Sheryl Sandberg'
  },
  {
    text: 'Whether you think you can or you think you can’t, you’re right.',
    author: 'Henry Ford'
  }
]
export default class App extends React.Component {
  state = {
    quote: Quote_Data[0].text,
    author: Quote_Data[0].author,
    col:'pink'
  }
  handleClick = () => {
    let num = Math.floor(Math.random() * Quote_Data.length)
    let newQuote = Quote_Data[num];
    this.setState({
      quote: newQuote.text,
      author: newQuote.author,
      col:'#'+Math.floor(Math.random()*(2<<23)).toString(16)
    })
  }
  render (){
    return (
      <div id="quote-box">
        <div className="quote">
        <p id="quote-text" style= {{color:this.state.col}}>"{this.state.quote}</p>
        <span id="quote-author" style= {{color:this.state.col}}>--{this.state.author}</span>
        </div>
        <div className="buttons">
          <a href="twitter.com/intent/tweet" id="tweet-quote" title='Tweet this quote!' style= {{backgroundColor:this.state.col}}>
          <i class="fab fa-twitter"></i>
          </a>
          <button id="new-quote" onClick={this.handleClick} style= {{backgroundColor:this.state.col}}>New Quote</button>
        </div>
      </div>
    )
  }
}