// import {Tutorials} from "./Data/Tutorial.js"
//section mobile btn
let MenuBtnMobileE1 = document.getElementById("Menu-btn-Mobile")
let MenuBtnMobileE1OpenBoolen = false
let mobileMenuNavE1 = document.getElementById("mobile-menu-nav")
MenuBtnMobileE1.addEventListener("click",()=>{
    if(MenuBtnMobileE1OpenBoolen){
        mobileMenuNavE1.style.display = "none"
        MenuBtnMobileE1OpenBoolen = false
    }
    else{
        mobileMenuNavE1.style.display = "block"
        MenuBtnMobileE1OpenBoolen = true
    }
})

let mobileNavcloseE1 = document.getElementById("mobile-Nav-close")

mobileNavcloseE1.addEventListener("click",()=>{
    mobileMenuNavE1.style.display = "none"
    MenuBtnMobileE1OpenBoolen = false
})



// Tutorial-btn
const NestedNavigationContainer = document.getElementById("nested-navigation-container_id")
let TutorialE1 = document.getElementById("Tutorial-btn")
const nestedNavigationCloserBtn = document.getElementById("nested-navigation-close-btn")

TutorialE1.addEventListener("click",toggleTutorial)
nestedNavigationCloserBtn.addEventListener("click",toggleTutorial)
function toggleTutorial(){
    TutorialE1.classList.toggle("black")
    TutorialE1.classList.toggle("white")
    NestedNavigationContainer.classList.toggle("nested-navigation-hidden")
}


/////

// const linuxCode =  `1. cd command
//     root@ubuntu:~# cd <directory path>

//     2. mkdir command
//     root@ubuntu:~# mkdir <folder name>
    
//     3. cp and mv commands
//     root@ubuntu:~# cp <source> <destination>
//     root@ubuntu:~# mv <source> <destination

//     4.rm command 
//     root@ubuntu:~# rm <file name>
//     root@ubuntu:~# rm -r <folder/directory name>

   
// `
// let linuxCodeE1 = document.getElementById("linuxCode").innerText = linuxCode

// Tutorials data
// console.log(Tutorials)


// // 
// let nestedNavigationContainerContentID = document.getElementById(nested-navigation-container-contentID)
// let nestedNavigationHeading =''
// let nestedNavigationTab1 =''
// let nestedNavigationTab2 =''
// let nestedNavigationTab3 =''
// let nestedNavigationTab4 =''

// // 
// nestedNavigationHeading += `<h1>${Tutorials.name}</h1>`

// nestedNavigationTab1 += `<h2>${Tutorials.HTMLAndCSS.name}</h2>`
// nestedNavigationTab1 += Tutorials.HTMLAndCSS.menu.forEach(e1 =>{
//     return `<a herf="${e1.link}">${e1.title}</a>`
// })

// nestedNavigationTab1 += `<h2>${Tutorials.HTMLAndCSS.name}</h2>`
// nestedNavigationTab2 += Tutorials.HTMLAndCSS.menu.forEach(e1 =>{
//     return `<a herf="${e1.link}">${e1.title}</a>`
// })

// nestedNavigationTab1 += `<h2>${Tutorials.HTMLAndCSS.name}</h2>`
// nestedNavigationTab3 += Tutorials.HTMLAndCSS.menu.forEach(e1 =>{
//     return `<a herf="${e1.link}">${e1.title}</a>`
// })

// nestedNavigationTab1 += `<h2>${Tutorials.HTMLAndCSS.name}</h2>`
// nestedNavigationTab4 += Tutorials.HTMLAndCSS.menu.forEach(e1 =>{
//     return `<a herf="${e1.link}">${e1.title}</a>`
// })

// // render all the menu
// nestedNavigationContainerContentID.innerHTML = `
//     ${nestedNavigationHeading}
//     <div class="nested-navigation-container_Content_data">
//         <div class="nested-navigation_item">
//             ${nestedNavigationTab1}
//         </div>
//         <div class="nested-navigation_item">
//             ${nestedNavigationTab2}
//         </div>
//         <div class="nested-navigation_item">
//             ${nestedNavigationTab3}
//         </div>
//         <div class="nested-navigation_item">
//             ${nestedNavigationTab4}
//         </div>    
//     </div>
// `
        
