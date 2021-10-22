const assert = (expect, expected) => expect === expected

const createReplacement = (word) => {
  const replacement = "*&#$%"
  const full = Math.floor(word.length / 5)
  const additions = word.length % 5
  return replacement.repeat(full) + replacement.slice(0, additions)
}

const profanityFilter = (tweet) => {
  const allLines = tweet.split("\n")
  const swearWords = allLines[0].split(" ")
  allLines.shift()
  let text = allLines.join("\n").trim()
  swearWords.forEach((swear) => {
    const regex = new RegExp(`(${swear})\\b`, "gi")
    const replacement = createReplacement(swear)
    text = text.replace(regex, replacement)
  })
  return text
}

console.log({
  input1: assert(
    profanityFilter(`hate fudgesicles
I bleeping hate those fudgesicles.`),
    `I bleeping *&#$ those *&#$%*&#$%*.`
  ),
  input2: assert(
    profanityFilter(`fricking
    I cannot eat another FRICKing meatball!`),
    `I cannot eat another *&#$%*&# meatball!`
  ),
  input3: assert(
    profanityFilter(`fruit
    I wonder how much fruit? is actually in fruitcake?`),
    `I wonder how much *&#$%? is actually in fruitcake?`
  ),
  input4: assert(
    profanityFilter(`COUNT
You know that I am called the Count 
Because I really love to count 
I could sit and count all day 
Sometimes I get carried away 
I count slowly, slowly, slowly getting faster 
Once I've started to count it's really hard to stop Faster, faster. It is so exciting! 
I could count forever, count until I drop 
1! 2! 3! 4! 
1-2-3-4, 1-2-3-4, 
1-2, i love to count whatever the ammount haha! 1-2-3-4, heyyayayay heyayayay that's the sound of the count! 
I count the spiders on the wall. 
I count the cobwebs in the hall. 
I count the candles on the shelf. 
When I'm alone, I count myself! 
I count slowly, slowly, slowly getting faster 
Once I've started to count it's really hard to stop Faster, faster. It is so exciting! 
I could count forever, count until I drop 
1! 2! 3! 4! 
1-2-3-4, 1-2-3-4, 1, 
2 I love to count whatever the 
Ammount! 1-2-3-4 heyayayay heayayay 1-2-3-4 That's the song of the Count!`),
    `You know that I am called the *&#$% 
Because I really love to *&#$% 
I could sit and *&#$% all day 
Sometimes I get carried away 
I *&#$% slowly, slowly, slowly getting faster 
Once I've started to *&#$% it's really hard to stop Faster, faster. It is so exciting! 
I could *&#$% forever, *&#$% until I drop 
1! 2! 3! 4! 
1-2-3-4, 1-2-3-4, 
1-2, i love to *&#$% whatever the ammount haha! 1-2-3-4, heyyayayay heyayayay that's the sound of the *&#$%! 
I *&#$% the spiders on the wall. 
I *&#$% the cobwebs in the hall. 
I *&#$% the candles on the shelf. 
When I'm alone, I *&#$% myself! 
I *&#$% slowly, slowly, slowly getting faster 
Once I've started to *&#$% it's really hard to stop Faster, faster. It is so exciting! 
I could *&#$% forever, *&#$% until I drop 
1! 2! 3! 4! 
1-2-3-4, 1-2-3-4, 1, 
2 I love to *&#$% whatever the 
Ammount! 1-2-3-4 heyayayay heayayay 1-2-3-4 That's the song of the *&#$%!`
  ),
})
