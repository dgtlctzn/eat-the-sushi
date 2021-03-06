$(function() {

    $(".eat-button").on("click", function() {
        const id = $(this).data("id");
        const state = $(this).data("bool");

        const stateObj = {
            eaten: !state,
        }

        $.ajax("api/sushi/" + id, {
            type: "PUT",
            data: stateObj
        }).then(function() {
            location.reload();
        })
    })

    $(".sushi-form").on("submit", function(event) {
        event.preventDefault();

        const newSushi = {
            sushi_name: $("#sushi-input").val(),
        }

        $.ajax("/api/sushi", {
            type: "POST",
            data: newSushi
        }).then(function() {
            location.reload();
        })
    })





})