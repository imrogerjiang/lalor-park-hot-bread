const contentDiv = document.getElementById("content");

const mainView = (function(){
    const create = function(){
        const header = document.createElement('header');
        const headerMenu = document.createElement('div');
        headerMenu.setAttribute("class", "header menu")
            const aboutBtn = document.createElement('h1');
            aboutBtn.innerHTML = "About";
            aboutBtn.setAttribute("id", "about-btn");
            headerMenu.appendChild(aboutBtn);
            const menuBtn = document.createElement('h1');
            menuBtn.innerHTML = "Menu";
            menuBtn.setAttribute("id", "menu-btn");
            headerMenu.appendChild(menuBtn);
            const logo = document.createElement('img');
            logo.setAttribute("src", "logo.png");
            logo.setAttribute("id", "logo");
            headerMenu.appendChild(logo);
            const contactBtn = document.createElement('h1');
            contactBtn.setAttribute("id", "contact-btn");
            contactBtn.innerHTML = "Contact";
            headerMenu.appendChild(contactBtn);
            const hoursBtn = document.createElement('h1');
            hoursBtn.setAttribute("id", "hours-btn");
            hoursBtn.innerHTML = "Opening Hours";
            headerMenu.appendChild(hoursBtn);
        header.appendChild(headerMenu);
        contentDiv.appendChild(header);

        const pageView = document.createElement('div');
        pageView.setAttribute("id", "page-view");
        contentDiv.appendChild(pageView);
        const footer = document.createElement('footer');
            const footerDivider = document.createElement('div');
            footerDivider.setAttribute("class", "divider");
            footer.appendChild(footerDivider);
            const footerFoodDisplay = document.createElement('div');
            footerFoodDisplay.setAttribute("class", "display");
                const footerFood1 = document.createElement('img');
                footerFood1.setAttribute("src", "../assets/images/food-temp.jpg");
                footerFoodDisplay.appendChild(footerFood1);
                const footerFood2 = document.createElement('img');
                footerFood2.setAttribute("src", "../assets/images/food-temp.jpg");
                footerFoodDisplay.appendChild(footerFood2);
                const footerFood3 = document.createElement('img');
                footerFood3.setAttribute("src", "../assets/images/food-temp.jpg");
                footerFoodDisplay.appendChild(footerFood3);
                const footerFood4 = document.createElement('img');
                footerFood4.setAttribute("src", "../assets/images/food-temp.jpg");
                footerFoodDisplay.appendChild(footerFood4);
                const footerFood5 = document.createElement('img');
                footerFood5.setAttribute("src", "../assets/images/food-temp.jpg");
                footerFoodDisplay.appendChild(footerFood5);
                const footerFood6 = document.createElement('img');
                footerFood6.setAttribute("src", "../assets/images/food-temp.jpg");
                footerFoodDisplay.appendChild(footerFood6);
            footer.appendChild(footerFoodDisplay);
        contentDiv.appendChild(footer);
    }

    return {create};
})();

mainView.create();