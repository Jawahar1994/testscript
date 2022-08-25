(function (window) {
    console.log(window)
    console.log(document.querySelector("target"));
    //styles 
    let  data = {
        charges: 3000,
        name: 'Demo Basic'
    }
    let  popUpdiv = "width: 400px ;min-height: 300px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);position: absolute;left: 0;right: 0;margin: auto; padding: 10px 20px 20px 20px ; z-index: 1;background-color: #f3f3f3; font-family: sans-serif"

    let closeButton = "position: absolute; top: -3%; right: -3%; border: none; font-size: 14px ; cursor: pointer; height: 25px; width: 25px; border-radius: 50%; background-color: #ab9a9a; color: white; display: flex; align-items: center; justify-content: center;";

    let submitstyle = "background-color: #b55ab3; padding: 8px 16px; border-style: none; border-radius: 2px; color: white; font-weight: 600; margin-bottom: 20px;  margin-top: 20px; cursor: pointer";

    let  imgStyles = "height: 40px";
    
    let  inputStyle = "width: 62%; float: right;"

    var payNowButton = document.createElement("Button");
    payNowButton.id = "payButton";
    payNowButton.innerHTML = "Pay Now";
    

    payNowButton.onclick = function OpenPopup(status, step = 2) {
        var element = document.getElementById("modal-popup");
        if(element !== null)
            element.parentNode.removeChild(element);
        var newDiv = document.createElement("DIV");
        newDiv.id = "modal-popup";


        let img = document.createElement('img');
        let imgContainer = document.createElement('div');
        imgContainer.setAttribute('style', 'text-align: center; margin-bottom: 10px')
        img.setAttribute('src', 'https://keylong.io/static/media/logo.363139732f12ad73fad7.png')
        img.setAttribute('style', imgStyles)
        imgContainer.appendChild(img); 


        var newcloseButton = document.createElement("button");
        var newContent = document.createTextNode("X");
        newcloseButton.appendChild(newContent);
        newcloseButton.id = "btn";
        newDiv.setAttribute("style", popUpdiv);
        newDiv.appendChild(newcloseButton);
        document.body.appendChild(newDiv).appendChild(newcloseButton);
        newcloseButton.setAttribute("style", closeButton);
        newDiv.appendChild(imgContainer);
        let heading = document.createElement('h4');
        heading.innerHTML = 'Your  Order'
        heading.setAttribute('style', 'color: #B55AB3; text-align: center; margin: 0px 0px 20px 0px; font-weight: bolder; font-family: sans-serif')
        newDiv.appendChild(heading);

        let  headerConatiner = document.createElement('div');
        headerConatiner.setAttribute('style', "border-bottom: 1px solid black; width: 100%; height: 30px; margin-bottom: 20px; font-weight: 600")
        headerConatiner.innerHTML = 'Add your Billing Address'
        if(step ===2 ){
            let form = document.createElement('form');
        
            let nameContainer = document.createElement('div');
            nameContainer.innerHTML = "Full Name : "
            
            let nameInput = document.createElement('input');
            nameInput.setAttribute('type', 'text');
            nameInput.setAttribute('style', inputStyle );
            nameContainer.appendChild(nameInput)
            form.appendChild(nameContainer)
      
            form.appendChild(document.createElement('br'));
    
            let emailContainer = document.createElement('div');
            emailContainer.innerHTML = "Email : "
            
            let emailInput = document.createElement('input');
            emailInput.setAttribute('type', 'email');
            emailInput.setAttribute('style', inputStyle);
    
            emailContainer.appendChild(emailInput)
            form.appendChild(emailContainer);
            form.appendChild(document.createElement('br'));
    
    
            let phoneNoContainer = document.createElement('div');
            phoneNoContainer.innerHTML = "Phone No : "
            
            let phoneInput = document.createElement('input');
            phoneInput.setAttribute('type', 'number');
            phoneInput.setAttribute('style', inputStyle);
    
            phoneNoContainer.appendChild(phoneInput)
            form.appendChild(phoneNoContainer)
            form.appendChild(document.createElement('br'));
    
            let addressContainer = document.createElement('div');
            addressContainer.innerHTML = "Complete Address : "
            
            let addressInput = document.createElement('textarea');
            addressInput.setAttribute('style', inputStyle + " min-height: 60px")
    
            addressContainer.appendChild(addressInput)
            addressContainer.setAttribute('style', 'margin-bottom: 75px;')
            form.appendChild(addressContainer)
         
            let  checkboxInput = document.createElement('input');
            checkboxInput.setAttribute('type', 'checkbox');
            checkboxInput.setAttribute('id', 'shippingAddress');
            checkboxInput.checked = status;
            checkboxInput.addEventListener('change',(e) => OpenPopup(e.target.checked) )
            checkboxInput.setAttribute('style', 'margin-right: 10px');
    
            let checkboxLabel = document.createElement('label');
            checkboxLabel.innerHTML = 'Ship to my billing address';
            checkboxLabel.setAttribute('for','shippingAddress');
    
            let submitContainer = document.createElement('div');
            submitContainer.setAttribute('style', 'text-align: center')
            let submitButton = document.createElement('button');
            submitButton.setAttribute('style', submitstyle);
            submitContainer.appendChild(submitButton);
            submitButton.innerHTML = "Submit"
            
            form.appendChild(checkboxInput)
            form.appendChild(checkboxLabel)
            newDiv.append(headerConatiner)
    
            let  headerConatiner2 = document.createElement('div');
            headerConatiner2.setAttribute('style', "border-bottom: 1px solid black; width: 100%; height: 30px; margin-bottom: 20px; font-weight: 600; margin-top: 20px")
            headerConatiner2.innerHTML = 'Add your Shipping Address'
            
            let form2 = document.createElement('form');
            
            let nameContainer2 = document.createElement('div');
            nameContainer2.innerHTML = "Full Name : "
            
            let nameInput2 = document.createElement('input');
            nameInput2.setAttribute('type', 'text');
            nameInput2.setAttribute('style', inputStyle );
            nameContainer2.appendChild(nameInput2)
            form2.appendChild(nameContainer2)
      
            form2.appendChild(document.createElement('br'));
    
            let emailContainer2 = document.createElement('div');
            emailContainer2.innerHTML = "Email : "
            
            let emailInput2 = document.createElement('input');
            emailInput2.setAttribute('type', 'email');
            emailInput2.setAttribute('style', inputStyle);
    
            emailContainer2.appendChild(emailInput2)
            form2.appendChild(emailContainer2);
            form2.appendChild(document.createElement('br'));
    
    
            let phoneNoContainer2 = document.createElement('div');
            phoneNoContainer2.innerHTML = "Phone No : "
            
            let phoneInput2 = document.createElement('input');
            phoneInput2.setAttribute('type', 'number');
            phoneInput2.setAttribute('style', inputStyle);
    
            phoneNoContainer2.appendChild(phoneInput2)
            form2.appendChild(phoneNoContainer2)
            form2.appendChild(document.createElement('br'));
    
            let addressContainer2 = document.createElement('div');
            addressContainer2.innerHTML = "Complete Address : "
            
            let addressInput2 = document.createElement('textarea');
            addressInput2.setAttribute('style', inputStyle + " min-height: 60px")
    
            addressContainer2.appendChild(addressInput2)
            addressContainer2.setAttribute('style', 'margin-bottom: 75px;')
            form2.appendChild(addressContainer2)
            newDiv.appendChild(form)
            !checkboxInput.checked ?  newDiv.append(headerConatiner2) : ""
            !checkboxInput.checked ? newDiv.appendChild(form2): ""
            newDiv.appendChild(submitContainer)
        }

        newcloseButton.onclick = function remove() {
            newDiv.parentElement.removeChild(newDiv);
        }
    }

    document.querySelector("target").appendChild(payNowButton)
})(window)

