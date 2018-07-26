$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#ca").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });
    $(".devour").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        console.log("data: " + id)
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(
            function () {
                console.log("Nom Nom Nom");
                location.reload();
            }
        );
    });
    $(".digest").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        console.log("data: " + id)
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("Nom Nom Nom");
                location.reload();
            }
        );
    });
});