new Vue({
  el: "#root",
  data() {
    //data can be a method or an object. data is kind of like local state
    return {
      test: "This is a test",
      people: ["Shea", "Eric", "Ray", "David", "Alexia", "Anthony"],
      obj: { name: "Shea", age: 35, location: "Dallas" },
      newPerson: "",
      order: ""
    }
  },
  methods: {
    addNewPerson(person) {
      console.log(person)
      console.log(this.people)
      this.people.push(person)
      this.newPerson = ""
    },
    logger(e) {
      console.log(e.key)
    }
  },
  computed: {
    //we're doing this so that this.people isn't mutated
    //and can still be accessed as it was originally
    sortedPeople() {
      if (!this.order) return this.people
      else {
        let sorted = this.people.slice().sort((a, b) => {
          return a.localeCompare(b)
        })
        return this.order === "+" ? sorted : sorted.reverse()
      }
    }
  }
})

//you have to initialize things on data (unlike react state)
//because if you create it elsewhere,
//it won't have a watcher attached to it
