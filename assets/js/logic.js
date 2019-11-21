
$(document).on("click", "#learn-more-project1", handleproject1);
$(document).on("click", "#learn-more-project2", handleproject2);
$(document).on("click", "#learn-more-project3", handleproject3);
$(document).on("click", "#learn-more-project4", handleproject4);
$(document).on("click", "#learn-more-project5", handleproject5);
$(document).on("click", "#learn-more-project6", handleproject6);

function handleproject1() {
    var modalText = $("<div >").append(
        $("<img>").attr("src", "assets/images/xipto1.png").css("width", "100%").css("margin", "20px auto"),
        $("<h4>").text("Xipto"),
        $("<p>").text("Xipto is a social app which people use to share their experiences that they had in different places like restaurant, theatre, parks, and so on."),
        $("<p>").text("The app is a full-stack web application created with MySQL, Node, Express.js, Handlebars, and Sequelize.js"),
        $("<a>").attr("href", "http://xip-to.herokuapp.com/").text("View Website").css("display", "block").css("color", "rgb(31, 160, 148)").attr("target", "_blank"),
        $("<a>").attr("href", "https://github.com/dproc96/XiP-TO").text("Link to Github repo").css("display", "block").css("color", "rgb(31, 160, 148)").attr("target", "_blank"),
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
        $("<img>").attr("src", "assets/images/retailfy.png").css("width", "100%").css("margin", "20px auto"),
        $("<h4>").text("Retailfy"),
        $("<p>").text("Retailfy is a retail shop where people can buy or sell various items on it."),
        $("<p>").text("The app is a full-stack web application created with MySQL, Node, Express.js, Sequelize.js, React and Redux."),
        $("<a>").attr("href", "https://retailfy.herokuapp.com/").text("View Website").css("display", "block").css("color", "rgb(31, 160, 148)").attr("target", "_blank"),
        $("<a>").attr("href", "https://github.com/fred1525/retailfy").text("Link to Github repo").css("display", "block").css("color", "rgb(31, 160, 148)").attr("target", "_blank"),
        $("<hr>")
    );
    // Adding the formatted HTML to the note modal
    bootbox.dialog({
        message: modalText,
        closeButton: true
    });
}
function handleproject6() {
    var modalText = $("<div >").append(
        $("<img>").attr("src", "assets/images/smartgardening.png").css("width", "100%").css("margin", "20px auto"),
        $("<h4>").text("Smart Gardening"),
        $("<p>").text("Provide the homeowners the best time to water their lawns."),
        $("<p>").text("used HTML5, CSS, Bootstrap, Javascript, jQuery, Jason APIs (google Geocoding API, google map API, Weather API) & Ajax, Chart.js and Moment.js libraries"),
        $("<a>").attr("href", "https://rizwanr.github.io/Smart-Gardening/").text("View Website").css("display", "block").css("color", "rgb(31, 160, 148)").attr("target", "_blank"),
        $("<a>").attr("href", "https://github.com/rizwanr/Smart-Gardening").text("Link to Github repo").css("display", "block").css("color", "rgb(31, 160, 148)").attr("target", "_blank"),
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
        $("<img>").attr("src", "assets/images/mongo.png").css("width", "100%").css("margin", "20px auto"),
        $("<h4>").text("Mongo Scraper"),
        $("<p>").text("The app scrapes stories from The New York Times and display them on the main page. The user is able to save articles and look at them later at the saved page. Also, in saved page, the user is able to delete articles or add notes to them."),
        $("<p>").text("The app is a full-stack web application created with MongoDB, Node.js, Express.js, Mongoose, bootstap and bootbox library"),
        $("<a>").attr("href", "https://mongo-scraper-newyork-times.herokuapp.com/").text("View Website").css("display", "block").css("color", "rgb(31, 160, 148)").attr("target", "_blank"),
        $("<a>").attr("href", "https://github.com/Soheila-Lotfi/Mongo-scraper").text("Link to Github repo").css("display", "block").css("color", "rgb(31, 160, 148)").attr("target", "_blank"),
        $("<hr>")
    );
    // Adding the formatted HTML to the note modal
    bootbox.dialog({
        message: modalText,
        closeButton: true
    });
}

function handleproject4() {
    var modalText = $("<div >").append(
        $("<img>").attr("src", "assets/images/clicky game.png").css("width", "100%").css("margin", "20px auto"),
        $("<h4>").text("Clicky Game"),
        $("<p>").text("Clicky is a memory game created with React"),

        $("<a>").attr("href", "https://clicky-game-zootopia.herokuapp.com/").text("View Website").css("display", "block").css("color", "rgb(31, 160, 148)").attr("target", "_blank"),
        $("<a>").attr("href", "https://github.com/Soheila-Lotfi/clicky-Game").text("Link to Github repo").css("display", "block").css("color", "rgb(31, 160, 148)").attr("target", "_blank"),
        $("<hr>")
    );
    // Adding the formatted HTML to the note modal
    bootbox.dialog({
        message: modalText,
        closeButton: true
    });
}

function handleproject5() {
    var modalText = $("<div >").append(
        $("<img>").attr("src", "assets/images/google-book.png").css("width", "100%").css("margin", "20px auto"),
        $("<h4>").text("Google Books Search"),
        $("<p>").text("This is a React-based Google Books Search app using React lifecycle methods to query and display books based on user searches."),
        $("<p>").text("The app is a full-stack web application created with MongoDB, Node.js, Express.js, Mongoose, and React"),
        $("<a>").attr("href", "https://google-book-search-using-react.herokuapp.com/").text("View Website").css("display", "block").css("color", "rgb(31, 160, 148)").attr("target", "_blank"),
        $("<a>").attr("href", "https://github.com/Soheila-Lotfi/Google-Books-React-Search").text("Link to Github repo").css("display", "block").css("color", "rgb(31, 160, 148)").attr("target", "_blank"),
        $("<hr>")
    );
    // Adding the formatted HTML to the note modal
    bootbox.dialog({
        message: modalText,
        closeButton: true
    });
}