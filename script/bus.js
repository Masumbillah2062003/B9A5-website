//buy-tickets :
function clickButton(){
    const ticketCounter = document.getElementById('ticket-buy-counter');
    ticketCounter.scrollIntoView({behavior: 'smooth'});
}


// selected sit  :

// function allSitOnClick(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.add('bg-[green]');
//     element.classList.add('text-[white]');
//     element.setAttribute('disabled', true);
    
    
    
// }








const allSit = document.querySelectorAll('.sit');

let clickButtonAdd = []

for(const sits of allSit){

    const sit = sits.innerText;
    const sitName = ["A1","A2","A3","A4","B1","B2","B3","B4","C1","C2","C3","C4","D1","D2","D3","D4","E1","E2","E3","E4","F1","F2","F3","F4","G1","G2","G3","G4","H1","H2","H3","H4","I1","I2","I3","I4","J1","J2","J3","J4",];

    for (const singlesit of sitName) {
        if(singlesit == sit){
            
            sits.addEventListener('click', function(){

                clickButtonAdd.push(sits);
                
                if(clickButtonAdd.length <= 4){
                    sits.setAttribute('disabled', true);
                
                    sits.classList.add('bg-[green]');
                    sits.classList.add('text-white');
                    
                    const selectSeat = document.createElement('td');
                    selectSeat.innerText = sit;
                    selectSeat.classList.add('text-base')
                    selectSeat.classList.add('text-[rgba(3,7,18,0.6)]')

                    const economoy = document.createElement('td')
                    economoy.innerText = 'Economoy'; 
                    economoy.classList.add('text-base')
                    economoy.classList.add('text-[rgba(3,7,18,0.6)]')

                    const seatPrice = document.createElement('td');
                    seatPrice.innerText = 550;
                    seatPrice.classList.add('text-base')
                    seatPrice.classList.add('text-[rgba(3,7,18,0.6)]')

                    const createTr = document.createElement('tr');
                    createTr.classList.add('border-0');
                    createTr.appendChild(selectSeat);
                    createTr.appendChild(economoy);
                    createTr.appendChild(seatPrice);

                    const tableBody = document.getElementById('table-body');
                    tableBody.appendChild(createTr);

                    const totalPrice = document.getElementById('total-price');
                    const totalPriceNum = parseInt(totalPrice.innerText);
                    const price = totalPriceNum + 550;
                    totalPrice.innerText = price;

                    const grandTotal = document.getElementById('grand-total');
                    const grandTotalNum = parseInt(grandTotal.innerText);
                    const grandPrice = grandTotalNum + 550;
                    grandTotal.innerText = grandPrice;


                    const seatCountNumber = document.getElementById('seat-count-number');
                    const seatStringToNumber = parseInt(seatCountNumber.innerText);
                    const seatResult = seatStringToNumber + 1;
                    seatCountNumber.innerText = seatResult;

                    const seatDecriment = document.getElementById('seat-decriment');
                    const seatDecrimentStringToNum = parseInt(seatDecriment.innerText);
                    const seatDecrimentResult = seatDecrimentStringToNum - 1;
                    seatDecriment.innerText = seatDecrimentResult;

                    const phoneNumber = document.getElementById('phone-number');
                    phoneNumber.removeAttribute('disabled');
                }
                else{
                    alert('There are no more seats available for you !! Thank you !!')
                }

                if(clickButtonAdd.length == 4){

                    const discound = document.getElementById('discound');
                    discound.removeAttribute('disabled')

                    const applyButton = document.getElementById('apply-btn')
                    applyButton.classList.add('bg-[rgb(29,209,0)]');
                    applyButton.classList.add('text-white');

                    document.getElementById('copupon-code').addEventListener('keyup', function(event){
                        const eventTarget = event.target.value
                        
                        if(eventTarget === 'NEW15' || eventTarget === 'Couple 20'){
                            applyButton.removeAttribute('disabled');
                            document.getElementById('apply-btn').addEventListener('click', function(){
                                if(eventTarget === 'NEW15'){
                                    const grandTotal = document.getElementById('grand-total');
                                    const grandTotalNum = parseInt(grandTotal.innerText);
                                    const grandPrice = grandTotalNum * 15/100;
                                    const totalGrandPrice = grandTotalNum - grandPrice;
                                    grandTotal.innerText = totalGrandPrice;

                                    const discoundPriceAdd = document.getElementById('discound-price-add');
                                    discoundPriceAdd.innerText = `You got discount price :  ${grandPrice} Taka`;
                                    discound.classList.add('hidden')
                                }
                                else if(eventTarget === 'Couple 20'){
                                    const grandTotal = document.getElementById('grand-total');
                                    const grandTotalNum = parseInt(grandTotal.innerText);
                                    const grandPrice = grandTotalNum * 20/100;
                                    const totalGrandPrice = grandTotalNum - grandPrice;
                                    grandTotal.innerText = totalGrandPrice;

                                    const discoundPriceAdd = document.getElementById('discound-price-add');
                                    discoundPriceAdd.innerText = `You got discount price :  ${grandPrice} Taka`;
                                    discound.classList.add('hidden')
                                }
                            })
                        }
                        else{
                            alert('There is not our coupon code !! Please use the coupon code given above !!')
                            applyButton.setAttribute('disabled', true);
                        }
                    })
                }
            })
        }
    }
}


function numberFunction(){
    const phoneNumber = document.getElementById('phone-number');
    const numberValue = phoneNumber.value;

    if(numberValue.length >= 1){
        const next = document.getElementById('next');
        next.removeAttribute('disabled');
    }
    else{
        const nexts = document.getElementById('next');
        nexts.setAttribute('disabled', true);
    }
}


function succesfull(){
    const succesfullSection = document.getElementById('succesfull-section');
    succesfullSection.classList.remove('hidden');
    
    const main = document.getElementById('main');
    main.classList.add('hidden')

    const header = document.getElementById('header');
    header.classList.add('hidden');

    const footer = document.getElementById('footer');
    footer.classList.add('hidden');
}

