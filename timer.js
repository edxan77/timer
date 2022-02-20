function Timer(sec) {
    this.second = sec;
    let ind = 0;
    let pause = false;
    let secon = this.second;
    this.unpaused = function () {
    pause = false;
    return "unpaused";
    };
    this.paused = function () {
    pause = true;
    return "paused";
    };
    
    this.rend = function () {
    setInterval(function () {
    if (secon == 0 && ind == 0) {
    alert("finished");
    console.log("Time left")
    secon = secon;
    }
    if (secon == 0) {
    ind++;
    if (ind > 0) {
    return;
    }
    }
    
    if (pause === true) {
    return;
    }
    
    secon--;
    
    return console.log(secon);
    }, 1000);
    return "started";
    };
    }
    
    let bimer = new Timer(10);
    
    console.log(bimer.rend());
    