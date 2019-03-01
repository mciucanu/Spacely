var wrapper = document.getElementById("wrapper"),
    titlebg = document.getElementById("titlebg"),
    spacely = document.getElementById("spacely"),
    earthTitle = document.getElementById("earthTitle"),
    shipTitle = document.getElementById("shipTitle"),
    alien1Title = document.getElementById("alien1Title"),
    planet1Title = document.getElementById("planet1Title"),
    mainbg = document.getElementById("mainbg"),
    setting = document.getElementById("setting"),
    spaceship = document.getElementById("spaceship"),
    fire = document.getElementById("fire"),
    smoke = document.getElementById("smoke"),
    tower = document.getElementById("tower"),
    armt = document.getElementById("armt"),
    armb = document.getElementById("armb"),
    cloud1 = document.getElementById("cloud1"),
    cloud2 = document.getElementById("cloud2"),
    cloud3 = document.getElementById("cloud3"),
    cloud4 = document.getElementById("cloud4"),
    takeoff = document.getElementById("takeoff"),
    flyShip = document.getElementById("flyShip"),
    land = document.getElementById("land"),
    planet1 = document.getElementById("planet1"),
    alienbg = document.getElementById("alienbg"),
    lcraterback = document.getElementById("lcraterback"),
    rcraterback = document.getElementById("rcraterback"),
    lcraterfront = document.getElementById("lcraterfront"),
    rcraterfront = document.getElementById("rcraterfront"),
    alien1 = document.getElementById("alien1"),
    alien2 = document.getElementById("alien2"),
    alien3 = document.getElementById("alien3"),
    flyShipAlien = document.getElementById("flyShipAlien"),
    spaceshipAlien = document.getElementById("spaceshipAlien"),
    astronaut = document.getElementById("astronaut");

// --------------- TITLE PAGE ---------------

start.addEventListener("click", function(){
    titlebg.style.opacity = 0;
    spacely.style.opacity = 0;
    earthTitle.style.opacity = 0;
    shipTitle.style.opacity = 0;
    alien1Title.style.opacity = 0;
    planet1Title.style.opacity = 0;
    start.style.opacity = 0;
    spacely.style.zIndex = 0;
    start.style.zIndex = 0;
    
    mainbg.style.opacity = 1;
    setting.style.opacity = 1;
    spaceship.style.opacity = 1;
    tower.style.opacity = 1;
    armt.style.opacity = 1;
    armb.style.opacity = 1;
    cloud1.style.opacity = 1;
    cloud2.style.opacity = 1;
    cloud3.style.opacity = 1;
    cloud4.style.opacity = 1;
    takeoff.style.opacity = 1;
});

// ----------------- PAGE 2 -----------------

takeoff.addEventListener("click", function(){
    
    // Arms move up
    armt.style.transform = "rotate(-82deg)";
    armb.style.transform = "rotate(-82deg)";
    
    // Fire and smoke
    setTimeout(function() {
        takeoff.style.opacity = 0;
        flyShip.style.opacity = 1;
        setTimeout(function() {
            spaceship.style.opacity = 0;
            smoke.style.opacity = 1;
        }, 2000);
    }, 2000);  
    
    // Start to move
    setTimeout(function() {
        setting.style.bottom = -700+"px";
        tower.style.bottom = -610+"px";
        armt.style.bottom = -348+"px";
        armb.style.bottom = -458+"px";
        cloud1.style.top = 750+"px";
        cloud2.style.top = 920+"px";
        cloud3.style.top = 800+"px";
        cloud4.style.top = 900+"px";
        smoke.style.bottom = -700+"px";
        
        }, 5000);
    
    setTimeout(function() {
        mainbg.style.bottom = -2821 + "px";
    }, 5000);
    
    setTimeout(function() {
        flyShip.style.transform = "rotate(90deg)";
    }, 9364);
    
    setTimeout(function() {
        mainbg.style.left = -7193 + "px";
    }, 10364);
    
    // Landing
    setTimeout(function() {
        land.style.opacity = 1;
        land.style.zIndex = 6;
        planet1.style.right = -250 + "px";
    }, 25000);
    
});

land.addEventListener("click", function(){
    mainbg.style.opacity = 0;
    land.style.opacity = 0;
    planet1.style.opacity = 0;
    flyShip.style.opacity = 0;
    
    alienbg.style.opacity = 1;
    lcraterfront.style.opacity = 1;
    rcraterfront.style.opacity = 1;
    lcraterback.style.opacity = 1;
    rcraterback.style.opacity = 1;
    
    setTimeout(function() {
        alien1.style.opacity = 1;
        alien2.style.opacity = 1;
        alien3.style.opacity = 1;
    }, 2000);
    
    setTimeout(function() {
        flyShipAlien.style.bottom = 70 + "px";
    }, 2000);
    
    setTimeout(function() {
        spaceshipAlien.style.opacity = 1;
        flyShipAlien.style.opacity = 0;
        astronaut.style.opacity = 1;
    }, 6000);
    
    setTimeout(function() {
        alien2.style.bottom = 150 + "px";
    }, 4000);
    
    setTimeout(function() {
        alien2.style.bottom = 40 + "px";
    }, 8500);
    
    setTimeout(function() {
        astronaut.style.animation = "astroAnim 3s ease-in-out forwards";
    }, 10000);
    
    setTimeout(function() {
        alien1.style.animation = "a1Anim 4s linear forwards";
    }, 13000);
    
    setTimeout(function() {
        alien3.style.animation = "a3Anim 4s linear forwards";
    }, 15000);
});









