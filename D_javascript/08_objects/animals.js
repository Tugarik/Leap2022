let animals = [{type: "dog", sound: "woof"}, {type: "cow",sound: "moo"},{type: "cat",sound: "meow"}];

function howSound(animal) {
   let countNot = 0;
   for (i=0; i < animals.length; i++) {
      if (animal == animals[i].type) {
         console.log(`${animal} shouts: ${animals[i].sound}!`);
      } else {
         countNot++;
      }
   }
   if (countNot == animals.length) {
      console.log(`Amitanii ner oruul gej baihad ooriin neree oruulsan bn. It is your turn to shout: Ring-ding-ding-ding-dingeringeding!`)
   }
}

howSound('cow');
howSound('dog');
howSound('cat');
howSound('GonchigSumLai');
