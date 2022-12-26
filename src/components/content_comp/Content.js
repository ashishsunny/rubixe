import '../../components/content_comp/index.css'
import Card from '../card/card';
import card_data from '../../data/card_data'
function Content(props) {
  
    const img = props.img_loc
    let image = null
    if (img !== undefined) image = require(`../../images/${img}`);

    
  return (
    <div className='content__comp' style={{backgroundColor:props.bgnd, flexDirection: props.card ? "column" : "row"}}>
    <div className='content__comp_para' style={{width: img ?  "800px":  "auto"}}>
        <h3 className='content__headtext'>{props.head_text}</h3>
        <div><p className='content__para1'>{props.para1}</p><br/>
        <p className='content__para2'>{props.para2}</p>
        </div>
    </div>
    {img && <div className='content__comp_image' style={{display : img ? 'block' : 'none' }}>
        <img className='content_image' src={image} alt="" />
    </div>}
    <div className='content__card-sec'>
    {
      props.card && <Card bgnd={card_data[0].title_bgnd} card_no={card_data[0].card_no} content={card_data[0].content} image={card_data[0].img} bottom={card_data[0].bottom}/>
    }
    {
      props.card && <Card bgnd={card_data[1].title_bgnd} card_no={card_data[1].card_no} content={card_data[1].content} image={card_data[1].img} bottom={card_data[1].bottom}/>
    }
    {
      props.card && <Card bgnd={card_data[2].title_bgnd} card_no={card_data[2].card_no} content={card_data[2].content} image={card_data[2].img} bottom={card_data[2].bottom}/>
    }
    {
      props.card && <Card bgnd={card_data[3].title_bgnd} card_no={card_data[3].card_no} content={card_data[3].content} image={card_data[3].img} bottom={card_data[3].bottom}/>
    }
    {
      props.card && <Card bgnd={card_data[4].title_bgnd} card_no={card_data[4].card_no} content={card_data[4].content} image={card_data[4].img} bottom={card_data[4].bottom}/>
    }
    </div>
    </div>
  )
}

export default Content