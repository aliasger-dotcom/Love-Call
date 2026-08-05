const button = document.getElementById("joinBtn");
const video = document.getElementById("localVideo");

button.onclick = async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        });

        video.srcObject = stream;
        button.style.display = "none";

    } catch (err) {
        alert("Camera or microphone permission denied.");
        console.error(err);
    }
};
