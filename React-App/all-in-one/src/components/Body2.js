import React,{useState} from 'react'
import './Body2.css';

const faqs = [
    {
      title: "Where are these chairs assembled?d",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
    },
    {
      title: "How long do I have to return my chair?",
      text:
        "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
    },
    {
      title: "Do you ship to countries outside the EU?",
      text:
        "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
    },
    {
        title: "How long do I have to return my chair?",
        text:
          "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
      },
      {
        title: "Do you ship to countries outside the EU?",
        text:
          "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
      }
  ];

function Body2() {
  return (
    <div>
    <section className='body2-style'>
      <div>
        <div className='row'>
            <div className="col-lg-5 first-row">
            <div className="img">
                <img src="https://www.avanse.com/viewPagesAssets/img/estimate-of-your-education-loan.webp" alt="hero image" />
            </div>
            </div> 
            <div className="col-lg-1"></div>
            <div className="col-lg-6 second-row">
            <br />
            <div className='inrow2'>
            <p className='learning'>LEARN ANYTHING</p>
            <h1 className='benifits'>Benefits About Online Learning Expertise</h1> 
            </div>
            <Accordion data={faqs} />
            </div>

            
        </div>
      </div>
      </section>
    </div>
  )
}

function Accordion({data}){
    const [curOpen, setcurOpen] = useState(null);
    return(
        <div className="accordion">
            {data.map((element, index) => (
                <AccordionItem curOpen = {curOpen} onOpen = {setcurOpen} title = {element.title} text = {element.text} num = {index} key = {element.title}></AccordionItem>
            ))}
        </div>
    )
}

function AccordionItem({ curOpen, onOpen, num, title, text }){
    const isOpen = num === curOpen;

    function handleToggle() {
        onOpen(isOpen ? null : num);
      }

    return(
        <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
            <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
            <p className="title">{title}</p>
            <p className="icon">{isOpen ? <i class='far fas fa-chevron-up'></i> : <i class='far fas fa-chevron-down'></i>}</p>

            {isOpen && <div className="content-box">{text}</div>}
        </div>
    )
}


export default Body2
