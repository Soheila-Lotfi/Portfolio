
$(document).on("click", "#learn-more-project1", handleproject1);
$(document).on("click", "#learn-more-project2", handleproject2);
$(document).on("click", "#learn-more-project3", handleproject3);

function handleproject1() {
    var modalText = $("<div >").append(
        $("<image>").attr("src", "../images/back.png"),
        $("<h4>").text("project name"),
        $("<p>").text("project description"),
        $("<a>").attr("href", "#").text("view website"),
        $("<hr>")
    );
    // Adding the formatted HTML to the note modal
    bootbox.dialog({
        message: modalText,
        closeButton: true
    });
}

function handleproject2() {
    var modalText = $("<div >").append(
        $("<image>").attr("src", "../images/back.png"),
        $("<h4>").text("project name"),
        $("<p>").text("project description"),
        $("<a>").attr("href", "#").text("view website"),
        $("<hr>")
    );
    // Adding the formatted HTML to the note modal
    bootbox.dialog({
        message: modalText,
        closeButton: true
    });
}
function handleproject3() {
    var modalText = $("<div >").append(
        $("<image>").attr("src", "../images/back.png"),
        $("<h4>").text("project name"),
        $("<p>").text("project description"),
        $("<a>").attr("href", "#").text("view website"),
        $("<hr>")
    );
    // Adding the formatted HTML to the note modal
    bootbox.dialog({
        message: modalText,
        closeButton: true
    });
}
