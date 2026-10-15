function runClock() {
    const timerElement = document.getElementById('timer');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const resetButton = document.getElementById('resetButton');

    let isrunning = false;
    let startTime = 0;
    let timerInterval = null;
    let elapsedTime = 0;

    timerElement.textContent = "00:00:00";

    startButton.addEventListener('click', () => {
        if (!isrunning) {
            isrunning = true;
            startTime = Date.now() - elapsedTime;

            timerInterval = setInterval(() => {
                elapsedTime = Date.now() - startTime;
                
                const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
                const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

                timerElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }, 1000);
        }
    });

    stopButton.addEventListener('click', () => {
        if (isrunning) {
            clearInterval(timerInterval);
            isrunning = false;
        }
    });

    resetButton.addEventListener('click', () => {
        clearInterval(timerInterval);
        isrunning = false;
        elapsedTime = 0;
        timerElement.textContent = "00:00:00";
    });
}

runClock();