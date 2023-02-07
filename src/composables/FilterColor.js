 import {ref} from 'vue'
 export function FilterColor(){
const colors = ref(["green", "red", "blue", "purple"]);
let message = ref("Pick a color...");
const matchColor = (value)=>{
    //random color based on the index of the array
    const randomNumber = Math.floor(Math.random()*3) + 1; //between 1-4
    if (colors.value[randomNumber]===value){
        message.value = `You win .. [answer: ${colors.value[randomNumber]}]`;
        return;
    }
    message.value = `You lose  [answer: ${colors.value[randomNumber]}]`;
};
return {colors, message, matchColor}
 }