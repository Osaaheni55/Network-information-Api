document.addEventListener('DOMContentLoaded', () => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    function updateNetworkInfo() {
        document.getElementById('connectionType').textContent = `Connection Type: ${connection.type}`;
        document.getElementById('effectiveType').textContent = `Effective Type: ${connection.effectiveType}`;
        document.getElementById('downlink').textContent = `Downlink: ${connection.downlink} Mbps`;
        document.getElementById('rtt').textContent = `RTT: ${connection.rtt} ms`;
        document.getElementById('saveData').textContent = `Save Data: ${connection.saveData}`;
    }

    connection.addEventListener('change', updateNetworkInfo);
    updateNetworkInfo();
});

document.addEventListener('DOMContentLoaded', () => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const notification = document.getElementById('notification');

    function updateNetworkInfo() {
        document.getElementById('connectionType').textContent = `Connection Type: ${connection.type}`;
        document.getElementById('effectiveType').textContent = `Effective Type: ${connection.effectiveType}`;
        document.getElementById('downlink').textContent = `Downlink: ${connection.downlink} Mbps`;
        document.getElementById('rtt').textContent = `RTT: ${connection.rtt} ms`;
        document.getElementById('saveData').textContent = `Save Data: ${connection.saveData}`;
    }

    function showNotification(message) {
        notification.textContent = message;
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    }

    connection.addEventListener('change', () => {
        updateNetworkInfo();
        showNotification('Network connection refreshed!');
    });

    updateNetworkInfo();
});

// document.addEventListener('DOMContentLoaded', () => {
//     const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
//     const startButton = document.getElementById('startButton');

//     function updateNetworkInfo() {
//         document.getElementById('connectionType').textContent = `Connection Type: ${connection.type}`;
//         document.getElementById('effectiveType').textContent = `Effective Type: ${connection.effectiveType}`;
//         document.getElementById('downlink').textContent = `Downlink: ${connection.downlink} Mbps`;
//         document.getElementById('rtt').textContent = `RTT: ${connection.rtt} ms`;
//         document.getElementById('saveData').textContent = `Save Data: ${connection.saveData}`;
//     }

//     function refreshNetworkInfo() {
//         updateNetworkInfo();
//         console.log('Network information refreshed');
//     }

//     startButton.addEventListener('click', refreshNetworkInfo);
// });

