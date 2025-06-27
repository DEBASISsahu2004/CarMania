async function main(){
        // Retrieve CSS custom property values for colors and layout settings, and select the video element
    AOS.init();
    let primary_color_1 = getComputedStyle(document.documentElement).getPropertyValue('--primary_color_1');
    let primary_color_2 = getComputedStyle(document.documentElement).getPropertyValue('--primary_color_2');
    let secondary_color_1 = getComputedStyle(document.documentElement).getPropertyValue('--secondary_color_1');
    let secondary_color_2 = getComputedStyle(document.documentElement).getPropertyValue('--secondary_color_2');
    let tertiary_color_1 = getComputedStyle(document.documentElement).getPropertyValue('--tertiary_color_1');
    let tertiary_color_2 = getComputedStyle(document.documentElement).getPropertyValue('--tertiary_color_2');
    let brand_color_1 = getComputedStyle(document.documentElement).getPropertyValue('--brand_color_1');
    let brand_color_2 = getComputedStyle(document.documentElement).getPropertyValue('--brand_color_2');
    let mode_left = getComputedStyle(document.documentElement).getPropertyValue('--mode_left');
    let video = document.querySelector('.video_container video');

    let mode = localStorage.getItem('mode');
    function theme_margin(){
        if(!mode){
            let window_size = window.innerWidth;
            if(window_size > 768){
                document.documentElement.style.setProperty('--mode_left', '26px');
            }else if(window_size > 374 && window_size <= 768){
                document.documentElement.style.setProperty('--mode_left', '18px');
            }else{
                document.documentElement.style.setProperty('--mode_left', '16px');
            }
        }else{
            document.documentElement.style.setProperty('--mode_left', '0px');
        }
    }
    function changemode(){
        let cloth1 = document.querySelector('.cloth_ad1');
        let part1 = document.querySelector('.part_ad1');
        let cloth2 = document.querySelector('.cloth_ad2');
        let part2 = document.querySelector('.part_ad2');
        if(mode){
            document.documentElement.style.setProperty('--primary_color_1', primary_color_2);
            document.documentElement.style.setProperty('--primary_color_2', primary_color_1);
            document.documentElement.style.setProperty('--secondary_color_1', secondary_color_2);
            document.documentElement.style.setProperty('--secondary_color_2', secondary_color_1);
            document.documentElement.style.setProperty('--tertiary_color_1', tertiary_color_2);
            document.documentElement.style.setProperty('--tertiary_color_2', tertiary_color_1);
            document.documentElement.style.setProperty('--brand_color_1', brand_color_2);
            document.documentElement.style.setProperty('--brand_color_2', brand_color_1);
            video.src = 'Images/hero/cinematic_dark.mp4';

            let window_size = window.innerWidth;
            if(window_size > 768){
                document.documentElement.style.setProperty('--mode_left', '26px');
            }else if(window_size > 374 && window_size <= 768){
                document.documentElement.style.setProperty('--mode_left', '18px');
            }else{
                document.documentElement.style.setProperty('--mode_left', '16px');
            }

            cloth2.style.display = 'inline';
            part2.style.display = 'inline';

            setTimeout(() => {
                cloth1.style.opacity = '0';
                cloth2.style.opacity = '0.6';
                part1.style.opacity = '0';
                part2.style.opacity = '0.6';
            }, 100);

            setTimeout(() => {
                cloth1.style.display = 'none';
                part1.style.display = 'none';
            }, 1600);

            cloth2.addEventListener('mouseover', ()=>{
                cloth2.style.opacity = '1';
            });
            cloth2.addEventListener('mouseout', ()=>{
                cloth2.style.opacity = '0.6';
            });
            part2.addEventListener('mouseover', ()=>{
                part2.style.opacity = '1';
            });
            part2.addEventListener('mouseout', ()=>{
                part2.style.opacity = '0.6';
            });

            // theme_margin();
            mode = 0;
        } else{
            document.documentElement.style.setProperty('--primary_color_1', primary_color_1);
            document.documentElement.style.setProperty('--primary_color_2', primary_color_2);
            document.documentElement.style.setProperty('--secondary_color_1', secondary_color_1);
            document.documentElement.style.setProperty('--secondary_color_2', secondary_color_2);
            document.documentElement.style.setProperty('--tertiary_color_1', tertiary_color_1);
            document.documentElement.style.setProperty('--tertiary_color_2', tertiary_color_2);
            document.documentElement.style.setProperty('--brand_color_1', brand_color_1);
            document.documentElement.style.setProperty('--brand_color_2', brand_color_2);
            document.documentElement.style.setProperty('--mode_left', mode_left);
            video.src = 'Images/hero/cinematic_light.mp4';
            
            
            cloth1.style.display = 'inline';
            part1.style.display = 'inline';

            setTimeout(() => {
                cloth1.style.opacity = '0.6';
                cloth2.style.opacity = '0';
                part1.style.opacity = '0.6';
                part2.style.opacity = '0';
            }, 100);

            setTimeout(() => {
                cloth2.style.display = 'none';
                part2.style.display = 'none';
            }, 1600);

            cloth1.addEventListener('mouseover', ()=>{
                cloth1.style.opacity = '1';
            });
            cloth1.addEventListener('mouseout', ()=>{
                cloth1.style.opacity = '0.6';
            });
            part1.addEventListener('mouseover', ()=>{
                part1.style.opacity = '1';
            });
            part1.addEventListener('mouseout', ()=>{
                part1.style.opacity = '0.6';
            });

            mode = 1;
        }
        localStorage.setItem('mode', mode);
    }
    if(mode === null){
        mode = 1;
        localStorage.setItem('mode', mode);
    }else{
        mode = Number(mode);
        mode = mode === 1 ? 0 : 1;
        localStorage.setItem('mode', mode);
        changemode();
    }
    let outer_container = document.querySelector('.outer_container');
    outer_container.addEventListener('click', () => {
        changemode();
    });
    window.addEventListener('resize', theme_margin);

    let menu_check = 1;
    function menuOpenClose(){
        let window_size = window.innerWidth;
        let menu = document.querySelector('.menu_container');

        if(menu_check){
            menu_logo.innerHTML = '<svg class="menu_logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z"></path></svg>';
            menu.style.setProperty("display","block");
            setTimeout(() => {
                if(window_size > 768){
                    menu.style.setProperty('right', '16px');
                }else if(window_size >= 375 && window_size <= 768){
                    menu.style.setProperty('right', '12px');
                }else{
                    menu.style.setProperty('right', '10px');
                }
            }, 100);
            menu_check = 0;
        }else{
            menu_logo.innerHTML = '<svg class="menu_logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M18 18V20H6V18H18ZM21 11V13H3V11H21ZM18 4V6H6V4H18Z"></path></svg>';
            if(window_size > 768){
                menu.style.setProperty('right', '-320px');
            }else if(window_size >= 375 && window_size <= 768){
                menu.style.setProperty('right', '-260px')
            }else{
                menu.style.setProperty('right', '-240px');
            }
            setTimeout(() => {
                menu.style.setProperty('display', 'none');
            }, 500);
            menu_check = 1;
        }
    }
    let menu_logo = document.querySelector('.menu_logo');
    menu_logo.addEventListener('click', ()=>{
        menuOpenClose();
    });
    let cancel_svg = document.querySelector('.menu_cancel');
    cancel_svg.addEventListener('click', ()=>{
        menuOpenClose();
    });

    function moveImage() {
        let window_size = window.innerWidth;
        let image = document.querySelector('.moving_image');
        let new_left = window_size - 1.5*window.scrollY;
        if(window_size < 768){
            new_left = window_size - 1.2*window.scrollY;
        }
        if(window_size < 575){
            new_left = window_size - 0.7*window.scrollY;
        }
        document.documentElement.style.setProperty('--moving_left', new_left + 'px');
        if (new_left <= -600 || new_left >= window_size) {
            image.style.display = 'none';
        } else {
            image.style.display = 'block';
        }
    }
    window.addEventListener('scroll', moveImage);
    window.addEventListener('resize', moveImage);

    let cloth_section = document.querySelector('.cloths');
    let part_section = document.querySelector('.parts');
    let accessories_text_1 = document.querySelector('.accessories_text1');
    let accessories_text_2 = document.querySelector('.accessories_text2');
    cloth_section.addEventListener('mouseover', ()=>{
        accessories_text_1.style.setProperty("opacity", "0");
    });
    cloth_section.addEventListener('mouseout', ()=>{
        accessories_text_1.style.removeProperty("opacity");
    });
    part_section.addEventListener('mouseover', ()=>{
        accessories_text_2.style.setProperty("opacity", "0");
    });
    part_section.addEventListener('mouseout', ()=>{
        accessories_text_2.style.removeProperty("opacity");
    });

    let slideImages = document.querySelectorAll('.slide');
    let counter = 0;
    function autoSlide() {
        slideImages.forEach((slide, index) => {
            slide.style.animation = '';
            if (index === counter) {
                slide.style.animation = 'next2 2s forwards';
            } else if (index === ((counter - 1 + slideImages.length) % slideImages.length)) {
                slide.style.animation = 'next1 2s forwards';
            }
        });

        counter = (counter + 1) % slideImages.length;
    }
    autoSlide();
    setInterval(autoSlide, 4500);

    document.querySelector('.down_arrow').addEventListener('click', () => {
        document.getElementById('productSection').scrollIntoView({ behavior: 'smooth' });
    });



    const prod_loader=(products,html_ele, brand)=>{
        let html = '';
        for(let i=0; i<products.length; i++){
            let product = products[i];
            let rs = '';
            if(brand === 'ferrari' || brand === 'astonMartin'){
                rs = 'cr'
            }
            html += `<div data-aos="fade-up">
                <div class="items ${brand}" id="${product.uid}">
                    <div class="image_container">
                        <img src="${product.image1}" alt="${product.name}">
                    </div>
                    <p class="productName">${product.name}</p>
                    <p>Rs. ${product.price} ${rs}</p>
                    <button>View More</button>
                </div>
            </div>
            `;
        }
        html_ele.innerHTML += html;
    }
    let item_container1 = document.querySelector('.item_container.item1');
    let item_container2 = document.querySelector('.item_container.item2');
    let item_container3 = document.querySelector('.item_container.item3');
    let item_container4 = document.querySelector('.item_container.item4');
    prod_loader(ferrari, item_container1, "ferrari");
    prod_loader(astonMartin, item_container2, "astonMartin");
    prod_loader(merch, item_container3, "merchandise");
    prod_loader(part, item_container4, "parts");


    let items = document.querySelectorAll('.items');
    let overlays = document.querySelector('.overlays');
    let checkdetail = 0;
    let checkwishlist = 0;
    let checkcart = 0;

    function overlayOpen(){
        overlays.style.display = 'block';
    }
    function overlayClose(){
        setTimeout(() => {
            overlays.style.display = 'none';
        }, 400);
    }

    function handleOverlays(action, container){
        let containerVar;
        if(container === 'detail'){
            if(action === 'open'){
                checkdetail = 1;
                if(checkcart === 1){
                    handleOverlays('close', 'cart');
                }
                if(checkwishlist === 1){
                    handleOverlays('close', 'wishlist');
                    
                }
            }else{
                checkdetail = 0;
            }
            containerVar = '.detailContainer';
        }else if(container === 'wishlist'){
            if(action === 'open'){
                checkwishlist = 1;
                if(checkcart === 1){
                    handleOverlays('close', 'cart');
                }
                if(checkdetail === 1){
                    handleOverlays('close', 'detail');
                }
            }else{
                checkwishlist = 0;
            }
            containerVar = '.wishlistContainer';
        }else{
            if(action === 'open'){
                checkcart = 1;
                if(checkdetail === 1){
                    handleOverlays('close', 'detail');
                }
                if(checkwishlist === 1){
                    handleOverlays('close', 'wishlist');
                }
            }else{
                checkcart = 0;
            }
            containerVar = '.cartContainer';
        }

        
        if(checkdetail === 1 || checkcart === 1 || checkwishlist === 1){
            overlayOpen();
        }

        if(action === 'open'){
            let detail = document.querySelector(containerVar);
            detail.style.display = 'block';
            setTimeout(() => {
                detail.style.transform = 'translate(-50%, -50%) scale(1)';
            }, 0);
        }else{
            let detail = document.querySelector(containerVar);
            setTimeout(() => {
                detail.style.transform = 'translate(-50%, -50%) scale(0)';
            }, 0);
            setTimeout(() => {
                detail.style.display = 'none';
            }, 400);
        }

        if(checkdetail === 0 && checkcart === 0 && checkwishlist === 0){
            overlayClose();
        }
    }
    let wishlist = document.querySelector('.wishlist_logo');
    wishlist.addEventListener('click', function(){
        if(!checkwishlist){
            handleOverlays('open', 'wishlist');
        }else{
            handleOverlays('close', 'wishlist');
        }
    });
    let wishlistcancel = document.querySelector('.wishlistCancel');
    wishlistcancel.addEventListener('click', function(){
        handleOverlays('close', 'wishlist');
    });

    let cartlist = document.querySelector('.cart_logo');
    cartlist.addEventListener('click', function(){
        if(!checkcart){
            handleOverlays('open', 'cart');
        }else{
            handleOverlays('close', 'cart');
        }
    });
    let cartcancel = document.querySelector('.cartCancel');
    cartcancel.addEventListener('click', function(){
        handleOverlays('close', 'cart');
    });

    let alertDialog = document.createElement('div');
    alertDialog.style.position = 'fixed';
    alertDialog.style.top = '100px';
    alertDialog.style.backgroundColor = 'rgb(16, 213, 16)';
    alertDialog.style.color = 'white';
    alertDialog.style.padding = '10px 20px';
    alertDialog.style.borderRadius = '10px';
    alertDialog.style.fontFamily = "'Poppins', sans-serif";
    alertDialog.style.fontWeight = '600';
    alertDialog.style.boxShadow = '0px 0px 20px black';
    alertDialog.style.border = 'none';
    alertDialog.style.zIndex = '1000';
    alertDialog.style.right = '10px'; 
    alertDialog.style.transform = 'translateX(100%)'; 
    alertDialog.style.transition = 'transform 0.5s';
    alertDialog.style.display = 'none';
    document.body.appendChild(alertDialog);
    function showAlert(message) {
        alertDialog.textContent = message;
        alertDialog.style.display = 'block'; 
        setTimeout(() => {
            alertDialog.style.transform = 'translateX(0)'; 
        }, 0);
        setTimeout(hideAlert, 1000);
    }
    function hideAlert() {
        alertDialog.style.transform = 'translateX(100%)'; 
        setTimeout(() => {
            alertDialog.style.display = 'none'; 
        }, 520);
    }

    let cartItemId = [];
    let wishlistItemId = [];

    async function wishlistReload(n){
        if(n!=1){
            let userID= user._id;
            try{    
                let response= await fetch("http://localhost:3000/update/wishlist",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({
                        userID,
                        wishlistItemId,
                    })
                    
                })
                let data=await response.json();
                if(data.message==="success"){
                    console.log("updated wishlist");
                }
                else{
                    console.log("failed to update wishlist, retrying");
                    wishlistReload();
                    return;
                }
            }catch(e){
                console.log(e);
                wishlistReload();
                return;
            }
        }

        let row2 = document.querySelector('.wishlistContainer .row2');
        row2.innerHTML = '';

        let cur = '';
        let product;
        wishlistItemId.forEach((id) => {
            product = ferrari.find((product) => Number(product.uid) == Number(id));
            cur = 'cr';
            if (product === undefined) {
                product = astonMartin.find(
                    (product) => Number(product.uid) == Number(id)
            );
            cur = 'cr';
            }
            if (product === undefined) {
                product = merch.find((product) => Number(product.uid) == Number(id)
            );cur = '';
            }
            if (product === undefined) {
                product = part.find((product) => Number(product.uid) == Number(id)
                );
                cur = '';
            }

            let html = `
                <div class="wishlistItem" id="${product.uid}">
                    <div class="imageContainer">
                        <img src="${product.image1}" alt="${product.name}">
                    </div>
                    <div class="itemDetail">
                        <p class="name">${product.name}</p>
                        <p class="price">Rs. ${product.price}${cur}</p>
                        <div class="functionality">
                            <svg class="cartSvg" id="${product.uid}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(0,0,0,1)"><path d="M6.00488 9H19.9433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V9ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path></svg>
                            <svg class="deleteSvg" id="${product.uid}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(0,0,0,1)"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM9 11V17H11V11H9ZM13 11V17H15V11H13ZM9 4V6H15V4H9Z"></path></svg>
                        </div>
                    </div>
                </div>
                `;
            row2.innerHTML += html;

            let deleteSvgs = document.querySelectorAll('.wishlistContainer .wishlistItem .deleteSvg');
            deleteSvgs.forEach((deleteSvg) => {
                deleteSvg.addEventListener('click', function() {
                    for(let j=0; j<wishlistItemId.length; j++){
                        if(Number(wishlistItemId[j]) === Number(deleteSvg.id)){
                            wishlistItemId.splice(j, 1);
                            break;
                        }
                    }
                    wishlistReload();
                });
            });

            let cartSvgs = document.querySelectorAll('.wishlistContainer .wishlistItem .cartSvg');
            cartSvgs.forEach((cartSvg) => {
                cartSvg.addEventListener('click', function() {
                    cartItemId.push(Number(cartSvg.id));
                    for(let j=0; j<wishlistItemId.length; j++){
                        if(wishlistItemId[j] === Number(cartSvg.id)){
                            wishlistItemId.splice(j, 1);
                            break;
                        }
                    }
                    cartReload();
                    wishlistReload();
                });
            });
        });
    }

    async function cartReload(n){
        if(n!=1){
            let userID= user._id;
            try{    
                let response= await fetch("http://localhost:3000/update/cart",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({
                        userID,
                        cartItemId,
                    })
                    
                })
                let data=await response.json();
                if(data.message==="success"){
                    console.log("updated cart");
                }
                else{
                    console.log("failed to update cart, retrying");
                    cartReload();
                    return;
                }
            }catch(e){
                console.log(e);
                cartReload();
                return;
            }
        }

        let row2 = document.querySelector('.cartContainer .row2');
        row2.innerHTML = '';
        
        let cartrow3 = document.querySelector('.cartContainer .row3');
        cartrow3.style.display = 'none';

        if(cartItemId.length > 0){
            cartrow3.style.display = 'block';
        }

        let cur = '';
        cartItemId.forEach((id) => {
            product = ferrari.find((product) => product.uid == id);
            cur = 'cr';
            if (product === undefined) {
            product = astonMartin.find(
                (product) => product.uid == id
            );
            cur = 'cr';
            }
            if (product === undefined) {
            product = merch.find(
                (product) => product.uid == id
            );cur = '';
            }
            if (product === undefined) {
                product = part.find(
                (product) => product.uid == id
                );
                cur = '';
            }

            let html = `
                <div class="cartItem" id="${product.uid}">
                    <div class="imageContainer">
                        <img src="${product.image1}" alt="${product.name}">
                    </div>
                <div class="itemDetail">
                    <p class="name">${product.name}</p>
                    <p class="price">Rs. ${product.price}${cur}</p>
                    <div class="functionality">
                        <svg class="wishlistSvg" id="${product.uid}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(0,0,0,1)"><path d="M19.0001 13.9999V16.9999H22.0001V18.9999H18.9991L19.0001 21.9999H17.0001L16.9991 18.9999H14.0001V16.9999H17.0001V13.9999H19.0001ZM20.2426 4.75736C22.4033 6.92253 22.5715 10.3141 20.7498 12.667C19.9261 12.2403 18.9911 12 18 12C14.6863 12 12 14.6863 12 18C12 19.0089 12.249 19.9596 12.6889 20.794L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736Z"></path></svg>
                        <svg class="deleteSvg" id="${product.uid}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(0,0,0,1)"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM9 11V17H11V11H9ZM13 11V17H15V11H13ZM9 4V6H15V4H9Z"></path></svg>
                    </div>
                </div>
            </div>
                `;
            row2.innerHTML += html;

            let deleteSvgs = document.querySelectorAll('.cartContainer .cartItem .deleteSvg');
            deleteSvgs.forEach((deleteSvg) => {
                deleteSvg.addEventListener('click', function() {
                    for(let j=0; j<cartItemId.length; j++){
                        if(Number(cartItemId[j]) === Number(deleteSvg.id)){
                            cartItemId.splice(j, 1);
                            break;
                        }
                    }
                    cartReload();
                });
            });

            let wishlistSvgs = document.querySelectorAll('.cartContainer .cartItem .wishlistSvg');
            wishlistSvgs.forEach((wishlistSvg) => {
                wishlistSvg.addEventListener('click', function() {
                    wishlistItemId.push(Number(wishlistSvg.id));
                    for(let j=0; j<cartItemId.length; j++){
                        if(cartItemId[j] === Number(wishlistSvg.id)){
                            cartItemId.splice(j, 1);
                            break;
                        }
                    }
                    cartReload();
                    wishlistReload();
                });
            });
        });

    
    }

    items.forEach(item => {
        item.addEventListener('click', function (event) {
            let listName = '';
            if(item.classList.contains("ferrari")){
                listName = 'ferrari';
                showModel('ferrari', Number(item.id));
            }else if(item.classList.contains("astonMartin")){
                listName = 'astonMartin';
                showModel('astonMartin', Number(item.id));
            }else if(item.classList.contains("merchandise")){
                listName = 'merch';
                showModel('merchandise', Number(item.id));
            }else{
                listName = 'part';
                showModel('parts', Number(item.id));
            }

            handleOverlays('open', 'detail');
            let cancel = document.querySelector('.cancel');
            cancel.addEventListener('click', function(){
                handleOverlays('close', 'detail');
            });

            let subImages = document.querySelectorAll('.subdiv img');
            let mainImage = document.querySelector('.mainImage img');

            subImages.forEach(subImage => {
                subImage.addEventListener('click', function(){
                    let src1 = subImage.getAttribute('src');
                    let src2 = mainImage.getAttribute('src');
                    mainImage.setAttribute('src', src1);
                    subImage.setAttribute('src', src2);
                });
            });

            let lists = {
                'ferrari': ferrari,
                'astonMartin': astonMartin,
                'merch': merch,
                'part': part
            };
            let list = lists[listName];
            let b1 = document.querySelector('.b1');
            b1.addEventListener('click', function(){
                if(user==null){
                    alert("login to save to wishlist");
                    return;
                }
                showAlert('Added to Wishlist');
                wishlistItemId.push(Number(b1.id));
                wishlistReload();
            });

            let b2 = document.querySelector('.b2');
            b2.addEventListener('click', function(){
                if(user==null){
                    alert("login to save to cart");
                    return;
                }
                showAlert('Added to Cart');
                cartItemId.push(Number(b2.id));
                cartReload();
            });
        });

        let imageContainer = item.querySelector('.image_container');
        let stsrc = '';
        imageContainer.addEventListener('mouseover', function(){
            stsrc = imageContainer.querySelector('img').getAttribute('src');
            const itemId = Number(item.id);
            let product;
            let findProduct = (itemId) => {
                product = ferrari.find((product) => product.uid == itemId);
                if (product === undefined) {
                    product = astonMartin.find((product) => product.uid == itemId);
                }
                if (product === undefined) {
                    product = merch.find((product) => product.uid == itemId);
                }
                if (product === undefined) {
                    product = part.find((product) => product.uid == itemId);
                }
            }
            findProduct(itemId);
            if (product !== undefined) {
                imageContainer.querySelector('img').src = product.image2;
            }
        });

        imageContainer.addEventListener('mouseout', function(){
            imageContainer.querySelector('img').src = stsrc;
        });
    });

    let cartRow2 = document.querySelector('.cartContainer .row2');
    let wishlistRow2 = document.querySelector('.wishlistContainer .row2');
    let cartItems = document.querySelectorAll('.cartItem');
    let wishlistItems = document.querySelectorAll('.wishlistItem');

    function colorStars(rate) {
        let stars = document.querySelectorAll('.star');
        stars.forEach((star, index) => {
            if (index < rate) {
                star.classList.add('filled');
            } else {
                star.classList.remove('filled');
            }
        });
    }
    const showModel = (className, id)=>{
        let wishlistsection = document.querySelector('.wishlistContainer');
        let cartsection = document.querySelector('.cartContainer');

        let i = 0;

        product = ferrari.find((product) => product.uid == id);
        if (product === undefined) {
        product = astonMartin.find(
            (product) => product.uid == id
        );
        }
        if (product === undefined) {
        product = merch.find(
            (product) => product.uid == id
        );
        }
        if (product === undefined) {
            product = part.find(
            (product) => product.uid == id
            );
        }

        if(className === 'ferrari' || className === 'astonMartin'){
            i = 0;
        }else if(className === 'merchandise'){
            i = 1;
        }else{
            i = 2;
        }

        let row23 = [
            [
                `
                    <div class="mainImage">
                        <img src="${product.image1}" alt="${product.name}">
                    </div>
                    <div class="subImage">
                        <div class="subdiv">
                            <img src="${product.image2}" alt="${product.name}">
                        </div>
                        <div class="subdiv">
                            <img src="${product.image3}" alt="${product.name}">
                        </div>
                        <div class="subdiv">
                            <img src="${product.image4}" alt="${product.name}">
                        </div>
                        <div class="subdiv">
                            <img src="${product.image5}" alt="${product.name}">
                        </div>
                    </div>
                `,
                `
                    <div class="specification">
                        <p><span>Price :</span> ${product.price} Cr</p>
                        <p><span>Fuel :</span> ${product.fuel}</p>
                        <p><span>Cylinder :</span> V${product.cylinder}</p>
                        <p><span>Engine :</span> ${product.engine}</p>
                        <p><span>Tank Capacity :</span> ${product.tank_capacity}</p>
                        <p><span>Seats :</span> ${product.seating_capacity}</p>
                        <p><span>Mileage :</span> ${product.mileage}</p>
                        <p><span>Top Speed :</span> ${product.top_speed}</p>
                    </div>
                `
            ],[
                `
                    <div class="mainImage">
                        <img src="${product.image1}" alt="${product.name}">
                    </div>
                    <div class="subImage">
                        <div class="subdiv">
                            <img src="${product.image2}" alt="${product.name}">
                        </div>
                        <div class="subdiv">
                            <img src="${product.image3}" alt="${product.name}">
                        </div>
                    </div>
                `,`
                    <div class="specification">
                        <p><span>Price :</span> ${product.price}</p>
                        <p><span>Description :</span> ${product.description}</p>
                    </div>
                `
            ],[
                `
                    <div class="mainImage">
                        <img src="${product.image1}" alt="${product.name}">
                    </div>
                    <div class="subImage">
                        <div class="subdiv">
                            <img src="${product.image2}" alt="${product.name}">
                        </div>
                    </div>
                `,`
                    <div class="specification">
                        <p><span>Price :</span> ${product.price}</p>
                        <p><span>-></span> ${product.description1}</p>
                        <p><span>-></span> ${product.description2}</p>
                        <p><span>-></span> ${product.description3}</p>
                    </div>
                `
            ]
        ];

        let html = `
            <section class="detailContainer">
                <div class="row1">
                    <p class="productName">${product.name}</p>
                    <svg class="cancel" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path></svg>
                </div>
                <div class="row2">
                    ${row23[i][0]}
                </div>
                <div class="row3">
                    ${row23[i][1]}
                    <div class="info">
                        <div class="rating">
                            <svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(0,0,0,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                            <svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(0,0,0,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                            <svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(0,0,0,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                            <svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(0,0,0,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                            <svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(0,0,0,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                        </div>
                        <div class="addButton">
                            <button class="b1" id="${product.uid}" >Wishlist</button>
                            <button class="b2" id="${product.uid}" >Cart</button>
                        </div>
                    </div>
                </div>
                <div class="row4">
                    <p>CARMANIA</p>
                </div>
            </section>
        `;
        overlays.innerHTML = html;
        overlays.appendChild(wishlistsection);
        overlays.appendChild(cartsection);

        let rate = product.rating;
        setTimeout(() => {
            colorStars(rate);
        }, 0);
    }

    let user=null;
    async function log(){
        console.log("This is working")
        let navQuote = document.querySelector('.brand_name p');
        if (localStorage.getItem('isLoggedIn') === 'true') {
            console.log('User has logged in successfully');

            try{
                user = await fetch(`/getUser/${localStorage.getItem('username')}`,{
                    method:"GET"
                });
                user = await user.json();
                console.log(user);
                wishlistItemId = user.wishlist;
                cartItemId = user.cart;
                wishlistReload(1);
                cartReload(1);

            }catch(e){
                console.log(e);
            }


            navQuote.innerHTML = `Hello <span>${localStorage.getItem('username')}</span>`;
            console.log(localStorage.getItem('username'));
            signup.innerHTML = 'Log out';
        } else {
            signup.innerHTML = 'Log in';
            navQuote.innerHTML = `<span>C</span>ar<span>M</span>ania`;
            console.log('User has not logged in');
            user= null;
            wishlistItemId=[];
            cartItemId=[];
            wishlistReload(1);
            cartReload(1);
        }
    }

    let signup = document.querySelector('.menu_container .signup');
    let signli = document.querySelector('.menu_container .signli');
    signli.addEventListener('click',()=>{
        console.log("login is clicked")
        if(signup.innerHTML === 'Log in'){
            window.location.href = 'Account_Page/index.html';
        }else{
            localStorage.setItem('username', '');
            localStorage.setItem('isLoggedIn', 'false');
            log();
        }
    });
    log();
} 

