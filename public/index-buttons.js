document.addEventListener("DOMContentLoaded", function() {
    const buttonContainer = document.querySelector(".button-container");

    const buttons = [
        { text: "Nouveau Client", onClick: () => {} },
        { text: "Client Particulier LCL", onClick: () => { window.location.href = 'client.html'; } },
        { text: "Clien Pro LCL", onClick: () => {} },
    ];

    buttons.forEach(buttonInfo => {
        const button = document.createElement("button");
        button.textContent = buttonInfo.text;
        button.addEventListener("click", buttonInfo.onClick);
        buttonContainer.appendChild(button);
    });
});