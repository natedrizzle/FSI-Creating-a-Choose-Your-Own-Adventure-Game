// Your Code Here+
let firstAnswer  = window.prompt('Do you head left or right?')
if(firstAnswer === 'left'){
    let secondAnswer = window.prompt(`You come across a stray cat. 
It scampers off down a small hole, just large enough for you to crawl through. 
Do you follow it, or continue on your path?`)
    if (secondAnswer === 'follow it') {
        let secondAnswer = window.prompt('You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.')
        if(secondAnswer === 'stay') {
            let secondAnswer = window.prompt('You live happily amongs the cats for the rest of your days.')
        } else if (secondAnswer === 'spread the word') {
            let secondAnswer = window.alert('After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.')
        }

    }
} else if(firstAnswer === 'right'){
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
On the other side of him, you see a shiny chest of treasure. Another path would 
lead you away from the dragon altogether. Which path do you take?`)   
    if (secondAnswer === 'fight the dragon') {
        let thirdAnswer = window.prompt('You slay the dragon with a powerful spell, do you keep the treasure for yourself or do you give it to the peasantry of your village ?') 
        if (thirdAnswer === 'keep the treasure') {
        let fourthAnswer = window.prompt('You come across a stray cat. They wish to split the treasure between you and his colony') 
        }  else if (thirdAnswer === 'give to the poor') {
            let fourthAnswer = window.prompt('You come across a stray cat. They speak of how their colony would benefit more from the treasure')
            if (fourthAnswer === 'Give to the colony') {
            let fifthAnswer = window.prompt('You split the treasure with the colony. hooray!') 
            }    else if (fourthAnswer === `Refuse`) {
                let fifthAnswer = window.prompt('the kittens mutilate you, take your treasure, and eat you. Your adventure ends here.')
                }
        else if (secondAnswer === "sneak past the sleeping dragon") {
    let secondAnswer = window.prompt('You come across a stray cat. In less than a second, it conjures a powerful spell that kills the dragon as you sneak past it.  Do you follow it, or continue on your path?') 
           if (thirdAnswer === 'follow it') {
            let fourthAnswer = window.prompt('You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.')
            if (fourthAnswer === 'stay'){
                let fifthAnswer = window.prompt ('You live happily amongst the colony for the rest of your days')
            } else if (fourthAnswer === 'spread the word') {
                let secondAnswer = window.alert('After leaving the colony, you are never able to find it again; without proof, noone believes your story, which passes into legend')
            }
        }
        }
        }
        }
        }