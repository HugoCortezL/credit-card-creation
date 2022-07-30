import {HomeContainer, LeftContainer, RightContainer, CardContainer, Tarja} from './styles'
import {useState} from 'react'

export default function Home(){
    const [cardPosition, setCardPosition] = useState('front')
    const [cardNumber, setCardNumber] = useState("")
    const [cardValid, setCardValid] = useState("")
    const [cardName, setCardName] = useState("")
    const [cardCVV, setCardCVV] = useState("")


    const handlerChangeInput = (input: string) => {
        if(input == "cvv"){
            setCardPosition('back')
        }else{
            setCardPosition('front')
        }
    }

    const handlerNumberChange = (event: any) => {
        if(event.target.id == "number"){
            if(event.target.value < 9999999999999999n){
                setCardNumber(event.target.value)
            }
        }else if(event.target.id == "valid"){
            if(event.target.value < 999999){
                setCardValid(event.target.value)
            }
        }else if(event.target.id == "name"){
            setCardName(event.target.value)
        }else if(event.target.id == "cvv"){
            if(event.target.value < 1000){
                setCardCVV(event.target.value)
            }
        }
    }

    const formatCardNumber = (number: string):string => {
        var resultNumber = ""
        var qtd = 0
        for(let i = 0; i <number.length;i++){
            resultNumber += number.charAt(i)
            qtd++
            if (qtd == 4){
                resultNumber += " "
                qtd = 0
            }
        }
        return resultNumber
    }

    const formatCardValid = (valid: string):string => {
        var resultValid = ""
        var qtd = 0
        for(let i = 0; i <valid.length;i++){
            resultValid += valid.charAt(i)
            qtd++
            if (qtd == 2){
                resultValid += "/"
            }
        }
        return resultValid
    }

    return(
        <HomeContainer>
            <LeftContainer>
                <h1>Criar Cartão</h1>
                <form >
                    <input type="text" placeholder='Nome' id="name" onFocus={() => handlerChangeInput('name')}  onChange={() => handlerNumberChange(event)} value={cardName}/>
                    <input type="text" placeholder='Número' id="number" onFocus={() => handlerChangeInput('number')} onChange={() => handlerNumberChange(event)} value={cardNumber}/>
                    <div>
                        <input type="text" placeholder='MM/AAAA' id="valid" onFocus={() => handlerChangeInput('valid')}  onChange={() => handlerNumberChange(event)} value={cardValid}/>
                        <input type="number" name="cvv" maxLength={3} size={3} placeholder='CVV' id="cvv" onFocus={() => handlerChangeInput('cvv')}  onChange={() => handlerNumberChange(event)} value={cardCVV}/>
                    </div>
                </form>
                <button>
                    Salvar Cartão
                </button>
            </LeftContainer>
            <RightContainer>
                <CardContainer side={cardPosition}>
                    <p className="number">{formatCardNumber(cardNumber)}</p>
                    <p className="valid">Valid Thru: {formatCardValid(cardValid)}</p>
                    <p className="name">{cardName}</p>
                    <p className="cvv">CVV: {cardCVV}</p>
                </CardContainer>
                <Tarja side={cardPosition}/>
            </RightContainer>
            
        </HomeContainer>
    )
}
