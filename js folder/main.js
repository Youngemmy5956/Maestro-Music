




// menu bar codes for main pages

const menuList=document.getElementById('menu-items');

try {
    
    const OpenMenubar= (el,value) =>{
        el.style.height =`${value}`;       
    }

    function CloseSideBar(el, value) {
        el.style.height = `${value}`;

    }

    const menu = document.getElementById('menubar').addEventListener('click',()=>{
        OpenMenubar(menuList,'60%');
    });

    const sidebar = document.getElementById('close-sidebar').addEventListener('click',()=>{
        OpenMenubar(menuList,'0px');
    });

} 
catch (error) {
}


// modal caller function 

let CallModal= (element) => {
    element.style.transform = 'scale(1)';
};


let closeModal= (element)=>{
    element.style.transform = 'scale(0)';
}

// profil edit modal 


let profileSettingModal = document.querySelector('.profile-modal');
document.querySelector('.user-icon').addEventListener(`click`, ()=>{   
      
    CallModal(profileSettingModal);
    closeModal(notificationModal)
    
});

// Notification modal 

let notificationModal = document.querySelector('.notification-modal');
document.querySelector('.notification').addEventListener(`click`, ()=>{   
      
    CallModal(notificationModal);
    closeModal(profileSettingModal)
});

// close notification modal 

document.querySelector('.close-notification').addEventListener('click', (e)=>{
    closeModal(notificationModal)

})
document.querySelector('.close-profile').addEventListener('click', (e)=>{
    closeModal(profileSettingModal)
})
