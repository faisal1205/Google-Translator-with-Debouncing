//helper function doing input value no need to type again and again
function read(id)
{
    return document.getElementById(id).value
}
let id;

async function Translate()
{
    try{
         //1.text to translate
const input = read("inputText") 
  console.log(input)                           // .de for .com becz we are not using key
const inputLanguage = read("inputLanguage")
const outputLanguage = read("outLanguage")


const res = await fetch("https://libretranslate.de/translate",{   
    method: "POST",
    body: JSON.stringify({
            q: input,
            source:inputLanguage,
            target:outputLanguage,
            format:"text",
        }),
 headers:{    //if server is not showing output then we have to give header

            "Content-Type": "application/json",
        },  
});

const { translatedText } = await res.json()

return translatedText


    }

    catch(err){
  console.log(err)
    }
   
}

function appendText(text)
{
    
        document.getElementById("outputValue").innerText = text
    
    
}


async function main()
{
    let data = await Translate()

    if(data === undefined)
    {
        return false
    }
    appendText(data)
    console.log(data)
}

function debounce(func,delay)
{
    if(id)
    {
        clearTimeout(id)
    }
    id= setTimeout(function()
    {
        func()
    },delay)
}

// async function Translate()
// {
//     try{
//          //1.text to translate
// const input = read("inputText") 
//   console.log(input)                           // .de for .com becz we are not using key
// const inputLanguage = read("inputLanguage")
// const outLanguage = read("outLanguage")


// const res = await fetch("https://libretranslate.de/translate",{   
//     method: "POST",
//     body: JSON.stringify({
//             q: input,
//             source:inputLanguage,
//             target:outLanguage,
//             format:"text",
//         }),
//  headers:{    //if server is not showing output then we have to give header

//             "Content-Type": "application/json",
//         },  
// });

// const { translatedText } = await res.json()

// document.getElementById("outputValue").innerText = translatedText

//     }

//     catch(err){
//   console.log(err)
//     }
   
// }