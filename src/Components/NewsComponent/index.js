import * as Styles from './style.js'
import { Link } from 'react-router-dom';
// import NewsImage from '../../Images/NewsImage.jpg'

const NewsComponent = ({data})=>{

    const {image, title,description,source} = data;

    

    
    
    // https://newsdata.io/api/1/news?apikey=pub_398040a4699a507dc55cf0212bdb4dec3ee42&q=business
    return (
        
        <Styles.NCMainContainer>
            
            <Styles.NewsImageEl src={image} alt='News'/>
            <Styles.NewsHeaderEl>{title}</Styles.NewsHeaderEl>
            <Styles.NewsContent>{description}</Styles.NewsContent>
            <Link style={{marginTop:'auto',
marginRight:'auto'}} to={source} target='_self' rel='nofollow'>
            <Styles.NewsButton>Read More</Styles.NewsButton>
            </Link>
            
        </Styles.NCMainContainer>
        
        
    )
}

export default NewsComponent