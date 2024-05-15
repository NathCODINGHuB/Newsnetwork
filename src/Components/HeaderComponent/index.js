import * as Styles from './style';
import { TfiSearch } from "react-icons/tfi";

const optionslist = ['Business','Entertain','General','Health','Technology','Sports','Science']
const HeaderComponent =({headerdata})=>{
    const {Catageroy,onChangeCatageroy,onChangeInput,InputValue,Bringsearchdata,setInputValue}=headerdata
    const SearchClicked=(event)=>{
        event.preventDefault();
        Bringsearchdata(InputValue);
        
        setInputValue('');
    }
    return(<Styles.HeaderContainer>
        <Styles.HeaderContainer2>
        <Styles.Logo>Daily News 
            <Styles.Logosub> Network</Styles.Logosub></Styles.Logo>
        <Styles.SearchInputContainer onSubmit={SearchClicked}>
        <Styles.SearchInput value={InputValue}  onChange={(event)=>onChangeInput(event.target.value)} placeholder='Search ' type='search'/>
        <Styles.Searchbutton  type='submit'>
        <TfiSearch size={20}/>
        </Styles.Searchbutton>
        </Styles.SearchInputContainer>
        <Styles.SelectInput value={Catageroy} onChange={(e)=>onChangeCatageroy(e.target.value)}>
            {
                optionslist.map(each=><Styles.OptionInput key={each}>{each}</Styles.OptionInput>)
            }
        </Styles.SelectInput>
        </Styles.HeaderContainer2>
        </Styles.HeaderContainer>)
}
export default HeaderComponent