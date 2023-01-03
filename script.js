"use strict"

/**
 * @author Yao Kan KOUASSI
 * @date Jan 2, 2023
 * @abstract Exercises XP Ninja - Mini-Project : Hanging Game
 */

// 1. Prompt player 1 for a word.
let word = prompt("[Player 1]: Enter a word (min 8 letters): ")
// Present the word in the console with stars
let guessedWord = '*'.repeat(word.length)
console.log(`[Player 2] The word to be guessed is like: ${guessedWord}`)
// 2. At this point continuously prompt player 2 for a letter.
const tries = 10
let attempts = 0, win = false, guessedLetters = []
do {
    console.log(`[Player 2] ${(tries - attempts)} chances remaining`)
    let letter = prompt(`[Player 2]: Enter a letter: `)
    // 3. If the letter is in the word chosen by player 1, display the word in stars again but with the correct letter (*****t**).
    if(guessedLetters.includes(letter)) {
        console.log(`[Player 2]: You have already guessed this letter`)
        continue
    }
    if(word.indexOf(word) !== -1) {
            guessedLetters.push(letter)
            // 4. If the letter appears in the word multiple times, make sure it is seen in all the correct places when showing the stars with the correct guesses 
            let arr = guessedWord.split('')
            for (const i in word) {
                if(word[i] === letter) {
                    arr[i] = letter
                }
            }
            guessedWord = arr.join('')
            // 6. Show a list of all the guesses after each turn. In your code prevent player 2 from guessing the same letter twice.
            console.log(`[Player 2]: Guessed word: ${guessedWord}`)
    }
    if(guessedWord == word) win = true
    attempts++
} while (!win && attempts < tries)
// 5. If player 2 guesses incorrectly 10 times display a message in the console saying YOU LOSE.
if(!win)
    console.log(`[Player 2]: YOU LOSE`)
else
// 7. If player 1 wins, display a message that says CONGRATS YOU WIN.
    console.log(`[Player 2] CONGRATS YOU WIN.`)