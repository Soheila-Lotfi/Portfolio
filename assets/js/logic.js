
$(document).on("click", "#learn-more-project1", handleproject1);

function handleproject1() {
    var modalText = $("<div >").append(
        $("<h4>").text("Notes For Article: "),
        $("<hr>")
    );
    // Adding the formatted HTML to the note modal
    bootbox.dialog({
        message: modalText,
        closeButton: true
    });
}


