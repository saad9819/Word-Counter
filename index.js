#!/usr/bin/env node
import inquirer from 'inquirer';
async function countCharactersAndWords() {
    const questions = [
        {
            type: 'input',
            name: 'paragraph',
            message: 'Enter an English paragraph:'
        }
    ];
    const { paragraph } = await inquirer.prompt(questions);
    const cleanedParagraph = paragraph.replace(/\s+/g, ''); // Remove whitespaces
    const characterCount = cleanedParagraph.length;
    const wordCount = cleanedParagraph.split(/\s+/).filter((word) => word !== '').length; // Explicitly type 'word' as string
    console.log(`Character count (excluding whitespaces): ${characterCount}`);
    console.log(`Word count (excluding whitespaces): ${wordCount}`);
}
countCharactersAndWords();
