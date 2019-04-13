
var animals = ["snake", "butterfly", "spider", "bird", "dog", "cat", "panther", "giraffe", "elephant", "chameleon"];

function alertanimalName() {
        var animalName = $(this).attr("data-name");

        alert(animalName);
      }

 function buttonControl() {

 	 $("#buttons-window").empty();


        for (var i = 0; i < animals.length; i++) {

          var a = $("<button>");

          a.addClass("animal");

          a.attr("data-name", animals[i]);

          a.text(animals[i]);

          $("#buttons-window").append(a);
        }
 	}

 	$("#add-animal").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();

        // This line will grab the text from the input box
        var animal = $("#animal-input").val().trim();
        // The movie from the textbox is then added to our array
        animals.push(animal);

        // calling renderButtons which handles the processing of our movie array
        buttonControl();
      });

 	 $(document).on("click", ".animal", alertanimalName);

      // Calling the renderButtons function to display the intial buttons
      buttonControl();








buttonControl();




console.log("hello");
