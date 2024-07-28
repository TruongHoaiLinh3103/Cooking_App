import "../styles/pagedata.scss";
import "../styles/botao-1.scss";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { memo } from 'react';

const PageData = ({ data }) => {
    
    return (
        <div className='PageData'>
            <div className='PageData-data'>
                {data.map((item) => {
                    return(
                        <div className='PageData-data_item' key={item.id}>
                            <div className='data_item-img'>
                                <LazyLoadImage src={item.img} alt={item.name} />
                            </div>
                            <div className='data_item-detal'>
                                <h3>{item.name}</h3>
                                <p>{item.nguyenlieu}</p>
                            </div>
                            <section className="botao-1" style={{margin: "auto 0px"}}>
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
                    )
                })}
            </div>
        </div>
    );
};

export default memo(PageData);