let ferrari,astonMartin,merch,part;
async function getData(){
    const response = await fetch("http://localhost:3000/get/ferrari",{
        method:"GET"
    });
    ferrari = await response.json();
    console.log(ferrari);

    const response1 = await fetch("http://localhost:3000/get/astonmartin",{
        method:"GET"
    });
    astonMartin = await response1.json();
    console.log(astonMartin);

    const response2 = await fetch("http://localhost:3000/get/merchandise",{
        method:"GET"
    });
    merch = await response2.json();
    console.log(merch);

    const response3 = await fetch("http://localhost:3000/get/parts",{
        method:"GET"
    });
    part = await response3.json();
    console.log(part);
}

async function connectdb(){
    try{
        let response = await fetch("http://localhost:3000/connectdb",{
            method: "GET"
        });
        let data = await response.json();
        if(data.status=== 200){
            console.log("connected at frontend");
        }
        else{
            console.log("failed to connect at frontend");
            connectdb();
        }
    }catch(e){
        console.log(e);
        connectdb();
    }
}


async function manage(){
    await connectdb();
    await getData();
    main();
    let preloader = document.querySelector('.preloader');
    preloader.style.setProperty('transform', 'translateY(-100%)');
    preloader.style.setProperty('opacity', '0');
    setTimeout(() => {
        preloader.style.setProperty('display', 'none');
    }, 300);
}
manage();