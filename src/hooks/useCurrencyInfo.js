import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDZVq8TiFqOhZIODZyM7yVBvcuyK-f2Wd0`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;
 git init
 git add .
 git commit -m "first commit"
 git branch -M main
 git remote add origin https://github.com/peeyush50/Currency_converter.git
  git push -u origin main