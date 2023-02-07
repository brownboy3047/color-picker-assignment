<template>
  <div>
    <h1>Color Picker</h1>
    </div>

    <div>{{message}}</div>
  
  <button v-for="color in colors" :key='color' @click="matchColor(color)">
    {{color}}
  </button>
</template>

<script setup>
const {colors, message, matchColor}= FilterColor()
import {FilterColor} from "../composables/FilterColor"
    
  </script>

<style>

</style>