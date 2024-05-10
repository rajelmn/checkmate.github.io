
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>checkmate!</title>
    <link rel = "icon" type = "image/x-icon" href = "favicon.png"> </link>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <!-- Emoji buttons test-->
        <div class="emoji-button">💾 save progress</div>
    <a href="https://github.com/saemirii/checkmate">
        <div class="emoji-button">⭐ star this repo!</div>
    </a>
        <div class="emoji-button">🔐 check-out</div>

    <div id="homeMenu" class="home-menu">
        <h1 class="home-title">checkmate!</h1>
        <p class="home-subtext">
            [ a minimalistic task manager ]
        </p>
    </div>
    
    <button id="checkInButton" onclick="showLogin()">check-in</button>

    <h2 id="todoTitle" style="display: none;">To-Do List</h2>
    <div id="todo-input-container" style="display: none;">
        <input type="text" id="todoInput" placeholder="Enter your task" class="fadeIn"
            onkeydown="if (event.keyCode === 13) addTodo()">
    </div>
    <ul id="todo-list" style="display: none;">
    </ul>

    <div id="contextMenu" class="context-menu">
        <ul>
            <li id="markDone">Mark as Done</li>
            <li id="markInProgress">Mark as In Progress</li>
            <li id="markNotStarted">Mark as Not Started</li>
        </ul>
    </div>

    <div id="loginContainer" style="display: none;">
        <h2>Login</h2>
        <form id="loginForm">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <br><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <br><br>
            <label>
                <input type="checkbox" id="agreeTos" required>
                I agree to Checkmate!'s Terms of Service
            </label>
            <br><br>
            <input type="submit" value="Sign In">
        </form>
    </div>


    <script src="script.js"></script>
</body>

</html>
