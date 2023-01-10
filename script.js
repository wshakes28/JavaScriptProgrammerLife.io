const message = document.querySelector(".messagebox")
let message2 = document.querySelector(".messagebox2")
const action = document.querySelector(".actionbutton")
const action2 = document.querySelector(".actionbutton2")
const body = document.querySelector("body")
const img = document.querySelector("img")
const container = document.querySelector(".button-container")

action.addEventListener('click', firstMessage)

let first = [
 "Today is the beginning of a new life. No more hard toil for paltry wages at dead end jobs. No, today you begin your first day as a juniour developer.",
 "Let's get on the train to go to work, shall we?"
]

let firstIterator = first[Symbol.iterator]()


function peddleText() {
        message.innerText = ''
        message.innerText += JSON.stringify(firstIterator.next()).replace(/{"value":"|"done":|false}|{ true}|",/g, " ")
    
    
    
  
    

    
}

let second = [ 
    "You have just arrived at the new startup company where you will make you entry into the programming world as a junior dev.",
    "You walk into the building and take the elevator to the 10th floor. As you walk in your greeted by the receptionist. You greet her in return and let her know that you are a new employee.",
    'She directs you to the office of the team leader you will be working with. As you walk down the corridor toward the team leaders office, someone calls your name. You turn and look as a man with a look of despondence walks toward you. "Your the new guy aren\'t you?"',
"The name's billy, but people like to call me willy for some reason. I just want to give you a warning before you meet our team leader Walter.",
"He's a real slave driver if you know what I mean; Like's to milk the cow for all it's worth if you get my drift. Anyway, if he asks you if want to work with the back end, tell him you that you're not that as good with the backend as the front end.",
"If you tell him that you can work backend, you'll end up spiraling down an endless hole of php and mysql from which you will never see the light of day. Peace, I gotta go."
    ]
    
    let secondIterator = second[Symbol.iterator]()
    
    
    function peddleText2() {
        
        message.innerText = ''
        message.innerText += JSON.stringify(secondIterator.next()).replace(/{"value":"|"done":|false}|{true} |",/g, " ")
    
        
    }

    let third = [ 
        "Ahh, Nice to meet you. My name is Walter. We are glad to have you here at Excellence Agency. We only choose the best and the brightest. ",
        "I'm aware that we hired you on as front end developer, but in your interview you did say that you could work the back end also. Are you competent enough to work a back end position at this point?",

        ]
        
        let thirdIterator = third[Symbol.iterator]()
        
        
        function peddleText3() {
            
            message.innerText = ''
            message.innerText += JSON.stringify(thirdIterator.next()).replace(/{"value":"|"done":|false}|{true} |",/g, " ")
        
            
        }

        let fourth = [ 
            "Here is where you will be working from now on",
            "It's not exactly a Marriot Suite, but it ought to be able to serve your needs.",
            "This paper here contains your user Id and password so that you can log in to the database.",
            "For your first task, I need you to update the client list with this new data",
            "I expect for this to be done by the end of tomorrow",
            "See you later. and oh... by the way..",
            "If you should fail to update the client list properly, well.... let's just say I will be more than unimpressed"
    
            ]
            
            let fourthIterator = fourth[Symbol.iterator]()
            
            
            function peddleText4() {
                
                message.innerText = ''
                message.innerText += JSON.stringify(fourthIterator.next()).replace(/{"value":"|"done":|false}|{true} |",/g, " ")
            
                
            }

       




 



function firstMessage() { 
peddleText()

setTimeout (() => {
    message.innerText = ''
    peddleText()
    action.innerText = "To Work"
}, 2000)

    
    
    
  

    

 



action.removeEventListener('click', firstMessage)
action.addEventListener('click', secondMessage)}

let secondMessage = () => {
    
    body.style.backgroundImage = "url(https://cdn.vectorstock.com/i/1000x1000/16/81/europe-houses-and-building-vector-17751681.webp)"
    img.src = "https://media2.giphy.com/media/cKi7qL1OC6XklHL06s/giphy.gif?cid=ecf05e4744su6hithkebc0mbdmo4mbcub5n9yokspx4lb3xo&rid=giphy.gif&ct=s"
   
        peddleText2()
        setTimeout (peddleText2, 4000)
        setTimeout (peddleText2, 8000)
        setTimeout (peddleText2, 12000)
        setTimeout (peddleText2, 16000)
        setTimeout (() => {
            peddleText2()
            action.innerText = "Meet Walter"
        }, 20000)

            

        


                action.removeEventListener('click', secondMessage)
                action.addEventListener('click', thirdMessage)
   
    
}


function thirdMessage () {
    body.style.backgroundImage = "url(https://t3.ftcdn.net/jpg/02/51/99/08/360_F_251990861_KIcXHkkQqT8jwLMZA5Gl8VwYbOt5yZH9.jpg)"
    body.style.backgroundSize = "cover"
    img.src = "https://media0.giphy.com/media/jegckRcsGVeehFwezy/giphy.gif?cid=ecf05e471a8zaghysg32hbnp0mkqv98v9w3y6fu7wy9pjaha&rid=giphy.gif&ct=s"
    
    peddleText3()
    setTimeout(() => {
        peddleText3()

        action.hidden = true

        let buttonYes = document.createElement("button")
    buttonYes.innerText = "Yes, I can work back end"
    buttonYes.style.display = "inline-block"
    buttonYes.style.margin = "0 2rem"
    
    container.appendChild(buttonYes)

    buttonYes.addEventListener('click', e => {
        img.style.width = "450"
        img.style.height = "500"
        let text3a = document.createTextNode("Wonderful! Let me show you to your new work space")
        message.innerText = ''
        message.appendChild(text3a)

        container.hidden = true

        action.hidden = false
        action.innerText = "To Office"
        action.removeEventListener('click', thirdMessage)
        action.addEventListener('click', fourthMessage)
    })

    let buttonNo = document.createElement("button")
    buttonNo.innerText = "Actually, I'd be better off working in the front end."
    buttonNo.style.display = "inline-block"
    buttonNo.style.margin = "0 2rem"

    buttonNo.addEventListener('click', e => {
        
        body.style.backgroundImage = "url(https://i.pinimg.com/originals/c7/55/92/c75592103569db4c2d44e93213a7e4f2.jpg)"
        img.src = "https://media1.giphy.com/media/duA7kd0YrJWOBpdVzQ/giphy.gif?cid=ecf05e47id0duxov5maul118uq8sztiuqh66qepmvbj35coh&rid=giphy.gif&ct=s"
        img.style.width = "450"
        img.style.height = "500"
        img.style.marginLeft = "2rem"
        
        let text3b = document.createTextNode("Where do you think you are? Burger King? Well, you won't be having your way here. Make an about face, and walk your pretentious ass out the same door you came in. GET OOUUTTTT!")
        message.removeChild(text2)
        message.appendChild(text3b)

        container.hidden = true
    })
    
    container.appendChild(buttonNo)
    }, 2000)

    

    }

    function fourthMessage() {

        body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2018/02/21/17/24/concrete-3170964_960_720.jpg)"
        img.src = "https://media0.giphy.com/media/jegckRcsGVeehFwezy/giphy.gif?cid=ecf05e471a8zaghysg32hbnp0mkqv98v9w3y6fu7wy9pjaha&rid=giphy.gif&ct=s"

        peddleText4()
        setTimeout(peddleText4, 4000)
        setTimeout(peddleText4, 8000)
        setTimeout(peddleText4, 12000)
        setTimeout(peddleText4, 16000)
        setTimeout(peddleText4, 20000)
        setTimeout(peddleText4, 24000)



    }











