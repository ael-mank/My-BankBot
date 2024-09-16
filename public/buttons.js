document.addEventListener("DOMContentLoaded", function() {
    const buttonContainer = document.querySelector(".button-container");

    const buttons = [
        { text: "Contacter Nous", onClick: () => {} },
        { text: "Demander un Prêt", onClick: () => {} },
        { text: "Client LCL", onClick: () => { window.location.href = 'client.html'; } }
    ];

    buttons.forEach(buttonInfo => {
        const button = document.createElement("button");
        button.textContent = buttonInfo.text;
        button.addEventListener("click", buttonInfo.onClick);
        buttonContainer.appendChild(button);
    });
});