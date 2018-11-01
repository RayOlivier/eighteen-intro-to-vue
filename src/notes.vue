<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  
  
  <div id='root' >
    {{test}}
    <hr />
    
    <input type='text' v-model='newPerson' @keypress.enter="logger">
    <button @click='addNewPerson(newPerson)' > Submit </button>
    {{newPerson}}
    <hr />
    <select v-model="order" >
      <option value=""> </option>
      <option value="+">Ascending </option>
      <option value="-">Descending </option>
      
    </select>
    
    <hr/>
    
    <div v-for="(person, i) in sortedPeople">
      <!-- <span v-show="person[0] === 'S' " >{{i+1}}. {{person}}</span> -->
      <span v-if="person[0] === 'S' " >{{i+1}}. {{person}}</span>
      <h4 class='blue' v-bind:class="person.length < 5 && 'bound'" v-else> {{i+1}}. {{person}}</h4>
    </div>
    
    <hr/>
    
    <div v-for="(val, key) in obj">
      {{key}}: {{val}}
    </div>
    
  </div>
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.3/vue.js"></script>

</body>

</html>

<!-- curly braces are NOT JS, it's instructions to the DOM -->

<!-- v-for acts like a for in loop. it basically maps -->

<!-- v-show is similar to v-if 
but v-show renders to the DOM as display:hidden
and can still be seen in the console and uses resources
to still render it

v-if is more secure

@ is short for v-on

v-bind is important for conditional rendering
: is shorthand for v-bind
-->


