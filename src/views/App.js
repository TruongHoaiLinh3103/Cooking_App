// import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/App.scss';
import '../styles/botao-1.scss';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../redux/action/actionTodo';

function App(props) {
    const messageOne = useRef(null);
    const messageTwo = useRef(null);

    const [inputComment, setInputComment] = useState(0);
    const [editerComment, setEditerComment] = useState("")
    //Add
    const addCMTOne = () => {
        if(messageOne.current.value === ""){
            messageOne.current.focus();
        }else{
            props.addTodo({
                id: Math.random() * 10000,
                comment: messageOne.current.value,
                user: "Anikey"
            });
            messageOne.current.value = "";
        }
    }
    const addEnterCMTOne = (e) => {
        if(e.which === 13){
            if(messageOne.current.value === ""){
                messageOne.current.focus();
            }else{
                props.addTodo({
                    id: Math.random() * 10000,
                    comment: messageOne.current.value,
                    user: "Anikey"
                })
                messageOne.current.value = "";
            }
        }
    }
    const addCMTTwo = () => {
        if(messageTwo.current.value === ""){
            messageTwo.current.focus();
        }else{
            props.addTodo({
                id: Math.random() * 10000,
                comment: messageTwo.current.value,
                user: "SanSan"
            });
            messageTwo.current.value = "";
        }
    }
    const addEnterCMTTwo = (e) => {
        if(e.which === 13){
            if(messageTwo.current.value === ""){
                messageTwo.current.focus();
            }else{
                props.addTodo({
                    id: Math.random() * 10000,
                    comment: messageTwo.current.value,
                    user: "SanSan"
                });
                messageTwo.current.value = "";
            }
        }
    }
    //Edit
    const openEditCMT = (item) => {
        setInputComment(item.id);
        setEditerComment(item.comment)
    }
    const editEnterCMT = (e, item) => {
        if(e.which === 13) {
            props.editTodo({
                id: item.id,
                comment: editerComment,
                user: item.user
            });
            setInputComment(0);
        }
    }
    //Delete
    const deleteCMT = (item) => {
        props.deleteTodo(item)
    }
  return (
    <div className='Body'>
        <div className="AppOne">
            <div className='App-input'>
                <img src='https://i.pinimg.com/originals/2b/6a/43/2b6a431ec6a551cd2d11a47102daefed.png' alt='avatar' />
                <input type='text' ref={messageOne} onKeyDown={(e) => addEnterCMTOne(e)} placeholder='Chat'/>
                <section className="botao-1" onClick={() => addCMTOne()}>
                    <button>
                        <div className="icone__flexinha">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                        <span>Send</span>
                    </button>
                </section>
            </div>
        </div>
        <div className='App-center'>
            <ul className="App-list">
                {props.dataTodo.map((item) => {
                    return(
                        <>
                            {item.user === "Anikey" ?
                                <li key={item.id}>
                                    {inputComment === item.id ? 
                                    <textarea value={editerComment} 
                                        onKeyDown={(e) => editEnterCMT(e, item)}
                                        onChange={(e) => setEditerComment(e.target.value)}
                                    /> 
                                    : 
                                    <span><b style={{color: item.user === "Anikey" ? "black" : "rgb(139, 115, 209)"}}>{item.user}:</b> {item.comment}</span>}
                                    <div className="App-list_svg">
                                        <div className="App-list_svg__edit" onClick={() => openEditCMT(item)}>
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </div>
                                        <div className="App-list_svg__delete" onClick={() => deleteCMT(item)}>
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </div>
                                    </div>
                                </li>
                                :
                                <li key={item.id}>
                                    <div className="App-list_svg">
                                        <div className="App-list_svg__delete" onClick={() => deleteCMT(item)}>
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </div>
                                        <div className="App-list_svg__edit" onClick={() => openEditCMT(item)}>
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </div>
                                    </div>
                                    {inputComment === item.id ? 
                                    <textarea value={editerComment} 
                                        onKeyDown={(e) => editEnterCMT(e, item)}
                                        onChange={(e) => setEditerComment(e.target.value)}
                                    /> 
                                    : 
                                    <span><b style={{color: item.user === "Anikey" ? "black" : "rgb(139, 115, 209)"}}>{item.user}:</b> {item.comment}</span>}
                                </li>
                            }
                        </>
                    )
                })}
            </ul>
        </div>
        <div className="AppTwo">
            <div className='App-input'>
                <section className="botao-1" onClick={() => addCMTTwo()}>
                    <button>
                        <div className="icone__flexinha">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                        <span>Send</span>
                    </button>
                </section>
                <input type='text' ref={messageTwo} onKeyDown={(e) => addEnterCMTTwo(e)} placeholder='Chat'/>
                <img src='https://i.pinimg.com/originals/63/83/03/6383033aea7cbbe0845761e5f8ed0da3.png' alt='avatar' />
            </div>
        </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
