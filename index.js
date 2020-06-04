
function orderingAtTheRestaurant() {

    let name = this.name;
    let address = this.address;
    let phoneNumber = this.phoneNumber;
    let answer = this.answer;
    let answer1 = this.answer1;
    let answer2 = this.answer2;
    let mainMenuItem = this.mainMenuItem1;
    let sideItem1 = this.sideItem1;
    let sideItem2 = this.sideItem2;
    let beverageItem = this.beverageItem;
    let desertItem = this.desertItem;
    let total = 0;

    const entreeMenu = {"Kibbeh": "11", "Lamb Loin": "15", "Octopus": "16", "Shish Tavuk": "12"};
    const sideDishes = {"Cacik": "3", "Hummus": "3", "Ezme": "3", "Baba Ghanoush": "3", "Dolmades": "3"};
    const beverageMenu = {"Bottled Water": "2", "Coke": "2", "Turkish Tea": "3", "Turkish Coffee": "3"};
    const desertMenu = {"Kunife": "$4", "Baklava": "$4", "Aegean Delight": "$4"};

    const recitingTheMenu = someMenu => {
        for (let key in someMenu) {
             console.log(`${key} which is ${someMenu[key]}`);
        } 
    }

    const welcome = prompt("Thank you for calling Nich's Taverna!\n Is this order going to be for pickup or delivery?\n");
    
    if (welcome.toLowerCase() === "pickup" || welcome.toLowerCase() === "p" || welcome.toLowerCase() === "pick") {
        name = prompt(`Alright, pick up it is!\nWhat name can I put this order under?\n`);
        phoneNumber = prompt(`Great ${name}\nWhats a phone number I can reach you at?\n`);
        answer = prompt(`Thats's ${phoneNumber} got it!\nAlright lets get yor order started, would you like to hear about our entrees tonight?\n`)
       if (answer.toLowerCase() === "yes" || answer.toLowerCase() === "y") {
            mainMenuItem = prompt(`${recitingTheMenu(entreeMenu)}\nWhich would you like?\n`);

            switch(mainMenuItem.toLowerCase()) {
                case "kibbeh":
                    total += 11;
                    break;
                case "lamb loin":
                    total += 15;
                    break;
                case "octopus":
                    total += 16;
                    break;
                case "lamb loin":
                    total += 15;
                    break;
                default:
                    alert("You did not make a selection from the menu");
                }
                console.log(`Great that will be $${total}\nYou get two sides with your entree, here they are`);
                sideItem1 = prompt(`${recitingTheMenu(sideDishes)}\nWhich is the first one you would like?\n`);
                total += 3;
                sideItem2 = prompt("\nI love that, which other side dish would you like?\n");
                total += 3;
                answer1= prompt("\nWould you like a beverage with that?\n");

                if (answer1.toLowerCase() === "no" || answer1.toLowerCase() === "n") {
                    answer2 = prompt("\nWould you like a desert today?");
                    
                    if (answer2.toLowerCase() === "no" || answer2.toLowerCase() === "n") {
                        console.log(`\nYou ordered ${mainMenuItem}, ${sideItem1}, and ${sideItem2}.\nYour total is $${total}.\nThank you!!`)
                    } else {
                        console.log("Here are our deserts:\n");
                        desertItem = prompt(`${recitingTheMenu(desertMenu)}\nWhich would you like?\n`);
                        total += 4;
                        console.log(`\nYou ordered ${mainMenuItem}, ${sideItem1}, ${sideItem2}, and ${desertItem}.\nYour total is $${total}.\nThank you!!`)
                    }
                } else {
                    console.log("Here are our beverages:\n")
                    beverageItem = prompt(`${recitingTheMenu(beverageMenu)}\nWhich would you like?\n`);
                    total += 3;
                    answer2 = prompt("\nWould you like a desert today?");
                    
                    if (answer2.toLowerCase() === "no" || answer2.toLowerCase() === "n") {
                        console.log(`\nYou ordered ${mainMenuItem}, ${sideItem1}, ${sideItem2}, and a ${beverageItem}.\nYour total is $${total}.\nThank you!!`)
                    } else {
                        console.log("Here are our deserts:\n");
                        desertItem = prompt(`${recitingTheMenu(desertMenu)}\nWhich would you like?\n`);
                        total += 4;
                        console.log(`\nYou ordered ${mainMenuItem}, ${sideItem1}, ${sideItem2}, a ${beverageItem} and ${desertItem}.\nYour total is $${total}.\nThank you!!`)
                    }

                }

        } 

    } else if (welcome.toLowerCase() === "delivery" || welcome.toLowerCase() === "d" || welcome.toLowerCase() === "deliver") {
        name = prompt("Alright, delivery it is!\nWhat name can I put this order under?\n");
        address = prompt(`Great ${name}\nWhats your address?\n`)
        phoneNumber = prompt(`Okay thats ${address}\nWhats a phone number I can reach you at?\n`);
        answer = prompt(`Thats's ${phoneNumber} got it!\nAlright lets get yor order started, would you like to hear about our entrees tonight?\n`);

        if (answer.toLowerCase() === "yes" || answer.toLowerCase() === "y") {
            mainMenuItem = prompt(`${recitingTheMenu(entreeMenu)}\nWhich would you like?\n`);

            switch(mainMenuItem.toLowerCase()) {
                case "kibbeh":
                    total += 11;
                    break;
                case "lamb loin":
                    total += 15;
                    break;
                case "octopus":
                    total += 16;
                    break;
                case "lamb loin":
                    total += 15;
                    break;
                default:
                     alert("You did not make a selection from the menu");
                }
                console.log(`Great that will be $${total}\nYou get two sides with your entree, here they are\n`);
                sideItem1 = prompt(`${recitingTheMenu(sideDishes)}\nWhich is the first one you would like?\n`);
                total += 3;
                sideItem2 = prompt("\nI love that, which other side dish would you like?\n");
                total += 3;
                answer1= prompt("\nWould you like a beverage with that?\n");

                if (answer1.toLowerCase() === "no" || answer1.toLowerCase() === "n") {
                    answer2 = prompt("\nWould you like a desert today?");
                    
                    if (answer2.toLowerCase() === "no" || answer2.toLowerCase() === "n") {
                        console.log(`\nYou ordered ${mainMenuItem}, ${sideItem1}, and ${sideItem2}.\nYour total is $${total}.\nThank you!!`)
                    } else {
                        console.log("Here are our deserts:\n");
                        desertItem = prompt(`${recitingTheMenu(desertMenu)}\nWhich would you like?\n`);
                        total += 4;
                        console.log(`\nYou ordered ${mainMenuItem}, ${sideItem1}, ${sideItem2}, and ${desertItem}.\nYour total is $${total}.\nThank you!!`)
                    }
                } else {
                    console.log("Here are our beverages:\n")
                    beverageItem = prompt(`${recitingTheMenu(beverageMenu)}\nWhich would you like?\n`);
                    total += 3;
                    answer2 = prompt("\nWould you like a desert today?");
                    
                    if (answer2.toLowerCase() === "no" || answer2.toLowerCase() === "n") {
                        console.log(`\nYou ordered ${mainMenuItem}, ${sideItem1}, ${sideItem2}, and a ${beverageItem}.\nYour total is $${total}.\nThank you!!`)
                    } else {
                        console.log("Here are our deserts:\n");
                        desertItem = prompt(`${recitingTheMenu(desertMenu)}\nWhich would you like?\n`);
                        total += 4;
                        console.log(`\nYou ordered ${mainMenuItem}, ${sideItem1}, ${sideItem2}, a ${beverage} and ${desertItem}.\nYour total is $${total}.\nThank you!!`)
                    }

                }

        } 

    } else { 
        return "I am so sorry, I couldn't quite understand you. It must be something wrong with my system here, can you call back in one minute? "
    }
}

orderingAtTheRestaurant();